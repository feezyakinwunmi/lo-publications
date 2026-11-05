// src/app/data/getBlogPosts.ts
// Server-side: loads PUBLISHED blog posts from Supabase so new articles can be
// added from the admin panel instead of the code. Hardcoded posts stay in blog.ts.
// Uses the anon key with no cookies, so pages stay cacheable (ISR).
import { createClient } from "@supabase/supabase-js";
import type { BlogPost } from "./blog";

export const DEFAULT_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070";

type Row = {
  id: string;
  title: string;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  thumbnail_url: string | null;
  publisher_name: string | null;
  category: string | null;
  keyword: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string | null;
};

export type DbPost = { post: BlogPost; html: string; modifiedISO: string };

function client() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, { auth: { persistSession: false } });
}

// Defence in depth: only staff can write posts, but strip anything executable anyway.
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<\s*(script|style|iframe|object|embed|form)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed|form|link|meta)\b[^>]*\/?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}

const stripTags = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function toPost(r: Row): DbPost {
  const html = sanitizeHtml(r.content ?? "");
  const text = stripTags(html);
  const words = text ? text.split(" ").length : 0;
  const when = r.published_at ?? r.created_at;
  const slug = r.slug || r.id;
  const post: BlogPost = {
    id: r.id,
    title: r.title,
    slug,
    excerpt: r.excerpt?.trim() || (text.length > 155 ? text.slice(0, 152).trimEnd() + "..." : text),
    image: r.thumbnail_url || DEFAULT_BLOG_IMAGE,
    category: r.category?.trim() || "General",
    readTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
    date: formatDate(when),
    author: r.publisher_name?.trim() || "LOPublications",
    isoDate: when.slice(0, 10),
    ...(r.keyword ? { keyword: r.keyword } : {}),
    fromDb: true,
  };
  return { post, html, modifiedISO: (r.updated_at ?? when).slice(0, 10) };
}

export async function getDbPosts(): Promise<DbPost[]> {
  const supabase = client();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });
    if (error) {
      console.error("Blog posts fetch error:", error.message);
      return [];
    }
    return (data as Row[]).map(toPost);
  } catch (e) {
    console.error("Blog posts fetch failed:", e);
    return [];
  }
}

export async function getDbPostBySlug(slug: string): Promise<DbPost | null> {
  const supabase = client();
  if (!supabase) return null;
  try {
    let { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();
    // Posts saved without a slug are addressed by their id
    if (!data && /^[0-9a-f-]{36}$/i.test(slug)) {
      ({ data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .eq("id", slug)
        .limit(1)
        .maybeSingle());
    }
    if (!data) return null;
    return toPost(data as Row);
  } catch {
    return null;
  }
}
