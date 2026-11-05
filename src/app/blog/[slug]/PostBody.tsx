// app/blog/[slug]/PostBody.tsx
// Renders the body of a post that was written in the admin panel (sanitised HTML from the database).

export default function PostBody({ html }: { html: string }) {
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
