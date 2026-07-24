type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type BookingPayload = {
  start: string;
  name: string;
  email: string;
  phone: string;
  timeZone: string;
  notes?: string;
};

const RESEND_API_URL = 'https://api.resend.com/emails';
const CAL_API_URL = 'https://api.cal.com/v2';
const CAL_SLOTS_API_VERSION = '2024-09-04';
const CAL_BOOKINGS_API_VERSION = '2026-02-25';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const verifyTurnstile = async (token: unknown, secret: string, remoteip: string | null) => {
  if (typeof token !== 'string' || token === '') {
    console.error('Turnstile verification skipped: no token in payload');
    return false;
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      ...(remoteip ? { remoteip } : {}),
    }),
  });

  const result = (await response.json()) as { success: boolean; 'error-codes'?: string[] };
  if (!result.success) {
    console.error('Turnstile verification failed', JSON.stringify(result['error-codes'] ?? []));
  }
  return result.success;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidPhone = (value: string) => /^[+\d][\d\s()-]{5,}$/.test(value.trim());

const isContactPayload = (data: unknown): data is ContactPayload => {
  if (typeof data !== 'object' || data === null) return false;
  const { name, email, message } = data as Record<string, unknown>;
  return (
    isNonEmptyString(name) &&
    isNonEmptyString(email) &&
    isValidEmail(email) &&
    isNonEmptyString(message)
  );
};

const isBookingPayload = (data: unknown): data is BookingPayload => {
  if (typeof data !== 'object' || data === null) return false;
  const { start, name, email, phone, timeZone, notes } = data as Record<string, unknown>;
  return (
    isNonEmptyString(start) &&
    isNonEmptyString(name) &&
    isNonEmptyString(email) &&
    isValidEmail(email) &&
    isNonEmptyString(phone) &&
    isValidPhone(phone) &&
    isNonEmptyString(timeZone) &&
    (notes === undefined || typeof notes === 'string')
  );
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const corsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

const jsonResponse = (body: unknown, status: number, origin: string) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
    },
  });

export default {
  async fetch(request, env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || '*';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405, origin);
      }

      let payload: unknown;
      try {
        payload = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON' }, 400, origin);
      }

      if (!isContactPayload(payload)) {
        return jsonResponse({ error: 'Name, E-Mail und Nachricht werden benötigt.' }, 400, origin);
      }

      const turnstileToken = (payload as Record<string, unknown>)['cf-turnstile-response'];
      const isHuman = await verifyTurnstile(
        turnstileToken,
        env.TURNSTILE_SECRET,
        request.headers.get('CF-Connecting-IP'),
      );
      if (!isHuman) {
        return jsonResponse(
          { error: 'Sicherheitsprüfung fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.' },
          403,
          origin,
        );
      }

      const { name, email, message } = payload;

      const resendResponse = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Nebiora Kontaktformular <${env.CONTACT_FROM_ADDRESS}>`,
          to: [env.CONTACT_TO_ADDRESS],
          reply_to: email,
          subject: `Neue Projektanfrage von ${name}`,
          text: `${message}\n\n— ${name} (${email})`,
          html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>— ${escapeHtml(name)} (${escapeHtml(email)})</p>`,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend send failed', resendResponse.status);
        return jsonResponse({ error: 'E-Mail konnte nicht gesendet werden.' }, 502, origin);
      }

      return jsonResponse({ ok: true }, 200, origin);
    }

    if (url.pathname === '/api/booking/slots') {
      if (request.method !== 'GET') {
        return jsonResponse({ error: 'Method not allowed' }, 405, origin);
      }

      const start = url.searchParams.get('start');
      const end = url.searchParams.get('end');
      const timeZone = url.searchParams.get('timeZone') ?? 'Europe/Berlin';

      if (!isNonEmptyString(start) || !isNonEmptyString(end)) {
        return jsonResponse({ error: 'start und end werden benötigt.' }, 400, origin);
      }

      const slotsUrl = new URL(`${CAL_API_URL}/slots`);
      slotsUrl.searchParams.set('start', start);
      slotsUrl.searchParams.set('end', end);
      slotsUrl.searchParams.set('eventTypeSlug', env.CAL_EVENT_SLUG);
      slotsUrl.searchParams.set('username', env.CAL_USERNAME);
      slotsUrl.searchParams.set('timeZone', timeZone);

      const calResponse = await fetch(slotsUrl, {
        headers: {
          'cal-api-version': CAL_SLOTS_API_VERSION,
          Authorization: `Bearer ${env.CAL_API_KEY}`,
        },
      });

      const calBody = await calResponse.json();

      if (!calResponse.ok) {
        console.error('cal.com slots request failed', calResponse.status);
        return jsonResponse({ error: 'Verfügbare Termine konnten nicht geladen werden.' }, 502, origin);
      }

      return jsonResponse(calBody, 200, origin);
    }

    if (url.pathname === '/api/booking/create') {
      if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405, origin);
      }

      let payload: unknown;
      try {
        payload = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON' }, 400, origin);
      }

      if (!isBookingPayload(payload)) {
        return jsonResponse(
          { error: 'Vorname, Nachname, E-Mail, Telefonnummer und Zeitzone werden benötigt.' },
          400,
          origin,
        );
      }

      const turnstileToken = (payload as Record<string, unknown>)['cf-turnstile-response'];
      const isHuman = await verifyTurnstile(
        turnstileToken,
        env.TURNSTILE_SECRET,
        request.headers.get('CF-Connecting-IP'),
      );
      if (!isHuman) {
        return jsonResponse(
          { error: 'Sicherheitsprüfung fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.' },
          403,
          origin,
        );
      }

      const { start, name, email, phone, timeZone, notes } = payload;

      const calResponse = await fetch(`${CAL_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'cal-api-version': CAL_BOOKINGS_API_VERSION,
          Authorization: `Bearer ${env.CAL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start,
          attendee: { name, email, timeZone, phoneNumber: phone },
          eventTypeSlug: env.CAL_EVENT_SLUG,
          username: env.CAL_USERNAME,
          ...(isNonEmptyString(notes) ? { bookingFieldsResponses: { notes } } : {}),
        }),
      });

      const calBody = await calResponse.json();

      if (!calResponse.ok) {
        console.error('cal.com booking creation failed', calResponse.status, JSON.stringify(calBody));
        const isConflict = calResponse.status === 409;
        return jsonResponse(
          {
            error: isConflict
              ? 'Dieser Termin ist gerade nicht mehr verfügbar. Bitte wählen Sie einen anderen Slot.'
              : 'Termin konnte nicht gebucht werden.',
          },
          isConflict ? 409 : 502,
          origin,
        );
      }

      return jsonResponse(calBody, 201, origin);
    }

    return jsonResponse({ error: 'Not found' }, 404, origin);
  },
} satisfies ExportedHandler<Env>;
