import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'Branding' }],
  eyebrow: 'Leistungen',
  heading: ['Branding mit', 'klarer Haltung.'],
  description:
    'Wir entwickeln Markenidentitäten, die sich merken lassen — von Logo und Farbwelt bis zu Sprache und Bildsprache, konsistent über jeden Berührungspunkt hinweg.',
  buttons: [
    { container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' },
    { container: 'link', to: '/studio/projekte', label: 'Referenzen ansehen', variant: 'secondary' },
  ],
};

export default HeroData;
