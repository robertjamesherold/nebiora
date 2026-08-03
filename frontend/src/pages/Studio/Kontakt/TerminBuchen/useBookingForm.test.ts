import { act, renderHook, waitFor } from '@testing-library/react';
import type React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import useBookingForm from './useBookingForm';

const ERROR_MESSAGE = 'Der Termin konnte nicht gebucht werden.';

const renderBookingForm = () => renderHook(() => useBookingForm(ERROR_MESSAGE));

const submitForm = async (result: { current: ReturnType<typeof useBookingForm> }) => {
  const preventDefault = vi.fn();
  await act(async () => {
    await result.current.handleSubmit({ preventDefault } as unknown as React.SubmitEvent<HTMLFormElement>);
  });
  return preventDefault;
};

describe('useBookingForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.stubGlobal(
      'fetch',
      vi.fn((input: string | URL) =>
        String(input).includes('/slots')
          ? Promise.resolve({ ok: true, json: () => Promise.resolve({ data: {} }) })
          : Promise.reject(new Error('unexpected create call in this test')),
      ),
    );
  });

  const selectFirstSlot = async (result: { current: ReturnType<typeof useBookingForm> }) => {
    await waitFor(() => expect(result.current.loadingSlots).toBe(false));
    act(() => {
      result.current.setSelectedSlot('2026-08-10T09:00:00.000Z');
    });
  };

  it('does not submit without a selected slot', async () => {
    const { result } = renderBookingForm();
    await waitFor(() => expect(result.current.loadingSlots).toBe(false));

    const preventDefault = await submitForm(result);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(result.current.sending).toBe(false);
    expect(result.current.sent).toBe(false);
  });

  it('retries once on a 502 and succeeds on the second attempt', async () => {
    const createMock = vi
      .fn()
      .mockResolvedValueOnce({ status: 502, ok: false, json: () => Promise.resolve({ error: 'Bad gateway' }) })
      .mockResolvedValueOnce({ status: 201, ok: true, json: () => Promise.resolve({ id: 'booking-1' }) });

    (fetch as ReturnType<typeof vi.fn>).mockImplementation((input: string | URL) =>
      String(input).includes('/slots')
        ? Promise.resolve({ ok: true, json: () => Promise.resolve({ data: {} }) })
        : createMock(),
    );

    const { result } = renderBookingForm();
    await selectFirstSlot(result);

    await submitForm(result);

    expect(createMock).toHaveBeenCalledTimes(2);
    expect(result.current.sent).toBe(true);
    expect(result.current.submitError).toBeNull();
  });

  it('retries once when fetch throws, then surfaces the fallback error if it throws again', async () => {
    const createMock = vi.fn().mockRejectedValue(new Error('network down'));

    (fetch as ReturnType<typeof vi.fn>).mockImplementation((input: string | URL) =>
      String(input).includes('/slots')
        ? Promise.resolve({ ok: true, json: () => Promise.resolve({ data: {} }) })
        : createMock(),
    );

    const { result } = renderBookingForm();
    await selectFirstSlot(result);

    await submitForm(result);

    expect(createMock).toHaveBeenCalledTimes(2);
    expect(result.current.submitError).toBe(ERROR_MESSAGE);
    expect(result.current.sent).toBe(false);
  });

  it('does not retry a real rejection like a slot conflict, and surfaces the backend message', async () => {
    const createMock = vi
      .fn()
      .mockResolvedValue({ status: 409, ok: false, json: () => Promise.resolve({ error: 'Slot vergeben.' }) });

    (fetch as ReturnType<typeof vi.fn>).mockImplementation((input: string | URL) =>
      String(input).includes('/slots')
        ? Promise.resolve({ ok: true, json: () => Promise.resolve({ data: {} }) })
        : createMock(),
    );

    const { result } = renderBookingForm();
    await selectFirstSlot(result);

    await submitForm(result);

    expect(createMock).toHaveBeenCalledOnce();
    expect(result.current.submitError).toBe('Slot vergeben.');
  });
});
