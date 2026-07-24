import type { LeistungPageData } from '../LeistungPage/LeistungPage.types';

const ECommerceData: LeistungPageData = {
  pageMeta: {
    title: 'E-Commerce',
    description:
      'E-Commerce-Lösungen von Nebiora.studio — Shops, die verkaufen: Produktseiten, Checkout und Zahlungsanbindung ohne Reibung.',
  },
  hero: {
    breadcrumb: [{ label: 'E-Commerce' }],
    eyebrow: 'Leistungen',
    heading: ['Shops, die', 'wirklich verkaufen.'],
    description:
      'Wir gestalten und entwickeln Onlineshops, die vom ersten Klick bis zum Checkout überzeugen — ohne Reibungsverluste, mit Fokus auf Conversion.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
  beschreibung: {
    category: 'E-Commerce',
    heading: ['Vom Produkt zum', 'Kaufabschluss.'],
    paragraphs: [
      'Ein Onlineshop lebt von Details: Wie schnell lädt die Produktseite, wie klar ist der Checkout, wie vertrauenswürdig wirkt die Zahlungsanbindung? Jeder Reibungspunkt kostet Umsatz — deshalb betrachten wir Ihren Shop als System, nicht als Ansammlung einzelner Seiten.',
      'Wir konzipieren Produktseiten, die Kaufentscheidungen erleichtern, und einen Checkout, der ohne unnötige Schritte zum Abschluss führt. Zahlungsanbindung, Versandoptionen und Bestandsführung binden wir passend an Ihre bestehenden Systeme an.',
      'Das Ergebnis ist ein Shop, der auf Mobilgeräten genauso reibungslos funktioniert wie am Desktop — und der mit Ihrem Sortiment mitwächst, statt bei jeder neuen Produktkategorie an Grenzen zu stoßen.',
    ],
  },
  vorteile: {
    category: 'Vorteile',
    heading: ['Warum Onlinehändler', 'bei uns bauen lassen.'],
    description: 'Vier Gründe, warum Onlinehändler ihren Shop bei uns bauen lassen.',
    benefits: [
      {
        title: 'Conversion-optimiert',
        description: 'Produktseiten und Checkout sind konsequent darauf ausgelegt, Besucher zu Käufern zu machen.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        ),
      },
      {
        title: 'Reibungsloser Checkout',
        description: 'Wenige, klare Schritte bis zum Kaufabschluss — auf jedem Gerät.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          />
        ),
      },
      {
        title: 'Sichere Zahlungsanbindung',
        description: 'Etablierte Zahlungsanbieter, sauber integriert und vertrauenswürdig dargestellt.',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Zm-2 10 2 2 4-4"
          />
        ),
      },
      {
        title: 'Skalierbare Struktur',
        description: 'Ihr Shop wächst mit wachsendem Sortiment und steigenden Bestellzahlen mit.',
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
    heading: ['So entsteht Ihr', 'neuer Onlineshop.'],
    steps: [
      {
        title: 'Sortiment & Anforderungen',
        description:
          'Wir klären Produktstruktur, Zahlungs- und Versandanforderungen sowie Anbindungen an bestehende Systeme.',
      },
      {
        title: 'Shop-Konzept & Design',
        description: 'Produktseiten, Kategorien und Checkout werden entlang der Customer Journey gestaltet.',
      },
      {
        title: 'Entwicklung & Anbindung',
        description: 'Umsetzung des Shops inklusive Zahlungs-, Versand- und Bestandsanbindung.',
      },
      {
        title: 'Launch & Optimierung',
        description: 'Nach dem Livegang beobachten wir Conversion-Kennzahlen und optimieren kontinuierlich nach.',
      },
    ],
  },
  technologien: {
    category: 'Technologien',
    heading: ['Werkzeuge für', 'verlässliche Shops.'],
    description: 'Ein Auszug aus dem Werkzeugkasten, mit dem wir Ihren Onlineshop bauen und betreiben.',
    items: [
      'Headless Commerce',
      'Stripe / Zahlungsanbindung',
      'Produktdatenmanagement',
      'React',
      'Cloudflare',
      'Lagerbestandssysteme',
    ],
  },
  faq: {
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
  },
  cta: {
    heading: 'Bereit für einen Shop, der verkauft?',
    description: 'Lassen Sie uns über Ihr Sortiment und Ihre Ziele sprechen.',
    buttons: [{ container: 'link', to: '/studio/kontakt', label: 'Projekt starten', variant: 'primary' }],
  },
};

export default ECommerceData;
