// Types for engine.js (the LO barcode engine). Keep in step with engine.js.

export type FormatId = "isbn" | "ean13" | "upca" | "code128" | "code39" | "qr";
export type FormatFamily = "gtin" | "linear" | "matrix";
export type QrLevel = "L" | "M" | "Q" | "H";
export type PriceMode = "none" | "placeholder" | "price";
export type Background = "white" | "none";
export type QrKind = "text" | "vcard" | "wifi";

export interface FormatInfo {
  id: FormatId;
  name: string;
  family: FormatFamily;
  example: string;
}

export interface BuildOptions {
  magnification?: number;
  priceMode?: PriceMode;
  currency?: string;
  price?: string;
  xMm?: number;
  heightMm?: number;
  showText?: boolean;
  code39Check?: boolean;
  qrLevel?: QrLevel;
  qrSizeMm?: number;
  caption?: string;
}

export interface DrawingRect { x: number; y: number; w: number; h: number }
export interface DrawingText { s: string; x: number; y: number; size: number; anchor: "start" | "middle" | "end"; caption?: boolean }
export interface Drawing {
  w: number;
  h: number;
  unitMm: number;
  format: FormatId;
  rects: DrawingRect[];
  texts: DrawingText[];
}

export interface BuildInfo {
  addon?: string | null;
  priceNote?: string;
  magnification?: number;
  modules?: number;
  version?: number;
  level?: QrLevel;
  mask?: number;
  mode?: string;
  size?: number;
  moduleMm?: number;
}

export interface BuildOk {
  ok: true;
  drawing: Drawing;
  info: BuildInfo;
  value: string;
  label: string;
  note?: string;
}
export interface BuildFail {
  ok: false;
  message: string;
  partial?: boolean;
  field?: "price";
}
export type BuildResult = BuildOk | BuildFail;

export interface ValidateOk { ok: true; value: string; label: string; note?: string }
export type ValidateResult = ValidateOk | BuildFail;

export interface RasterPlan { ppu: number; width: number; height: number; dpi: number }
export interface ColumnMap {
  header: boolean;
  start: number;
  cols: { data: number; caption: number; file: number; price: number };
}
export interface QrFields {
  text?: string;
  name?: string; org?: string; title?: string; phone?: string; email?: string; url?: string;
  ssid?: string; password?: string; security?: "WPA" | "WEP" | "nopass"; hidden?: boolean;
}

interface LOBarcodeApi {
  VERSION: string;
  FORMATS: FormatInfo[];
  FORMAT_BY_ID: Record<FormatId, FormatInfo>;
  DEFAULTS: Required<Omit<BuildOptions, "priceMode" | "currency" | "price">>;
  CURRENCIES: Record<string, { name: string; symbol: string }>;
  validate(format: FormatId, value: string, opts?: BuildOptions): ValidateResult;
  build(format: FormatId, value: string, opts?: BuildOptions): BuildResult;
  parsePrice(mode: PriceMode, currency?: string, amount?: string): { addon: string | null; note?: string; error?: string };
  qrPayload(kind: QrKind, fields: QrFields): { ok: true; text: string } | { ok: false; message: string };
  qrCapacityBytes(level: QrLevel): number;
  toSVG(d: Drawing, opts?: { background?: Background; physical?: boolean; title?: string }): string;
  toPDF(d: Drawing, opts?: { background?: Background; title?: string }): Uint8Array<ArrayBuffer>;
  rasterPlan(d: Drawing, targetDpi?: number, maxPx?: number): RasterPlan;
  drawToCanvas(ctx: CanvasRenderingContext2D, d: Drawing, ppu: number, opts?: { background?: Background }): void;
  pngWithDpi(png: Uint8Array, dpi: number): Uint8Array<ArrayBuffer>;
  makeZip(files: { name: string; data: Uint8Array | string }[]): Uint8Array<ArrayBuffer>;
  parseCSV(text: string): string[][];
  readXLSX(buffer: ArrayBuffer | Uint8Array, inflateRaw: (data: Uint8Array) => Uint8Array | Promise<Uint8Array>): Promise<string[][]>;
  mapColumns(rows: string[][]): ColumnMap;
  safeFileName(s: string, max?: number): string;
  textWidthEm(s: string): number;
  crc32(bytes: Uint8Array, start?: number, end?: number): number;
}

declare const LOBarcode: LOBarcodeApi;
export default LOBarcode;
