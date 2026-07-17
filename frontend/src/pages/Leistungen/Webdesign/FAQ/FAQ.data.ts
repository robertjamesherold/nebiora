import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zum', 'Webdesign.'],
  items: [
    {
      question: 'Wie lange dauert ein Webdesign-Projekt?',
      answer:
        'Je nach Umfang rechnen wir mit vier bis zehn Wochen von der Analyse bis zum finalen Design. Erste Entwürfe sehen Sie in der Regel innerhalb von zwei Wochen.',
    },
    {
      question: 'Bekomme ich ein individuelles Design oder ein Template?',
      answer:
        'Jede Website wird für Sie entworfen. Wir arbeiten mit einem eigenen Designsystem, aber ohne vorgefertigte Templates — das Ergebnis ist einzigartig für Ihre Marke.',
    },
    {
      question: 'Ist das Design für mobile Geräte optimiert?',
      answer:
        'Ja. Wir gestalten grundsätzlich responsiv und testen jedes Layout auf gängigen Bildschirmgrößen, bevor es in die Entwicklung geht.',
    },
    {
      question: 'Kann ich das Design auch selbst weiterpflegen?',
      answer:
        'Sie erhalten ein dokumentiertes Designsystem, mit dem Sie oder Ihr Team neue Seiten konsistent ergänzen können.',
    },
  ],
};

export default FAQData;
