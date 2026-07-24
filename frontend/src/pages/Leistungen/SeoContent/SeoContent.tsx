import Components from '@components';

import { SeoContentSections } from './';

const SeoContent = () => (
  <main>
    <Components.PageMeta
      title="SEO & Content"
      description="SEO und Content-Strategie von Nebiora.studio — technische Sichtbarkeit und Inhalte, die gefunden und gelesen werden."
    />
    <SeoContentSections.Hero />
    <SeoContentSections.Beschreibung />
    <SeoContentSections.Vorteile />
    <SeoContentSections.Prozess />
    <SeoContentSections.Technologien />
    <SeoContentSections.FAQ />
    <SeoContentSections.Cta />
  </main>
);

export default SeoContent;
