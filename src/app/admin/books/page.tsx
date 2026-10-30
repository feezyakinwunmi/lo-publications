// src/app/admin/books/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { Plus, Edit, Trash2, Save, X, Loader2 } from "lucide-react";
import { createClient, SUPABASE_NOT_CONFIGURED_MESSAGE } from "@/lib/supabase/client";
import FileDropzone from "../../components/admin/FileDropzone";
import { Field, Select, StatusBadge, StatusToggle, TextArea, TextInput } from "../../components/admin/FormFields";
import { CATEGORIES, categoryOf, slugify } from "../../data/catalogue";
import { STATIC_CONTENT, type DbAuthor, type DbBook } from "../../data/siteContent";
import { refreshPublicPages } from "../actions";

type Link = { label: string; url: string };

export default function AdminBooks() {
  const [books, setBooks] = useState<DbBook[]>([]);
  const [dbAuthors, setDbAuthors] = useState<DbAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState<DbBook | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [readUrl, setReadUrl] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [downloads, setDownloads] = useState<Link[]>([]);
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [saving, setSaving] = useState(false);

  // Authors already on the site (hardcoded) plus those added in the portal
  const authorOptions = useMemo(() => {
    const map = new Map(STATIC_CONTENT.authorDirectory.map((a) => [a.name, a.slug]));
    for (const a of dbAuthors) map.set(a.name, a.slug);
    return [...map].map(([name, slug]) => ({ name, slug })).sort((a, b) => a.name.localeCompare(b.name));
  }, [dbAuthors]);

  async function fetchData() {
    const supabase = createClient();
    if (!supabase) {
      setError(SUPABASE_NOT_CONFIGURED_MESSAGE);
      setLoading(false);
      return;
    }

    const [booksRes, authorsRes] = await Promise.all([
      supabase.from("books").select("*").order("created_at", { ascending: false }),
      supabase.from("authors").select("*").order("name"),
    ]);

    if (booksRes.error) {
      setError(booksRes.error.message);
      console.error("Fetch error:", booksRes.error);
    } else {
      setBooks(booksRes.data || []);
    }
    setDbAuthors(authorsRes.data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (book: DbBook | null = null) => {
    setCurrentBook(book);
    setTitle(book?.title ?? "");
    setAuthor(book?.author ?? "");
    setCategory(book?.category ?? "");
    setDescription(book?.description ?? "");
    setCoverUrl(book?.cover_url ?? "");
    setReadUrl(book?.read_url ?? "");
    setPublishedYear(book?.published_year ? String(book.published_year) : "");
    setDownloads(book?.downloads ?? []);
    setStatus(book?.status === "draft" ? "draft" : "published");
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!title.trim() || !author.trim() || !category) {
      setFormError("Title, author and category are required");
      return;
    }

    setSaving(true);
    setFormError(null);

    try {
      const supabase = createClient();
      if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);

      const authorName = author.trim();
      const bookData = {
        title: title.trim(),
        slug: currentBook?.slug || slugify(title),
        author: authorName,
        author_slug: authorOptions.find((a) => a.name === authorName)?.slug ?? slugify(authorName),
        category,
        description: description.trim() || null,
        cover_url: coverUrl || null,
        read_url: readUrl.trim() || null,
        published_year: publishedYear ? Number(publishedYear) : null,
        downloads: downloads.filter((d) => d.url.trim()).length ? downloads.filter((d) => d.url.trim()) : null,
        status,
      };

      const result = currentBook
        ? await supabase.from("books").update(bookData).eq("id", currentBook.id)
        : await supabase.from("books").insert(bookData);

      if (result.error) throw result.error;

      await fetchData();
      await refreshPublicPages();
      setIsModalOpen(false);
    } catch (err: any) {
      setFormError("Save failed: " + (err.message || "Unknown error"));
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const updateDownloadLink = (index: number, field: keyof Link, value: string) => {
    setDownloads(downloads.map((d, i) => (i === index ? { ...d, [field]: value } : d)));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this book permanently?")) return;

    const supabase = createClient();
    if (!supabase) return alert(SUPABASE_NOT_CONFIGURED_MESSAGE);

    const { error } = await supabase.from("books").delete().eq("id", id);
    if (error) return alert("Delete failed: " + error.message);

    setBooks(books.filter((b) => b.id !== id));
    await refreshPublicPages();
  };

  return (
    <div className="mt-30 md:mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Manage Books</h1>

        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition shadow-md"
        >
          <Plus size={20} />
          Add Book
        </button>
      </div>
      <p className="text-gray-600 mb-10">
        Books added here appear on the Books, Authors and Home pages alongside the {STATIC_CONTENT.catalogue.length}{" "}
        built-in titles. Drafts stay hidden from the public site.
      </p>

      {loading ? (
        <div className="text-center py-12">
          <Loader2 className="animate-spin mx-auto" size={48} />
          <p className="mt-4 text-gray-600">Loading books...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-6 rounded-xl text-center font-medium">{error}</div>
      ) : books.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No books yet. Click &quot;Add Book&quot; to get started.</div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md overflow-x-auto border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Book</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Author</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {book.cover_url ? (
                        <img src={book.cover_url} alt="" className="w-10 h-14 object-cover rounded" />
                      ) : (
                        <div className="w-10 h-14 rounded bg-gray-100" />
                      )}
                      <span className="font-medium text-gray-900">{book.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{book.author}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {book.category && CATEGORIES.some((c) => c.key === book.category)
                      ? categoryOf(book.category as (typeof CATEGORIES)[number]["key"]).name
                      : "—"}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={book.status} />
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    <button onClick={() => openModal(book)} className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(book.id)} className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-900">{currentBook ? "Edit Book" : "Add New Book"}</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <Field label="Book Title *">
                <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter book title..." />
              </Field>

              <Field label="Author *" hint="Pick an existing author or type a new name. Add a bio on the Authors page.">
                <TextInput
                  list="author-options"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Start typing an author's name..."
                />
                <datalist id="author-options">
                  {authorOptions.map((a) => (
                    <option key={a.slug} value={a.name} />
                  ))}
                </datalist>
              </Field>

              <Field label="Category *" hint="The shelf this book appears on in the Books page.">
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Choose a category...</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                label="Description"
                hint="Books with a cover and description are also showcased on the author's profile."
              >
                <TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief book description..."
                />
              </Field>

              <Field label="Book Cover" hint="Without a cover, the site shows a designed cover in the category colour.">
                <FileDropzone
                  bucket="book-covers"
                  onUploadComplete={(url) => setCoverUrl(url || "")}
                  currentUrl={coverUrl}
                  accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
                  maxSizeMB={5}
                  label=""
                />
              </Field>

              <Field label="Read / Buy Link" hint="Where the “Read” button goes (Amazon, Selar, Google Drive...).">
                <TextInput value={readUrl} onChange={(e) => setReadUrl(e.target.value)} placeholder="https://..." />
              </Field>

              <Field label="Published Year">
                <TextInput
                  type="number"
                  value={publishedYear}
                  onChange={(e) => setPublishedYear(e.target.value)}
                  placeholder={String(new Date().getFullYear())}
                />
              </Field>

              <Field label="Extra Download Links">
                {downloads.map((link, index) => (
                  <div key={index} className="flex gap-4 mb-4 items-center">
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => updateDownloadLink(index, "label", e.target.value)}
                      placeholder="Label (e.g. PDF Nigeria)"
                      className="flex-1 min-w-0 text-black px-4 py-3 rounded-xl border border-gray-300"
                    />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => updateDownloadLink(index, "url", e.target.value)}
                      placeholder="https://..."
                      className="flex-1 min-w-0 px-4 py-3 text-black rounded-xl border border-gray-300"
                    />
                    <button
                      onClick={() => setDownloads(downloads.filter((_, i) => i !== index))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setDownloads([...downloads, { label: "", url: "" }])}
                  className="text-red-900 hover:text-red-700 font-medium flex items-center gap-2 mt-2"
                >
                  <Plus size={18} /> Add Download Link
                </button>
              </Field>

              <Field label="Status">
                <StatusToggle value={status} onChange={setStatus} />
              </Field>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-3 px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-800 transition disabled:opacity-50"
                >
                  {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                  {saving ? "Saving..." : currentBook ? "Update Book" : "Add Book"}
                </button>
              </div>

              {formError && <p className="text-red-600 text-center mt-4">{formError}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
