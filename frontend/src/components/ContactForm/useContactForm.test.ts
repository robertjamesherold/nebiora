import { act, renderHook } from '@testing-library/react';
import type React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import useContactForm from './useContactForm';

const submitForm = async (result: { current: ReturnType<typeof useContactForm> }) => {
  const preventDefault = vi.fn();
  await act(async () => {
    await result.current.handleSubmit({ preventDefault } as unknown as React.SubmitEvent<HTMLFormElement>);
  });
  return preventDefault;
};

describe('useContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes an empty value for every field', () => {
    const { result } = renderHook(() =>
      useContactForm({ contactEmail: 'hi@example.com', fields: ['Name', 'E-Mail', 'Nachricht'] }),
    );

    expect(result.current.values).toEqual({ Name: '', 'E-Mail': '', Nachricht: '' });
    expect(result.current.sent).toBe(false);
    expect(result.current.sending).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('updates a single field via setValue without touching the others', () => {
    const { result } = renderHook(() =>
      useContactForm({ contactEmail: 'hi@example.com', fields: ['Name', 'E-Mail'] }),
    );

    act(() => {
      result.current.setValue('Name')('Ada Lovelace');
    });

    expect(result.current.values).toEqual({ Name: 'Ada Lovelace', 'E-Mail': '' });
  });

  it('sends name, email, and an assembled message on submit, and flips to sent on success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    const { result } = renderHook(() =>
      useContactForm({
        contactEmail: 'hi@example.com',
        fields: ['Name', 'E-Mail', 'Firma', 'Nachricht'],
        messagePrefix: 'Neue Anfrage',
      }),
    );

    act(() => {
      result.current.setValue('Name')('Ada Lovelace');
      result.current.setValue('E-Mail')('ada@example.com');
      result.current.setValue('Firma')('Acme');
      result.current.setValue('Nachricht')('Hallo!');
    });

    const preventDefault = await submitForm(result);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledOnce();
    const [, requestInit] = fetchMock.mock.calls[0];
    expect(JSON.parse(requestInit.body)).toEqual({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'Neue Anfrage\n\nFirma: Acme\n\nHallo!',
    });
    expect(result.current.sent).toBe(true);
    expect(result.current.sending).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('surfaces a fallback error message referencing the contact email when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    const { result } = renderHook(() =>
      useContactForm({ contactEmail: 'hi@example.com', fields: ['Name', 'E-Mail', 'Nachricht'] }),
    );

    await submitForm(result);

    expect(result.current.sent).toBe(false);
    expect(result.current.sending).toBe(false);
    expect(result.current.error).toContain('hi@example.com');
  });

  it('surfaces the same fallback error when the network request throws', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')));

    const { result } = renderHook(() =>
      useContactForm({ contactEmail: 'hi@example.com', fields: ['Name', 'E-Mail', 'Nachricht'] }),
    );

    await submitForm(result);

    expect(result.current.error).toContain('hi@example.com');
  });
});
