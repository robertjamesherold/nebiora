import type { ContactSectionProps } from './ContactSection.types';

const ContactSectionData: ContactSectionProps = {
  category: 'Kontakt',
  heading: 'Erzählen Sie uns von Ihrem Projekt.',
  description: 'Kostenloses Erstgespräch, keine Verpflichtungen. Wir melden uns innerhalb von 24 Stunden.',
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

export default ContactSectionData;
