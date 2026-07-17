import Icons from '@icons';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { NavDropdownProps } from './NavDropdown.types';

const NavDropdown = ({ label, items, variant = 'desktop', onLinkClick, className = '' }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const [lastPathname, setLastPathname] = useState(location.pathname);
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (variant !== 'desktop' || !open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, variant]);

  if (variant === 'mobile') {
    return (
      <div className={className}>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="true"
          aria-expanded={open}
          className="flex w-full items-center justify-between text-base text-ink-100"
        >
          {label}
          <Icons.ChevronDown
            size="sm"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {open && (
          <ul className="mt-4 flex flex-col gap-4 border-l border-ink-800 pl-4">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onLinkClick}
                  className="text-sm text-ink-300 transition-colors hover:text-star-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 text-sm text-ink-200 transition-colors hover:text-star-50"
      >
        {label}
        <Icons.ChevronDown size="xs" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={label}
          className="glass-panel absolute top-full left-1/2 mt-3 w-56 -translate-x-1/2 rounded-sm border border-ink-800/60 p-2"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors hover:bg-ink-800/40 hover:text-star-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
