import type { VorteileProps } from './Vorteile.types';

const VorteileData: VorteileProps = {
  category: 'Vorteile',
  heading: ['Warum Onlinehändler', 'bei uns bauen lassen.'],
  description: 'Vier Gründe, warum Onlinehändler ihren Shop bei uns bauen lassen.',
  benefits: [
    {
      title: 'Conversion-optimiert',
      description: 'Produktseiten und Checkout sind konsequent darauf ausgelegt, Besucher zu Käufern zu machen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      ),
    },
    {
      title: 'Reibungsloser Checkout',
      description: 'Wenige, klare Schritte bis zum Kaufabschluss — auf jedem Gerät.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
      ),
    },
    {
      title: 'Sichere Zahlungsanbindung',
      description: 'Etablierte Zahlungsanbieter, sauber integriert und vertrauenswürdig dargestellt.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Zm-2 10 2 2 4-4"
        />
      ),
    },
    {
      title: 'Skalierbare Struktur',
      description: 'Ihr Shop wächst mit wachsendem Sortiment und steigenden Bestellzahlen mit.',
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
