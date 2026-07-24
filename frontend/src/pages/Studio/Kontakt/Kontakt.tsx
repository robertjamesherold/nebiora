import Components from '@components';

import { KontaktSections } from './';

const Kontakt = () => {
  return (
    <main>
      <Components.PageMeta
        title="Kontakt"
        description="Nehmen Sie Kontakt zu Nebiora.studio auf — kostenloses Erstgespräch, keine Verpflichtungen. Wir melden uns innerhalb von 24 Stunden."
      />
      <KontaktSections.Hero />
      <KontaktSections.ContactSection />
      <KontaktSections.TerminBuchen />
      <KontaktSections.FAQ />
    </main>
  );
};

export default Kontakt;
