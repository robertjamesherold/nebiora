import Components from '@components';
import Icons from '@icons';

import Ui from '@/ui';

import type { CalendarDay } from './calendarGrid';
import { buildMonthGrid, monthLabel, WEEKDAY_LABELS } from './calendarGrid';
import TerminBuchenData from './TerminBuchen.data';
import useBookingForm from './useBookingForm';

const timeLabel = (isoDateTime: string) =>
  new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit' }).format(new Date(isoDateTime));

const dayClasses = (day: CalendarDay, active: boolean) => {
  if (!day.inCurrentMonth) return 'aspect-square rounded-sm text-sm lg:text-xs text-ink-800';
  if (day.isPast || !day.hasSlots) return 'aspect-square rounded-sm text-sm lg:text-xs text-ink-600 cursor-not-allowed';
  if (active) return 'aspect-square rounded-sm text-sm lg:text-xs bg-brand-500 font-semibold text-star-50';
  return 'aspect-square rounded-sm text-sm lg:text-xs text-star-50 border border-ink-700 transition-colors hover:border-brand-400 hover:bg-brand-500/10';
};

const timeChipClasses = (active: boolean) =>
  `shrink-0 rounded-sm border px-4 py-2 lg:px-3 lg:py-1.5 text-sm transition-colors ${
    active
      ? 'border-brand-400 bg-brand-500/20 text-star-50'
      : 'border-ink-700 text-ink-300 hover:border-ink-500 hover:text-star-50'
  }`;

