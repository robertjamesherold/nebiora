import type { LeistungPageData } from '../LeistungPage/LeistungPage.types';

const EntwicklungData: LeistungPageData = {
  pageMeta: {
    title: 'Entwicklung',
    description:
      'Schnelle, wartbare Websites und Web-Apps von Nebiora.studio — moderner Stack, sauberer Code, performante Ergebnisse.',
  },
  hero: {
    breadcrumb: [{ label: 'Entwicklung' }],
    eyebrow: 'Leistungen',
    heading: ['Entwicklung, die', 'hält, was sie verspricht.'],
    description:
      'Wir setzen Design in sauberen, performanten Code um — mit einem modernen Stack, der schnell lädt, zuverlässig läuft und sich mit Ihrem Unternehmen weiterentwickeln lässt.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
  beschreibung: {
    category: 'Entwicklung',
    heading: ['Code, der mitwächst,', 'statt zu bremsen.'],
    paragraphs: [
      'Eine Website ist nur so gut wie der Code, der sie trägt. Wir setzen auf einen modernen, typsicheren Stack, der von Anfang an auf Performance, Wartbarkeit und Skalierbarkeit ausgelegt ist — nicht auf schnelle Zwischenlösungen, die später teuer werden.',
      'Ob Landingpage, Unternehmenswebsite oder komplexes Web-Portal mit eigenem Login-Bereich: Wir wählen die technische Architektur passend zur Aufgabe und dokumentieren jede Entscheidung, damit Ihr Projekt nachvollziehbar bleibt.',
      'Nach dem Launch endet unsere Verantwortung nicht. Wir überwachen Performance und Stabilität und sorgen dafür, dass Ihre Anwendung auch bei wachsendem Traffic zuverlässig bleibt.',
    ],
  },
  vorteile: {
    category: 'Vorteile',
    heading: ['Warum Entwicklung', 'bei uns anders läuft.'],
    description: 'Vier Gründe, warum die technische Umsetzung bei uns in guten Händen ist.',
    benefits: [
      {
        title: 'Moderner Stack',
        description:
          'React, TypeScript und aktuelle Werkzeuge sorgen für Code, der wartbar bleibt — auch nach Jahren.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3c0 .34-.03.67-.08 1l2.1 1.65-2 3.46-2.48-.9c-.53.42-1.12.76-1.76.98L14.8 21H9.2l-.38-2.81a6.9 6.9 0 0 1-1.76-.98l-2.48.9-2-3.46L4.68 13a6.9 6.9 0 0 1 0-2L2.58 9.35l2-3.46 2.48.9c.53-.42 1.12-.76 1.76-.98L9.2 3h5.6l.38 2.81c.64.22 1.23.56 1.76.98l2.48-.9 2 3.46L19.32 11c.05.33.08.66.08 1Z"
          />
        ),
      },
      {
        title: 'Performance im Fokus',
        description:
          'Schnelle Ladezeiten und gute Core-Web-Vitals-Werte sind bei uns Standard, kein nachträgliches Extra.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
      },
      {
        title: 'Sauber dokumentiert',
        description:
          'Jede Komponente ist strukturiert und nachvollziehbar aufgebaut — auch für Teams, die später übernehmen.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0 6 5h-6ZM8 13h8M8 17h5"
          />
        ),
      },
      {
        title: 'Skalierbar gebaut',
        description:
          'Ihre Anwendung wächst mit Ihrem Unternehmen, ohne bei jedem neuen Feature neu gedacht werden zu müssen.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8h4V5.5a1.5 1.5 0 1 1 3 0V8h4a1 1 0 0 1 1 1v4h-2.5a1.5 1.5 0 1 0 0 3H16v4a1 1 0 0 1-1 1h-4v-2.5a1.5 1.5 0 1 0-3 0V21H4a1 1 0 0 1-1-1v-4h2.5a1.5 1.5 0 1 0 0-3H3V9a1 1 0 0 1 1-1Z"
          />
        ),
      },
    ],
  },
  prozess: {
    category: 'Prozess',
    heading: ['So entsteht Ihre', 'technische Umsetzung.'],
    steps: [
      {
        title: 'Technisches Konzept',
        description:
          'Wir definieren Architektur, Datenmodell und Schnittstellen passend zu den Anforderungen Ihres Projekts.',
      },
      {
        title: 'Umsetzung in Sprints',
        description: 'Entwicklung in kurzen, nachvollziehbaren Etappen mit regelmäßigen Zwischenständen zum Testen.',
      },
      {
        title: 'Qualitätssicherung',
        description: 'Automatisierte Tests und manuelle Prüfung auf gängigen Geräten und Browsern vor jedem Release.',
      },
      {
        title: 'Launch & Monitoring',
        description: 'Nach dem Livegang behalten wir Performance und Fehlerraten im Blick und reagieren frühzeitig.',
      },
    ],
  },
  technologien: {
    category: 'Technologien',
    heading: ['Werkzeuge für', 'stabile Software.'],
    description: 'Ein Auszug aus dem Stack, mit dem wir Ihre Anwendung bauen und betreiben.',
    items: [
      'React',
      'TypeScript',
      'Node.js',
      'Cloudflare Workers',
      'REST- & GraphQL-APIs',
      'PostgreSQL',
      'Vitest',
      'CI/CD',
    ],
  },
  faq: {
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
        answer:
          'Ja, auf Wunsch betreuen wir Ihre Anwendung dauerhaft — von Updates über Monitoring bis zu neuen Funktionen.',
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
  },
  cta: {
    heading: 'Bereit, Ihr Projekt \ntechnisch sauber umzusetzen?',
    description: 'Sprechen wir über Anforderungen, Zeitrahmen und den passenden technischen Ansatz.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
};

export default EntwicklungData;
