import type { ProzessProps } from './Prozess.types';

const ProzessData: ProzessProps = {
  category: 'Prozess',
  heading: ['So entsteht Ihre', 'technische Umsetzung.'],
  steps: [
    {
      title: 'Technisches Konzept',
      description: 'Wir definieren Architektur, Datenmodell und Schnittstellen passend zu den Anforderungen Ihres Projekts.',
    },
    {
      title: 'Umsetzung in Sprints',
      description: 'Entwicklung in kurzen, nachvollziehbaren Etappen mit regelmäßigen Zwischenständen zum Testen.',
    },
    {
      title: 'Qualitätssicherung',
      description: 'Automatisierte Tests und manuelle Prüfung auf gängigen Geräten und Browsern vor jedem Release.',
    },
    {
      title: 'Launch & Monitoring',
      description: 'Nach dem Livegang behalten wir Performance und Fehlerraten im Blick und reagieren frühzeitig.',
    },
  ],
};

export default ProzessData;
