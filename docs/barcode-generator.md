# Free Barcode Generator

Live at `/resources/barcode-generator`. The old address from the brief, `/tools/barcode-generator`, redirects to it.
It is listed on the Free Resources page and in the navbar's Free Resources dropdown.

## What it does

- **Formats:** ISBN (Bookland EAN-13 with an EAN-5 price add-on), EAN-13, UPC-A, Code 128, Code 39, and QR Code (a link or text, a contact card, or Wi-Fi details).
- **Downloads:** PNG at about 600 dpi with the dpi stored in the file, SVG sized in millimetres, and a vector PDF with 100% black bars. Each can have a white or transparent background.
- **Options:** caption text below the barcode; size (80-200% for ISBN, EAN and UPC); bar width and height for Code 128 and 39; size and error correction for QR.
- **Batch:** CSV or Excel (.xlsx) upload, up to 1,000 rows, downloaded as one ZIP. The ZIP includes `batch-report.csv`, which lists any rows that need fixing.
- **Free and private:** everything runs in the visitor's browser. There are no API calls, accounts, adverts or watermarks, and no data is stored or sent anywhere.
- **No fake ISBNs:** the ISBN path only accepts a complete ISBN with a valid check digit (or a valid ISBN-10, which it converts). It never completes or invents an ISBN.

## Files

| File | Role |
|---|---|
| `src/lib/barcode/engine.js` | Barcode engine. Validation, encoders for every format, layout, SVG/PDF/PNG output, ZIP writer, and CSV/XLSX readers. No dependencies and no DOM access. |
| `src/lib/barcode/engine.d.ts` | TypeScript types for the engine. Update them when the engine's API changes. |
| `src/app/resources/tools/BarcodeGenerator.tsx` | The tool UI: form, live preview, downloads, batch upload and the format guide. |
| `src/app/resources/data.ts` | Tool listing (title, description, card colours). `background: "white"` gives this tool a white page. |
| `src/app/resources/ToolShell.tsx` / `ToolVisual.tsx` | Register the tool component, its call to action, icon and card illustration. |
| `src/app/components/Navbar.tsx` | The Free Resources dropdown, built from `RESOURCE_TOOLS`, so new tools appear in it automatically. |
| `scripts/test-barcode-engine.mjs` | Quick engine tests: `node scripts/test-barcode-engine.mjs` |

## How it works

`B.build(format, value, options)` validates the input and returns a **drawing**: black rectangles and text positions in units of one bar module (or one QR square), plus `unitMm`, the size of one unit in millimetres. The preview renders the drawing as SVG. The download buttons turn the same drawing into PNG (on a canvas), SVG or PDF, so all six formats share one output path.

| Format | Standard | Notes |
|---|---|---|
| ISBN | GS1 Bookland EAN-13, ISO 2108 | 978/979 prefix, check digit verified, "ISBN ..." line above the bars |
| Price add-on | EAN-5 | First digit is the currency (6 CAD, 5 USD, 0 GBP, 3 AUD, 4 NZD), then the price in cents. 90000 means no price set; 59999 means US$100 or more |
| EAN-13 / UPC-A | GS1, ISO/IEC 15420 | Check digit added when 12 (EAN) or 11 (UPC) digits are given |
| Code 128 | ISO/IEC 15417 | Subset B, switching to subset C for long digit runs |
| Code 39 | ISO/IEC 16388 | Optional mod-43 check character |
| QR Code | ISO/IEC 18004 | Versions 1-40; numeric, alphanumeric or UTF-8 byte mode; L/M/Q/H error correction; lowest-penalty mask |

At 100%, an ISBN without an add-on is 37.3 mm wide, with 0.33 mm modules and 22.8 mm bars.

## Testing

The engine and the tool were tested before release:

- 25 engine unit tests: check digits against published examples, symbol tables, QR capacity tables against ISO/IEC 18004, validation messages, price codes, and the file formats.
- 71 generated barcodes, including QR versions 1-40 at every error correction level, rasterised at 300 dpi and read back by independent decoders (OpenCV, plus decoders built on ReportLab's symbol tables). All 71 decoded to the expected value.
- 400 EAN-13 and 404 EAN-5 encodings compared bar for bar with ReportLab's encoder. All matched.
- These components (the tool page and the navbar) were driven in Chromium: downloads for every format, validation messages, CSV and Excel batch, the navbar dropdown on desktop and mobile, and layout at phone, tablet and desktop widths. All 29 downloaded files (PNG, PDF, SVG and batch ZIPs) were read back correctly.

Before launch, and after changing the engine:

1. Run `node scripts/test-barcode-engine.mjs`.
2. Print the ISBN (with a price add-on), EAN-13, UPC-A, Code 128, Code 39 and QR examples at 100%. Scan each with a retail scanner and with an iPhone and an Android phone.
3. Open the tool in Chrome, Safari and Firefox on desktop, and on a phone. Generate a barcode and download all three file types.
4. Upload `isbn-batch-template.csv` (from "Download a template") and check the ZIP.

## Maintenance

- **Wording:** `FORMAT_UI`, `PRICE_HELP` and the guide section at the bottom of `BarcodeGenerator.tsx`.
- **Default currency:** `useState("6")` (Canadian dollar) in `BarcodeGenerator.tsx`.
- **Adding a currency:** `CURRENCIES` in `engine.js` and `CURRENCY_OPTIONS` in the component. Only use codes defined by the book trade.
- **Adding a format:** add an encoder and a `FORMATS` entry in `engine.js`, a validation branch in `validate()` and a layout branch in `build()`, then update `FormatId` in `engine.d.ts` and `FORMAT_UI` and `FORMAT_GROUPS` in the component. Add tests to `scripts/test-barcode-engine.mjs`.
- **Reusing the engine elsewhere:** `import B from "@/lib/barcode/engine"`, then `B.build(...)` and `B.toSVG(...)`. It has no dependencies, so it can be copied to other LO Multimedia sites as is.
- **bwip-js:** the brief suggested evaluating bwip-js. The engine was written in-house instead, with the same client-side approach and no dependencies. To switch later, swap the encoders behind `build()` and keep the drawing format, so the UI does not change.

## Support notes

- **"My ISBN is rejected."** The check digit is wrong, or the number does not start with 978 or 979. Ask for the ISBN exactly as shown on the agency confirmation. In Canada, ISBNs come from Library and Archives Canada.
- **"The caption shows ? in the PDF."** The PDF uses the built-in Helvetica font, which covers Western European characters only. Use SVG or PNG for other scripts.
- **"My Excel file is not read."** Save it as `.xlsx` or CSV, with the values in the first worksheet. Format long numbers as Text in Excel so leading zeros are kept.
