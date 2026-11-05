// src/app/resources/[tool]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESOURCE_TOOLS, getTool } from "../data";
import ToolShell from "../ToolShell";

type Props = { params: Promise<{ tool: string }> };

export function generateStaticParams() {
  return RESOURCE_TOOLS.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool Not Found | LO Publications" };
  return {
    title: `${tool.title} | LO Publications`,
    description: tool.description,
    keywords: [tool.keyword, "free author tools", "LO Publications"],
    alternates: { canonical: `/resources/${tool.slug}` },
    openGraph: { title: tool.title, description: tool.description, locale: "en_CA", type: "website" },
  };
}

export default async function ToolPage({ params }: Props) {
  const { tool: slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const url = `https://lopublications.com/resources/${tool.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    publisher: { "@type": "Organization", name: "LO Publications" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolShell tool={tool} />
    </>
  );
}
