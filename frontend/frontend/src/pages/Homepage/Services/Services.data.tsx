import type { ServicesProps } from '.';

const ServicesData: ServicesProps = {
  category: 'Leistungen',
  heading: ['Ein Studio, ein Ansprechpartner', 'der komplette Auftritt.'],
  description:
    'Von der ersten Skizze bis zum laufenden Betrieb — wir übernehmen jeden Schritt Ihres digitalen Auftritts.',
  cards: [
    {
      title: 'Webdesign',
      description:
        'Individuelles Design, das Ihre Marke trägt — responsiv, barrierearm und auf Conversion ausgelegt.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 4h16M8 4v4"
        />
      ),
    },
    {
      title: 'Entwicklung',
      description:
        'Schnelle, wartbare Websites & Web-Apps mit modernem Stack — von der Landingpage bis zum Portal.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 8-4 4 4 4m6-8 4 4-4 4M13 5l-2 14"
        />
      ),
    },
    {
      title: 'Branding',
      description:
        'Logo, Farbwelt, Typografie und Sprache — ein konsistentes Erscheinungsbild über alle Kanäle.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v3m0 12v3M4.2 5.2l2.1 2.1m11.4 11.4 2.1 2.1M3 12h3m12 0h3M4.2 18.8l2.1-2.1m11.4-11.4 2.1-2.1"
        />
      ),
    },
    {
      title: 'SEO & Content',
      description:
        'Sichtbarkeit, die bleibt: technisches SEO, Struktur und Inhalte, die gefunden und gelesen werden.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9 2-4.35-4.35"
        />
      ),
    },
    {
      title: 'E-Commerce',
      description:
        'Shops, die verkaufen: Produktseiten, Checkout und Zahlungs­anbindung ohne Reibung.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
      ),
    },
    {
      title: 'Betreuung & Hosting',
      description:
        'Updates, Monitoring und schnelle Antwortzeiten — Ihr Auftritt läuft, auch wenn Sie es nicht sehen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm-2.5 10 1.8 1.8L15 10"
        />
      ),
    },
  ],
};

export default ServicesData;
