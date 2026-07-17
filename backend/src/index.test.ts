import { beforeEach, describe, expect, it, vi } from 'vitest';

import worker from './index';

const env: Env = {
  ALLOWED_ORIGIN: 'https://nebiora.studio',
  CONTACT_TO_ADDRESS: 'hallo@nebiora.studio',
  CONTACT_FROM_ADDRESS: 'onboarding@resend.dev',
  RESEND_API_KEY: 'test-key',
};

type WorkerRequest = Parameters<typeof worker.fetch>[0];

const cfRequest = (url: string, init?: RequestInit) => new Request(url, init) as WorkerRequest;

const contactRequest = (body: unknown, init: RequestInit = {}) =>
  cfRequest('https://api.nebiora.studio/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...init,
  });

const validPayload = { name: 'Ada Lovelace', email: 'ada@example.com', message: 'Hallo!' };

describe('backend contact worker', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('rejects unknown routes with 404', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/nope'),
      env,
    );

    expect(response.status).toBe(404);
  });

  it('rejects non-POST methods on /api/contact', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/api/contact', { method: 'GET' }),
      env,
    );

    expect(response.status).toBe(405);
  });

  it('responds to a CORS preflight with the configured origin', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/api/contact', { method: 'OPTIONS' }),
      env,
    );

    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('https://nebiora.studio');
  });

  it('rejects malformed JSON with 400', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/api/contact', {
        method: 'POST',
        body: '{not json',
      }),
      env,
    );

    expect(response.status).toBe(400);
  });

  it.each([
    ['missing name', { email: 'ada@example.com', message: 'Hallo!' }],
    ['missing email', { name: 'Ada Lovelace', message: 'Hallo!' }],
    ['invalid email', { name: 'Ada Lovelace', email: 'not-an-email', message: 'Hallo!' }],
    ['blank message', { name: 'Ada Lovelace', email: 'ada@example.com', message: '   ' }],
  ])('rejects a payload with %s', async (_case, payload) => {
    const response = await worker.fetch(contactRequest(payload), env);

    expect(response.status).toBe(400);
  });

  it('forwards a valid payload to Resend and escapes HTML in the body', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true } as Response);
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(
      contactRequest({ name: '<b>Ada</b>', email: 'ada@example.com', message: 'Hi & bye' }),
      env,
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.headers.Authorization).toBe('Bearer test-key');
    const sentBody = JSON.parse(init.body);
    expect(sentBody.html).toContain('&lt;b&gt;Ada&lt;/b&gt;');
    expect(sentBody.html).toContain('Hi &amp; bye');
    expect(sentBody.reply_to).toBe('ada@example.com');
  });

  it('returns 502 and does not leak the raw Resend response body when the send fails', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 422,
        text: () => Promise.resolve('{"secret":"leaked-detail"}'),
      } as unknown as Response),
    );

    const response = await worker.fetch(contactRequest(validPayload), env);

    expect(response.status).toBe(502);
    expect(errorSpy).toHaveBeenCalledWith('Resend send failed', 422);
    const loggedArgs = errorSpy.mock.calls.flat();
    expect(loggedArgs.some((arg) => String(arg).includes('leaked-detail'))).toBe(false);
  });
});
