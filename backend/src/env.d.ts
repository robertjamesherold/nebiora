// RESEND_API_KEY, CAL_API_KEY, and TURNSTILE_SECRET are secrets (set via
// `wrangler secret put`), so they aren't declared in wrangler.jsonc and
// aren't picked up by `wrangler types`. This augments the generated ambient
// `Env` interface with them.
interface Env {
  RESEND_API_KEY: string;
  CAL_API_KEY: string;
  TURNSTILE_SECRET: string;
}
