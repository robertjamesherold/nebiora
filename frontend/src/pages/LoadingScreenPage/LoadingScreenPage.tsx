import Logo from '@assets/logo/Logo';

const LoadingScreenPage = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-screen flex-col items-center justify-center gap-6 px-6"
  >
    <Logo size={24} className="animate-pulse motion-reduce:animate-none" />
    <span
      aria-hidden="true"
      className="size-8 animate-spin rounded-full border-2 border-ink-700 border-t-brand-400 motion-reduce:animate-none"
    />
    <span className="sr-only">Seite wird geladen…</span>
  </div>
);

export default LoadingScreenPage;
