// RESEND_API_KEY is a secret (set via `wrangler secret put`), so it isn't
// declared in wrangler.jsonc and isn't picked up by `wrangler types`.
// This augments the generated ambient `Env` interface with it.
interface Env {
  RESEND_API_KEY: string;
}
