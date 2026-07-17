import Components from '@components';

import type { CtaProps } from './Cta.types';

const Cta = (_props?: CtaProps) => (
  <Components.CTABlock
    heading="Auch Ihr Projekt verdient diese Aufmerksamkeit."
    description="Lassen Sie uns gemeinsam herausfinden, wie ein Auftritt aussieht, der Ihrer Marke wirklich gerecht wird."
    buttons={[
      {
        label: 'Projekt starten',
        variant: 'primary',
        container: 'link',
        to: '/studio/kontakt',
      },
    ]}
  />
);

export default Cta;
