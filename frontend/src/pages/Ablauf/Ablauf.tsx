import Components from '@components';

import { AblaufSections } from './';

const Ablauf = () => {
  return (
    <main>
      <Components.PageMeta
        title="Ablauf"
        description="So arbeiten wir zusammen — von der ersten Nachricht bis zur laufenden Betreuung nach dem Launch. Der komplette Ablauf einer Zusammenarbeit mit Nebiora.studio."
      />
      <AblaufSections.Hero />
      <AblaufSections.Timeline />
      <AblaufSections.Cta />
    </main>
  );
};

export default Ablauf;
