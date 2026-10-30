// Server-side: loads published rows from Supabase and merges them with the
// hardcoded catalogue. Falls back to the hardcoded data when Supabase is
// missing or a query fails, so the public site never breaks.
import { createClient } from "@supabase/supabase-js";
import { mergeContent, STATIC_CONTENT, type DbRows, type SiteContent } from "./siteContent";

export async function getSiteContent(): Promise<SiteContent> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return STATIC_CONTENT;

  // No cookies: these pages are cached and revalidated, not rendered per visitor
  const supabase = createClient(url, anonKey, { auth: { persistSession: false } });

  const [authors, books, testimonials] = await Promise.all([
    supabase.from("authors").select("*").eq("status", "published").order("created_at", { ascending: false }),
    supabase.from("books").select("*").eq("status", "published").order("created_at", { ascending: true }),
    supabase.from("testimonials").select("*").eq("status", "published").order("created_at", { ascending: false }),
  ]);

  for (const res of [authors, books, testimonials]) {
    if (res.error) console.error("Site content fetch error:", res.error.message);
  }

  const rows: DbRows = {
    authors: authors.data ?? [],
    books: books.data ?? [],
    testimonials: testimonials.data ?? [],
  };
  return mergeContent(rows);
}
