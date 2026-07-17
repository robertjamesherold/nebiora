import type { VorteileProps } from './Vorteile.types';

const VorteileData: VorteileProps = {
  category: 'Vorteile',
  heading: ['Warum Sichtbarkeit bei uns', 'strategisch entsteht.'],
  description: 'Vier Gründe, warum Sichtbarkeit bei uns strategisch angegangen wird.',
  benefits: [
    {
      title: 'Technisches Fundament',
      description:
        'Wir beheben strukturelle Schwachstellen, bevor wir über Inhalte sprechen — sonst verpufft jede Content-Arbeit.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3c0 .34-.03.67-.08 1l2.1 1.65-2 3.46-2.48-.9c-.53.42-1.12.76-1.76.98L14.8 21H9.2l-.38-2.81a6.9 6.9 0 0 1-1.76-.98l-2.48.9-2-3.46L4.68 13a6.9 6.9 0 0 1 0-2L2.58 9.35l2-3.46 2.48.9c.53-.42 1.12-.76 1.76-.98L9.2 3h5.6l.38 2.81c.64.22 1.23.56 1.76.98l2.48-.9 2 3.46L19.32 11c.05.33.08.66.08 1Z"
        />
      ),
    },
    {
      title: 'Inhalte mit Substanz',
      description: 'Texte, die echte Fragen Ihrer Zielgruppe beantworten, statt Keywords aneinanderzureihen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0 6 5h-6ZM8 13h8M8 17h5"
        />
      ),
    },
    {
      title: 'Messbare Entwicklung',
      description: 'Wir tracken Sichtbarkeit und Rankings kontinuierlich und passen die Strategie datenbasiert an.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 15l4-4 3 3 5-6" />,
    },
    {
      title: 'Nachhaltige Ergebnisse',
      description: 'Statt kurzfristiger Tricks setzen wir auf Strukturen, die auch nach Algorithmus-Updates tragen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Zm-2 10 2 2 4-4"
        />
      ),
    },
  ],
};

export default VorteileData;
