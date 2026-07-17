import type { CtaProps } from './Cta.types';

const CtaData: CtaProps = {
  heading: 'Bereit, den ersten Schritt zu gehen?',
  description:
    'Vereinbaren Sie ein kostenloses Erstgespräch — unverbindlich und ohne versteckte Kosten.',
  buttons: [
    {
      container: 'link',
      to: '/studio/kontakt',
      label: 'Kostenloses Erstgespräch',
      variant: 'primary',
    },
  ],
};

export default CtaData;
