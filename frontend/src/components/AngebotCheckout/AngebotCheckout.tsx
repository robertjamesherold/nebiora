import Components from '@components';
import Icons from '@icons';
import { useEffect, useRef } from 'react';

import Ui from '@/ui';

import type { AngebotCheckoutProps } from './AngebotCheckout.types';

const FIELDS = [
  { label: 'Name', placeholder: 'Max Mustermann', as: 'input' as const, type: 'text' },
  { label: 'E-Mail', placeholder: 'ihre@email.de', as: 'input' as const, type: 'email' },
  { label: 'Telefon', placeholder: '+49 170 1234567', as: 'input' as const, type: 'tel' },
  {
    label: 'Datenschutz',
    as: 'checkbox' as const,
    consentText: (
      <>
        Ich stimme der{' '}
        <a
          href="/datenschutz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-star-50"
        >
          Datenschutzerklärung
        </a>{' '}
        zu.
      </>
    ),
  },
];

const AngebotCheckout = ({ paket, onClose }: AngebotCheckoutProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!paket) return;
    closeButtonRef.current?.focus();

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [paket, onClose]);

  if (!paket) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Angebot anfragen: ${paket.name}`}
      className="fixed inset-0 z-100 flex items-center justify-center bg-space-950/90 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <Ui.Card
        glass
        className="relative w-full max-w-md p-8 sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="glass-panel absolute top-4 right-4 flex size-9 items-center justify-center rounded-full text-star-50"
        >
          <Icons.X size="sm" />
        </button>

        <Ui.Badge label={paket.name} style="secondary" />
        <Ui.Text as="h3" variant="h3Emphasis" className="mt-4" text="Angebot anfragen" />
        <Ui.Text
          variant="bodyMuted"
          className="mt-2"
          text={`Hinterlassen Sie uns Ihre Kontaktdaten — wir melden uns mit einem individuellen Angebot für „${paket.name}“.`}
        />

        <Components.ContactForm
          contactEmail="hallo@nebiora.studio"
          fields={FIELDS}
          submitLabel="Anfrage senden"
          sentHeading="Vielen Dank für Ihre Anfrage!"
          sentMessage={`Wir melden uns in Kürze mit einem individuellen Angebot für „${paket.name}“.`}
          messagePrefix={`Neue Angebotsanfrage für das Paket „${paket.name}“.`}
          className="mt-8"
        />
      </Ui.Card>
    </div>
  );
};

export default AngebotCheckout;
