// src/app/admin/blog/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Loader2, Image as ImageIcon, ExternalLink } from "lucide-react";
import { allBlogPosts } from "@/app/data/blog";
import { createClient, SUPABASE_NOT_CONFIGURED_MESSAGE } from "@/lib/supabase/client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import { StyledImage } from '@/lib/tiptap/extensions/StyledImage';
import { Callout } from '@/lib/tiptap/extensions/Callout';
import Dropcursor from '@tiptap/extension-dropcursor';
import Placeholder from '@tiptap/extension-placeholder';
import FileDropzone from "../../components/admin/FileDropzone";
import { ImageUpload } from '@/lib/tiptap/extensions/ImageUpload'

type BlogPost = {
  id: string;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  content: string;
  thumbnail_url?: string | null;
  publisher_name?: string | null;
  category?: string | null;
  keyword?: string | null;
  status: "draft" | "published";
  published_at?: string | null;
};

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [title, setTitle] = useState("");
  const [publisherName, setPublisherName] = useState(""); // ← New state
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [category, setCategory] = useState("General");
  const [excerpt, setExcerpt] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pubDate, setPubDate] = useState("");

  // TipTap editor setup
const editor = useEditor({
  extensions: [
    StarterKit,
    StyledImage.configure({ inline: false }),
    Callout,
    Dropcursor,
    Placeholder.configure({ placeholder: "Start writing..." }),
    ImageUpload.configure({
      uploadFn: async (file: File) => {
        const supabase = createClient()
        if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE)
        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
        const { data, error } = await supabase.storage
          .from('thumbnails')
          .upload(fileName, file)

        if (error) throw error

        const { data: urlData } = supabase.storage
          .from('thumbnails')
          .getPublicUrl(fileName)

        return urlData.publicUrl
      }
    })
  ],
  content: currentPost?.content || '',
  immediatelyRender: false,
  shouldRerenderOnTransaction: true,
  editorProps: { attributes: { class: 'outline-none min-h-[380px]' } },
})

