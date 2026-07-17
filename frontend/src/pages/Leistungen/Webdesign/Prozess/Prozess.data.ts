import type { ProzessProps } from './Prozess.types';

const ProzessData: ProzessProps = {
  category: 'Prozess',
  heading: ['So entsteht Ihr', 'neues Webdesign.'],
  steps: [
    {
      title: 'Kickoff & Analyse',
      description: 'Wir klären Ziele, Zielgruppe und Wettbewerb und legen gemeinsam den Rahmen für das Projekt fest.',
    },
    {
      title: 'Konzept & Wireframes',
      description:
        'Aus der Analyse entsteht eine Informationsarchitektur und ein Seitenaufbau, den wir vor der Gestaltung gemeinsam abstimmen.',
    },
    {
      title: 'Design & Prototyping',
      description:
        'Wir gestalten alle Schlüsselseiten im Detail und machen das Ergebnis in einem klickbaren Prototyp erlebbar.',
    },
    {
      title: 'Übergabe & Launch',
      description:
        'Nach finaler Abstimmung übergeben wir das Design in die Entwicklung und begleiten den Launch bis zum Livegang.',
    },
  ],
};

export default ProzessData;
