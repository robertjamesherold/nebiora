import type { TimelineProps } from './Timeline.types';

const TimelineData: TimelineProps = {
  category: 'Prozess',
  heading: ['Elf Schritte,', 'ein klarer Ablauf.'],
  description:
    'Jedes Projekt bei Nebiora.studio folgt demselben nachvollziehbaren Prozess — vom ersten Kontakt bis zur laufenden Betreuung nach dem Launch.',
  steps: [
    {
      title: 'Erstkontakt',
      description:
        'Sie nehmen über unser Kontaktformular, per E-Mail oder telefonisch Kontakt zu uns auf. Wir melden uns in der Regel innerhalb eines Werktags zurück.',
    },
    {
      title: 'Kostenloses Kennenlernen',
      description:
        'In einem unverbindlichen ersten Gespräch hören wir zu — worum es in Ihrem Projekt geht, welche Ziele Sie verfolgen und ob Nebiora.studio der richtige Partner für Sie ist.',
    },
    {
      title: 'Video-Meeting über Microsoft Teams',
      description:
        'In einem strukturierten Video-Call über Microsoft Teams gehen wir gemeinsam tiefer ins Detail — Umfang, Zielgruppe, Wettbewerb und Erwartungen an Design und Funktion.',
    },
    {
      title: 'Projektanalyse',
      description:
        'Wir analysieren Anforderungen, technischen Rahmen und Machbarkeit und legen fest, welcher Aufwand zu welchem Ergebnis führt.',
    },
    {
      title: 'Angebot',
      description:
        'Sie erhalten ein transparentes, detailliertes Angebot mit klar aufgeschlüsseltem Leistungsumfang, Zeitplan und Kosten — ohne versteckte Positionen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.5 11 14.5 15 10 M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
        />
      ),
    },
    {
      title: 'Designphase',
      description:
        'Auf Basis des vereinbarten Umfangs entstehen Konzept, Wireframes und das visuelle Design Ihres Auftritts.',
    },
    {
      title: 'Feedbackschleifen',
      description:
        'In strukturierten Feedbackrunden stimmen wir das Design gemeinsam mit Ihnen ab, bevor die Entwicklung beginnt.',
    },
    {
      title: 'Entwicklung',
      description:
        'Das freigegebene Design setzen wir in sauberem, wartbarem und modernem Code um — bereit für Wachstum und neue Anforderungen.',
    },
    {
      title: 'Testing',
      description:
        'Vor dem Livegang prüfen wir das Ergebnis geräte- und browserübergreifend sowie auf Barrierefreiheit.',
    },
    {
      title: 'Launch',
      description:
        'Ihr Projekt geht live — in einer abschließenden Durchsprache zeigen wir Ihnen alle Funktionen und beantworten offene Fragen.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 2 11 13 M22 2 15 22 11 13 2 9 22 2"
        />
      ),
    },
    {
      title: 'Betreuung',
      description:
        'Auch nach dem Launch betreuen wir, was wir gebaut haben — mit laufendem Monitoring, Updates und kurzen Reaktionszeiten bei Fragen.',
    },
  ],
};

export default TimelineData;
