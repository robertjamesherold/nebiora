import Components from '@components';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import Ui from '@/ui';

const Logo = lazy(() => import('@assets/logo/Logo'));

const COLUMNS = [
  {
    title: 'Leistungen',
    links: [
      { label: 'Webdesign', to: '/leistungen/webdesign' },
      { label: 'Entwicklung', to: '/leistungen/entwicklung' },
      { label: 'Branding', to: '/leistungen/branding' },
      { label: 'SEO & Content', to: '/leistungen/seo-content' },
      { label: 'E-Commerce', to: '/leistungen/e-commerce' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Über uns', to: '/studio/ueber-uns' },
      { label: 'Kontakt', to: '/studio/kontakt' },
      { label: 'Ablauf', to: '/studio/ablauf' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', to: '/impressum' },
      { label: 'Datenschutz', to: '/datenschutz' },
      { label: 'AGB', to: '/agb' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="glass-panel border-t border-ink-800/60 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Suspense fallback={<span className="block h-8 w-34" />}>
                <Logo size={24} />
              </Suspense>
            </Link>
            <Ui.Text variant="bodyMuted" className="mt-4 max-w-xs">
              Agentur für den kompletten Onlineauftritt — Design, Entwicklung und Strategie aus
              einer Hand.
            </Ui.Text>
          </div>

          {COLUMNS.map((column) => (
            <Components.FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800/60 pt-8 sm:flex-row">
          <Ui.Text variant="caption">
            © {new Date().getFullYear()} Nebiora.studio. Alle Rechte vorbehalten.
          </Ui.Text>
          <Ui.Text variant="caption">Gestaltet unter einem klaren Nachthimmel.</Ui.Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
