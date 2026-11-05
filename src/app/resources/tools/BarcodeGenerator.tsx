// src/app/resources/tools/BarcodeGenerator.tsx
// Free Barcode Generator: ISBN (with price add-on), EAN-13, UPC-A, Code 128, Code 39 and QR codes.
// Everything is generated in the browser by src/lib/barcode/engine.js. Nothing is uploaded.
"use client";

import { useMemo, useState, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Download, FileSpreadsheet, Lock, Upload, X } from "lucide-react";
import B, {
  type Background,
  type BuildOk,
  type BuildOptions,
  type BuildResult,
  type ColumnMap,
  type FormatId,
  type PriceMode,
  type QrKind,
  type QrLevel,
} from "@/lib/barcode/engine";

/* ------------------------------------------------------------------ copy */

const FORMAT_GROUPS: { label: string; ids: FormatId[] }[] = [
  { label: "Books", ids: ["isbn"] },
  { label: "Retail products", ids: ["ean13", "upca"] },
  { label: "Business and inventory", ids: ["code128", "code39"] },
  { label: "Links and information", ids: ["qr"] },
];

const FORMAT_UI: Record<FormatId, { label: string; hint: string; help: string; inputMode: "text" | "numeric" }> = {
  isbn: {
    label: "ISBN",
    hint: "Type it with or without hyphens. Hyphens you type are printed in the ISBN line. A 10-digit ISBN is converted to ISBN-13.",
    help: "For printed books. A Bookland EAN-13 with the ISBN printed above and an optional price add-on.",
    inputMode: "text",
  },
  ean13: {
    label: "EAN-13 number",
    hint: "12 digits, or all 13 including the check digit.",
    help: "For retail products sold worldwide. Use a number issued to you by GS1.",
    inputMode: "numeric",
  },
  upca: {
    label: "UPC-A number",
    hint: "11 digits, or all 12 including the check digit.",
    help: "For retail products in Canada and the US. Use a number issued to you by GS1.",
    inputMode: "numeric",
  },
  code128: {
    label: "Text or number",
    hint: "Letters, digits, spaces and keyboard symbols, up to 80 characters.",
    help: "For stock, shelves, assets, invoices and shipping labels. Compact, and takes letters and numbers.",
    inputMode: "text",
  },
  code39: {
    label: "Text or number",
    hint: "Capital letters, digits, space and - . $ / + %, up to 43 characters.",
    help: "For older inventory, ID badge and industrial systems that ask for Code 39.",
    inputMode: "text",
  },
  qr: {
    label: "QR code content",
    hint: "",
    help: "For links, contact cards, Wi-Fi details and short text. Scans with any phone camera.",
    inputMode: "text",
  },
};

const PRICE_HELP: Record<PriceMode, string> = {
  none: "The smallest barcode. You can change your price without changing the cover.",
  placeholder: "Adds 90000. Bookshops can scan it and set their own price.",
  price: "Prints the price in the barcode. Changing the price later means changing the cover.",
};

const CURRENCY_OPTIONS = [
  { value: "6", label: "Canadian dollar" },
  { value: "5", label: "US dollar" },
  { value: "0", label: "British pound" },
  { value: "3", label: "Australian dollar" },
  { value: "4", label: "New Zealand dollar" },
];

const X_OPTIONS = [
  { value: "0.25", label: "0.25 mm, small labels" },
  { value: "0.33", label: "0.33 mm, standard" },
  { value: "0.4", label: "0.40 mm" },
  { value: "0.5", label: "0.50 mm" },
  { value: "0.75", label: "0.75 mm" },
  { value: "1", label: "1.00 mm, read from a distance" },
];

const QR_LEVELS: { value: QrLevel; label: string }[] = [
  { value: "L", label: "Low, recovers 7% damage" },
  { value: "M", label: "Medium, recovers 15% damage" },
  { value: "Q", label: "Quartile, recovers 25% damage" },
  { value: "H", label: "High, recovers 30% damage" },
];

const PRICE_CODES = [
  { digit: "6", currency: "Canadian dollar", example: "62499 = CA$24.99" },
  { digit: "5", currency: "US dollar", example: "50699 = US$6.99" },
  { digit: "0", currency: "British pound", example: "00799 = £7.99" },
  { digit: "3", currency: "Australian dollar", example: "32995 = A$29.95" },
  { digit: "4", currency: "New Zealand dollar", example: "43499 = NZ$34.99" },
  { digit: "9", currency: "No price set", example: "90000" },
];

type VCard = { name: string; org: string; title: string; phone: string; email: string; url: string };
type Wifi = { ssid: string; password: string; security: "WPA" | "WEP" | "nopass"; hidden: boolean };
type FileType = "png" | "svg" | "pdf";
type Msg = { kind: "ok" | "error" | "info" | "warn"; text: string } | null;
type BatchRow = { n: number; cells: string[] };
type BatchFile = { name: string; rows: BatchRow[]; map: ColumnMap; truncated: boolean };

const QR_TEXT_EXAMPLE = "https://lopublications.com";
const VCARD_EXAMPLE: VCard = {
  name: "Jane Author",
  org: "LO Publications",
  title: "Author",
  phone: "+1 613 555 0123",
  email: "jane@example.com",
  url: "https://lopublications.com",
};
const WIFI_EXAMPLE: Wifi = { ssid: "LO Book Launch Guest", password: "readmore2026", security: "WPA", hidden: false };

const initialValues = (): Record<FormatId, string> => {
  const v = {} as Record<FormatId, string>;
  B.FORMATS.forEach((f) => (v[f.id] = f.example));
  return v;
};

