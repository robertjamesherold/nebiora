import type { ProzessProps } from './Prozess.types';

const ProzessData: ProzessProps = {
  category: 'Prozess',
  heading: ['So entsteht Ihr', 'neuer Onlineshop.'],
  steps: [
    {
      title: 'Sortiment & Anforderungen',
      description:
        'Wir klären Produktstruktur, Zahlungs- und Versandanforderungen sowie Anbindungen an bestehende Systeme.',
    },
    {
      title: 'Shop-Konzept & Design',
      description: 'Produktseiten, Kategorien und Checkout werden entlang der Customer Journey gestaltet.',
    },
    {
      title: 'Entwicklung & Anbindung',
      description: 'Umsetzung des Shops inklusive Zahlungs-, Versand- und Bestandsanbindung.',
    },
    {
      title: 'Launch & Optimierung',
      description: 'Nach dem Livegang beobachten wir Conversion-Kennzahlen und optimieren kontinuierlich nach.',
    },
  ],
};

export default ProzessData;
