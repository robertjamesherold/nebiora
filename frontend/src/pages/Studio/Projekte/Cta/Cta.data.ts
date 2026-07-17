import type { CtaProps } from './Cta.types';

const CtaData: CtaProps = {
  heading: 'Ihr Projekt könnte das nächste sein.',
  description: 'Lassen Sie uns gemeinsam herausfinden, was für Ihr Unternehmen möglich ist.',
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
