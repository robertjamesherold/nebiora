// RESEND_API_KEY and CAL_API_KEY are secrets (set via `wrangler secret put`),
// so they aren't declared in wrangler.jsonc and aren't picked up by
// `wrangler types`. This augments the generated ambient `Env` interface
// with them.
interface Env {
  RESEND_API_KEY: string;
  CAL_API_KEY: string;
}
