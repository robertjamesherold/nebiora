import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zur', 'Entwicklung.'],
  items: [
    {
      question: 'Welchen Technologie-Stack verwendet ihr?',
      answer:
        'In der Regel React mit TypeScript im Frontend, ergänzt um passende Backend- und Hosting-Lösungen — abgestimmt auf Umfang und Budget Ihres Projekts.',
    },
    {
      question: 'Übernehmt ihr auch die Wartung nach dem Launch?',
      answer: 'Ja, auf Wunsch betreuen wir Ihre Anwendung dauerhaft — von Updates über Monitoring bis zu neuen Funktionen.',
    },
    {
      question: 'Kann die Website an bestehende Systeme angebunden werden?',
      answer:
        'Wir binden gängige CRM-, ERP- und Zahlungssysteme über Schnittstellen an und prüfen die technische Machbarkeit vorab gemeinsam mit Ihnen.',
    },
    {
      question: 'Wie stellt ihr sicher, dass die Website schnell bleibt?',
      answer:
        'Wir messen Ladezeiten kontinuierlich, optimieren Bilder und Code automatisiert und setzen auf performante Hosting-Infrastruktur.',
    },
  ],
};

export default FAQData;
