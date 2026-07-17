import Components from '@components';

import { ImpressumSections } from '.';

const Impressum = () => {
  return (
    <main>
      <Components.PageMeta
        title="Impressum"
        description="Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise zu Nebiora.studio."
      />
      <ImpressumSections.Hero />
      <ImpressumSections.LegalBody />
    </main>
  );
};

export default Impressum;
