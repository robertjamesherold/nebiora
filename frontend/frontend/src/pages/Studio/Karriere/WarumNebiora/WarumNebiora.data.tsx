import type { WarumNebioraProps } from './WarumNebiora.types';

const WarumNebioraData: WarumNebioraProps = {
  category: 'Karriere',
  heading: 'Warum Nebiora.studio',
  description: 'Wir sind klein geblieben, weil uns das erlaubt, gute Arbeit gut zu machen — das gilt für unsere Kund:innen genauso wie für unser Team.',
  benefits: [
    {
      title: 'Remote-first',
      description:
        'Arbeiten Sie von dort, wo Sie am produktivsten sind — mit flexiblen Zeiten und klaren Absprachen statt Präsenzpflicht.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.5 3.5-5.5 3.5-9s-1-6.5-3.5-9m0 18c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9M3.5 9h17M3.5 15h17"
        />
      ),
    },
    {
      title: 'Echte Verantwortung',
      description:
        'Sie betreuen Projekte von Anfang bis Ende — keine Zuarbeit, sondern eigenständige Ergebnisse mit Ihrem Namen daran.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6l7-3Zm-3 9 2 2 4-4"
        />
      ),
    },
    {
      title: 'Flache Hierarchien',
      description:
        'Kurze Wege, direkte Entscheidungen — bei uns sprechen Sie mit den Menschen, die tatsächlich entscheiden.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 7v4m0 0-5 4m5-4 5 4"
        />
      ),
    },
    {
      title: 'Weiterbildungsbudget',
      description:
        'Jährliches Budget für Kurse, Konferenzen und Tools — weil gutes Handwerk kontinuierliches Lernen braucht.',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4 2 9l10 5 10-5-10-5Zm-7 7v5c0 1.5 3 3 7 3s7-1.5 7-3v-5"
        />
      ),
    },
  ],
};

export default WarumNebioraData;
