import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_NOT_CONFIGURED_MESSAGE =
  "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file.";

/**
 * Creates a Supabase server client, or `null` when the project URL / anon key
 * are missing. Callers must handle `null` so pages degrade gracefully instead
 * of crashing with "@supabase/ssr: Your project's URL and API key are required".
 */
export async function createClient(): Promise<SupabaseClient | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.warn(SUPABASE_NOT_CONFIGURED_MESSAGE);
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {}
      },
    },
  });
}