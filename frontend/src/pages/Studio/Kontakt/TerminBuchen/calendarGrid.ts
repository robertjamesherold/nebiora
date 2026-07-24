type CalendarDay = {
  date: string;
  dayOfMonth: number;
  inCurrentMonth: boolean;
  isPast: boolean;
  hasSlots: boolean;
};

const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

const toDateParam = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const monthLabel = (visibleMonth: Date) =>
  new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(visibleMonth);

const startOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);

const isSameMonth = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

const buildMonthGrid = (
  visibleMonth: Date,
  slotsByDate: Record<string, string[]>,
  today: Date,
): CalendarDay[] => {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  // getDay(): Sunday = 0 — shift so the grid starts on Monday.
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((leadingBlanks + daysInMonth) / 7) * 7;
  const todayParam = toDateParam(today);

  return Array.from({ length: totalCells }, (_, index) => {
    const cellDate = new Date(year, month, index - leadingBlanks + 1);
    const dateParam = toDateParam(cellDate);

    return {
      date: dateParam,
      dayOfMonth: cellDate.getDate(),
      inCurrentMonth: cellDate.getMonth() === month,
      isPast: dateParam < todayParam,
      hasSlots: Boolean(slotsByDate[dateParam]?.length),
    };
  });
};

export { buildMonthGrid, isSameMonth, monthLabel, startOfMonth, toDateParam, WEEKDAY_LABELS };
export type { CalendarDay };
