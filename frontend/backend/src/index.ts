type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const RESEND_API_URL = 'https://api.resend.com/emails';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

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
    if (url.pathname !== '/api/contact') {
      return jsonResponse({ error: 'Not found' }, 404, origin);
    }

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
  },
} satisfies ExportedHandler<Env>;
