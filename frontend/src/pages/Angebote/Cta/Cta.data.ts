import type { CtaProps } from './Cta.types';

const CtaData: CtaProps = {
  heading: 'Bereit für ein Angebot,\ndas zu Ihnen passt?',
  description:
    'Schreiben Sie uns, welches Paket Sie interessiert — wir melden uns mit einem individuellen Angebot und den nächsten Schritten.',
  buttons: [
    {
      container: 'link',
      to: '/studio/kontakt',
      label: 'Angebot anfragen',
      variant: 'primary',
    },
  ],
};

export default CtaData;
