-- LO Publications: database-driven blog
-- Paste this whole file into Supabase > SQL Editor > New query > Run.
-- Safe to run more than once. Hardcoded posts are untouched; this only adds
-- what the admin panel needs to publish new posts from the database.

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text,
  excerpt text,
  content text not null default '',
  thumbnail_url text,
  publisher_name text,
  status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now()
);

-- New columns used by the upgraded editor
alter table public.blog_posts add column if not exists category text not null default 'General';
alter table public.blog_posts add column if not exists keyword text;
alter table public.blog_posts add column if not exists updated_at timestamptz not null default now();

-- Every post needs a unique address. If this line errors, two posts share a slug:
-- rename one in the admin panel and run it again.
create unique index if not exists blog_posts_slug_key on public.blog_posts (slug) where slug is not null;
create index if not exists blog_posts_status_published_idx on public.blog_posts (status, published_at desc);

-- Keep updated_at fresh
create or replace function public.blog_posts_touch() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_touch on public.blog_posts;
create trigger blog_posts_touch before update on public.blog_posts
  for each row execute function public.blog_posts_touch();

-- Security: visitors can only read PUBLISHED posts; signed-in staff can manage everything
alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read published blog posts" on public.blog_posts
  for select using (status = 'published');

drop policy if exists "Staff manage blog posts" on public.blog_posts;
create policy "Staff manage blog posts" on public.blog_posts
  for all to authenticated using (true) with check (true);
