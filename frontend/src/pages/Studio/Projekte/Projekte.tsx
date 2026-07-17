import Components from '@components';

import { ProjekteSections } from './';

const Projekte = () => {
  return (
    <main>
      <Components.PageMeta
        title="Projekte"
        description="Die vollständige Projektübersicht von Nebiora.studio — Branding, Webdesign, Entwicklung und E-Commerce für Marken, die sich abheben wollen."
      />
      <ProjekteSections.Hero />
      <ProjekteSections.ProjectGrid />
      <ProjekteSections.Cta />
    </main>
  );
};

export default Projekte;
