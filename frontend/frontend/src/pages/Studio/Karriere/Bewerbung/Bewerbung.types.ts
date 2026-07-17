import type { ContactFormField } from '@components/ContactForm/ContactForm.types';

type BewerbungProps = {
  category: string;
  heading: string;
  description: string;
  email: string;
  buttonText: string;
  sentHeading: string;
  sentMessage: string;
  fields: ContactFormField[];
};

export type { BewerbungProps };
