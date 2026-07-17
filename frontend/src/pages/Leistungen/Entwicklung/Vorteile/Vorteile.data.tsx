import type { VorteileProps } from './Vorteile.types';

const VorteileData: VorteileProps = {
  category: 'Vorteile',
  heading: ['Warum Entwicklung', 'bei uns anders läuft.'],
  description: 'Vier Gründe, warum die technische Umsetzung bei uns in guten Händen ist.',
  benefits: [
    {
      title: 'Moderner Stack',
      description: 'React, TypeScript und aktuelle Werkzeuge sorgen für Code, der wartbar bleibt — auch nach Jahren.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3c0 .34-.03.67-.08 1l2.1 1.65-2 3.46-2.48-.9c-.53.42-1.12.76-1.76.98L14.8 21H9.2l-.38-2.81a6.9 6.9 0 0 1-1.76-.98l-2.48.9-2-3.46L4.68 13a6.9 6.9 0 0 1 0-2L2.58 9.35l2-3.46 2.48.9c.53-.42 1.12-.76 1.76-.98L9.2 3h5.6l.38 2.81c.64.22 1.23.56 1.76.98l2.48-.9 2 3.46L19.32 11c.05.33.08.66.08 1Z"
        />
      ),
    },
    {
      title: 'Performance im Fokus',
      description: 'Schnelle Ladezeiten und gute Core-Web-Vitals-Werte sind bei uns Standard, kein nachträgliches Extra.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
    },
    {
      title: 'Sauber dokumentiert',
      description: 'Jede Komponente ist strukturiert und nachvollziehbar aufgebaut — auch für Teams, die später übernehmen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0 6 5h-6ZM8 13h8M8 17h5"
        />
      ),
    },
    {
      title: 'Skalierbar gebaut',
      description: 'Ihre Anwendung wächst mit Ihrem Unternehmen, ohne bei jedem neuen Feature neu gedacht werden zu müssen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h4V5.5a1.5 1.5 0 1 1 3 0V8h4a1 1 0 0 1 1 1v4h-2.5a1.5 1.5 0 1 0 0 3H16v4a1 1 0 0 1-1 1h-4v-2.5a1.5 1.5 0 1 0-3 0V21H4a1 1 0 0 1-1-1v-4h2.5a1.5 1.5 0 1 0 0-3H3V9a1 1 0 0 1 1-1Z"
        />
      ),
    },
  ],
};

export default VorteileData;
