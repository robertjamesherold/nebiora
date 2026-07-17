import VisionCoreHero from '@assets/projects/visioncore_hero.png';

import type { Project } from './projects.types';

const ProjectsData: Project[] = [
  {
    slug: 'aurora-living',
    name: 'Aurora Living',
    category: 'Interior & E-Commerce',
    gradient: 'from-brand-500 via-accent-500 to-aurora-600',
    image: 'https://picsum.photos/seed/aurora-living/1200/1400',
    client: 'Aurora Living GmbH',
    industry: 'Interior Design & Möbelhandel',
    timeframe: '10 Wochen · 2025',
    services: ['Webdesign', 'Entwicklung', 'E-Commerce'],
    challenge:
      'Aurora Living verkaufte hochwertige Möbelstücke ausschließlich über einen Showroom und einzelne Marktplätze. Ein eigener Online-Shop fehlte — ebenso ein visueller Auftritt, der die Qualität der Produkte tatsächlich widerspiegelt.',
    solution:
      'Wir haben einen eigenständigen Onlineshop konzipiert und umgesetzt: großformatige Produktfotografie-Layouts, ein reduziertes Interface, das den Möbeln Raum lässt, und ein Checkout, der auf hochpreisige Einzelanfertigungen zugeschnitten ist.',
    designProcess:
      'Ausgehend von Moodboards aus dem bestehenden Showroom entstand ein modulares Raster, das sich für Produktdetailseiten, Kollektionsseiten und redaktionelle Inhalte gleichermaßen eignet — abgestimmt in drei kompakten Feedbackrunden.',
    development:
      'Umsetzung als performante React-Anwendung mit serverseitig generierten Produktseiten für schnelle Ladezeiten und gute Auffindbarkeit, angebunden an ein headless Shop-Backend für Bestand und Bestellabwicklung.',
    results: [
      { label: 'mehr Online-Anfragen', value: '+64 %' },
      { label: 'Conversion-Rate', value: '2,4×' },
      { label: 'Ladezeit (LCP)', value: '−41 %' },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/aurora-living-1/1200/900', alt: 'Startseite von Aurora Living mit großformatiger Produktfotografie' },
      { src: 'https://picsum.photos/seed/aurora-living-2/1200/900', alt: 'Produktdetailseite mit Materialauswahl' },
      { src: 'https://picsum.photos/seed/aurora-living-3/1200/900', alt: 'Kollektionsübersicht im Rasterlayout' },
      { src: 'https://picsum.photos/seed/aurora-living-4/1200/900', alt: 'Mobile Ansicht des Checkout-Prozesses' },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Headless Commerce', 'Cloudflare'],
    testimonial: {
      quote:
        'Der neue Shop fühlt sich an wie unser Showroom — nur, dass er nie schließt. Die Zusammenarbeit war unkompliziert und das Ergebnis hat unsere Erwartungen übertroffen.',
      author: 'Lena Brandt',
      role: 'Gründerin',
      company: 'Aurora Living',
    },
  },
  {
    slug: 'fintra-capital',
    name: 'Fintra Capital',
    category: 'Corporate Website',
    gradient: 'from-aurora-600 via-brand-600 to-brand-900',
    image: VisionCoreHero,
    client: 'Fintra Capital AG',
    industry: 'Finanzdienstleistungen & Vermögensverwaltung',
    timeframe: '8 Wochen · 2025',
    services: ['Webdesign', 'Entwicklung', 'Branding'],
    challenge:
      'Als Vermögensverwalter mit institutionellen Kunden musste Fintra Capital Seriosität und technische Kompetenz gleichermaßen vermitteln — der bisherige Auftritt wirkte veraltet und schuf Distanz statt Vertrauen.',
    solution:
      'Ein zurückhaltender, präziser Corporate-Auftritt mit klarer Informationsarchitektur: Leistungen, Track Record und Team stehen im Vordergrund, unterstützt durch ein dezentes Bewegungsdesign, das Seriosität nicht durch Zurückhaltung, sondern durch Präzision ausdrückt.',
    designProcess:
      'Gemeinsam mit dem Vorstand wurde ein Typografie- und Farbsystem entwickelt, das sich von austauschbaren Finanz-Templates abhebt, ohne unseriös zu wirken — validiert über Klickdummies mit echten Bestandskunden.',
    development:
      'Statisch generierte Seiten für maximale Ladegeschwindigkeit und Suchmaschinen-Sichtbarkeit, mit einem angebundenen CMS, über das das Investor-Relations-Team Berichte und News eigenständig veröffentlicht.',
    results: [
      { label: 'mehr qualifizierte Anfragen', value: '+48 %' },
      { label: 'Verweildauer', value: '+2,1×' },
      { label: 'Absprungrate', value: '−29 %' },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/fintra-capital-1/1200/900', alt: 'Startseite von Fintra Capital' },
      { src: 'https://picsum.photos/seed/fintra-capital-2/1200/900', alt: 'Leistungsübersicht mit Kennzahlen' },
      { src: 'https://picsum.photos/seed/fintra-capital-3/1200/900', alt: 'Team- und Über-uns-Seite' },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Headless CMS', 'Cloudflare'],
    testimonial: {
      quote:
        'Nebiora.studio hat verstanden, dass Vertrauen im Detail entsteht. Der neue Auftritt spiegelt endlich wider, wie wir tatsächlich arbeiten.',
      author: 'Markus Feldmann',
      role: 'Vorstand',
      company: 'Fintra Capital AG',
    },
  },
  {
    slug: 'lumen-coffee',
    name: 'Lumen Coffee',
    category: 'Branding & Shop',
    gradient: 'from-accent-500 via-brand-500 to-aurora-500',
    image: 'https://picsum.photos/seed/lumen-coffee/1200/1400',
    client: 'Lumen Coffee Roasters',
    industry: 'Kaffeerösterei & Gastronomie',
    timeframe: '6 Wochen · 2024',
    services: ['Branding', 'Webdesign', 'E-Commerce'],
    challenge:
      'Eine junge Rösterei mit ausgezeichnetem Produkt, aber ohne einheitlichen Markenauftritt — Verpackung, Social Media und die alte Website erzählten drei unterschiedliche Geschichten.',
    solution:
      'Wir haben eine kohärente Markenidentität entwickelt — von Wortmarke über Verpackungssystem bis zum Onlineshop — und daraus eine Website gebaut, die Herkunft, Röstprofil und Abo-Modell jeder Kaffeesorte klar erzählt.',
    designProcess:
      'Ausgangspunkt war ein Markenworkshop vor Ort in der Rösterei: Herkunftsgeschichten, Röstprotokolle und Verkostungsnotizen wurden zur Grundlage für Ton, Farbwelt und Fotografie-Richtlinien.',
    development:
      'Schlanker Onlineshop mit Abonnement-Funktion für wiederkehrende Bestellungen, integriert in ein leichtgewichtiges Bestandssystem, das mit dem Rösttempo der kleinen Manufaktur mithält.',
    results: [
      { label: 'wiederkehrende Abo-Kunden', value: '+120 %' },
      { label: 'durchschnittlicher Bestellwert', value: '+35 %' },
      { label: 'Markenwiedererkennung', value: '+3×' },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/lumen-coffee-1/1200/900', alt: 'Verpackungsdesign der Lumen-Coffee-Produktlinie' },
      { src: 'https://picsum.photos/seed/lumen-coffee-2/1200/900', alt: 'Onlineshop mit Röstprofil-Beschreibung' },
      { src: 'https://picsum.photos/seed/lumen-coffee-3/1200/900', alt: 'Abo-Auswahl im Checkout' },
      { src: 'https://picsum.photos/seed/lumen-coffee-4/1200/900', alt: 'Markenauftritt auf Social Media' },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Headless Commerce'],
    testimonial: {
      quote:
        'Zum ersten Mal sieht unsere Marke online genauso aus, wie sie sich in der Rösterei anfühlt. Das Abo-Geschäft ist seitdem unser wichtigstes Standbein.',
      author: 'Jonas Reiter',
      role: 'Mitgründer & Röstmeister',
      company: 'Lumen Coffee Roasters',
    },
  },
  {
    slug: 'vantage-health',
    name: 'Vantage Health',
    category: 'Web-App & Portal',
    gradient: 'from-brand-700 via-accent-600 to-brand-400',
    image: 'https://picsum.photos/seed/vantage-health/1200/1400',
    client: 'Vantage Health GmbH',
    industry: 'Gesundheitswesen & Digital Health',
    timeframe: '14 Wochen · 2025',
    services: ['Entwicklung', 'Webdesign'],
    challenge:
      'Vantage Health verwaltete Patiententermine, Befunde und Praxiskommunikation über drei getrennte Systeme — für Patient:innen und Praxisteam gleichermaßen unübersichtlich und fehleranfällig.',
    solution:
      'Ein zentrales Patientenportal mit klar getrennten Bereichen für Terminverwaltung, Befundeinsicht und Nachrichten — barrierearm gestaltet, damit auch weniger technikaffine Patient:innen sich sicher zurechtfinden.',
    designProcess:
      'Nutzertests mit echten Patient:innen unterschiedlichen Alters flossen in drei Iterationsrunden direkt in die Informationsarchitektur ein, bevor eine Zeile Produktions-Code geschrieben wurde.',
    development:
      'Eine sicherheitsorientierte Web-App mit rollenbasierten Zugriffsrechten, Zwei-Faktor-Anmeldung und verschlüsselter Dokumentenablage, angebunden an das bestehende Praxisverwaltungssystem über eine dedizierte Schnittstelle.',
    results: [
      { label: 'weniger Terminausfälle', value: '−32 %' },
      { label: 'Support-Anfragen', value: '−45 %' },
      { label: 'aktive Patient:innen im Portal', value: '+2.800' },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/vantage-health-1/1200/900', alt: 'Dashboard des Vantage-Health-Patientenportals' },
      { src: 'https://picsum.photos/seed/vantage-health-2/1200/900', alt: 'Terminbuchung im Patientenportal' },
      { src: 'https://picsum.photos/seed/vantage-health-3/1200/900', alt: 'Befundeinsicht mit verschlüsselter Ablage' },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'REST-Schnittstellen'],
    testimonial: {
      quote:
        'Unsere Patient:innen finden sich vom ersten Tag an zurecht, und unser Team verbringt deutlich weniger Zeit am Telefon. Genau das haben wir gebraucht.',
      author: 'Dr. Sabine Krüger',
      role: 'Ärztliche Leitung',
      company: 'Vantage Health',
    },
  },
];

export default ProjectsData;
