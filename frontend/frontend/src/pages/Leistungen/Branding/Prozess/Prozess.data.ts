import type { ProzessProps } from './Prozess.types';

const ProzessData: ProzessProps = {
  category: 'Prozess',
  heading: ['So entsteht Ihre', 'Markenidentität.'],
  steps: [
    {
      title: 'Positionierung & Workshop',
      description: 'Gemeinsam erarbeiten wir Werte, Zielgruppe und die Kernaussage Ihrer Marke.',
    },
    {
      title: 'Naming & Moodboard',
      description: 'Erste visuelle Richtungen entstehen, mit denen wir Ton und Stil gemeinsam eingrenzen.',
    },
    {
      title: 'Logo & Designsystem',
      description: 'Wortmarke, Farbpalette und Typografie werden final ausgearbeitet und aufeinander abgestimmt.',
    },
    {
      title: 'Guidelines & Rollout',
      description: 'Wir dokumentieren alle Regeln im Brand-Guide und begleiten die Einführung auf Ihren Kanälen.',
    },
  ],
};

export default ProzessData;
