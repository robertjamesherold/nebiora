import Components from '@components';

import { WebdesignSections } from './';

const Webdesign = () => (
  <main>
    <Components.PageMeta
      title="Webdesign"
      description="Individuelles Webdesign von Nebiora.studio — responsiv, markenstark und auf Conversion ausgelegt. Von der ersten Skizze bis zum fertigen Interface."
    />
    <WebdesignSections.Hero />
    <WebdesignSections.Beschreibung />
    <WebdesignSections.Vorteile />
    <WebdesignSections.Prozess />
    <WebdesignSections.Technologien />
    <WebdesignSections.FAQ />
    <WebdesignSections.Cta />
  </main>
);

export default Webdesign;
