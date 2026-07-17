import Components from '@components';

import { ECommerceSections } from './';

const ECommerce = () => (
  <main>
    <Components.PageMeta
      title="E-Commerce"
      description="E-Commerce-Lösungen von Nebiora.studio — Shops, die verkaufen: Produktseiten, Checkout und Zahlungsanbindung ohne Reibung."
    />
    <ECommerceSections.Hero />
    <ECommerceSections.Beschreibung />
    <ECommerceSections.Vorteile />
    <ECommerceSections.Prozess />
    <ECommerceSections.Technologien />
    <ECommerceSections.FAQ />
    <ECommerceSections.Referenzen />
    <ECommerceSections.Cta />
  </main>
);

export default ECommerce;
