// src/app/books/page.tsx
import type { Metadata } from "next";
import BookClient from "./bookClient";

const SITE_URL = "https://lopublications.com"; // ← change to your real domain

export const metadata: Metadata = {
  title: "Books | Our Published Works — LO Publications",
  description:
    "Browse LO Publications' catalogue of published books — Christian living, Bible study, memoirs, business, finance, children's books, education and fiction.",
  keywords: [
    "published books",
    "faith-based books",
    "Christian books",
    "devotionals",
    "Nigerian authors",
    "LO Publications catalogue",
    "inspirational books",
    "memoir",
    "poetry collection",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/books",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/books`,
    siteName: "LO Publications",
    title: "Our Published Works | LO Publications",
    description:
      "Stories of faith, hope, transformation, and purpose — crafted with love and excellence. Browse our full catalogue of published books.",
    images: [
      {
        url: "/og-books.jpg", // ← 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "LO Publications — Published Books Catalogue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Published Works | LO Publications",
    description:
      "Browse our catalogue of faith-based, literary, and inspirational books.",
    images: ["/og-books.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { CATALOGUE, categoryOf } from "../data/catalogue";

export default function BooksPage() {
  const publishedBooks = CATALOGUE;

  // CollectionPage + ItemList schema for the whole catalogue
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/books#collection`,
    url: `${SITE_URL}/books`,
    name: "Our Published Works",
    description:
      "Browse LO Publications' catalogue of published books across fiction, devotionals, memoirs, parenting, poetry, and faith-based titles.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LO Publications",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: publishedBooks.length,
      itemListElement: publishedBooks.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Book",
          "@id": `${SITE_URL}/books#${book.slug}`,
          name: book.title,
          author: {
            "@type": "Person",
            name: book.author,
          },
          image: book.coverImage ? `${SITE_URL}${book.coverImage}` : undefined,
          genre: categoryOf(book.category).name,
          publisher: {
            "@type": "Organization",
            name: "LO Publications",
            url: SITE_URL,
          },
        },
      })),
    },
  };

  // Breadcrumb schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Books",
        item: `${SITE_URL}/books`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BookClient />

     
    </>
  );
}
