import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zum', 'E-Commerce.'],
  items: [
    {
      question: 'Welche Zahlungsanbieter bindet ihr an?',
      answer:
        'Wir binden gängige Anbieter wie Stripe sowie branchenübliche Zahlungsarten an, abgestimmt auf Ihre Zielgruppe und Ihr Land.',
    },
    {
      question: 'Kann der Shop an mein bestehendes Warenwirtschaftssystem angebunden werden?',
      answer: 'In der Regel ja. Wir prüfen die Schnittstellen Ihres Systems und binden Bestand und Bestellungen automatisiert an.',
    },
    {
      question: 'Wie lange dauert die Umsetzung eines Onlineshops?',
      answer: 'Je nach Sortimentsgröße und Anbindungen rechnen wir mit sechs bis vierzehn Wochen.',
    },
    {
      question: 'Betreut ihr den Shop auch nach dem Launch?',
      answer: 'Ja, auf Wunsch übernehmen wir laufende Betreuung, Updates und die Weiterentwicklung neuer Funktionen.',
    },
  ],
};

export default FAQData;
