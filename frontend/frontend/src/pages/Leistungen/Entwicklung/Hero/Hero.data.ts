import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'Entwicklung' }],
  eyebrow: 'Leistungen',
  heading: ['Entwicklung, die', 'hält, was sie verspricht.'],
  description:
    'Wir setzen Design in sauberen, performanten Code um — mit einem modernen Stack, der schnell lädt, zuverlässig läuft und sich mit Ihrem Unternehmen weiterentwickeln lässt.',
  buttons: [
    { container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' },
    { container: 'link', to: '/studio/projekte', label: 'Referenzen ansehen', variant: 'secondary' },
  ],
};

export default HeroData;
