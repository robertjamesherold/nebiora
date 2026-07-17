import type { BewerbungProps } from './Bewerbung.types';

const BewerbungData: BewerbungProps = {
  category: 'Bewerbung',
  heading: 'Bereit für den nächsten Schritt?',
  description:
    'Erzählen Sie uns, wer Sie sind und worauf Sie Lust haben. Ein Anschreiben brauchen Sie dafür nicht — ein paar ehrliche Sätze reichen.',
  email: 'hallo@nebiora.studio',
  buttonText: 'Bewerbung senden',
  sentHeading: 'Vielen Dank für Ihre Bewerbung!',
  sentMessage: 'Wir melden uns innerhalb weniger Tage bei Ihnen zurück.',
  fields: [
    {
      label: 'Name',
      placeholder: 'Max Mustermann',
      as: 'input',
      type: 'text',
    },
    {
      label: 'E-Mail',
      placeholder: 'ihre@email.de',
      as: 'input',
      type: 'email',
    },
    {
      label: 'Position',
      placeholder: 'Auf welche Stelle bewerben Sie sich?',
      as: 'input',
      type: 'text',
    },
    {
      label: 'Nachricht',
      placeholder: 'Ihre Nachricht',
      as: 'textarea',
      rows: 4,
    },
  ],
};

export default BewerbungData;
