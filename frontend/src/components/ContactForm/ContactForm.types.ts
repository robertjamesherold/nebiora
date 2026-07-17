type ContactFormField = {
  label: string;
  placeholder: string;
  as?: 'input' | 'textarea';
  type?: string;
  rows?: number;
};

type ContactFormProps = {
  contactEmail: string;
  fields: ContactFormField[];
  submitLabel: string;
  sentHeading: string;
  sentMessage: string;
  messagePrefix?: string;
  className?: string;
};

export type { ContactFormField, ContactFormProps };
