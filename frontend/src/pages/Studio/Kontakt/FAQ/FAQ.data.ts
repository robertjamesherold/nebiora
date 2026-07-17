import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'Häufige Fragen',
  heading: 'Fragen zur Zusammenarbeit',
  description: 'Die wichtigsten Antworten vorab — für alles andere sind wir nur eine Nachricht entfernt.',
  items: [
    {
      question: 'Wie läuft ein Projekt mit Nebiora.studio typischerweise ab?',
      answer:
        'Nach einem kostenlosen Erstgespräch erstellen wir ein klares Angebot mit Zeitplan. Es folgt eine kurze Konzeptphase, danach Design und Entwicklung in engem Austausch mit Ihnen — meist liefern wir erste Entwürfe innerhalb von zwei Wochen.',
    },
    {
      question: 'Wie berechnen Sie Ihre Preise?',
      answer:
        'Wir arbeiten projektbasiert mit Festpreisen, nicht nach Stundensatz. Nach dem Erstgespräch erhalten Sie ein transparentes Angebot, das den vollen Leistungsumfang abdeckt — ohne versteckte Kosten.',
    },
    {
      question: 'Arbeiten Sie auch remote bzw. mit Kund:innen außerhalb meiner Stadt?',
      answer:
        'Ja, wir sind ein remote-first Studio und betreuen Kund:innen im gesamten deutschsprachigen Raum. Abstimmungen laufen über Video-Calls, geteilte Boards und regelmäßige Updates — genauso verbindlich wie vor Ort.',
    },
    {
      question: 'Was sollte ich vor dem ersten Kontakt vorbereiten?',
      answer:
        'Am hilfreichsten sind ein grober Rahmen zu Ziel, Zeitplan und Budget sowie Beispiele von Websites oder Marken, die Ihnen gefallen. Ein fertiges Konzept brauchen Sie nicht — das erarbeiten wir gemeinsam.',
    },
  ],
};

export default FAQData;
