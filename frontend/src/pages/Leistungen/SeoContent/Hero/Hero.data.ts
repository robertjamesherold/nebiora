import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'SEO & Content' }],
  eyebrow: 'Leistungen',
  heading: ['Sichtbar werden,', 'sichtbar bleiben.'],
  description:
    'Wir verbinden technisches SEO mit durchdachter Content-Strategie, damit Ihre Website nicht nur gefunden, sondern auch gelesen und verstanden wird.',
  buttons: [
    { container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' },
  ],
};

export default HeroData;