// Custom image upload handler
const handleImageUpload = async (file: File): Promise<string> => {
  try {
    const supabase = createClient();

    if (!supabase) {
      throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);
    }

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = `blog-images/${fileName}`;

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('thumbnails') // or your preferred bucket
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('thumbnails')
      .getPublicUrl(filePath);

    if (!urlData.publicUrl) throw new Error("Failed to get public URL");

    return urlData.publicUrl;
  } catch (err) {
    console.error("Image upload failed:", err);
    throw err; // TipTap will handle the error
  }
};

  // Fetch real posts (include publisher_name)
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const supabase = createClient();

      if (!supabase) {
        setError(SUPABASE_NOT_CONFIGURED_MESSAGE);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) {
        setError(error.message);
        console.error(error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const openModal = (post: BlogPost | null = null) => {
    if (post) {
      setCurrentPost(post);
      setTitle(post.title);
      setPublisherName(post.publisher_name || ""); // ← Load existing value
      setThumbnailUrl(post.thumbnail_url || "");
      setSlug(post.slug || "");
      setSlugTouched(true);
      setCategory(post.category || "General");
      setExcerpt(post.excerpt || "");
      setKeyword(post.keyword || "");
      setPubDate(post.published_at ? post.published_at.slice(0, 10) : "");
      if (editor) editor.commands.setContent(post.content);
    } else {
      setCurrentPost(null);
      setTitle("");
      setPublisherName(""); // ← Default empty
      setThumbnailUrl("");
      setSlug("");
      setSlugTouched(false);
      setCategory("General");
      setExcerpt("");
      setKeyword("");
      setPubDate("");
      if (editor) editor.commands.setContent("");
    }
    setIsModalOpen(true);
  };

  const slugify = (v: string) =>
    v.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const handleSave = async (nextStatus: "draft" | "published") => {
    const html = editor?.getHTML() ?? "";
    const finalSlug = slugify(slug || title);

    if (!title.trim() || !publisherName.trim() || !editor?.getText().trim()) {
      setError("Title, author name and content are required");
      return;
    }
    if (!finalSlug) {
      setError("Please enter a web address (slug) for the post");
      return;
    }
    if (allBlogPosts.some((p) => p.slug === finalSlug)) {
      setError("That web address is already used by an existing article. Please choose a different slug.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const supabase = createClient();

      if (!supabase) {
        throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);
      }

      // Keep the original publish date when editing; use the chosen date, or now, on first publish
      const publishedAt =
        nextStatus === "published"
          ? pubDate
            ? new Date(`${pubDate}T12:00:00Z`).toISOString()
            : currentPost?.published_at || new Date().toISOString()
          : currentPost?.published_at || null;

      const postData = {
        title: title.trim(),
        slug: finalSlug,
        excerpt: excerpt.trim() || editor.getText().slice(0, 155).trim() + "...",
        content: html,
        thumbnail_url: thumbnailUrl || null,
        publisher_name: publisherName.trim(),
        category: category.trim() || "General",
        keyword: keyword.trim() || null,
        status: nextStatus,
        published_at: publishedAt,
      };

      const result = currentPost
        ? await supabase.from("blog_posts").update(postData).eq("id", currentPost.id)
        : await supabase.from("blog_posts").insert(postData);

      if (result.error) {
        if (result.error.code === "23505") {
          throw new Error("Another post already uses that web address. Please change the slug.");
        }
        throw result.error;
      }

      // Refresh list
      const { data } = await supabase.from("blog_posts").select("*").order("published_at", { ascending: false, nullsFirst: true });
      setPosts(data || []);
      setIsModalOpen(false);
    } catch (err: any) {
      setError("Save failed: " + err.message);
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;

    try {
      const supabase = createClient();

      if (!supabase) {
        throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);
      }

      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;

      setPosts(posts.filter(p => p.id !== id));
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  return (
    <div className="p-6 md:p-10 mt-30 md:mt-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Manage Blog Posts</h1>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition shadow-md"
        >
          <Plus size={20} /> New Post
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <Loader2 className="animate-spin mx-auto" size={48} />
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-6 rounded-xl text-center">{error}</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No blog posts yet. Create your first one!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
              {post.thumbnail_url && (
                <img src={post.thumbnail_url} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                {post.publisher_name && (
                  <p className="text-sm text-gray-600 mb-2">By {post.publisher_name}</p>
                )}
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${post.status === "published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>
                    {post.status === "published" ? "Published" : "Draft"}
                  </span>
                  {post.category && <span className="text-gray-500">{post.category}</span>}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => openModal(post)} className="text-blue-600 hover:text-blue-800">
                    <Edit size={20} />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                  {post.status === "published" && (
                    <a href={`/blog/${post.slug || post.id}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800" title="View on site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentPost ? "Edit Post" : "New Blog Post"}
              </h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Post Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!slugTouched) setSlug(slugify(e.target.value));
                  }}
                  className="w-full px-5 text-black  py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter a catchy title..."
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Web address (slug)</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => {
                      setSlug(slugify(e.target.value));
                      setSlugTouched(true);
                    }}
                    className="w-full px-5 text-black py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                    placeholder="my-article-title"
                  />
                  <p className="mt-1 text-xs text-gray-500">lopublications.com/blog/{slug || "…"}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <input
                    type="text"
                    list="blog-categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-5 text-black py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                    placeholder="e.g. Writing, Book Marketing"
                  />
                  <datalist id="blog-categories">
                    {Array.from(new Set([...allBlogPosts.map((p) => p.category), ...posts.map((p) => p.category || "")]))
                      .filter(Boolean)
                      .map((c) => (
                        <option key={c} value={c} />
                      ))}
                  </datalist>
                </div>
              </div>

              {/* New field: Publisher Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Publisher Name *</label>
                <input
                  type="text"
                  value={publisherName}
                  onChange={(e) => setPublisherName(e.target.value)}
                  className="w-full px-5 text-black  py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="LO Publications / Your Name / Pen Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Short description (shown on the blog and in Google)</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  maxLength={200}
                  className="w-full px-5 text-black py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="One or two sentences, about 150 characters. Leave blank to use the start of the article."
                />
                <p className="mt-1 text-xs text-gray-500">{excerpt.length}/200</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Focus keyword (optional)</label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full px-5 text-black py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                    placeholder="e.g. how to publish a book in Canada"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Publish date</label>
                  <input
                    type="date"
                    value={pubDate}
                    onChange={(e) => setPubDate(e.target.value)}
                    className="w-full px-5 text-black py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <p className="mt-1 text-xs text-gray-500">Leave blank to use today. You can back-date a post.</p>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Thumbnail</label>
                <FileDropzone
                  bucket="thumbnails"
                  onUploadComplete={(url) => setThumbnailUrl(url || "")}
                  currentUrl={thumbnailUrl}
                  accept={{ 'image/*': ['.png', '.jpeg', '.jpg', '.gif'] }}
                  maxSizeMB={5}
                  label="Upload featured image (JPG/PNG)"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Content</label>
                <div className="border border-gray-300 rounded-xl bg-white min-h-[400px]">
                  {/* Toolbar */}
                  <div className="sticky top-[73px] z-[5] flex flex-wrap items-center gap-1 border-b bg-gray-50 p-2">
                    <ToolBtn label="Bold" active={editor?.isActive("bold")} onClick={() => editor?.chain().focus().toggleBold().run()}><strong>B</strong></ToolBtn>
                    <ToolBtn label="Italic" active={editor?.isActive("italic")} onClick={() => editor?.chain().focus().toggleItalic().run()}><em>I</em></ToolBtn>
                    <ToolBtn label="Underline" active={editor?.isActive("underline")} onClick={() => editor?.chain().focus().toggleUnderline().run()}><span className="underline">U</span></ToolBtn>
                    <ToolBtn label="Strikethrough" active={editor?.isActive("strike")} onClick={() => editor?.chain().focus().toggleStrike().run()}><span className="line-through">S</span></ToolBtn>
                    <Sep />
                    <ToolBtn label="Heading (large)" active={editor?.isActive("heading", { level: 2 })} onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</ToolBtn>
                    <ToolBtn label="Heading (smaller)" active={editor?.isActive("heading", { level: 3 })} onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}>H3</ToolBtn>
                    <Sep />
                    <ToolBtn label="Bullet list" active={editor?.isActive("bulletList")} onClick={() => editor?.chain().focus().toggleBulletList().run()}>• List</ToolBtn>
                    <ToolBtn label="Numbered list" active={editor?.isActive("orderedList")} onClick={() => editor?.chain().focus().toggleOrderedList().run()}>1. List</ToolBtn>
                    <ToolBtn label="Quote" active={editor?.isActive("blockquote")} onClick={() => editor?.chain().focus().toggleBlockquote().run()}>&ldquo; Quote</ToolBtn>
                    <ToolBtn label="Divider line" onClick={() => editor?.chain().focus().setHorizontalRule().run()}>&mdash;</ToolBtn>
                    <Sep />
                    <ToolBtn label="Blue info box" active={editor?.isActive("callout", { type: "info" })} onClick={() => editor?.chain().focus().toggleCallout("info").run()}><span className="text-blue-700">Info</span></ToolBtn>
                    <ToolBtn label="Green tip box" active={editor?.isActive("callout", { type: "tip" })} onClick={() => editor?.chain().focus().toggleCallout("tip").run()}><span className="text-green-700">Tip</span></ToolBtn>
                    <ToolBtn label="Amber warning box" active={editor?.isActive("callout", { type: "warning" })} onClick={() => editor?.chain().focus().toggleCallout("warning").run()}><span className="text-amber-700">Note</span></ToolBtn>
                    <Sep />
                    <ToolBtn
                      label="Link"
                      active={editor?.isActive("link")}
                      onClick={() => {
                        const prev = (editor?.getAttributes("link").href as string | undefined) || "https://";
                        const url = window.prompt("Link address (leave empty to remove the link)", prev);
                        if (url === null) return;
                        if (url.trim() === "" || url.trim() === "https://") {
                          editor?.chain().focus().extendMarkRange("link").unsetLink().run();
                        } else {
                          editor?.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
                        }
                      }}
                    >
                      <span className="underline">Link</span>
                    </ToolBtn>
                    <ToolBtn
                      label="Insert image"
                      onClick={() => {
                        const input = document.createElement("input");
                        input.type = "file";
                        input.accept = "image/*";
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0];
                          if (file) {
                            handleImageUpload(file)
                              .then((url) => editor?.chain().focus().setImage({ src: url }).run())
                              .catch((err) => setError("Image upload failed: " + (err?.message || err)));
                          }
                        };
                        input.click();
                      }}
                    >
                      <ImageIcon size={18} />
                    </ToolBtn>
                    <Sep />
                    <ToolBtn label="Undo" onClick={() => editor?.chain().focus().undo().run()}>&#8630;</ToolBtn>
                    <ToolBtn label="Redo" onClick={() => editor?.chain().focus().redo().run()}>&#8631;</ToolBtn>
                    <ToolBtn label="Clear formatting" onClick={() => editor?.chain().focus().clearNodes().unsetAllMarks().run()}>Clear</ToolBtn>
                  </div>

                  {/* Image controls: appear when a picture is selected */}
                  {editor?.isActive("image") && (
                    <div className="flex flex-wrap items-center gap-2 border-b bg-red-50 px-3 py-2 text-sm text-gray-800">
                      <span className="font-semibold">Picture:</span>
                      <span>Size</span>
                      {(["small", "medium", "full"] as const).map((sz) => (
                        <ToolBtn key={sz} label={`${sz} picture`} active={editor.getAttributes("image").size === sz} onClick={() => editor.chain().focus().updateAttributes("image", { size: sz }).run()}>
                          {sz[0].toUpperCase() + sz.slice(1)}
                        </ToolBtn>
                      ))}
                      <span className="ml-3">Position</span>
                      {(["left", "center", "right"] as const).map((al) => (
                        <ToolBtn key={al} label={`align ${al}`} active={editor.getAttributes("image").align === al} onClick={() => editor.chain().focus().updateAttributes("image", { align: al }).run()}>
                          {al[0].toUpperCase() + al.slice(1)}
                        </ToolBtn>
                      ))}
                    </div>
                  )}

                  <EditorContent editor={editor} className="post-content px-6 py-6 text-left" />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSave("draft")}
                  disabled={saving}
                  className="px-8 py-4 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-100 transition disabled:opacity-50"
                >
                  Save as draft
                </button>
                <button
                  onClick={() => handleSave("published")}
                  disabled={saving}
                  className="flex items-center gap-3 px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-800 transition disabled:opacity-50"
                >
                  {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                  {saving ? "Saving..." : currentPost && currentPost.status === "published" ? "Update post" : "Publish post"}
                </button>
              </div>

              {error && <p className="text-red-600 text-center mt-4">{error}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ToolBtn({
  children,
  onClick,
  active,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active ? true : undefined}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`min-w-[2.25rem] rounded-lg px-2.5 py-1.5 text-sm text-gray-800 transition ${
        active ? "bg-red-900 text-white [&_*]:!text-white" : "hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <span className="mx-1 h-5 w-px bg-gray-300" aria-hidden="true" />;
}
