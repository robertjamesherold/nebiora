import type { CtaProps } from './Cta.types';

const CtaData: CtaProps = {
  heading: 'Lernen wir uns kennen.',
  description: 'Erzählen Sie uns von Ihrem Projekt — wir melden uns innerhalb von 24 Stunden.',
  buttons: [
    {
      label: 'Projekt anfragen',
      variant: 'primary',
      size: 'sm',
      container: 'link',
      to: '/studio/kontakt',
    },
  ],
};

export default CtaData;
