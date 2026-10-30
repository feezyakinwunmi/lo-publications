// src/components/admin/FormFields.tsx
// Shared inputs for the admin add/edit modals.

const inputClass =
  "w-full text-black px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900";

export function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      {children}
      {hint && <p className="text-sm text-gray-500 mt-1">{hint}</p>}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="text" {...props} className={inputClass} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} h-32`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputClass} bg-white`} />;
}

export function StatusToggle({
  value,
  onChange,
}: {
  value: "draft" | "published";
  onChange: (value: "draft" | "published") => void;
}) {
  return (
    <div className="flex gap-3">
      {(["published", "draft"] as const).map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className={`px-5 py-2.5 rounded-xl border font-medium capitalize transition ${
            value === s ? "bg-red-900 text-white border-red-900" : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export function StatusBadge({ status }: { status: string | null }) {
  const published = status !== "draft";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {published ? "published" : "draft"}
    </span>
  );
}
