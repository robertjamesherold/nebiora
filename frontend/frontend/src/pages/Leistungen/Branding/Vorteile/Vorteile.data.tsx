import type { VorteileProps } from './Vorteile.types';

const VorteileData: VorteileProps = {
  category: 'Vorteile',
  heading: ['Warum Branding', 'bei uns anders wirkt.'],
  description: 'Vier Gründe, warum Unternehmen ihre Markenidentität bei uns entwickeln lassen.',
  benefits: [
    {
      title: 'Klare Positionierung',
      description: 'Wir arbeiten Ihre Alleinstellung heraus, bevor wir gestalten — Design folgt Strategie, nicht umgekehrt.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5Z"
        />
      ),
    },
    {
      title: 'Konsistentes System',
      description: 'Farbe, Typografie und Bildsprache greifen ineinander und funktionieren über alle Kanäle hinweg.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Zm-5 8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3-4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm5 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm3 4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"
        />
      ),
    },
    {
      title: 'Dokumentierte Guidelines',
      description: 'Ein Brand-Guide, mit dem Ihr Team und externe Partner die Marke eigenständig korrekt anwenden.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0 6 5h-6ZM8 13h8M8 17h5"
        />
      ),
    },
    {
      title: 'Langfristig tragfähig',
      description: 'Wir gestalten Marken, die auch nach Jahren noch stimmig wirken — statt kurzlebiger Trends zu folgen.',
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
