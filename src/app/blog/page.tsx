// app/blog/page.tsx
import { Metadata } from 'next';
import BlogClient from './BlogClient';

import { allBlogPosts } from '@/app/data/blog';
import { getDbPosts } from '@/app/data/getBlogPosts';

// New posts come from the database; refresh the list at most once a minute.
export const revalidate = 60;


export const generateMetadata = (): Metadata => {
  return {
    title: "Blog | Book Marketing, Publishing & Writing Insights | LO Publications",
    description: "Practical guides on book marketing, self-publishing, writing craft, publishing industry networking, and faith-based literature for authors in Canada and beyond.",
    keywords: [
      "book marketing", "self-publishing", "writing craft", "publishing industry",
      "author marketing", "Canadian book marketing", "writing career",
      "faith-based literature", "teen writing", "book launch strategies",
      "publishing insights", "author networking",
      "Ottawa publishing", "book publishing Canada", "author branding Ottawa"
    ],
    authors: [{ name: "LOPublications" }],
    openGraph: {
      title: "Blog - Book Marketing, Publishing & Writing Insights",
      description: "Discover practical guides on book marketing, self-publishing, writing craft, and publishing industry insights for authors.",
      images: [{ url: allBlogPosts[0].image, alt: "LO Publications Blog" }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [allBlogPosts[0].image],
    },
    alternates: {
      canonical: "/blog",
    },
  };
};

export default async function BlogPage() {
  const dbPosts = (await getDbPosts()).map((d) => d.post);
  // Hardcoded posts win if a database post ever reuses their address
  const taken = new Set(allBlogPosts.map((p) => p.slug));
  const blogPosts = [...dbPosts.filter((p) => !taken.has(p.slug)), ...allBlogPosts];
  return <BlogClient blogPosts={blogPosts} />;
}