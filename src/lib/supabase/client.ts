// src/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_NOT_CONFIGURED_MESSAGE =
  "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file.";

/**
 * True only when the Supabase environment variables are present.
 * Public sections of the site can check this before calling createClient()
 * so they can fall back to static content when Supabase isn't configured.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/**
 * Creates a Supabase browser client, or `null` when the project URL / anon key
 * are missing. Callers must handle `null` so pages degrade gracefully instead
 * of crashing with "@supabase/ssr: Your project's URL and API key are required".
 */
export function createClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.warn(SUPABASE_NOT_CONFIGURED_MESSAGE);
    return null;
  }

  return createBrowserClient(url, anonKey);
}