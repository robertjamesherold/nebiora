import Components from '@components';

import { UeberUnsSections } from './';

const UeberUns = () => {
  return (
    <main>
      <Components.PageMeta
        title="Über uns"
        description="Nebiora.studio ist ein kleines, unabhängiges Studio für Design, Entwicklung und digitale Strategie. Lernen Sie das Team und unsere Arbeitsweise kennen."
      />
      <UeberUnsSections.Hero />
      <UeberUnsSections.Story />
      <UeberUnsSections.Team />
      <UeberUnsSections.Stats />
      <UeberUnsSections.Cta />
    </main>
  );
};

export default UeberUns;
