// app/blog/[slug]/BlogPostContent.tsx
'use client';

type Props = { content: string };

export default function BlogPostContent({ content }: Props) {
  return (
    <div
      className="
        max-w-none text-gray-600 text-lg leading-relaxed
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:leading-tight
        [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-10 [&_h3]:mb-4
        [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-8 [&_h4]:mb-3
        [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-6
        [&_ul]:my-6 [&_ul]:space-y-3 [&_ul]:list-none [&_ul]:pl-0
        [&_ol]:my-6 [&_ol]:space-y-3 [&_ol]:pl-6
        [&_li]:text-gray-600 [&_li]:leading-relaxed [&_li]:relative [&_li]:pl-6
        [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.65em] [&_ul>li]:before:w-2 [&_ul>li]:before:h-2 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-red-500
        [&_strong]:text-gray-900 [&_strong]:font-semibold
        [&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700
        [&_blockquote]:border-l-4 [&_blockquote]:border-red-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_blockquote]:my-8
        [&_img]:rounded-2xl [&_img]:my-8 [&_img]:w-full [&_img]:h-auto
        [&_table]:w-full [&_table]:my-8 [&_table]:text-left [&_table]:text-sm [&_table]:rounded-2xl [&_table]:overflow-hidden
        [&_thead]:bg-gray-900 [&_thead]:text-white
        [&_th]:px-5 [&_th]:py-3 [&_th]:font-semibold
        [&_tbody_tr]:border-b [&_tbody_tr]:border-gray-100
        [&_tbody_td]:px-5 [&_tbody_td]:py-3 [&_tbody_td]:text-gray-600
        [&_hr]:my-12 [&_hr]:border-gray-200
        [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-red-600
        [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:my-8
        [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}