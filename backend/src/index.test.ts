import { beforeEach, describe, expect, it, vi } from 'vitest';

import worker from './index';

const env: Env = {
  ALLOWED_ORIGIN: 'https://nebiora.studio',
  CONTACT_TO_ADDRESS: 'hallo@nebiora.studio',
  CONTACT_FROM_ADDRESS: 'onboarding@resend.dev',
  RESEND_API_KEY: 'test-key',
  CAL_API_KEY: 'cal-test-key',
  CAL_USERNAME: 'nebiora',
  CAL_EVENT_SLUG: 'buchungen',
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

const slotsRequest = (query: string) =>
  cfRequest(`https://api.nebiora.studio/api/booking/slots${query}`);

const createBookingRequest = (body: unknown) =>
  cfRequest('https://api.nebiora.studio/api/booking/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

const validBookingPayload = {
  start: '2026-07-22T14:00:00.000+02:00',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  phone: '+491701234567',
  timeZone: 'Europe/Berlin',
};

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
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
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

describe('backend booking worker', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('rejects non-GET methods on /api/booking/slots', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/api/booking/slots', { method: 'POST' }),
      env,
    );

    expect(response.status).toBe(405);
  });

  it('rejects a slots request missing start/end', async () => {
    const response = await worker.fetch(slotsRequest(''), env);

    expect(response.status).toBe(400);
  });

  it('forwards a slots request to cal.com with the configured event type and username', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ status: 'success', data: {} }),
    } as unknown as Response);
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(
      slotsRequest('?start=2026-07-20&end=2026-07-27&timeZone=Europe/Berlin'),
      env,
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [requestArg, init] = fetchMock.mock.calls[0];
    const calUrl = new URL(String(requestArg));
    expect(calUrl.origin + calUrl.pathname).toBe('https://api.cal.com/v2/slots');
    expect(calUrl.searchParams.get('eventTypeSlug')).toBe('buchungen');
    expect(calUrl.searchParams.get('username')).toBe('nebiora');
    expect(calUrl.searchParams.get('timeZone')).toBe('Europe/Berlin');
    expect(init.headers['cal-api-version']).toBe('2024-09-04');
    expect(init.headers.Authorization).toBe('Bearer cal-test-key');
  });

  it('returns 502 when cal.com rejects the slots request', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => { });
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        json: () => Promise.resolve({ error: 'unauthorized' }),
      } as unknown as Response),
    );

    const response = await worker.fetch(slotsRequest('?start=2026-07-20&end=2026-07-27'), env);

    expect(response.status).toBe(502);
  });

  it('rejects non-POST methods on /api/booking/create', async () => {
    const response = await worker.fetch(
      cfRequest('https://api.nebiora.studio/api/booking/create', { method: 'GET' }),
      env,
    );

    expect(response.status).toBe(405);
  });

  it.each([
    ['missing start', { name: 'Ada Lovelace', email: 'ada@example.com', phone: '+491701234567', timeZone: 'Europe/Berlin' }],
    ['missing name', { start: validBookingPayload.start, email: 'ada@example.com', phone: '+491701234567', timeZone: 'Europe/Berlin' }],
    ['invalid email', { ...validBookingPayload, email: 'not-an-email' }],
    ['missing phone', { start: validBookingPayload.start, name: 'Ada Lovelace', email: 'ada@example.com', timeZone: 'Europe/Berlin' }],
    ['invalid phone', { ...validBookingPayload, phone: 'not a phone' }],
    ['missing timeZone', { start: validBookingPayload.start, name: 'Ada Lovelace', email: 'ada@example.com', phone: '+491701234567' }],
  ])('rejects a booking payload with %s', async (_case, payload) => {
    const response = await worker.fetch(createBookingRequest(payload), env);

    expect(response.status).toBe(400);
  });

  it('forwards a valid booking to cal.com with the configured event type and username', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ status: 'success', data: { uid: 'booking-uid-123' } }),
    } as unknown as Response);
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(createBookingRequest(validBookingPayload), env);

    expect(response.status).toBe(201);
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.cal.com/v2/bookings');
    expect(init.headers['cal-api-version']).toBe('2026-02-25');
    expect(init.headers.Authorization).toBe('Bearer cal-test-key');
    const sentBody = JSON.parse(init.body);
    expect(sentBody.eventTypeSlug).toBe('buchungen');
    expect(sentBody.username).toBe('nebiora');
    expect(sentBody.attendee).toEqual({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      timeZone: 'Europe/Berlin',
      phoneNumber: '+491701234567',
    });
    expect(sentBody.bookingFieldsResponses).toBeUndefined();
  });

  it('includes bookingFieldsResponses.notes only when notes are provided', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ status: 'success', data: { uid: 'booking-uid-123' } }),
    } as unknown as Response);
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(
      createBookingRequest({ ...validBookingPayload, notes: 'Bitte kurz vorher anrufen.' }),
      env,
    );

    expect(response.status).toBe(201);
    const [, init] = fetchMock.mock.calls[0];
    const sentBody = JSON.parse(init.body);
    expect(sentBody.bookingFieldsResponses).toEqual({ notes: 'Bitte kurz vorher anrufen.' });
  });

  it('returns 409 without leaking the raw cal.com response when the slot is already taken', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 409,
        json: () => Promise.resolve({ error: { message: 'Slot already booked', internalDetail: 'leaked-detail' } }),
      } as unknown as Response),
    );

    const response = await worker.fetch(createBookingRequest(validBookingPayload), env);
    const body = await response.json();

    expect(response.status).toBe(409);
    expect(JSON.stringify(body)).not.toContain('leaked-detail');
    expect(errorSpy).toHaveBeenCalled();
  });
});
