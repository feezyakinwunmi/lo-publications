// src/app/admin/authors/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Loader2, Star } from "lucide-react";
import { createClient, SUPABASE_NOT_CONFIGURED_MESSAGE } from "@/lib/supabase/client";
import FileDropzone from "../../components/admin/FileDropzone";
import { Field, Select, StatusBadge, StatusToggle, TextArea, TextInput } from "../../components/admin/FormFields";
import { slugify } from "../../data/catalogue";
import { STATIC_CONTENT, type DbAuthor } from "../../data/siteContent";
import { refreshPublicPages } from "../actions";

// Hardcoded authors can be given a portal entry with the same slug, which then
// overrides their name, photo and bio on the site
const builtInAuthors = STATIC_CONTENT.authorDirectory;

export default function AdminAuthors() {
  const [authors, setAuthors] = useState<DbAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState<DbAuthor | null>(null);
  const [overrides, setOverrides] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [mission, setMission] = useState("");
  const [quote, setQuote] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [saving, setSaving] = useState(false);

  async function fetchAuthors() {
    const supabase = createClient();
    if (!supabase) {
      setError(SUPABASE_NOT_CONFIGURED_MESSAGE);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from("authors").select("*").order("created_at", { ascending: false });
    if (error) {
      setError(error.message);
      console.error("Fetch error:", error);
    } else {
      setAuthors(data || []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAuthors();
  }, []);

  const openModal = (author: DbAuthor | null = null) => {
    setCurrent(author);
    setOverrides(author && builtInAuthors.some((a) => a.slug === author.slug) ? author.slug : "");
    setName(author?.name ?? "");
    setPhotoUrl(author?.photo_url ?? "");
    setProfession(author?.profession ?? "");
    setBio(author?.bio ?? "");
    setMission(author?.mission ?? "");
    setQuote(author?.quote ?? "");
    setFeatured(author?.featured ?? false);
    setStatus(author?.status === "draft" ? "draft" : "published");
    setFormError(null);
    setIsModalOpen(true);
  };

  // Choosing a built-in author pre-fills their current details to edit
  const pickBuiltIn = (slug: string) => {
    setOverrides(slug);
    const base = builtInAuthors.find((a) => a.slug === slug);
    if (!base) return;
    setName(base.name);
    setPhotoUrl(base.photo?.startsWith("http") ? base.photo : "");
    setProfession(base.profile?.profession ?? "");
    setBio(base.profile?.bio ?? "");
    setMission(base.profile?.mission ?? "");
    setQuote(base.profile?.quote ?? "");
    setFeatured(base.profile?.featured ?? false);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setFormError("Name is required");
      return;
    }

    setSaving(true);
    setFormError(null);

    try {
      const supabase = createClient();
      if (!supabase) throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);

      const authorData = {
        slug: current?.slug || overrides || slugify(name),
        name: name.trim(),
        photo_url: photoUrl || null,
        profession: profession.trim() || null,
        bio: bio.trim() || null,
        mission: mission.trim() || null,
        quote: quote.trim() || null,
        featured,
        status,
      };

      const result = current
        ? await supabase.from("authors").update(authorData).eq("id", current.id)
        : await supabase.from("authors").insert(authorData);

      if (result.error) {
        if (result.error.code === "23505") throw new Error("An author with this name already exists in the portal.");
        throw result.error;
      }

      await fetchAuthors();
      await refreshPublicPages();
      setIsModalOpen(false);
    } catch (err: any) {
      setFormError("Save failed: " + (err.message || "Unknown error"));
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this author? Their books stay listed under the same name.")) return;

    const supabase = createClient();
    if (!supabase) return alert(SUPABASE_NOT_CONFIGURED_MESSAGE);

    const { error } = await supabase.from("authors").delete().eq("id", id);
    if (error) return alert("Delete failed: " + error.message);

    setAuthors(authors.filter((a) => a.id !== id));
    await refreshPublicPages();
  };

  return (
    <div className="mt-30 md:mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Manage Authors</h1>

        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition shadow-md"
        >
          <Plus size={20} />
          Add Author
        </button>
      </div>
      <p className="text-gray-600 mb-10">
        Authors added here join the {builtInAuthors.length} built-in authors in the directory. An author with a bio or
        quote gets a full profile pop-up, and their quote appears with the reviews.
      </p>

      {loading ? (
        <div className="text-center py-12">
          <Loader2 className="animate-spin mx-auto" size={48} />
          <p className="mt-4 text-gray-600">Loading authors...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-6 rounded-xl text-center font-medium">{error}</div>
      ) : authors.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No authors yet. Click &quot;Add Author&quot; to get started.</div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md overflow-x-auto border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Author</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Profession</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {authors.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {a.photo_url ? (
                        <img src={a.photo_url} alt="" className="w-10 h-10 object-cover rounded-full" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-100" />
                      )}
                      <span className="font-medium text-gray-900">{a.name}</span>
                      {a.featured && <Star size={14} className="text-yellow-500 fill-yellow-500" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{a.profession || "—"}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="px-6 py-4 text-right space-x-4 whitespace-nowrap">
                    <button onClick={() => openModal(a)} className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(a.id)} className="text-red-600 hover:text-red-800">
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
              <h2 className="text-2xl font-bold text-gray-900">{current ? "Edit Author" : "Add New Author"}</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {!current && (
                <Field
                  label="Update an existing author? (optional)"
                  hint="Pick a built-in author to change their photo or bio. Leave blank to add a new author."
                >
                  <Select value={overrides} onChange={(e) => pickBuiltIn(e.target.value)}>
                    <option value="">— New author —</option>
                    {builtInAuthors.map((a) => (
                      <option key={a.slug} value={a.slug}>
                        {a.name}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}

              <Field label="Name *">
                <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Pastor Jane Doe" />
              </Field>

              <Field label="Photo">
                <FileDropzone
                  key={overrides}
                  bucket="author-photos"
                  onUploadComplete={(url) => setPhotoUrl(url || "")}
                  currentUrl={photoUrl}
                  accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
                  maxSizeMB={5}
                  label=""
                />
              </Field>

              <Field label="Profession / Title">
                <TextInput
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="e.g. Pastor, Educator and Author"
                />
              </Field>

              <Field label="Bio">
                <TextArea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="About the author..." />
              </Field>

              <Field label="Mission">
                <TextArea
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  placeholder="What the author hopes their books achieve..."
                />
              </Field>

              <Field label="Quote / Testimonial" hint="Shown in the reviews sections on the Home and Authors pages.">
                <TextArea
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="What the author says about publishing with LO..."
                />
              </Field>

              <label className="flex items-center gap-3 text-gray-700 font-medium">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-5 h-5 accent-red-900"
                />
                Featured author
              </label>

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
                  {saving ? "Saving..." : current ? "Update Author" : "Add Author"}
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
