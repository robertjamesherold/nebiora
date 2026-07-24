import type { LeistungPageData } from '../LeistungPage/LeistungPage.types';

const WebdesignData: LeistungPageData = {
  pageMeta: {
    title: 'Webdesign',
    description:
      'Individuelles Webdesign von Nebiora.studio — responsiv, markenstark und auf Conversion ausgelegt. Von der ersten Skizze bis zum fertigen Interface.',
  },
  hero: {
    breadcrumb: [{ label: 'Webdesign' }],
    eyebrow: 'Leistungen',
    heading: ['Webdesign, das', 'Ihre Marke trägt.'],
    description:
      'Wir gestalten Websites, die nicht nur gut aussehen, sondern verstanden werden — klar strukturiert, responsiv auf jedem Gerät und konsequent auf Ihre Ziele ausgerichtet.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
  beschreibung: {
    category: 'Webdesign',
    heading: ['Design, das Entscheidungen', 'einfacher macht.'],
    paragraphs: [
      'Gutes Webdesign ist kein Selbstzweck. Jede Fläche, jede Schriftgröße und jeder Abstand auf Ihrer Website hat eine Aufgabe: Vertrauen aufbauen, Orientierung geben und zur nächsten Handlung führen. Bei Nebiora.studio beginnt jedes Projekt deshalb nicht am Bildschirm, sondern mit einer klaren Frage — was soll Ihre Website für Sie leisten?',
      'Aus dieser Antwort entsteht eine Informationsarchitektur, die zu Ihrem Angebot passt, und darauf aufbauend ein visuelles System aus Typografie, Farbe und Bildsprache, das konsequent Ihre Marke trägt — statt austauschbarer Vorlagen zu folgen.',
      'Das Ergebnis ist eine Website, die auf dem Smartphone genauso überzeugt wie auf dem großen Bildschirm — schnell, barrierearm und so gebaut, dass sie auch in zwei Jahren noch aktuell wirkt.',
    ],
  },
  vorteile: {
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
  },
  prozess: {
    category: 'Prozess',
    heading: ['So entsteht Ihr', 'neues Webdesign.'],
    steps: [
      {
        title: 'Kickoff & Analyse',
        description:
          'Wir klären Ziele, Zielgruppe und Wettbewerb und legen gemeinsam den Rahmen für das Projekt fest.',
      },
      {
        title: 'Konzept & Wireframes',
        description:
          'Aus der Analyse entsteht eine Informationsarchitektur und ein Seitenaufbau, den wir vor der Gestaltung gemeinsam abstimmen.',
      },
      {
        title: 'Design & Prototyping',
        description:
          'Wir gestalten alle Schlüsselseiten im Detail und machen das Ergebnis in einem klickbaren Prototyp erlebbar.',
      },
      {
        title: 'Übergabe & Launch',
        description:
          'Nach finaler Abstimmung übergeben wir das Design in die Entwicklung und begleiten den Launch bis zum Livegang.',
      },
    ],
  },
  technologien: {
    category: 'Technologien',
    heading: ['Werkzeuge für', 'präzises Webdesign.'],
    description: 'Ein Auszug aus dem Werkzeugkasten, mit dem wir Ihr Design gestalten und umsetzen.',
    items: ['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Storybook'],
  },
  faq: {
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
  },
  cta: {
    heading: 'Bereit für einen Auftritt, \nder zu Ihnen passt?',
    description: 'Lassen Sie uns über Ihr Projekt sprechen — unverbindlich und ohne Verkaufsdruck.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
};

export default WebdesignData;
