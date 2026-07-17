import React from 'react';

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL ?? 'http://localhost:8787/api/contact';

type UseContactFormArgs = {
  contactEmail: string;
  fields: string[];
  messagePrefix?: string;
};

const useContactForm = ({ contactEmail, fields, messagePrefix }: UseContactFormArgs) => {
  const [values, setValues] = React.useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field, ''])),
  );
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const setValue = (field: string) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSending(true);
    setError(null);

    const name = values['Name'] ?? '';
    const email = values['E-Mail'] ?? '';
    const extraFields = fields.filter((field) => field !== 'Name' && field !== 'E-Mail' && field !== 'Nachricht');
    const message = [
      messagePrefix,
      ...extraFields.map((field) => `${field}: ${values[field]}`),
      values['Nachricht'],
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSent(true);
    } catch {
      setError(
        `Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an ${contactEmail}.`,
      );
    } finally {
      setSending(false);
    }
  };

  return { values, setValue, sent, sending, error, handleSubmit };
};

export default useContactForm;
