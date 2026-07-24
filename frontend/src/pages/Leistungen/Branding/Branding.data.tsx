import type { LeistungPageData } from '../LeistungPage/LeistungPage.types';

const BrandingData: LeistungPageData = {
  pageMeta: {
    title: 'Branding',
    description:
      'Markenidentität von Nebiora.studio — Logo, Farbwelt, Typografie und Sprache für einen konsistenten Auftritt über alle Kanäle.',
  },
  hero: {
    breadcrumb: [{ label: 'Branding' }],
    eyebrow: 'Leistungen',
    heading: ['Branding mit', 'klarer Haltung.'],
    description:
      'Wir entwickeln Markenidentitäten, die sich merken lassen — von Logo und Farbwelt bis zu Sprache und Bildsprache, konsistent über jeden Berührungspunkt hinweg.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
  beschreibung: {
    category: 'Branding',
    heading: ['Eine Marke, die sich', 'überall wiedererkennt.'],
    paragraphs: [
      'Eine starke Marke ist mehr als ein Logo. Sie ist die Summe aus Farbe, Form, Typografie, Ton und Wiedererkennbarkeit — auf der Website genauso wie auf der Rechnung oder der Visitenkarte. Bei Nebiora.studio entwickeln wir Markenidentitäten, die aus einem konsistenten System heraus entstehen.',
      'Wir beginnen mit Ihrer Positionierung: Wofür steht Ihr Unternehmen, und wie soll es wahrgenommen werden? Daraus entwickeln wir Wortmarke, Farbpalette, Typografie und visuelle Prinzipien, die sich auf jedem Kanal konsistent anwenden lassen.',
      'Am Ende steht kein loses Logo-Paket, sondern ein dokumentiertes Markensystem — nachvollziehbar für Ihr Team und jede Agentur, mit der Sie künftig zusammenarbeiten.',
    ],
  },
  vorteile: {
    category: 'Vorteile',
    heading: ['Warum Branding', 'bei uns anders wirkt.'],
    description: 'Vier Gründe, warum Unternehmen ihre Markenidentität bei uns entwickeln lassen.',
    benefits: [
      {
        title: 'Klare Positionierung',
        description:
          'Wir arbeiten Ihre Alleinstellung heraus, bevor wir gestalten — Design folgt Strategie, nicht umgekehrt.',
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
  },
  prozess: {
    category: 'Prozess',
    heading: ['So entsteht Ihre', 'Markenidentität.'],
    steps: [
      {
        title: 'Positionierung & Workshop',
        description: 'Gemeinsam erarbeiten wir Werte, Zielgruppe und die Kernaussage Ihrer Marke.',
      },
      {
        title: 'Naming & Moodboard',
        description: 'Erste visuelle Richtungen entstehen, mit denen wir Ton und Stil gemeinsam eingrenzen.',
      },
      {
        title: 'Logo & Designsystem',
        description: 'Wortmarke, Farbpalette und Typografie werden final ausgearbeitet und aufeinander abgestimmt.',
      },
      {
        title: 'Guidelines & Rollout',
        description: 'Wir dokumentieren alle Regeln im Brand-Guide und begleiten die Einführung auf Ihren Kanälen.',
      },
    ],
  },
  technologien: {
    category: 'Technologien',
    heading: ['Werkzeuge für', 'starke Markenarbeit.'],
    description: 'Ein Auszug aus dem Werkzeugkasten, mit dem wir Ihre Markenidentität entwickeln.',
    items: [
      'Adobe Illustrator',
      'Figma',
      'Adobe Photoshop',
      'Brand Guidelines',
      'Typografie-Systeme',
      'Farbsysteme',
      'Bildsprachkonzepte',
    ],
  },
  faq: {
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
  },
  cta: {
    heading: 'Bereit für eine Marke mit Wiedererkennungswert?',
    description: 'Lassen Sie uns gemeinsam herausarbeiten, wofür Ihr Unternehmen stehen soll.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
};

export default BrandingData;
