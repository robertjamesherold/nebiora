import Icons from '@icons';

import type { PaketeProps } from './Pakete.types';

const PaketeData: PaketeProps = {
  category: 'Pakete',
  heading: ['Das passende Paket', 'für Ihr Vorhaben.'],
  description:
    'Jedes Paket deckt einen klar umrissenen Leistungsumfang ab und lässt sich an Ihre Anforderungen anpassen. Den genauen Preis erhalten Sie im persönlichen Angebot.',
  packages: [
    {
      name: 'One-Pager',
      tagline: 'Eine Seite, klare Wirkung',
      description:
        'Eine einzelne, durchgängig scrollende Seite für kleine Unternehmen, Selbstständige oder ein persönliches Angebot. Kompakt, schnell umgesetzt und auf eine klare Botschaft fokussiert.',
      icon: <Icons.FileText size="sm" />,
      features: [
        'Responsives Einseiten-Layout',
        'Klare Sektionen mit Handlungsaufforderung',
        'Kontaktformular integriert',
        'Suchmaschinenoptimierte Grundstruktur',
        'Schnelle Umsetzung',
      ],
      highlighted: false,
    },
    {
      name: 'Website',
      tagline: 'Ihr vollständiger digitaler Auftritt',
      description:
        'Ein mehrseitiger Webauftritt mit individueller Informationsarchitektur, klaren Unterseiten für Ihre Leistungen und einer Struktur, die mit Ihrem Unternehmen mitwächst.',
      icon: <Icons.Layout size="sm" />,
      features: [
        'Individuelle Seitenstruktur',
        'Responsives Design für alle Geräte',
        'Content-Management-System',
        'Suchmaschinenoptimierung',
        'Kontakt- und Terminformulare',
        'Mehrsprachigkeit optional',
      ],
      highlighted: false,
    },
    {
      name: 'Website-Relaunch',
      tagline: 'Neuer Auftritt auf bestehender Basis',
      description:
        'Überarbeitung einer bestehenden Website in Design, Struktur und Technik. Wir übernehmen bewährte Inhalte, verbessern Nutzerführung und Performance und geben Ihrem Auftritt ein zeitgemäßes Erscheinungsbild.',
      icon: <Icons.RefreshCw size="sm" />,
      features: [
        'Analyse der bestehenden Website',
        'Überarbeitetes Design und Struktur',
        'Content-Migration',
        'Verbesserte Ladezeiten',
        'SEO-Bereinigung',
      ],
      highlighted: false,
    },
    {
      name: 'Online-Shop',
      tagline: 'E-Commerce für Ihre Produkte',
      description:
        'Ein vollständiger Online-Shop für den Verkauf Ihrer Produkte, inklusive Produktverwaltung, Zahlungsanbindung und Versandprozess. Aufgebaut für ein reibungsloses Einkaufserlebnis.',
      icon: <Icons.ShoppingCart size="sm" />,
      features: [
        'Produktkatalog und Kategorien',
        'Zahlungsanbindung',
        'Warenkorb und Checkout',
        'Bestell- und Lagerverwaltung',
        'Versandkonfiguration',
        'Responsives Einkaufserlebnis',
      ],
      highlighted: false,
    },
    {
      name: 'Branding & Logo',
      tagline: 'Visuelle Identität ohne Website',
      description:
        'Entwicklung Ihrer Markenidentität — von Logo über Farbwelt bis Typografie. Für Unternehmen, die zunächst ihr visuelles Fundament schaffen möchten, unabhängig von einer Website.',
      icon: <Icons.PenTool size="sm" />,
      features: [
        'Logo-Entwicklung',
        'Farb- und Typografiekonzept',
        'Markenrichtlinien',
        'Geschäftsausstattung',
        'Social-Media-Vorlagen',
      ],
      highlighted: false,
    },
    {
      name: 'Branding + Website',
      tagline: 'Marke und Auftritt aus einer Hand',
      description:
        'Die Kombination aus Markenentwicklung und mehrseitiger Website in einem durchgängigen Prozess. Ihre Identität und Ihr digitaler Auftritt entstehen aufeinander abgestimmt statt nachträglich zusammengeführt.',
      icon: <Icons.Layers size="sm" />,
      features: [
        'Markenentwicklung inklusive Logo',
        'Mehrseitige Website',
        'Abgestimmtes Designsystem',
        'Content-Management-System',
        'Suchmaschinenoptimierung',
        'Konsistentes Erlebnis über alle Kanäle',
      ],
      highlighted: false,
    },
  ],
};

export default PaketeData;
