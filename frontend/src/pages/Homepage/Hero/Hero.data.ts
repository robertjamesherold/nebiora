import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  badge: 'Digitalagentur für den kompletten Onlineauftritt',
  heading: 'Wir bringen Ihre Marke ins richtige Licht.',
  description:
    'Nebiora.studio entwickelt Website, Branding und digitale Strategie aus einer Hand — durchdacht, schnell und mit einem Auftritt, der bleibt.',
  button: [
    {
      text: 'Kostenloses Erstgespräch',
      link: '#kontakt',
      variant: 'primary',
      container: 'anchor',
    },

  ],
  STATS: [
    { value: '120+', label: 'Projekte realisiert' },
    { value: '4,9 / 5', label: 'Kundenbewertung' },
    { value: '14 Tage', label: 'bis zum ersten Entwurf' },
  ],
};

export default HeroData;
