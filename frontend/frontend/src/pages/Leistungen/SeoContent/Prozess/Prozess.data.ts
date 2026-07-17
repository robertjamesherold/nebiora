import type { ProzessProps } from './Prozess.types';

const ProzessData: ProzessProps = {
  category: 'Prozess',
  heading: ['So entsteht mehr', 'Sichtbarkeit.'],
  steps: [
    {
      title: 'SEO-Audit',
      description: 'Wir analysieren technische Struktur, Ladezeit und bestehende Inhalte auf Schwachstellen und Potenzial.',
    },
    {
      title: 'Content-Strategie',
      description: 'Wir entwickeln Themen- und Struktur-Cluster entlang der Suchintention Ihrer Zielgruppe.',
    },
    {
      title: 'Umsetzung',
      description: 'Technische Optimierungen und neue Inhalte werden priorisiert umgesetzt und laufend abgestimmt.',
    },
    {
      title: 'Monitoring & Optimierung',
      description: 'Wir beobachten Rankings und Nutzerverhalten und justieren die Strategie kontinuierlich nach.',
    },
  ],
};

export default ProzessData;
