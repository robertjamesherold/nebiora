type ContactFormType = 'contact' | 'angebot';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  formType?: ContactFormType;
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
const EMAIL_LOGO_URL = 'https://nebiora.studio/logo-email.png';
const CAL_API_URL = 'https://api.cal.com/v2';
const CAL_SLOTS_API_VERSION = '2024-09-04';
const CAL_BOOKINGS_API_VERSION = '2026-02-25';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidPhone = (value: string) => /^[+\d][\d\s()/.-]{5,}$/.test(value.trim());

const DEFAULT_COUNTRY_CODE = '49';

// A German national number never starts with "0" once the country code is in
// front of it — that "0" is the trunk prefix, dropped whenever the number is
// dialed with a country code. Someone writing "+49 0170 …" (no parentheses)
// means the same trunk zero as "+49 (0)170 …"; both must lose the zero, or the
// result parses as a 13-digit number that isn't the one they own.
const stripTrunkZeroAfterCountryCode = (digits: string) =>
  digits.startsWith(`${DEFAULT_COUNTRY_CODE}0`)
    ? DEFAULT_COUNTRY_CODE + digits.slice(DEFAULT_COUNTRY_CODE.length + 1)
    : digits;

// cal.com requires strict E.164 and rejects everything else outright with
// "invalid_number". Stripping punctuation is not enough: a German user typing
// the national format ("0170 1234567") or using their phone's contact autofill
// produces a number with a trunk "0" and no country code, which is valid to a
// human and invalid to cal.com.
const toE164 = (value: string) => {
  // "+49 (0) 170 …" writes the trunk prefix in parentheses — it must be dropped
  // rather than folded into the digits, or the result becomes "+490170…".
  const trimmed = value.replace(/\(\s*0\s*\)/g, '').trim();

  if (trimmed.startsWith('+')) {
    return `+${stripTrunkZeroAfterCountryCode(trimmed.slice(1).replace(/\D/g, ''))}`;
  }

  const digits = trimmed.replace(/\D/g, '');

  // "00" is the international access prefix used across Europe.
  if (digits.startsWith('00')) return `+${stripTrunkZeroAfterCountryCode(digits.slice(2))}`;
  // A single leading "0" is the national trunk prefix — it is replaced by the
  // country code, never kept.
  if (digits.startsWith('0')) return `+${DEFAULT_COUNTRY_CODE}${digits.slice(1)}`;
  // Already carries the country code, just without the "+".
  if (digits.startsWith(DEFAULT_COUNTRY_CODE) && digits.length >= 11) {
    return `+${stripTrunkZeroAfterCountryCode(digits)}`;
  }

  return `+${DEFAULT_COUNTRY_CODE}${digits}`;
};

// E.164 allows at most 15 digits, and the country code never starts with 0.
const isE164 = (value: string) => /^\+[1-9]\d{7,14}$/.test(value);

// cal.com's raw rejection text sometimes echoes internal field names verbatim
// (e.g. "responses - {attendeePhoneNumber}invalid_number") — never fit to
// show a customer. Only known, customer-actionable error codes get a
// specific message; anything else falls back to the generic one.
const CAL_ERROR_MESSAGES: Record<string, string> = {
  email_domain_cannot_receive_mail:
    'Diese E-Mail-Adresse kann keine Nachrichten empfangen. Bitte prüfen Sie sie auf Tippfehler.',
};

const calErrorMessage = (body: unknown): string | undefined => {
  if (typeof body !== 'object' || body === null) return undefined;
  const { message } = body as Record<string, unknown>;
  return typeof message === 'string' ? CAL_ERROR_MESSAGES[message] : undefined;
};

const isContactFormType = (value: unknown): value is ContactFormType =>
  value === 'contact' || value === 'angebot';

