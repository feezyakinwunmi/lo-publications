// src/app/authors/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { featuredAuthors, findAuthor } from "../../data/authors";
import AuthorProfile from "./AuthorProfile";

type Params = { slug: string };

export function generateStaticParams() {
  return featuredAuthors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = findAuthor(slug);
  if (!author) return { title: "Author Not Found | LO Publications" };

  const titles = author.books.map((b) => b.title).join(", ");
  return {
    title: `${author.name}, Author of ${titles} | LO Publications`,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
    openGraph: {
      title: `${author.name} | Featured Author`,
      description: author.bio,
      images: author.books.map((b) => ({ url: b.coverImage, alt: b.title })),
    },
  };
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const author = findAuthor(slug);
  if (!author) notFound();
  if (author.slug !== slug) permanentRedirect(`/authors/${author.slug}`);

  const others = featuredAuthors.filter((a) => a.slug !== author.slug);
  return <AuthorProfile author={author} others={others} />;
}
