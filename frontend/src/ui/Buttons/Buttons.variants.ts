const ButtonVariant = {
  base: 'items-center justify-center rounded-sm text-center cursor-pointer transition-colors focus:ring-1 focus:-ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  style: {
    primary: 'bg-brand-500 font-medium text-star-50 transition-colors hover:bg-brand-400 active:bg-brand-600 disabled:bg-brand-500 disabled:text-star-50 disabled:opacity-50 disabled:hover:bg-brand-500',
    secondary:
      ' border border-ink-700 font-semibold text-ink-100 transition-colors hover:border-ink-500 hover:text-star-50',
  },
  size: {
    small: 'px-7 py-2.5 text-sm',
    sm: 'px-7 py-2.5 text-sm',
    medium: 'px-9 py-3.5 text-base',
    md: 'px-9 py-3.5 text-base',
    large: 'px-12 py-4 text-lg',
    lg: 'px-12 py-4 text-lg',
  },
} as const;

export default ButtonVariant;
