import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zu', 'SEO & Content.'],
  items: [
    {
      question: 'Wie lange dauert es, bis SEO-Maßnahmen wirken?',
      answer:
        'Erste technische Verbesserungen zeigen sich oft innerhalb weniger Wochen, spürbare Ranking-Effekte meist nach zwei bis vier Monaten.',
    },
    {
      question: 'Schreibt ihr auch die Inhalte selbst?',
      answer: 'Ja, wir erarbeiten Themen und Struktur gemeinsam mit Ihnen und übernehmen auf Wunsch auch die Texterstellung.',
    },
    {
      question: 'Ist SEO auch für kleine Unternehmen sinnvoll?',
      answer: 'Gerade lokal und in Nischen lässt sich mit gezielter Optimierung oft mit überschaubarem Aufwand viel erreichen.',
    },
    {
      question: 'Wie messt ihr den Erfolg der Maßnahmen?',
      answer:
        'Über Sichtbarkeitsindex, organischen Traffic und relevante Rankings — regelmäßig dokumentiert und nachvollziehbar aufbereitet.',
    },
  ],
};

export default FAQData;
