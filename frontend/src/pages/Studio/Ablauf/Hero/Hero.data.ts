import type { HeroProps } from './Hero.types';

const HeroData: HeroProps = {
  breadcrumb: [{ label: 'Ablauf' }],
  eyebrow: 'Ablauf',
  heading: 'So arbeiten wir zusammen.',
  description:
    'Von der ersten Nachricht bis zur laufenden Betreuung nach dem Launch — diese Seite zeigt jeden Schritt unserer Zusammenarbeit im Detail, damit Sie von Anfang an wissen, woran Sie sind.',
  buttons: [
    {
      container: 'link',
      to: '/studio/kontakt#booking',

      label: 'Erstgespräch vereinbaren',
      variant: 'primary',
    },
  ],
};

export default HeroData;
