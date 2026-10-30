-- LO Publications: tables the admin portal writes to and the public site reads.
-- Paste into Supabase → SQL Editor → Run. Safe to run more than once: it only
-- creates what is missing and adds missing columns to existing tables.

-- ───────────────────────────── Authors ─────────────────────────────
create table if not exists public.authors (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  photo_url text,
  profession text,
  bio text,
  mission text,
  quote text,
  featured boolean not null default false,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

-- ───────────────────────────── Books ─────────────────────────────
create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text not null,
  description text,
  cover_url text,
  downloads jsonb,
  published_year int,
  status text not null default 'published',
  created_at timestamptz not null default now()
);

alter table public.books add column if not exists slug text;
alter table public.books add column if not exists author_slug text;
alter table public.books add column if not exists category text;
alter table public.books add column if not exists read_url text;

create unique index if not exists books_slug_key on public.books (slug) where slug is not null;

-- ───────────────────────────── Testimonials ─────────────────────────────
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  role text,
  quote text not null,
  avatar_url text,
  rating int not null default 5 check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

alter table public.testimonials add column if not exists book_title text;
alter table public.testimonials add column if not exists status text not null default 'published';

-- ───────────────────────────── Row level security ─────────────────────────────
-- Anyone can read published rows; only signed-in admins can see drafts and write.
alter table public.authors enable row level security;
alter table public.books enable row level security;
alter table public.testimonials enable row level security;

do $$
declare t text;
begin
  foreach t in array array['authors', 'books', 'testimonials'] loop
    execute format('drop policy if exists "Public reads published %1$s" on public.%1$I', t);
    execute format(
      'create policy "Public reads published %1$s" on public.%1$I for select using (status = ''published'')', t);
    execute format('drop policy if exists "Admins manage %1$s" on public.%1$I', t);
    execute format(
      'create policy "Admins manage %1$s" on public.%1$I for all to authenticated using (true) with check (true)', t);
  end loop;
end $$;

-- ───────────────────────────── Storage buckets ─────────────────────────────
-- Public buckets for images uploaded from the admin portal.
insert into storage.buckets (id, name, public)
values
  ('book-covers', 'book-covers', true),
  ('author-photos', 'author-photos', true),
  ('testimonials-avatars', 'testimonials-avatars', true)
on conflict (id) do update set public = true;

drop policy if exists "Public reads admin images" on storage.objects;
create policy "Public reads admin images" on storage.objects for select
  using (bucket_id in ('book-covers', 'author-photos', 'testimonials-avatars'));

drop policy if exists "Admins upload admin images" on storage.objects;
create policy "Admins upload admin images" on storage.objects for insert to authenticated
  with check (bucket_id in ('book-covers', 'author-photos', 'testimonials-avatars'));

drop policy if exists "Admins update admin images" on storage.objects;
create policy "Admins update admin images" on storage.objects for update to authenticated
  using (bucket_id in ('book-covers', 'author-photos', 'testimonials-avatars'));

drop policy if exists "Admins delete admin images" on storage.objects;
create policy "Admins delete admin images" on storage.objects for delete to authenticated
  using (bucket_id in ('book-covers', 'author-photos', 'testimonials-avatars'));