/* ------------------------------------------------------------------ helpers */

const inputCls =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#8d171c] focus:outline-none focus:ring-2 focus:ring-[#8d171c]/15";

const fmtMm = (n: number) => (n < 100 ? n.toFixed(1) : String(Math.round(n)));

const MIME: Record<string, string> = {
  png: "image/png",
  svg: "image/svg+xml",
  pdf: "application/pdf",
  zip: "application/zip",
  csv: "text/csv",
};

function saveFile(name: string, data: Uint8Array<ArrayBuffer>) {
  const ext = name.split(".").pop() || "";
  const blob = new Blob([data], { type: MIME[ext] || "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function makeFile(r: BuildOk, type: FileType, background: Background, title: string): Promise<Uint8Array<ArrayBuffer>> {
  const d = r.drawing;
  if (type === "svg") return Promise.resolve(new TextEncoder().encode(B.toSVG(d, { physical: true, background, title })));
  if (type === "pdf") return Promise.resolve(B.toPDF(d, { background, title }));
  const plan = B.rasterPlan(d, 600);
  const canvas = document.createElement("canvas");
  canvas.width = plan.width;
  canvas.height = plan.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return Promise.reject(new Error("Your browser could not create the image."));
  B.drawToCanvas(ctx, d, plan.ppu, { background });
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) return reject(new Error("Your browser could not create the PNG."));
      blob.arrayBuffer().then((buf) => resolve(B.pngWithDpi(new Uint8Array(buf), plan.dpi)), reject);
    }, "image/png");
  });
}

