import type { FAQProps } from './FAQ.types';

const FAQData: FAQProps = {
  category: 'FAQ',
  heading: ['Häufige Fragen zu', 'unseren Paketen.'],
  items: [
    {
      question: 'Warum sind auf dieser Seite keine Preise angegeben?',
      answer:
        'Jedes Projekt unterscheidet sich in Umfang, Funktionsumfang und Anforderungen — ein pauschaler Preis würde diesen Unterschieden nicht gerecht. Nach einem kurzen Gespräch über Ihr Vorhaben erstellen wir Ihnen ein individuelles Angebot, das genau zu Ihrem Bedarf passt.',
    },
    {
      question: 'Wie lange dauert die Umsetzung eines Pakets?',
      answer:
        'Die Dauer hängt vom gewählten Paket und dessen Umfang ab. Ein One-Pager ist in der Regel schneller umgesetzt als ein Online-Shop oder ein umfangreicher Relaunch. Den genauen Zeitrahmen legen wir gemeinsam im Angebot fest.',
    },
    {
      question: 'Was ist in einem Angebot auf Anfrage enthalten?',
      answer:
        'Ihr Angebot umfasst den vollständigen Leistungsumfang des gewählten Pakets, einen konkreten Zeitplan sowie den Festpreis für das Projekt — verständlich aufgeschlüsselt und ohne versteckte Kosten.',
    },
    {
      question: 'Lassen sich die Pakete kombinieren oder anpassen?',
      answer:
        'Ja. Die Pakete bilden einen Ausgangspunkt und lassen sich um zusätzliche Leistungen erweitern oder untereinander kombinieren, etwa Branding mit einem Online-Shop. Wir passen den Zuschnitt an Ihr konkretes Vorhaben an.',
    },
    {
      question: 'Wie sind die Zahlungsmodalitäten geregelt?',
      answer:
        'Üblich ist eine Anzahlung zu Projektbeginn und eine oder mehrere weitere Raten entlang vereinbarter Meilensteine. Die genaue Regelung legen wir im Angebot gemeinsam mit Ihnen fest.',
    },
  ],
};

export default FAQData;
