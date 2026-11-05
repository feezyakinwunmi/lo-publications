// src/app/resources/ui.tsx
// Small shared building blocks for the free tools.
"use client";

import type { ReactNode } from "react";

export const money = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);

export const money2 = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

export const num = (n: number) => new Intl.NumberFormat("en-CA").format(n);

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-gray-900">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-gray-500">{hint}</span>}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-[#8d171c] focus:outline-none focus:ring-2 focus:ring-[#8d171c]/15";

export function NumberInput({
  value,
  onChange,
  min = 0,
  step = 1,
  prefix,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  step?: number;
  prefix?: string;
}) {
  return (
    <div className="relative">
      {prefix && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</span>}
      <input
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Math.max(min, parseFloat(e.target.value) || 0))}
        className={`${inputCls} ${prefix ? "pl-8" : ""}`}
      />
    </div>
  );
}

export function Select<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T)} className={inputCls}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className={inputCls} />
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl bg-white p-6 shadow-md sm:p-8 ${className}`}>{children}</div>;
}

export function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl bg-[#f8f6f3] p-5">
      <p className="text-xs font-bold uppercase tracking-[.15em] text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-[#8d171c] sm:text-3xl">{value}</p>
      {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
    </div>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{children}</p>;
}
