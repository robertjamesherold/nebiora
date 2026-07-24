import type { SubmitEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { isSameMonth, startOfMonth, toDateParam } from './calendarGrid';

// Falls back to the current page's own hostname (not a hardcoded "localhost")
// so this also works when the dev server is opened via --host from another
// device on the LAN, where "localhost" would resolve to that device itself.
const BOOKING_API_BASE =
  import.meta.env.VITE_BOOKING_API_URL ?? `http://${window.location.hostname}:8787/api/booking`;

type SlotsResponse = {
  data?: Record<string, { start: string }[]>;
};

const useBookingForm = (errorMessage: string, turnstileToken: string | null) => {
  const today = useMemo(() => new Date(), []);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfMonth(today));

  const [slotsByDate, setSlotsByDate] = useState<Record<string, string[]>>({});
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  const canGoToPreviousMonth = !isSameMonth(visibleMonth, today) && visibleMonth > today;

  const goToPreviousMonth = () => {
    if (!canGoToPreviousMonth) return;
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1));
  };

  useEffect(() => {
    const rangeStart = isSameMonth(visibleMonth, today) ? today : visibleMonth;
    const rangeEnd = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0);

    const url = new URL(`${BOOKING_API_BASE}/slots`);
    url.searchParams.set('start', toDateParam(rangeStart));
    url.searchParams.set('end', toDateParam(rangeEnd));
    url.searchParams.set('timeZone', timeZone);

    let cancelled = false;

    (async () => {
      setLoadingSlots(true);
      setLoadError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');

        const body = (await response.json()) as SlotsResponse;
        if (cancelled) return;

        const byDate = Object.fromEntries(
          Object.entries(body.data ?? {}).map(([date, slots]) => [date, slots.map((slot) => slot.start)]),
        );
        setSlotsByDate(byDate);
        setSelectedDate(null);
        setSelectedSlot(null);
      } catch {
        if (!cancelled) setLoadError(errorMessage);
      } finally {
        if (!cancelled) setLoadingSlots(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [visibleMonth, timeZone, errorMessage, today]);

  const selectDate = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedSlot || !turnstileToken) return;

    setSending(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${BOOKING_API_BASE}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start: selectedSlot,
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          timeZone,
          ...(notes.trim() ? { notes: notes.trim() } : {}),
          'cf-turnstile-response': turnstileToken,
        }),
      });

      const body = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(body?.error ?? 'Request failed');
      }

      setSent(true);
    } catch (err) {
      setSubmitError(err instanceof Error && err.message !== 'Request failed' ? err.message : errorMessage);
    } finally {
      setSending(false);
    }
  };

  return {
    visibleMonth,
    canGoToPreviousMonth,
    goToPreviousMonth,
    goToNextMonth,
    slotsByDate,
    loadingSlots,
    loadError,
    selectedDate,
    selectDate,
    selectedSlot,
    setSelectedSlot,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    notes,
    setNotes,
    sending,
    sent,
    submitError,
    handleSubmit,
    today,
  };
};

export default useBookingForm;
