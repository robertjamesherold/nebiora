import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'E-Commerce' }],
  eyebrow: 'Leistungen',
  heading: ['Shops, die', 'wirklich verkaufen.'],
  description:
    'Wir gestalten und entwickeln Onlineshops, die vom ersten Klick bis zum Checkout überzeugen — ohne Reibungsverluste, mit Fokus auf Conversion.',
  buttons: [
    { container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' },
    { container: 'link', to: '/studio/projekte', label: 'Referenzen ansehen', variant: 'secondary' },
  ],
};

export default HeroData;
