import Components from '@components';

import { DatenschutzSections } from './';

const Datenschutz = () => {
  return (
    <main>
      <Components.PageMeta
        title="Datenschutz"
        description="Datenschutzerklärung von Nebiora.studio gemäß DSGVO: Datenerfassung, Ihre Rechte und Kontaktformular."
      />
      <DatenschutzSections.Hero />
      <DatenschutzSections.LegalBody />
    </main>
  );
};

export default Datenschutz;