function inflateRaw(data: Uint8Array): Promise<Uint8Array> {
  if (typeof DecompressionStream === "undefined") return Promise.reject(new Error("no_inflate"));
  const copy = new Uint8Array(data.length);
  copy.set(data);
  const stream = new Blob([copy]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Response(stream).arrayBuffer().then((b) => new Uint8Array(b));
}

async function readSheet(file: File): Promise<string[][]> {
  const name = file.name.toLowerCase();
  if (/\.xls$/.test(name)) {
    throw new Error("Old .xls files are not supported. In Excel, choose File > Save As > Excel Workbook (.xlsx) or CSV, then upload that.");
  }
  if (/\.(numbers|ods)$/.test(name)) throw new Error("Export the sheet as CSV or .xlsx, then upload that.");
  const u8 = new Uint8Array(await file.arrayBuffer());
  const isZip = u8[0] === 0x50 && u8[1] === 0x4b;
  if (isZip || /\.xlsx$/.test(name)) {
    try {
      return await B.readXLSX(u8, inflateRaw);
    } catch (e) {
      if (e instanceof Error && e.message === "no_inflate") {
        throw new Error("This browser cannot open .xlsx files. Save the sheet as CSV and upload that.");
      }
      throw e;
    }
  }
  return B.parseCSV(new TextDecoder("utf-8").decode(u8));
}

const csvCell = (s: unknown) => {
  const v = String(s ?? "");
  return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
};

function describe(format: FormatId, r: BuildOk) {
  return `${B.FORMAT_BY_ID[format].name} barcode for ${format === "qr" ? "QR content" : r.label}`;
}

function batchStem(format: FormatId, r: BuildOk) {
  if (format === "isbn" || format === "ean13" || format === "upca") return r.value + (r.info.addon ? `-${r.info.addon}` : "");
  if (format === "qr") return B.safeFileName(r.value.replace(/^https?:\/\/(www\.)?/i, ""), 40);
  return B.safeFileName(r.value, 40);
}

/* ------------------------------------------------------------------ small UI */

function Label({ htmlFor, children, aside }: { htmlFor?: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="mb-2 flex items-baseline justify-between gap-3">
      {htmlFor ? (
        <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-900">
          {children}
        </label>
      ) : (
        <span className="text-sm font-semibold text-gray-900">{children}</span>
      )}
      {aside}
    </div>
  );
}

function Status({ msg }: { msg: Msg }) {
  if (!msg || !msg.text) return null;
  const styles = {
    ok: "text-green-700",
    info: "text-gray-500",
    warn: "text-amber-700",
    error: "rounded-lg bg-red-50 px-3 py-2 text-red-700",
  }[msg.kind];
  const Icon = msg.kind === "ok" ? CheckCircle2 : msg.kind === "info" ? null : AlertCircle;
  return (
    <p role="status" aria-live="polite" className={`mt-2 flex items-start gap-2 text-sm ${styles}`}>
      {Icon && <Icon size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
      <span>{msg.text}</span>
    </p>
  );
}

function Segmented<T extends string>({
  name,
  value,
  onChange,
  options,
  label,
}: {
  name: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string; sub?: string }[];
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="grid overflow-hidden rounded-xl border border-gray-300" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map((o, i) => {
        const on = o.value === value;
        return (
          <label
            key={o.value}
            className={`relative flex min-h-[44px] cursor-pointer flex-col items-center justify-center px-2 py-2 text-center text-sm font-semibold transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#8d171c] ${
              i > 0 ? "border-l border-gray-300" : ""
            } ${on ? "bg-[#8d171c] text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            <input type="radio" name={name} value={o.value} checked={on} onChange={() => onChange(o.value)} className="sr-only" />
            {o.label}
            {o.sub && <span className={`text-[11px] font-medium ${on ? "text-white/80" : "text-gray-500"}`}>{o.sub}</span>}
          </label>
        );
      })}
    </div>
  );
}

function Section({ title, children, aside }: { title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="border-t border-gray-200 py-6 first:border-t-0 first:pt-0">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className="text-xs font-bold uppercase tracking-[.15em] text-gray-500">{title}</h3>
        {aside}
      </div>
      {children}
    </section>
  );
}

const ExampleChip = () => (
  <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">Example</span>
);

/* ------------------------------------------------------------------ component */

export default function BarcodeGenerator() {
  const [format, setFormat] = useState<FormatId>("isbn");
  const [values, setValues] = useState<Record<FormatId, string>>(initialValues);
  const [qrKind, setQrKind] = useState<QrKind>("text");
  const [qrText, setQrText] = useState(QR_TEXT_EXAMPLE);
  const [vcard, setVcard] = useState<VCard>(VCARD_EXAMPLE);
  const [wifi, setWifi] = useState<Wifi>(WIFI_EXAMPLE);
  const [priceMode, setPriceMode] = useState<PriceMode>("none");
  const [currency, setCurrency] = useState("6");
  const [price, setPrice] = useState("19.99");
  const [caption, setCaption] = useState("");
  const [magnification, setMagnification] = useState(100);
  const [xMm, setXMm] = useState("0.33");
  const [heightMm, setHeightMm] = useState(15);
  const [showText, setShowText] = useState(true);
  const [code39Check, setCode39Check] = useState(false);
  const [qrLevel, setQrLevel] = useState<QrLevel>("M");
  const [qrSizeMm, setQrSizeMm] = useState(30);
  const [background, setBackground] = useState<Background>("white");
  const [dlMsg, setDlMsg] = useState<Msg>(null);
  const [busy, setBusy] = useState<FileType | null>(null);

  const [batch, setBatch] = useState<BatchFile | null>(null);
  const [batchMsg, setBatchMsg] = useState<Msg>(null);
  const [batchType, setBatchType] = useState<FileType>("png");
  const [batchBusy, setBatchBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const family = B.FORMAT_BY_ID[format].family;
  const ui = FORMAT_UI[format];

  const opts: BuildOptions = useMemo(
    () => ({
      magnification,
      priceMode,
      currency,
      price,
      xMm: Number(xMm),
      heightMm,
      showText,
      code39Check,
      qrLevel,
      qrSizeMm,
      caption,
    }),
    [magnification, priceMode, currency, price, xMm, heightMm, showText, code39Check, qrLevel, qrSizeMm, caption]
  );

  const qrPayload = useMemo(() => {
    if (qrKind === "vcard") return B.qrPayload("vcard", vcard);
    if (qrKind === "wifi") return B.qrPayload("wifi", wifi);
    return B.qrPayload("text", { text: qrText });
  }, [qrKind, qrText, vcard, wifi]);

  const raw = format === "qr" ? (qrPayload.ok ? qrPayload.text : "") : values[format];
  const result: BuildResult = useMemo(() => B.build(format, raw, opts), [format, raw, opts]);

  // Keep the last good barcode on screen (dimmed) while the input is being corrected.
  const [lastGood, setLastGood] = useState<{ format: FormatId; r: BuildOk } | null>(null);
  if (result.ok && lastGood?.r !== result) setLastGood({ format, r: result });
  const shown: BuildOk | null = result.ok ? result : lastGood && lastGood.format === format ? lastGood.r : null;
  const stale = !result.ok && !!shown;

  const svg = useMemo(
    () => (shown ? B.toSVG(shown.drawing, { background: "none", title: describe(format, shown) }) : ""),
    [shown, format]
  );

  // Status under the input
  let valueMsg: Msg = null;
  let priceMsg: Msg = null;
  if (format === "qr" && !qrPayload.ok) valueMsg = { kind: "info", text: qrPayload.message };
  else if (result.ok) {
    if (format === "qr") valueMsg = { kind: "ok", text: `Ready. Version ${result.info.version}, ${result.info.size} × ${result.info.size} modules.` };
    else valueMsg = { kind: result.note && /book number|capitals/.test(result.note) ? "warn" : "ok", text: result.note || "Valid." };
  } else if (result.field === "price") {
    const v = B.validate(format, raw, opts);
    valueMsg = { kind: "ok", text: (v.ok && v.note) || "Valid." };
    priceMsg = { kind: "error", text: result.message };
  } else valueMsg = { kind: result.partial ? "info" : "error", text: result.message };

  const isExample = format === "qr"
    ? qrKind === "text"
      ? qrText === QR_TEXT_EXAMPLE
      : qrKind === "vcard"
        ? JSON.stringify(vcard) === JSON.stringify(VCARD_EXAMPLE)
        : JSON.stringify(wifi) === JSON.stringify(WIFI_EXAMPLE)
    : values[format].trim() === B.FORMAT_BY_ID[format].example;

  // Facts under the preview
  const meta: [string, string][] = [];
  let warning = "";
  if (shown) {
    const d = shown.drawing;
    const plan = B.rasterPlan(d, 600);
    meta.push(["Print size", `${fmtMm(d.w * d.unitMm)} × ${fmtMm(d.h * d.unitMm)} mm`]);
    meta.push(["PNG size", `${plan.width} × ${plan.height} px, ${Math.round(plan.dpi)} dpi`]);
    if (format === "isbn") meta.push(["Price add-on", shown.info.addon ? `${shown.info.addon}${shown.info.priceNote ? ` (${shown.info.priceNote})` : ""}` : "None"]);
    if (format === "qr") {
      meta.push(["QR version", `${shown.info.version} (${shown.info.level})`]);
      meta.push(["Square size", `${(shown.info.moduleMm ?? 0).toFixed(2)} mm`]);
    }
    if (family === "linear") meta.push(["Bar width", `${d.unitMm.toFixed(2)} mm`]);
    if (format === "qr" && (shown.info.moduleMm ?? 1) < 0.33) {
      warning = "The squares are under 0.33 mm. Make the code bigger, or choose a lower error correction level, so phones can read it reliably.";
    } else if (family === "linear" && heightMm < 10) {
      warning = "Short bars are harder to scan. Make the bars at least 10 mm tall if you can.";
    } else if (family === "linear" && d.w * d.unitMm > 80) {
      warning = "This barcode is long. Check that your label fits it, and that your scanner reads it.";
    }
  }

  function baseName(r: BuildOk) {
    if (format === "isbn") return `isbn-${r.value}${r.info.addon ? `-${r.info.addon}` : ""}`;
    if (format === "ean13" || format === "upca") return `${format}-${r.value}`;
    if (format === "qr") {
      if (qrKind === "vcard") return `qr-contact-${B.safeFileName(vcard.name, 30)}`;
      if (qrKind === "wifi") return `qr-wifi-${B.safeFileName(wifi.ssid, 30)}`;
      return `qr-${B.safeFileName(r.value.replace(/^https?:\/\/(www\.)?/i, ""), 40)}`;
    }
    return `${format}-${B.safeFileName(r.value, 40)}`;
  }

  async function download(type: FileType) {
    if (!result.ok) return;
    const name = `${baseName(result)}.${type}`;
    setBusy(type);
    setDlMsg({ kind: "info", text: `Preparing ${name}…` });
    try {
      const bytes = await makeFile(result, type, background, describe(format, result));
      saveFile(name, bytes);
      setDlMsg({ kind: "ok", text: `Saved ${name}.` });
    } catch (e) {
      setDlMsg({ kind: "error", text: `Could not save the file. ${e instanceof Error ? e.message : ""}`.trim() });
    } finally {
      setBusy(null);
    }
  }

  function changeFormat(f: FormatId) {
    setFormat(f);
    setDlMsg(null);
  }

  /* ---------------- batch */

  async function loadBatch(file: File) {
    setBatchMsg({ kind: "info", text: `Reading ${file.name}…` });
    try {
      const rows = await readSheet(file);
      if (!rows.length) throw new Error("This file is empty.");
      const map = B.mapColumns(rows);
      const body = rows.slice(map.start);
      const limit = 1000;
      const list = body
        .slice(0, limit)
        .map((cells, i) => ({ n: i + 1 + map.start, cells }))
        .filter((r) => String(r.cells[map.cols.data] ?? "").trim() !== "");
      if (!list.length) throw new Error('No values found. Put them in column A, or in a column named "data".');
      setBatch({ name: file.name, rows: list, map, truncated: body.length > limit });
      setBatchMsg(null);
    } catch (e) {
      setBatch(null);
      setBatchMsg({ kind: "error", text: e instanceof Error ? e.message : "Could not read this file." });
    }
  }

  const batchRows = useMemo(() => {
    if (!batch) return [];
    const { cols } = batch.map;
    return batch.rows.map((row) => {
      const get = (i: number) => (i >= 0 && row.cells[i] != null ? String(row.cells[i]).trim() : "");
      const o: BuildOptions = { ...opts, caption: cols.caption >= 0 ? get(cols.caption) : opts.caption };
      if (format === "isbn" && cols.price >= 0) {
        const p = get(cols.price);
        if (!p) o.priceMode = "none";
        else if (p === "90000") o.priceMode = "placeholder";
        else {
          o.priceMode = "price";
          o.price = p;
        }
      }
      const value = get(cols.data);
      return {
        n: row.n,
        value,
        caption: o.caption || "",
        file: cols.file >= 0 && get(cols.file) ? B.safeFileName(get(cols.file), 60) : null,
        result: B.build(format, value, o),
      };
    });
  }, [batch, opts, format]);

  const batchOk = batchRows.filter((r) => r.result.ok).length;
  const batchBad = batchRows.length - batchOk;
  const batchShown = useMemo(
    () => [...batchRows].sort((a, b) => Number(a.result.ok) - Number(b.result.ok)).slice(0, 300),
    [batchRows]
  );

  async function downloadBatch() {
    if (!batchOk) return;
    setBatchBusy(true);
    const files: { name: string; data: Uint8Array | string }[] = [];
    const used = new Set<string>();
    const report: (string | number)[][] = [["row", "value", "caption", "result", "file"]];
    let done = 0;
    try {
      for (const row of batchRows) {
        if (!row.result.ok) {
          report.push([row.n, row.value, row.caption, row.result.message, ""]);
          continue;
        }
        const stem = row.file || `${String(row.n).padStart(4, "0")}-${batchStem(format, row.result)}`;
        let fname = `${stem}.${batchType}`;
        let k = 2;
        while (used.has(fname.toLowerCase())) fname = `${stem}-${k++}.${batchType}`;
        used.add(fname.toLowerCase());
        files.push({ name: fname, data: await makeFile(row.result, batchType, background, describe(format, row.result)) });
        report.push([row.n, row.value, row.caption, "ok", fname]);
        done++;
        if (done % 10 === 0) {
          setBatchMsg({ kind: "info", text: `Making barcodes: ${done} of ${batchOk}…` });
          await new Promise((r) => window.setTimeout(r, 0));
        }
      }
      files.push({ name: "batch-report.csv", data: "﻿" + report.map((r) => r.map(csvCell).join(",")).join("\r\n") + "\r\n" });
      const zipName = `barcodes-${format}-${new Date().toISOString().slice(0, 10)}.zip`;
      saveFile(zipName, B.makeZip(files));
      setBatchMsg({
        kind: "ok",
        text: `Saved ${zipName} with ${batchOk} barcode${batchOk === 1 ? "" : "s"}${batchBad ? ` and a report of the ${batchBad} rows that need fixing.` : "."}`,
      });
    } catch (e) {
      setBatchMsg({ kind: "error", text: `Could not make the ZIP file. ${e instanceof Error ? e.message : ""}`.trim() });
    } finally {
      setBatchBusy(false);
    }
  }

  function downloadTemplate() {
    let rows: string[][];
    if (format === "isbn") rows = [["isbn", "title", "price"], ["978-3-16-148410-0", "Sample Book One", "19.99"], ["978-0-306-40615-7", "Sample Book Two", "90000"], ["9781861972712", "Sample Book Three", ""]];
    else if (format === "ean13") rows = [["data", "caption"], ["4006381333931", "Product one"], ["590123412345", "Product two"]];
    else if (format === "upca") rows = [["data", "caption"], ["036000291452", "Product one"], ["01234567890", "Product two"]];
    else if (format === "qr") rows = [["link", "caption", "filename"], ["https://lopublications.com", "Visit our website", "website"], ["https://lopublications.com/resources", "Free author tools", "free-tools"]];
    else rows = [["data", "caption", "filename"], ["LO-INV-0001", "Shelf A1", "shelf-a1"], ["LO-INV-0002", "Shelf A2", "shelf-a2"], ["LO-INV-0003", "Shelf B1", "shelf-b1"]];
    const csv = "﻿" + rows.map((r) => r.map(csvCell).join(",")).join("\r\n") + "\r\n";
    saveFile(`barcode-batch-template-${format}.csv`, new TextEncoder().encode(csv));
  }

  const usingSummary = [
    B.FORMAT_BY_ID[format].name,
    family === "gtin" ? `${magnification}% size` : null,
    format === "isbn"
      ? priceMode === "none"
        ? "no price add-on"
        : priceMode === "placeholder"
          ? "add-on 90000"
          : `prices in ${CURRENCY_OPTIONS.find((c) => c.value === currency)?.label.toLowerCase()}s`
      : null,
    family === "linear" ? `${xMm} mm bars, ${heightMm} mm tall` : null,
    format === "qr" ? `${qrSizeMm} mm, level ${qrLevel}` : null,
    background === "none" ? "transparent background" : "white background",
  ]
    .filter(Boolean)
    .join(", ");

  /* ---------------- render */

  return (
    <div className="space-y-12">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* ============ Controls ============ */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <Section title="Barcode type">
            <label htmlFor="bc-format" className="sr-only">Barcode type</label>
            <select id="bc-format" value={format} onChange={(e) => changeFormat(e.target.value as FormatId)} className={`${inputCls} text-base font-semibold`}>
              {FORMAT_GROUPS.map((g) => (
                <optgroup key={g.label} label={g.label}>
                  {g.ids.map((id) => (
                    <option key={id} value={id}>
                      {B.FORMAT_BY_ID[id].name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-500">{ui.help}</p>
          </Section>

          {format !== "qr" ? (
            <Section title="Your data">
              <Label htmlFor="bc-value" aside={isExample ? <ExampleChip /> : null}>
                {ui.label}
              </Label>
              <div className="relative">
                <input
                  id="bc-value"
                  type="text"
                  inputMode={ui.inputMode}
                  autoComplete="off"
                  spellCheck={false}
                  value={values[format]}
                  placeholder={B.FORMAT_BY_ID[format].example}
                  onChange={(e) => setValues((v) => ({ ...v, [format]: e.target.value }))}
                  aria-invalid={valueMsg?.kind === "error"}
                  className={`${inputCls} pr-20 font-mono text-lg tracking-wide ${valueMsg?.kind === "error" ? "border-red-400" : ""}`}
                />
                {values[format] && (
                  <button
                    type="button"
                    onClick={() => setValues((v) => ({ ...v, [format]: "" }))}
                    className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <X size={14} /> Clear
                  </button>
                )}
              </div>
              <Status msg={valueMsg} />
              <p className="mt-2 text-sm text-gray-500">{ui.hint}</p>
            </Section>
          ) : (
            <Section title="QR code content" aside={isExample ? <ExampleChip /> : null}>
              <Segmented
                name="bc-qrkind"
                label="QR code content"
                value={qrKind}
                onChange={setQrKind}
                options={[
                  { value: "text", label: "Link or text" },
                  { value: "vcard", label: "Contact card" },
                  { value: "wifi", label: "Wi-Fi" },
                ]}
              />
              <div className="mt-4">
                {qrKind === "text" && (
                  <>
                    <Label htmlFor="bc-qrtext">Link or text</Label>
                    <textarea id="bc-qrtext" rows={3} spellCheck={false} value={qrText} onChange={(e) => setQrText(e.target.value)} className={`${inputCls} font-mono text-sm`} />
                  </>
                )}
                {qrKind === "vcard" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(
                      [
                        ["name", "Full name", "text", true],
                        ["org", "Organisation", "text", false],
                        ["title", "Job title", "text", false],
                        ["phone", "Phone", "tel", false],
                        ["email", "Email", "email", false],
                        ["url", "Website", "url", true],
                      ] as [keyof VCard, string, string, boolean][]
                    ).map(([key, label, type, wide]) => (
                      <div key={key} className={wide ? "sm:col-span-2" : ""}>
                        <Label htmlFor={`bc-vc-${key}`}>{label}</Label>
                        <input id={`bc-vc-${key}`} type={type} value={vcard[key]} onChange={(e) => setVcard((v) => ({ ...v, [key]: e.target.value }))} className={inputCls} />
                      </div>
                    ))}
                  </div>
                )}
                {qrKind === "wifi" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="bc-wf-ssid">Network name</Label>
                      <input id="bc-wf-ssid" type="text" value={wifi.ssid} onChange={(e) => setWifi((w) => ({ ...w, ssid: e.target.value }))} className={inputCls} />
                    </div>
                    <div>
                      <Label htmlFor="bc-wf-sec">Security</Label>
                      <select id="bc-wf-sec" value={wifi.security} onChange={(e) => setWifi((w) => ({ ...w, security: e.target.value as Wifi["security"] }))} className={inputCls}>
                        <option value="WPA">WPA / WPA2 / WPA3</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">No password</option>
                      </select>
                    </div>
                    {wifi.security !== "nopass" && (
                      <div>
                        <Label htmlFor="bc-wf-pass">Password</Label>
                        <input id="bc-wf-pass" type="text" spellCheck={false} value={wifi.password} onChange={(e) => setWifi((w) => ({ ...w, password: e.target.value }))} className={inputCls} />
                      </div>
                    )}
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 sm:col-span-2">
                      <input type="checkbox" checked={wifi.hidden} onChange={(e) => setWifi((w) => ({ ...w, hidden: e.target.checked }))} className="h-4 w-4 accent-[#8d171c]" />
                      Hidden network
                    </label>
                  </div>
                )}
              </div>
              <Status msg={valueMsg} />
            </Section>
          )}

          {format === "isbn" && (
            <Section title="Price add-on">
              <Segmented
                name="bc-price"
                label="Price add-on"
                value={priceMode}
                onChange={setPriceMode}
                options={[
                  { value: "none", label: "None" },
                  { value: "placeholder", label: "No price set" },
                  { value: "price", label: "Set price" },
                ]}
              />
              <p className="mt-2 text-sm text-gray-500">{PRICE_HELP[priceMode]}</p>
              {priceMode === "price" && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="bc-cur">Currency</Label>
                    <select id="bc-cur" value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputCls}>
                      {CURRENCY_OPTIONS.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="bc-amt">Price</Label>
                    <input id="bc-amt" type="text" inputMode="decimal" value={price} onChange={(e) => setPrice(e.target.value)} className={inputCls} />
                  </div>
                </div>
              )}
              <Status msg={priceMsg} />
              {result.ok && result.info.addon && (
                <p className="mt-3 font-mono text-sm text-gray-500">
                  Add-on code <b className="font-semibold tracking-[.15em] text-gray-900">{result.info.addon}</b>
                  {result.info.priceNote ? ` = ${result.info.priceNote}` : ""}
                </p>
              )}
            </Section>
          )}

          <Section title="Text below the barcode">
            <label htmlFor="bc-caption" className="sr-only">Text below the barcode (optional)</label>
            <input
              id="bc-caption"
              type="text"
              maxLength={80}
              value={caption}
              placeholder="Optional, for example a book title or shelf number"
              onChange={(e) => setCaption(e.target.value)}
              className={inputCls}
            />
          </Section>

          <Section title="Size and style">
            <div className="space-y-5">
              {family === "gtin" && (
                <div>
                  <Label htmlFor="bc-mag" aside={<output className="font-mono text-sm text-gray-900">{magnification}%</output>}>Size</Label>
                  <input id="bc-mag" type="range" min={80} max={200} step={5} value={magnification} onChange={(e) => setMagnification(Number(e.target.value))} className="w-full accent-[#8d171c]" />
                  <p className="mt-1 text-sm text-gray-500">100% is the standard size. Retail scanners accept 80% to 200%.</p>
                </div>
              )}
              {family === "linear" && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="bc-x">Bar width</Label>
                      <select id="bc-x" value={xMm} onChange={(e) => setXMm(e.target.value)} className={inputCls}>
                        {X_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="bc-h" aside={<output className="font-mono text-sm text-gray-900">{heightMm} mm</output>}>Bar height</Label>
                      <input id="bc-h" type="range" min={5} max={50} step={1} value={heightMm} onChange={(e) => setHeightMm(Number(e.target.value))} className="mt-3 w-full accent-[#8d171c]" />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} className="h-4 w-4 accent-[#8d171c]" />
                    Show the text under the bars
                  </label>
                  {format === "code39" && (
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <input type="checkbox" checked={code39Check} onChange={(e) => setCode39Check(e.target.checked)} className="h-4 w-4 accent-[#8d171c]" />
                      Add a check character
                    </label>
                  )}
                </>
              )}
              {format === "qr" && (
                <>
                  <div>
                    <Label htmlFor="bc-qrsize" aside={<output className="font-mono text-sm text-gray-900">{qrSizeMm} mm</output>}>Size</Label>
                    <input id="bc-qrsize" type="range" min={15} max={100} step={1} value={qrSizeMm} onChange={(e) => setQrSizeMm(Number(e.target.value))} className="w-full accent-[#8d171c]" />
                  </div>
                  <div>
                    <Label htmlFor="bc-qrlevel">Error correction</Label>
                    <select id="bc-qrlevel" value={qrLevel} onChange={(e) => setQrLevel(e.target.value as QrLevel)} className={inputCls}>
                      {QR_LEVELS.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-sm text-gray-500">Higher levels survive scratches and dirt but make a denser code.</p>
                  </div>
                </>
              )}
              <div>
                <Label>Background for PNG, SVG and PDF</Label>
                <Segmented
                  name="bc-bg"
                  label="Background"
                  value={background}
                  onChange={setBackground}
                  options={[
                    { value: "white", label: "White" },
                    { value: "none", label: "Transparent" },
                  ]}
                />
              </div>
            </div>
          </Section>
        </div>

        {/* ============ Preview and downloads ============ */}
        <div className="lg:sticky lg:top-28">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <div
              className="rounded-2xl border border-dashed border-gray-200 px-4 py-8 sm:px-8 sm:py-10"
              style={{ backgroundImage: "linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            >
              <div className={`mx-auto ${format === "qr" ? "max-w-[280px]" : "max-w-[520px]"}`}>
                <div
                  className="relative rounded-sm bg-white shadow-[0_1px_2px_rgba(0,0,0,.08),0_10px_28px_rgba(0,0,0,.12)]"
                  style={
                    background === "none"
                      ? {
                          backgroundImage:
                            "linear-gradient(45deg,#eceef1 25%,transparent 25%),linear-gradient(-45deg,#eceef1 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#eceef1 75%),linear-gradient(-45deg,transparent 75%,#eceef1 75%)",
                          backgroundSize: "14px 14px",
                          backgroundPosition: "0 0,0 7px,7px -7px,-7px 0",
                        }
                      : undefined
                  }
                >
                  {svg ? (
                    <div
                      className={`[&>svg]:block [&>svg]:h-auto [&>svg]:w-full transition-opacity ${stale ? "opacity-20" : ""}`}
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                  ) : (
                    <div className="flex aspect-[3/2] items-center justify-center p-6 text-center text-sm text-gray-400">Your barcode will appear here</div>
                  )}
                  {stale && (
                    <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm font-semibold text-red-800">
                      Fix the details to update the barcode
                    </p>
                  )}
                </div>
                {shown && (
                  <div className="mt-4 flex items-center gap-3 font-mono text-xs text-gray-500" aria-hidden="true">
                    <span className="h-2.5 flex-1 border-x border-gray-400 bg-[linear-gradient(#9ca3af,#9ca3af)] bg-[length:100%_1px] bg-center bg-no-repeat" />
                    {fmtMm(shown.drawing.w * shown.drawing.unitMm)} mm
                    <span className="h-2.5 flex-1 border-x border-gray-400 bg-[linear-gradient(#9ca3af,#9ca3af)] bg-[length:100%_1px] bg-center bg-no-repeat" />
                  </div>
                )}
              </div>
            </div>

            {meta.length > 0 && (
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                {meta.map(([k, v]) => (
                  <div key={k} className="min-w-0">
                    <dt className="text-[11px] font-bold uppercase tracking-[.12em] text-gray-500">{k}</dt>
                    <dd className="mt-0.5 break-words font-mono text-sm text-gray-900">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
            {warning && <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">{warning}</p>}

            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-gray-500">Download</p>
              <div className="grid grid-cols-3 gap-3">
                {(
                  [
                    ["png", "PNG", "Image, 600 dpi"],
                    ["svg", "SVG", "Vector, any size"],
                    ["pdf", "PDF", "Vector, for print"],
                  ] as [FileType, string, string][]
                ).map(([type, label, sub]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => download(type)}
                    disabled={!result.ok || busy !== null}
                    className="group flex flex-col items-start rounded-xl bg-[#8d171c] px-3 py-3 text-left text-white transition hover:bg-[#b01e24] disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
                  >
                    <span className="inline-flex items-center gap-1.5 text-base font-bold">
                      <Download size={16} aria-hidden="true" /> {label}
                    </span>
                    <span className="text-[11px] text-white/75 sm:text-xs">{sub}</span>
                  </button>
                ))}
              </div>
              {result.ok && <p className="mt-3 break-all font-mono text-xs text-gray-500">{baseName(result)}.png / .svg / .pdf</p>}
              <Status msg={dlMsg} />
              <p className="mt-4 flex items-start gap-2 text-sm text-gray-600">
                <Lock size={15} className="mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
                Made in your browser. What you type or upload is never sent to us or anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Batch ============ */}
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="bc-batch-title">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 id="bc-batch-title" className="text-xl font-bold text-gray-900 md:text-2xl">Make many at once</h2>
            <p className="mt-2 text-gray-600">
              Upload a CSV or Excel file with one barcode per row. Each row uses the type, size and style chosen above, and you
              download them together as a ZIP file.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Using: <b className="font-semibold text-gray-900">{usingSummary}</b>
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label
            htmlFor="bc-file"
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const f = e.dataTransfer.files?.[0];
              if (f) loadBatch(f);
            }}
            className={`flex min-h-[180px] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition focus-within:border-[#8d171c] ${
              dragOver ? "border-[#8d171c] bg-[#8d171c]/5" : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <Upload size={28} className="text-gray-400" aria-hidden="true" />
            <span className="text-base text-gray-900">
              <span className="font-semibold text-[#8d171c] underline underline-offset-4">Choose a file</span> or drop it here
            </span>
            <span className="text-sm text-gray-500">.csv or .xlsx, up to 1,000 rows</span>
            <input
              id="bc-file"
              type="file"
              accept=".csv,.xlsx,.txt,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) loadBatch(f);
                e.target.value = "";
              }}
            />
          </label>
          <div className="text-sm text-gray-600">
            <p>
              Put the values in a column named <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">data</code> (or{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">isbn</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">code</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">link</code>). Optional columns:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">caption</code> or{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">title</code> for the text below the barcode
              </li>
              <li>
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">filename</code> to name each file
              </li>
              <li>
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px]">price</code> for ISBN price add-ons, in the currency chosen above
              </li>
            </ul>
            <p className="mt-2">No header row? Column A is the value and column B the caption.</p>
            <button
              type="button"
              onClick={downloadTemplate}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 font-semibold text-gray-900 transition hover:border-gray-900"
            >
              <FileSpreadsheet size={16} aria-hidden="true" /> Download a template
            </button>
          </div>
        </div>

        {(batch || batchMsg) && (
          <div className="mt-6">
            {batch && (
              <>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-gray-900">
                    {batch.name}: {batchOk} ready
                    {batchBad > 0 && <span className="text-red-700">, {batchBad} need fixing</span>}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setBatch(null);
                      setBatchMsg(null);
                    }}
                    className="rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Remove file
                  </button>
                </div>
                <div className="max-h-[360px] overflow-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="sticky top-0 bg-white">
                      <tr className="border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500">
                        <th className="px-3 py-2 font-bold">Row</th>
                        <th className="px-3 py-2 font-bold">Value</th>
                        <th className="px-3 py-2 font-bold">Caption</th>
                        <th className="px-3 py-2 font-bold">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batchShown.map((r) => (
                        <tr key={r.n} className="border-t border-gray-100 align-top">
                          <td className="px-3 py-2 font-mono tabular-nums text-gray-500">{r.n}</td>
                          <td className="max-w-[240px] break-all px-3 py-2 font-mono text-gray-900">{r.value}</td>
                          <td className="max-w-[200px] break-words px-3 py-2 text-gray-500">{r.caption}</td>
                          <td className="px-3 py-2">
                            {r.result.ok ? (
                              <span className="inline-flex items-center gap-1 font-semibold text-green-700">
                                <CheckCircle2 size={14} aria-hidden="true" /> Ready
                              </span>
                            ) : (
                              <span className="text-red-700">{r.result.message}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {(batchRows.length > 300 || batch.truncated) && (
                  <p className="mt-2 text-sm text-gray-500">
                    {batchRows.length > 300 && `Showing rows that need fixing first. ${batchRows.length - 300} more rows are not listed. `}
                    {batch.truncated && "Only the first 1,000 rows were read. Split larger files into several uploads."}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap items-end gap-4">
                  <div className="w-full max-w-xs">
                    <Label>File type</Label>
                    <Segmented
                      name="bc-batchtype"
                      label="File type"
                      value={batchType}
                      onChange={setBatchType}
                      options={[
                        { value: "png", label: "PNG" },
                        { value: "svg", label: "SVG" },
                        { value: "pdf", label: "PDF" },
                      ]}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={downloadBatch}
                    disabled={!batchOk || batchBusy}
                    className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#8d171c] px-6 font-semibold text-white transition hover:bg-[#b01e24] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Download size={18} aria-hidden="true" />
                    {batchOk ? `Download ${batchOk} barcode${batchOk === 1 ? "" : "s"} (ZIP)` : "Nothing to download"}
                  </button>
                </div>
              </>
            )}
            <Status msg={batchMsg} />
          </div>
        )}
      </section>

      {/* ============ Guide ============ */}
      <section aria-labelledby="bc-guide-title">
        <h2 id="bc-guide-title" className="text-2xl font-bold text-gray-900 md:text-3xl">Which barcode do I need?</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <article>
            <h3 className="font-bold text-gray-900">Books: ISBN</h3>
            <p className="mt-2 text-gray-600">
              Use the ISBN assigned to your book. In Canada, ISBNs are free from Library and Archives Canada. This tool only turns
              a real ISBN into a barcode. It never creates ISBNs, and it rejects numbers that fail the ISBN check.
            </p>
            <p className="mt-2 text-gray-600">Place the barcode on the back cover, on a white area, usually near the bottom right corner.</p>
          </article>
          <article>
            <h3 className="font-bold text-gray-900">Retail products: EAN-13 and UPC-A</h3>
            <p className="mt-2 text-gray-600">
              Shops scan these at the till. The number must come from GS1, the organisation that issues product numbers, so it is
              unique to your product worldwide. UPC-A is common in Canada and the US; EAN-13 is used almost everywhere.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-gray-900">Your own labels: Code 128 and Code 39</h3>
            <p className="mt-2 text-gray-600">
              For stock, shelves, assets, invoices and shipping, where you choose the numbers yourself. Code 128 is compact and
              accepts letters, numbers and symbols. Code 39 is older and wider; use it when a system asks for it.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-gray-900">Phones: QR Code</h3>
            <p className="mt-2 text-gray-600">
              Links, contact cards and Wi-Fi details that people scan with a phone camera. Print it at least 20 mm wide, and test
              it with your own phone before you print many.
            </p>
          </article>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-bold text-gray-900">ISBN price add-on codes</h3>
          <p className="mt-2 text-gray-600">
            The small barcode beside an ISBN holds five digits. The first is the currency and the other four are the price, so the
            highest price it can hold is 99.99. Choose <b className="text-gray-900">No price set</b> to print 90000, which lets each
            bookshop set its own price.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-2 font-bold">First digit</th>
                  <th className="px-4 py-2 font-bold">Currency</th>
                  <th className="px-4 py-2 font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_CODES.map((p) => (
                  <tr key={p.digit} className="border-t border-gray-100">
                    <td className="px-4 py-2 font-mono">{p.digit}</td>
                    <td className="px-4 py-2 text-gray-800">{p.currency}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-mono text-gray-800">{p.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            US books priced at $100 or more use 59999. Most other currencies have no price code, so those books use None or No price set.
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Barcodes follow the GS1 EAN/UPC, ISO/IEC 15417 (Code 128), ISO/IEC 16388 (Code 39) and ISO/IEC 18004 (QR Code)
          specifications. Always scan a printed proof before a full print run.
        </p>
      </section>
    </div>
  );
}
