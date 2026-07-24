import React from 'react';

// Falls back to the current page's own hostname (not a hardcoded "localhost")
// so this also works when the dev server is opened via --host from another
// device on the LAN, where "localhost" would resolve to that device itself.
const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ?? `http://${window.location.hostname}:8787/api/contact`;

type UseContactFormArgs = {
  contactEmail: string;
  fields: string[];
  messagePrefix?: string;
  turnstileToken: string | null;
};

const useContactForm = ({ contactEmail, fields, messagePrefix, turnstileToken }: UseContactFormArgs) => {
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

    const fallbackMessage = `Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an ${contactEmail}.`;

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, 'cf-turnstile-response': turnstileToken }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error ?? fallbackMessage);
        return;
      }

      setSent(true);
    } catch {
      // Genuine network failure (fetch itself rejected) — no backend message to show.
      setError(fallbackMessage);
    } finally {
      setSending(false);
    }
  };

  return { values, setValue, sent, sending, error, handleSubmit };
};

export default useContactForm;
