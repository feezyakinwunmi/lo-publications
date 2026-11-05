// app/blog/[slug]/WritingArticle.tsx
// Renders the body of a Writing-cluster article (HTML supplied by the author, built at publish time).

export default function WritingArticle({ html }: { html: string }) {
  return (
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
        [&_p.series]:mt-12 [&_p.series]:pt-8 [&_p.series]:border-t [&_p.series]:border-gray-200
        [&_p.credit]:text-gray-600 [&_p.credit]:mb-0
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
