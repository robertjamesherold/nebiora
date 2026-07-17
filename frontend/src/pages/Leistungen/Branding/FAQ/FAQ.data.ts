import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zum', 'Branding.'],
  items: [
    {
      question: 'Brauche ich schon ein Logo, bevor wir starten?',
      answer:
        'Nein. Wir entwickeln Ihre Markenidentität von Grund auf — inklusive Logo, falls noch keines existiert, oder als Weiterentwicklung eines bestehenden.',
    },
    {
      question: 'Was ist in einem Brand-Guide enthalten?',
      answer:
        'Regeln zu Logo-Nutzung, Farbwelt, Typografie, Bildsprache und Tonalität — alles, was Sie und externe Partner für einen konsistenten Auftritt brauchen.',
    },
    {
      question: 'Wie lange dauert ein Branding-Projekt?',
      answer: 'Je nach Umfang zwischen vier und acht Wochen, von der Positionierung bis zum finalen Guide.',
    },
    {
      question: 'Entwickelt ihr auch die Website im gleichen Zug?',
      answer:
        'Ja, das ist eine häufige Kombination. So stellen wir sicher, dass Markenidentität und digitaler Auftritt von Anfang an zusammenpassen.',
    },
  ],
};

export default FAQData;
