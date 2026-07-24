const InputVariant = {
  // text-base (16px) is required, not cosmetic: the wrapping <label> is
  // text-sm, and form controls inherit font-size from their parent at 100%
  // (Tailwind Preflight) — below 16px, iOS Safari zooms the page in on focus.
  base: 'rounded-sm border border-ink-700 bg-space-900/60 px-4 py-3 text-base text-star-50 placeholder-ink-500 outline-none transition-colors focus:border-brand-400',
} as const;

export default InputVariant;
