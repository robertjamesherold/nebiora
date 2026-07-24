import Components from '@components';

import { AngeboteSections } from './';

const Angebote = () => (
  <main>
    <Components.PageMeta
      title="Angebote"
      description="Pakete für Website, Online-Shop, Relaunch und Branding von Nebiora.studio — klar umrissener Leistungsumfang, individuelles Angebot auf Anfrage."
    />
    <AngeboteSections.Hero />
    <AngeboteSections.Pakete />
    <AngeboteSections.FAQ />
    <AngeboteSections.Cta />
  </main>
);

export default Angebote;
