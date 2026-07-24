import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'Angebote' }],
  eyebrow: 'Angebote',
  heading: ['Pakete, die zu Ihrem', 'Vorhaben passen.'],
  description:
    'Ob One-Pager, vollständige Website oder Online-Shop — unsere Pakete geben Ihnen einen klaren Rahmen für Leistungsumfang und Ablauf. Da jedes Projekt in Umfang und Anforderungen unterschiedlich ist, erstellen wir Ihnen nach einem kurzen Gespräch ein individuelles Angebot statt pauschaler Preise.',
  buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
};

export default HeroData;
