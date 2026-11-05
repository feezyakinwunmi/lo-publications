// app/blog/[slug]/WritingArticle.tsx
// Renders the body of a Writing-cluster article (HTML supplied by the author, built at publish time),
// followed by image cards for the related posts and the credit line (always the last line).

import Link from 'next/link';
import { allBlogPosts } from '@/app/data/blog';

type Props = {
  html: string;
  label: string;
  slugs: string[];
};

export default function WritingArticle({ html, label, slugs }: Props) {
  const related = slugs
    .map((s) => allBlogPosts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <div
        className="
          max-w-none text-gray-700 text-lg leading-relaxed
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:leading-tight
          [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
          [&_ul]:my-6 [&_ul]:space-y-3 [&_ul]:list-disc [&_ul]:pl-6
          [&_li]:text-gray-700 [&_li]:leading-relaxed
          [&_strong]:text-gray-900 [&_strong]:font-semibold
          [&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700
          [&_blockquote]:border-l-4 [&_blockquote]:border-red-500 [&_blockquote]:pl-6 [&_blockquote]:text-gray-800 [&_blockquote]:my-8
          [&_blockquote_p]:mb-0
          [&_figure]:my-10
          [&_img]:rounded-2xl [&_img]:w-full [&_img]:h-auto [&_img]:shadow-md
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200" aria-label={label}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{label}</h2>
          <div
            className={`grid gap-6 ${
              related.length > 1 ? 'sm:grid-cols-2' : 'sm:max-w-md'
            }`}
          >
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[1200/630] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt=""
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold leading-snug text-gray-900 transition group-hover:text-red-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-lg text-gray-600">
        <em>Inspired by William Zinsser’s On Writing Well.</em>
      </p>
    </>
  );
}