const TerminBuchen = () => {
  const {
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
  } = useBookingForm(TerminBuchenData.errorMessage);

  const grid = buildMonthGrid(visibleMonth, slotsByDate, today);
  const hasAnySlotsThisMonth = grid.some((day) => day.inCurrentMonth && day.hasSlots);

  return (
    <section id="booking" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Components.SectionHeading
          category={TerminBuchenData.category}
          heading={TerminBuchenData.heading}
          description={TerminBuchenData.description}
        />

        <Ui.Card glass className="mt-14 overflow-hidden flex flex-col lg:grid lg:grid-cols-[260px_1fr_1fr] lg:grid-rows-[400px] lg:gap-0">
         {!sent && !loadError && <div className="contents lg:grid lg:grid-rows-2">
          <div className="order-1 border-b border-ink-800 p-6 sm:p-8 lg:order-0 lg:border-r lg:border-b-0 lg:p-5">
            <Ui.Text as="h3" variant="h3" text={TerminBuchenData.eventTitle} />
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink-300 lg:mt-3 lg:gap-2">
              <span className="flex items-center gap-2">
                <Icons.Clock size="xs" className="shrink-0 text-ink-500" aria-hidden="true" />
                {TerminBuchenData.eventDuration}
              </span>
              <span className="flex items-center gap-2">
                <Icons.Phone size="xs" className="shrink-0 text-ink-500" aria-hidden="true" />
                {TerminBuchenData.eventFormat}
              </span>
            </div>
            </div>
                      <div className="order-3 border-b border-ink-800 p-6 sm:p-8 lg:order-0 lg:border-r lg:border-b-0 lg:p-5">

            {selectedDate && slotsByDate[selectedDate] && (
                  <div>
                    <Ui.Text variant="caption" className="mb-3 block lg:mb-2">
                      Uhrzeit
                    </Ui.Text>
                    <div className="flex flex-wrap gap-2 lg:gap-1.5">
                      {slotsByDate[selectedDate].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={timeChipClasses(slot === selectedSlot)}
                        >
                          {timeLabel(slot)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                </div>
          </div>}

          <div
            className={`order-2 p-6 sm:p-8 lg:order-0 lg:border-ink-800 lg:p-5 ${
              sent || loadError ? 'lg:col-span-3' : 'lg:border-r'
            }`}
          >
            {sent ? (
              <div className="flex min-h-64 flex-col items-center justify-center gap-6 text-center h-full">
                <Ui.Icon strokeWidth={2.5} className="size-16 text-brand-300">
                  <path d="M4 12.5L9.5 18L20 6" strokeLinecap="round" strokeLinejoin="round" />
                </Ui.Icon>
                <div className="flex flex-col gap-3.5">
                  <Ui.Text as="h3" variant="h3Emphasis" text={TerminBuchenData.sentHeading} />
                  <Ui.Text variant="body" text={TerminBuchenData.sentMessage} />
                </div>
              </div>
            ) : loadError ? (
              <Ui.Text variant="error" text={loadError} />
            ) : (
              <div className="flex flex-col gap-8 lg:gap-6">
                <div>
                  <div className="mb-6 flex items-center justify-between lg:mb-6">
                    <button
                      type="button"
                      onClick={goToPreviousMonth}
                      disabled={!canGoToPreviousMonth}
                      aria-label="Vorheriger Monat"
                      className="flex size-8 items-center justify-center rounded-sm text-ink-300 transition-colors hover:text-star-50 disabled:cursor-not-allowed disabled:opacity-30 lg:size-6"
                    >
                      <Icons.ChevronLeft size="sm" aria-hidden="true" />
                    </button>
                    <Ui.Text as="h4" variant="h4" className="capitalize" text={monthLabel(visibleMonth)} />
                    <button
                      type="button"
                      onClick={goToNextMonth}
                      aria-label="Nächster Monat"
                      className="flex size-8 items-center justify-center rounded-sm text-ink-300 transition-colors hover:text-star-50 lg:size-6"
                    >
                      <Icons.ChevronRight size="sm" aria-hidden="true" />
                    </button>
                  </div>

                  <div className=" grid grid-cols-7 gap-1 text-center text-xs text-ink-500 lg:text-[0.65rem]">
                    {WEEKDAY_LABELS.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>

                  <div className="mt-1 grid grid-cols-7 gap-1">
                    {loadingSlots
                      ? Array.from({ length: 35 }, (_, index) => (
                          <div key={index} className="aspect-square animate-pulse rounded-sm bg-ink-800/60" />
                        ))
                      : grid.map((day) => (
                          <button
                            key={day.date}
                            type="button"
                            disabled={!day.inCurrentMonth || day.isPast || !day.hasSlots}
                            onClick={() => selectDate(day.date)}
                            className={`flex flex-col items-center justify-center gap-0.5 ${dayClasses(day, day.date === selectedDate)}`}
                          >
                            <span>{day.dayOfMonth}</span>
                            {day.inCurrentMonth && !day.isPast && day.hasSlots && (
                              <span
                                className={`size-1 rounded-full ${day.date === selectedDate ? 'bg-star-50' : 'bg-aurora-300'}`}
                              />
                            )}
                          </button>
                        ))}
                  </div>

                  {!loadingSlots && !hasAnySlotsThisMonth && (
                    <Ui.Text variant="bodyMuted" className="mt-4 lg:mt-3">
                      In diesem Monat sind keine Termine mehr frei — versuchen Sie den nächsten Monat oder nutzen
                      Sie das Formular oben.
                    </Ui.Text>
                  )}
                </div>

                
              </div>
            )}
          </div>

          {!sent && !loadError && (
            <div className="order-4 border-t border-ink-800 p-6 sm:p-8 lg:order-0 lg:col-span-1 lg:border-t-0 lg:p-5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-4">
                  <Ui.Input
                    label="Vorname"
                    placeholder="Max"
                    value={firstName}
                    onChange={setFirstName}
                    required
                    type="text"
                    as="input"
                  />
                  <Ui.Input
                    label="Nachname"
                    placeholder="Mustermann"
                    value={lastName}
                    onChange={setLastName}
                    required
                    type="text"
                    as="input"
                  />
                  <Ui.Input
                    label="E-Mail"
                    placeholder="ihre@email.de"
                    value={email}
                    onChange={setEmail}
                    required
                    type="email"
                    as="input"
                  />
                  <Ui.Input
                    label="Telefonnummer"
                    placeholder="+49 170 1234567"
                    value={phone}
                    onChange={setPhone}
                    required
                    type="tel"
                    as="input"
                  />
                </div>

                <Ui.Input
                  label="Nachricht (optional)"
                  placeholder="Gibt es etwas, das wir vorab wissen sollten?"
                  value={notes}
                  onChange={setNotes}
                  as="textarea"
                  rows={3}
                />

                <Ui.Buttons
                  type="submit"
                  container="button"
                  label={sending ? 'Wird gebucht…' : TerminBuchenData.submitLabel}
                  variant="primary"
                  size="sm"
                  disabled={sending}
                  className="mt-2"
                />

                {submitError && <Ui.Text variant="error" text={submitError} />}
              </form>
            </div>
          )}
        </Ui.Card>
      </div>
    </section>
  );
};

export default TerminBuchen;
