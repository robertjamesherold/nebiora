import type { ReactNode } from 'react';

type ContactFormField = {
  label: string;
  placeholder?: string;
  as?: 'input' | 'textarea' | 'checkbox';
  type?: string;
  rows?: number;
  /** Only used when as === 'checkbox' — overrides the rendered label (e.g. to include a link), while `label` stays the plain-text field identifier used in state and the outgoing message. */
  consentText?: ReactNode;
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