const isContactPayload = (data: unknown): data is ContactPayload => {
  if (typeof data !== 'object' || data === null) return false;
  const { name, email, message, formType } = data as Record<string, unknown>;
  return (
    isNonEmptyString(name) &&
    isNonEmptyString(email) &&
    isValidEmail(email) &&
    isNonEmptyString(message) &&
    (formType === undefined || isContactFormType(formType))
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

// fetch() rejecting or the upstream body not being JSON both throw — left
// unguarded, that surfaces to the client as a bare, unlogged 502 with no way
// to tell what actually went wrong upstream.
const fetchJson = async (
  context: string,
  input: string | URL,
  init?: RequestInit,
): Promise<{ response: Response; body: unknown } | null> => {
  let response: Response;
  try {
    response = await fetch(input, init);
  } catch (error) {
    console.error(`${context}: request threw`, error instanceof Error ? error.message : String(error));
    return null;
  }

  try {
    const body = await response.json();
    return { response, body };
  } catch (error) {
    console.error(
      `${context}: response was not JSON`,
      response.status,
      error instanceof Error ? error.message : String(error),
    );
    return null;
  }
};

// Every automated email — the contact-form notification, both auto-replies,
// and the booking confirmation — goes through here so the Resend call shape
// (headers, from, JSON body) only exists once.
const sendMail = async (
  context: string,
  env: Env,
  { to, replyTo, subject, text, html }: { to: string; replyTo?: string; subject: string; text: string; html: string },
) => {
  const result = await fetchJson(context, RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Nebiora Studio <${env.CONTACT_FROM_ADDRESS}>`,
      to: [to],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      text,
      html: `${html}<div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e5e5;"><img src="${EMAIL_LOGO_URL}" alt="Nebiora" width="150" height="18" style="display:block;"></div>`,
    }),
  });

  if (!result) return false;
  if (!result.response.ok) {
    // Same reasoning as the contact-notification path below: never log the
    // response body, it can carry recipient details from this request.
    console.error(`${context} failed`, result.response.status);
    return false;
  }
  return true;
};

