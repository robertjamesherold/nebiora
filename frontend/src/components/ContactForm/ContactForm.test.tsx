import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ContactForm from './ContactForm';

const fields = [
  { label: 'Name', placeholder: 'Ihr Name' },
  { label: 'E-Mail', placeholder: 'ihre@email.de', type: 'email' },
  { label: 'Nachricht', placeholder: 'Ihre Nachricht', as: 'textarea' as const },
];

describe('ContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a labeled input for every configured field', () => {
    render(
      <ContactForm
        contactEmail="hi@example.com"
        fields={fields}
        submitLabel="Senden"
        sentHeading="Danke!"
        sentMessage="Wir melden uns."
      />,
    );

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Nachricht')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Senden' })).toBeInTheDocument();
  });

  it('shows the success view after a successful submit', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    const user = userEvent.setup();

    render(
      <ContactForm
        contactEmail="hi@example.com"
        fields={fields}
        submitLabel="Senden"
        sentHeading="Danke!"
        sentMessage="Wir melden uns."
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('E-Mail'), 'ada@example.com');
    await user.type(screen.getByLabelText('Nachricht'), 'Hallo!');
    await user.click(screen.getByRole('button', { name: 'Senden' }));

    expect(await screen.findByText('Danke!')).toBeInTheDocument();
    expect(screen.getByText('Wir melden uns.')).toBeInTheDocument();
  });

  it('shows an error message referencing the contact email when submission fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    const user = userEvent.setup();

    render(
      <ContactForm
        contactEmail="hi@example.com"
        fields={fields}
        submitLabel="Senden"
        sentHeading="Danke!"
        sentMessage="Wir melden uns."
      />,
    );

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('E-Mail'), 'ada@example.com');
    await user.type(screen.getByLabelText('Nachricht'), 'Hallo!');
    await user.click(screen.getByRole('button', { name: 'Senden' }));

    await waitFor(() => {
      expect(screen.getByText(/hi@example\.com/)).toBeInTheDocument();
    });
    expect(screen.queryByText('Danke!')).not.toBeInTheDocument();
  });
});
