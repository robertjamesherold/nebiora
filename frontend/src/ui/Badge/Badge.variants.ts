const BASE_CLASSES =
  'inline-flex items-center gap-2 rounded-full border-ink-800/60 px-4 py-1.5 text-xs font-medium tracking-wide uppercase';

export const BadgeVariant: {
  base: string;
  style: {
    primary: string;
    secondary: string;
  };
} = {
  base: BASE_CLASSES,
  style: {
    primary: 'text-star-50 glass-panel',
    secondary: 'text-brand-200 glass-panel-secondary',
  },
} as const;

export default BadgeVariant;
