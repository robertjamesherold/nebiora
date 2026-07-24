import { useEffect, useRef, useState } from 'react';

// Public site key — safe to ship in the client bundle by design.
const TURNSTILE_SITE_KEY = '0x4AAAAAAD8z0e87Bcj6GS4v';

const useTurnstile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let pollId: ReturnType<typeof setInterval> | undefined;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        action: 'turnstile-spin-v2',
        callback: (responseToken) => setToken(responseToken),
        'expired-callback': () => setToken(null),
        'error-callback': () => setToken(null),
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      pollId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollId);
          renderWidget();
        }
      }, 100);
    }

    return () => {
      cancelled = true;
      if (pollId) clearInterval(pollId);
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
    };
  }, []);

  return { containerRef, token };
};

export default useTurnstile;
