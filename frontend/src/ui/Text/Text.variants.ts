const TextVariant = {
  h1: 'text-gradient font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-7xl',
  h2: 'font-display text-3xl font-semibold  sm:text-4xl leading-tighter',
  h2Large: 'font-display text-4xl font-semibold  sm:text-5xl',
  h3: 'font-display text-lg font-semibold ',
  h3Large: 'font-display text-2xl font-semibold ',
  h3Emphasis: 'font-display text-balance text-2xl font-bold sm:text-3xl',
  h4: 'text-sm font-semibold ',
  eyebrow: 'text-sm font-medium tracking-wide text-brand-300 uppercase',
  eyebrowMuted: 'text-xs font-medium tracking-wide uppercase',
  indexLabel: 'font-display text-4xl font-semibold text-brand-300/70',
  lead: 'text-balance text-lg text-ink-200',
  body: 'text-sm text-ink-300 leading-normal',
  bodyMuted: 'text-sm text-ink-400',
  caption: 'text-xs text-ink-500',
  error: 'text-sm text-red-400',
} as const;

const TextDefaultTag = {
  h1: 'h1',
  h2: 'h2',
  h2Large: 'h2',
  h3: 'h3',
  h3Large: 'h3',
  h3Emphasis: 'h3',
  h4: 'h4',
  eyebrow: 'span',
  eyebrowMuted: 'span',
  indexLabel: 'span',
  lead: 'p',
  body: 'p',
  bodyMuted: 'p',
  caption: 'p',
  error: 'p',
} as const;

export { TextDefaultTag };
export default TextVariant;
