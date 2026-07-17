import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'Webdesign' }],
  eyebrow: 'Leistungen',
  heading: ['Webdesign, das', 'Ihre Marke trägt.'],
  description:
    'Wir gestalten Websites, die nicht nur gut aussehen, sondern verstanden werden — klar strukturiert, responsiv auf jedem Gerät und konsequent auf Ihre Ziele ausgerichtet.',
  buttons: [
    { container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' },
    { container: 'link', to: '/studio/projekte', label: 'Referenzen ansehen', variant: 'secondary' },
  ],
};

export default HeroData;
