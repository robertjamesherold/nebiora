import Ui from '@/ui';

import type { ContactFormProps } from './ContactForm.types';
import useContactForm from './useContactForm';

const ContactForm = ({
  contactEmail,
  fields,
  submitLabel,
  sentHeading,
  sentMessage,
  messagePrefix,
  className = '',
}: ContactFormProps) => {
  const { values, setValue, sent, sending, error, handleSubmit } = useContactForm({
    contactEmail,
    fields: fields.map((field) => field.label),
    messagePrefix,
  });

  if (sent) {
    return (
      <div className={`flex h-full min-h-80 flex-col items-center justify-center gap-8 text-center ${className}`}>
        <Ui.Icon strokeWidth={2.5} className="size-16 text-brand-300">
          <path d="M4 12.5L9.5 18L20 6" strokeLinecap="round" strokeLinejoin="round" />
        </Ui.Icon>
        <div className="flex flex-col gap-3.5">
          <Ui.Text as="h3" variant="h3Emphasis" text={sentHeading} />
          <Ui.Text variant="body" text={sentMessage} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-5 ${className}`}>
      {fields.map((field) =>
        field.as === 'checkbox' ? (
          <Ui.Input
            key={field.label}
            as="checkbox"
            label={field.consentText ?? field.label}
            checked={values[field.label] === 'true'}
            onCheckedChange={(checked) => setValue(field.label)(checked ? 'true' : '')}
            required
          />
        ) : (
          <Ui.Input
            key={field.label}
            label={field.label}
            placeholder={field.placeholder}
            value={values[field.label]}
            onChange={setValue(field.label)}
            required
            type={field.type}
            as={field.as}
            rows={field.rows}
          />
        ),
      )}

      <Ui.Buttons
        type="submit"
        container="button"
        label={sending ? 'Wird gesendet…' : submitLabel}
        variant="primary"
        size="sm"
        disabled={sending}
        className="mt-2"
      />

      {error && <Ui.Text variant="error" text={error} />}
    </form>
  );
};

export default ContactForm;
