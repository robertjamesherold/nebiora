import type { ContactProps } from './Contact.types';

const ContactData: ContactProps = {
  category: 'Kontakt',
  heading: 'Lassen Sie uns über Ihr Projekt sprechen.',
  description:
    'Kostenloses Erstgespräch, keine Verpflichtungen. Wir melden uns innerhalb von 24 Stunden.',
  email: 'hallo@nebiora.studio',
  buttonText: 'Nachricht senden',
  sentHeading: 'Vielen Dank für Ihr Interesse!',
  sentMessage: 'Wir werden uns so schnell wie möglich bei Ihnen melden.',
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
      label: 'Nachricht',
      placeholder: 'Ihre Nachricht',
      as: 'textarea',
      rows: 4,
    },
  ],
};

export default ContactData;