const CONTACT_AUTO_REPLY_CONTENT: Record<ContactFormType, { subject: string; body: string }> = {
  contact: {
    subject: 'Vielen Dank für Ihre Nachricht',
    body: 'vielen Dank für Ihre Nachricht — wir haben sie erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
  angebot: {
    subject: 'Ihre Anfrage ist bei uns eingegangen',
    body: 'vielen Dank für Ihre Anfrage — wir melden uns in Kürze mit einem individuellen Angebot.',
  },
};

const contactAutoReply = (formType: ContactFormType, name: string) => {
  const { subject, body } = CONTACT_AUTO_REPLY_CONTENT[formType];
  return {
    subject,
    text: `Hallo ${name},\n\n${body}\n\nViele Grüße\nIhr Nebiora-Team`,
    html: `<p>Hallo ${escapeHtml(name)},</p><p>${body}</p><p>Viele Grüße<br>Ihr Nebiora-Team</p>`,
  };
};

const formatBookingDateTime = (isoStart: string, timeZone: string) => {
  try {
    return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full', timeStyle: 'short', timeZone }).format(
      new Date(isoStart),
    );
  } catch {
    // An unrecognized IANA zone (malformed client data) must not break the
    // confirmation email — fall back to a UTC rendering rather than throw.
    return new Intl.DateTimeFormat('de-DE', { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC' }).format(
      new Date(isoStart),
    );
  }
};

const BOOKING_PHONE_NUMBER = '+49 151 58338231';

const bookingConfirmation = (name: string, isoStart: string, timeZone: string, bookingToAddress: string) => {
  const when = formatBookingDateTime(isoStart, timeZone);
  const changeNotice = `Falls sich etwas an Ihrem Termin ändert (Absage oder Verschiebung), schreiben Sie uns an ${bookingToAddress} oder rufen Sie uns an: ${BOOKING_PHONE_NUMBER}.`;
  return {
    subject: 'Ihr Termin bei Nebiora.studio ist bestätigt',
    text: `Hallo ${name},\n\nIhr Erstgespräch ist bestätigt für:\n${when} Uhr\n\nWir rufen Sie zur vereinbarten Zeit an. ${changeNotice}\n\nViele Grüße\nIhr Nebiora-Team`,
    html: `<p>Hallo ${escapeHtml(name)},</p><p>Ihr Erstgespräch ist bestätigt für:</p><p><strong>${escapeHtml(when)} Uhr</strong></p><p>Wir rufen Sie zur vereinbarten Zeit an. ${escapeHtml(changeNotice)}</p><p>Viele Grüße<br>Ihr Nebiora-Team</p>`,
  };
};

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

      const { name, email, message, formType = 'contact' } = payload;

      const notified = await sendMail('Resend send', env, {
        to: env.CONTACT_TO_ADDRESS,
        replyTo: email,
        subject: `Neue Projektanfrage von ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
        html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>— ${escapeHtml(name)} (${escapeHtml(email)})</p>`,
      });

      if (!notified) {
        return jsonResponse({ error: 'E-Mail konnte nicht gesendet werden.' }, 502, origin);
      }

      // Best-effort: the notification above is what matters, and it already
      // succeeded — a failed auto-reply must not turn a received message into
      // an error response for the customer.
      const autoReplySent = await sendMail('Contact auto-reply', env, {
        to: email,
        replyTo: env.CONTACT_TO_ADDRESS,
        ...contactAutoReply(formType, name),
      });
      if (!autoReplySent) {
        console.error('Contact auto-reply failed to send');
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

      const calResult = await fetchJson('cal.com slots request', slotsUrl, {
        headers: {
          'cal-api-version': CAL_SLOTS_API_VERSION,
          Authorization: `Bearer ${env.CAL_API_KEY}`,
        },
      });

      if (!calResult) {
        return jsonResponse({ error: 'Verfügbare Termine konnten nicht geladen werden.' }, 502, origin);
      }

      const { response: calResponse, body: calBody } = calResult;

      if (!calResponse.ok) {
        console.error('cal.com slots request failed', calResponse.status, JSON.stringify(calBody));
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

      const { start, name, email, phone, timeZone, notes } = payload;

      const phoneNumber = toE164(phone);

      if (!isE164(phoneNumber)) {
        return jsonResponse(
          {
            error:
              'Diese Telefonnummer konnten wir nicht zuordnen. Bitte geben Sie sie mit Vorwahl an, z. B. 0170 1234567 oder +49 170 1234567.',
          },
          400,
          origin,
        );
      }

      const calResult = await fetchJson('cal.com booking creation', `${CAL_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'cal-api-version': CAL_BOOKINGS_API_VERSION,
          Authorization: `Bearer ${env.CAL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start,
          attendee: { name, email, timeZone, phoneNumber },
          eventTypeSlug: env.CAL_EVENT_SLUG,
          username: env.CAL_USERNAME,
          ...(isNonEmptyString(notes) ? { bookingFieldsResponses: { notes } } : {}),
        }),
      });

      if (!calResult) {
        return jsonResponse({ error: 'Termin konnte nicht gebucht werden.' }, 502, origin);
      }

      const { response: calResponse, body: calBody } = calResult;

      if (!calResponse.ok) {
        console.error('cal.com booking creation failed', calResponse.status, JSON.stringify(calBody));

        if (calResponse.status === 409) {
          return jsonResponse(
            { error: 'Dieser Termin ist gerade nicht mehr verfügbar. Bitte wählen Sie einen anderen Slot.' },
            409,
            origin,
          );
        }

        // cal.com rejected the payload itself. Nothing about that improves on a
        // second attempt, so it must not reach the client as a 5xx — the user
        // has to change something before this can succeed.
        if (calResponse.status >= 400 && calResponse.status < 500) {
          return jsonResponse(
            {
              error:
                calErrorMessage(calBody) ??
                'Die Buchungsdaten wurden nicht akzeptiert. Bitte prüfen Sie Telefonnummer und E-Mail-Adresse.',
            },
            400,
            origin,
          );
        }

        return jsonResponse({ error: 'Termin konnte nicht gebucht werden.' }, 502, origin);
      }

      // cal.com's own host identity for this event type is "Nebiora
      // Buchungen <buchungen@nebiora.studio>", so it already notifies the
      // business — only the customer-facing confirmation is ours to send.
      // Best-effort: cal.com already created the booking, so a failed email
      // here must not turn a successful booking into an error response.
      const confirmationSent = await sendMail('Booking confirmation', env, {
        to: email,
        replyTo: env.BOOKING_TO_ADDRESS,
        ...bookingConfirmation(name, start, timeZone, env.BOOKING_TO_ADDRESS),
      });
      if (!confirmationSent) {
        console.error('Booking confirmation failed to send');
      }

      return jsonResponse(calBody, 201, origin);
    }

    return jsonResponse({ error: 'Not found' }, 404, origin);
  },
} satisfies ExportedHandler<Env>;
