import Components from '@components';

import { AGBSections } from '.';

const AGB = () => {
  return (
    <main>
      <Components.PageMeta
        title="AGB"
        description="Allgemeine Geschäftsbedingungen von Nebiora.studio für Design-, Entwicklungs- und Beratungsleistungen."
      />
      <AGBSections.Hero />
      <AGBSections.LegalBody />
    </main>
  );
};

export default AGB;
