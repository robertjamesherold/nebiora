import Components from '@components';

import { EntwicklungSections } from './';

const Entwicklung = () => (
  <main>
    <Components.PageMeta
      title="Entwicklung"
      description="Schnelle, wartbare Websites und Web-Apps von Nebiora.studio — moderner Stack, sauberer Code, performante Ergebnisse."
    />
    <EntwicklungSections.Hero />
    <EntwicklungSections.Beschreibung />
    <EntwicklungSections.Vorteile />
    <EntwicklungSections.Prozess />
    <EntwicklungSections.Technologien />
    <EntwicklungSections.FAQ />
    <EntwicklungSections.Referenzen />
    <EntwicklungSections.Cta />
  </main>
);

export default Entwicklung;
