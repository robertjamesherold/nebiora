import type { VorteileProps } from './Vorteile.types';

const VorteileData: VorteileProps = {
  category: 'Vorteile',
  heading: ['Warum sich Webdesign', 'bei uns auszahlt.'],
  description: 'Vier Gründe, warum Unternehmen ihr Webdesign bei Nebiora.studio in Auftrag geben.',
  benefits: [
    {
      title: 'Nutzerzentriert',
      description:
        'Jede Seite entsteht entlang der Fragen, die Ihre Besucher tatsächlich haben — nicht entlang interner Vorlieben.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      ),
    },
    {
      title: 'Vollständig responsiv',
      description: 'Ein Layout, das sich Smartphone, Tablet und Desktop anpasst, ohne an Klarheit zu verlieren.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm5 15h6M12 16v4"
        />
      ),
    },
    {
      title: 'Markenstarke Gestaltung',
      description:
        'Typografie, Farbwelt und Bildsprache, die konsequent auf Ihre Marke einzahlen — kein Baukasten-Look.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Zm-5 8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3-4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm5 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3 4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"
        />
      ),
    },
    {
      title: 'Auf Conversion ausgelegt',
      description: 'Klare Handlungsaufforderungen und durchdachte Nutzerführung, die Besucher zu Kunden machen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      ),
    },
  ],
};

export default VorteileData;
