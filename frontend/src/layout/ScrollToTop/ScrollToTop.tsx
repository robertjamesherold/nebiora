import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The target section may not be in the DOM yet (e.g. the page it lives
    // on is still being lazy-loaded), so keep checking until it mounts.
    const id = hash.slice(1);
    let frame: number;

    const scrollToHash = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      } else {
        frame = requestAnimationFrame(scrollToHash);
      }
    };

    frame = requestAnimationFrame(scrollToHash);

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
