import Components from '@components';
import NavLinkListVariant from '@components/NavLinkList/NavLinkList.variants';
import { lazy, Suspense, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Hooks from '@/hooks';
import Ui from '@/ui';

const Logo = lazy(() => import('@assets/logo/Logo'));

type NavLeaf = { to: string; label: string };
type NavGroup = { label: string; items: NavLeaf[] };
type NavEntry = NavLeaf | NavGroup;

const isNavGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;

const NAV_CONFIG: NavEntry[] = [
  {
    label: 'Leistungen',
    items: [
      { to: '/leistungen/webdesign', label: 'Webdesign' },
      { to: '/leistungen/entwicklung', label: 'Entwicklung' },
      { to: '/leistungen/branding', label: 'Branding' },
      { to: '/leistungen/seo-content', label: 'SEO & Content' },
      { to: '/leistungen/e-commerce', label: 'E-Commerce' },
    ],
  },
  { to: '/angebote', label: 'Angebote' },
  {
    label: 'Studio',
    items: [
      { to: '/studio/ueber-uns', label: 'Über uns' },
      { to: '/studio/kontakt', label: 'Kontakt' },
      { to: '/studio/ablauf', label: 'Ablauf' },
    ],
  },];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = Hooks.useScrolled();
  const location = useLocation();

  const [lastPathname, setLastPathname] = useState(location.pathname);
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <nav className="relative flex w-full items-center justify-between rounded-sm px-5 py-2.5">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 -z-10 rounded-sm border transition-all duration-300 ${
              scrolled || menuOpen
                ? 'glass-panel border-ink-800/60'
                : 'border-transparent bg-transparent'
            }`}
          />

          <Link to="/" className="flex items-center gap-2">
            <Suspense fallback={<span className="block h-8 w-34" />}>
              <Logo size={16} />
            </Suspense>
          </Link>

          <div className={NavLinkListVariant.list.desktop}>
            {NAV_CONFIG.map((entry) =>
              isNavGroup(entry) ? (
                <Components.NavDropdown key={entry.label} label={entry.label} items={entry.items} />
              ) : (
                <Link key={entry.to} to={entry.to} className={NavLinkListVariant.link.desktop}>
                  {entry.label}
                </Link>
              ),
            )}
          </div>

          <Ui.Buttons
            container="link"
            to="/studio/kontakt"
            label="Projekt starten"
            variant="primary"
            size="small"
            className="hidden md:block"
          />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            className="flex size-9 items-center justify-center rounded-sm text-star-50 md:hidden"
          >
            <Ui.Icon strokeWidth={1.8}>
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </Ui.Icon>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <Ui.Card glass className="mx-6 mt-3 p-5 md:hidden flex flex-col">
          <div className={NavLinkListVariant.list.mobile}>
            {NAV_CONFIG.map((entry) =>
              isNavGroup(entry) ? (
                <Components.NavDropdown
                  key={entry.label}
                  label={entry.label}
                  items={entry.items}
                  variant="mobile"
                  onLinkClick={() => setMenuOpen(false)}
                />
              ) : (
                <Link
                  key={entry.to}
                  to={entry.to}
                  onClick={() => setMenuOpen(false)}
                  className={NavLinkListVariant.link.mobile}
                >
                  {entry.label}
                </Link>
              ),
            )}
          </div>

          <Ui.Buttons
            container="link"
            to="/studio/kontakt"
            label="Projekt starten"
            variant="primary"
            size="small"
            className="mt-6 w-full"
          />
        </Ui.Card>
      )}
    </header>
  );
};

export default Navbar;
