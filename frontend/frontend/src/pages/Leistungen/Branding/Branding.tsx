import Components from '@components';

import { BrandingSections } from '.';

const Branding = () => (
  <main>
    <Components.PageMeta
      title="Branding"
      description="Markenidentität von Nebiora.studio — Logo, Farbwelt, Typografie und Sprache für einen konsistenten Auftritt über alle Kanäle."
    />
    <BrandingSections.Hero />
    <BrandingSections.Beschreibung />
    <BrandingSections.Vorteile />
    <BrandingSections.Prozess />
    <BrandingSections.Technologien />
    <BrandingSections.FAQ />
    <BrandingSections.Referenzen />
    <BrandingSections.Cta />
  </main>
);

export default Branding;
