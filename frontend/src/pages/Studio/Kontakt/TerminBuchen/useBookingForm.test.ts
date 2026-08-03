import { act, renderHook, waitFor } from '@testing-library/react';
import type React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import useBookingForm from './useBookingForm';

const ERROR_MESSAGE = 'Der Termin konnte nicht gebucht werden.';
const NO_SLOT_SELECTED_MESSAGE = 'Bitte wählen Sie zuerst einen Termin im Kalender aus.';

const renderBookingForm = () => renderHook(() => useBookingForm(ERROR_MESSAGE, NO_SLOT_SELECTED_MESSAGE));

const submitForm = async (result: { current: ReturnType<typeof useBookingForm> }) => {
  const preventDefault = vi.fn();
  await act(async () => {
    await result.current.handleSubmit({ preventDefault } as unknown as React.SubmitEvent<HTMLFormElement>);
  });
  return preventDefault;
};

const stubFetch = (createImpl: () => Promise<unknown>) => {
  vi.stubGlobal(
    'fetch',
    vi.fn((input: string | URL) =>
      String(input).includes('/slots')
        ? Promise.resolve({ ok: true, json: () => Promise.resolve({ data: {} }) })
        : createImpl(),
    ),
  );
};

const selectSlot = async (result: { current: ReturnType<typeof useBookingForm> }) => {
  await waitFor(() => expect(result.current.loadingSlots).toBe(false));
  act(() => {
    result.current.setSelectedSlot('2026-08-10T09:00:00.000Z');
  });
};

describe('useBookingForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    stubFetch(() => Promise.reject(new Error('unexpected create call in this test')));
  });

  it('surfaces a visible error instead of silently doing nothing when no slot is selected', async () => {
    const { result } = renderBookingForm();
    await waitFor(() => expect(result.current.loadingSlots).toBe(false));

    const preventDefault = await submitForm(result);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(result.current.submitError).toBe(NO_SLOT_SELECTED_MESSAGE);
    expect(result.current.sending).toBe(false);
    expect(result.current.sent).toBe(false);
  });

  it('flips to sent on a successful booking', async () => {
    const createMock = vi
      .fn()
      .mockResolvedValue({ status: 201, ok: true, json: () => Promise.resolve({ id: 'booking-1' }) });
    stubFetch(createMock);

    const { result } = renderBookingForm();
    await selectSlot(result);

    await submitForm(result);

    expect(createMock).toHaveBeenCalledOnce();
    expect(result.current.sent).toBe(true);
    expect(result.current.submitError).toBeNull();
    expect(result.current.sending).toBe(false);
  });

  it('never retries — a booking is not idempotent, so one submit is one attempt', async () => {
    const createMock = vi
      .fn()
      .mockResolvedValue({ status: 502, ok: false, json: () => Promise.resolve({ error: 'Upstream kaputt.' }) });
    stubFetch(createMock);

    const { result } = renderBookingForm();
    await selectSlot(result);

    await submitForm(result);

    expect(createMock).toHaveBeenCalledOnce();
    expect(result.current.submitError).toBe('Upstream kaputt.');
    expect(result.current.sent).toBe(false);
  });

  it('surfaces the backend validation message for a rejected phone number', async () => {
    const message =
      'Diese Telefonnummer konnten wir nicht zuordnen. Bitte geben Sie sie mit Vorwahl an, z. B. 0170 1234567 oder +49 170 1234567.';
    stubFetch(() => Promise.resolve({ status: 400, ok: false, json: () => Promise.resolve({ error: message }) }));

    const { result } = renderBookingForm();
    await selectSlot(result);

    await submitForm(result);

    expect(result.current.submitError).toBe(message);
    expect(result.current.sent).toBe(false);
  });

  it('surfaces the backend message for a slot conflict', async () => {
    const message = 'Dieser Termin ist gerade nicht mehr verfügbar. Bitte wählen Sie einen anderen Slot.';
    stubFetch(() => Promise.resolve({ status: 409, ok: false, json: () => Promise.resolve({ error: message }) }));

    const { result } = renderBookingForm();
    await selectSlot(result);

    await submitForm(result);

    expect(result.current.submitError).toBe(message);
  });

  it('falls back to the generic message when the network request throws', async () => {
    stubFetch(() => Promise.reject(new Error('network down')));

    const { result } = renderBookingForm();
    await selectSlot(result);

    await submitForm(result);

    expect(result.current.submitError).toBe(ERROR_MESSAGE);
    expect(result.current.sending).toBe(false);
  });
});
