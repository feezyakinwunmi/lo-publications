// app/blog/[slug]/PostBody.tsx
// Renders the body of a post that was written in the admin panel (sanitised HTML from the database).

export default function PostBody({ html }: { html: string }) {
  return (
    <div
      className="
        max-w-none text-gray-700 text-lg leading-relaxed
        [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-12 [&_h1]:mb-6
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:leading-tight
        [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-10 [&_h3]:mb-4
        [&_p]:leading-relaxed [&_p]:mb-6
        [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
        [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
        [&_strong]:text-gray-900 [&_strong]:font-semibold
        [&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700
        [&_blockquote]:border-l-4 [&_blockquote]:border-red-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-800 [&_blockquote]:my-8
        [&_img]:rounded-2xl [&_img]:my-8 [&_img]:w-full [&_img]:h-auto [&_img]:shadow-md
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
