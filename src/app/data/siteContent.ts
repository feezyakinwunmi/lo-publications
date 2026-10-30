// Merges books, authors and testimonials added in the admin portal (Supabase)
// with the hardcoded catalogue in data/catalogue.ts and data/authors.ts.
// Pure and isomorphic: the server fetches the rows, this file shapes them.
import { featuredAuthors, type AuthorBook, type FeaturedAuthor } from "./authors";
import {
  AUTHOR_DIRECTORY,
  CATALOGUE,
  CATEGORIES,
  categoryOf,
  slugify,
  type CatalogueBook,
  type CategoryKey,
  type DirectoryAuthor,
} from "./catalogue";

// ── Database rows (see supabase/schema.sql) ──

export type DbAuthor = {
  id: string;
  slug: string;
  name: string;
  photo_url: string | null;
  profession: string | null;
  bio: string | null;
  mission: string | null;
  quote: string | null;
  featured: boolean | null;
  status: "draft" | "published";
  created_at: string;
};

export type DbBook = {
  id: string;
  title: string;
  slug: string | null;
  author: string;
  author_slug: string | null;
  category: string | null;
  description: string | null;
  cover_url: string | null;
  read_url: string | null;
  downloads: { label: string; url: string }[] | null;
  published_year: number | null;
  status: "draft" | "published";
  created_at: string;
};

export type DbTestimonial = {
  id: string;
  author: string;
  role: string | null;
  quote: string;
  avatar_url: string | null;
  rating: number | null;
  book_title: string | null;
  status: "draft" | "published" | null;
  created_at: string;
};

export type DbRows = {
  authors: DbAuthor[];
  books: DbBook[];
  testimonials: DbTestimonial[];
};

// ── What the public pages consume ──

export type Review = {
  slug: string;
  name: string;
  photo?: string;
  quote: string;
  firstTitle?: string;
  role?: string;
  rating?: number;
};

export type SiteContent = {
  catalogue: CatalogueBook[];
  catalogueAuthors: string[];
  authorDirectory: DirectoryAuthor[];
  featuredAuthors: FeaturedAuthor[];
  showcaseAuthors: FeaturedAuthor[];
  reviews: Review[];
};

function isCategory(key: string | null): key is CategoryKey {
  return CATEGORIES.some((c) => c.key === key);
}

function toProfile(row: DbAuthor, base?: FeaturedAuthor): FeaturedAuthor {
  return {
    slug: row.slug,
    legacySlug: base?.legacySlug ?? row.slug,
    name: row.name,
    photo: row.photo_url || base?.photo,
    profession: row.profession || base?.profession || "",
    bio: row.bio || base?.bio || "",
    mission: row.mission || base?.mission || "",
    quote: row.quote || base?.quote || "",
    featured: row.featured ?? base?.featured ?? false,
    books: base ? [...base.books] : [],
    journey: base?.journey ?? { challenges: [], support: [] },
  };
}

export function mergeContent({ authors, books, testimonials }: DbRows): SiteContent {
  // Profiles (bio, quote, showcase books) keyed by slug
  const profiles = new Map(featuredAuthors.map((a) => [a.slug, { ...a, books: [...a.books] }]));
  const directory = AUTHOR_DIRECTORY.map((a) => ({ ...a, books: [...a.books] }));

  for (const row of authors) {
    const existing = directory.find((d) => d.slug === row.slug);
    const base = profiles.get(row.slug);
    if (row.bio || row.quote || row.profession || base) profiles.set(row.slug, toProfile(row, base));

    if (existing) {
      existing.name = row.name;
      existing.photo = row.photo_url || existing.photo;
    } else {
      directory.push({ slug: row.slug, name: row.name, photo: row.photo_url || undefined, books: [] });
    }
  }

  // Newest admin-added books come first; a slug that matches a hardcoded book replaces it
  const added: CatalogueBook[] = [];
  for (const row of books) {
    const slug = row.slug || slugify(row.title);
    const authorSlug = row.author_slug || slugify(row.author);
    let author = directory.find((d) => d.slug === authorSlug);
    if (!author) {
      author = { slug: authorSlug, name: row.author, books: [] };
      directory.push(author);
    }

    const book: CatalogueBook = {
      slug,
      title: row.title,
      author: author.name,
      authorSlug,
      category: isCategory(row.category) ? row.category : "fiction",
      coverImage: row.cover_url || undefined,
      readUrl: row.read_url || row.downloads?.[0]?.url || undefined,
    };
    added.push(book);
    for (const d of directory) d.books = d.books.filter((b) => b.slug !== slug);
    author.books.unshift(book);

    // Books with a cover and description can be showcased on the author's profile
    const profile = profiles.get(authorSlug);
    if (profile && book.coverImage && row.description && !profile.books.some((b) => b.slug === slug)) {
      const showcase: AuthorBook = {
        title: row.title,
        slug,
        genre: categoryOf(book.category).name,
        coverImage: book.coverImage,
        synopsis: row.description,
        publishedDate: row.published_year ? `${row.published_year}-01-01` : row.created_at.slice(0, 10),
        formats: [],
        highlights: [],
      };
      profile.books.push(showcase);
    }
  }

  const addedSlugs = new Set(added.map((b) => b.slug));
  const catalogue = [...added.reverse(), ...CATALOGUE.filter((b) => !addedSlugs.has(b.slug))];

  const featured = [...profiles.values()];
  for (const d of directory) d.profile = profiles.get(d.slug);

  const authorReviews: Review[] = featured
    .filter((a) => a.quote)
    .map((a) => ({
      slug: a.slug,
      name: a.name,
      photo: a.photo,
      quote: a.quote,
      firstTitle: a.books[0]?.title ?? catalogue.find((b) => b.authorSlug === a.slug)?.title,
    }))
    .filter((r) => r.firstTitle);

  const testimonialReviews: Review[] = testimonials.map((t) => ({
    slug: `testimonial-${t.id}`,
    name: t.author,
    photo: t.avatar_url || undefined,
    quote: t.quote,
    firstTitle: t.book_title || undefined,
    role: t.role || undefined,
    rating: t.rating ?? undefined,
  }));

  return {
    catalogue,
    catalogueAuthors: directory.map((a) => a.name),
    authorDirectory: directory,
    featuredAuthors: featured,
    showcaseAuthors: featured.filter((a) => a.books.length > 0),
    reviews: [...testimonialReviews, ...authorReviews],
  };
}

export const STATIC_CONTENT = mergeContent({ authors: [], books: [], testimonials: [] });

// Matches current slugs and the old /casestudies slugs
export function findInDirectory(directory: DirectoryAuthor[], slug: string) {
  return directory.find((a) => a.slug === slug || a.profile?.legacySlug === slug);
}
