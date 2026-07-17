import Components from '@components';

import { KarriereSections } from '.';

const Karriere = () => {
  return (
    <main>
      <Components.PageMeta
        title="Karriere"
        description="Werden Sie Teil von Nebiora.studio — einem kleinen, remote-first Team für Design, Entwicklung und digitale Strategie."
      />
      <KarriereSections.Hero />
      <KarriereSections.WarumNebiora />
      <KarriereSections.OffeneStellen />
      <KarriereSections.Bewerbung />
    </main>
  );
};

export default Karriere;
