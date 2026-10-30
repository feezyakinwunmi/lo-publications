// Excel and PDF exports for the manuscript submissions table. The libraries are
// imported on click so they stay out of the admin page's initial bundle.

export type ExportableSubmission = {
  name: string;
  email: string;
  book_title?: string | null;
  bio?: string | null;
  summary?: string | null;
  why_lo?: string | null;
  sample_url?: string | null;
  submitted_at: string;
  status: string;
  notes?: string | null;
};

const BRAND_RED = "7F1D1D";

function fileStamp() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" });
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function truncate(text: string | null | undefined, max: number) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export async function exportSubmissionsToExcel(submissions: ExportableSubmission[]) {
  const { default: ExcelJS } = await import("exceljs");
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "LO Publications";
  const sheet = workbook.addWorksheet("Submissions", { views: [{ state: "frozen", ySplit: 1 }] });

  sheet.columns = [
    { header: "Submitted", key: "submitted", width: 22 },
    { header: "Name", key: "name", width: 24 },
    { header: "Email", key: "email", width: 30 },
    { header: "Book Title", key: "book_title", width: 30 },
    { header: "Status", key: "status", width: 12 },
    { header: "Author Bio", key: "bio", width: 50 },
    { header: "Manuscript Summary", key: "summary", width: 60 },
    { header: "Why LO Publications?", key: "why_lo", width: 50 },
    { header: "Admin Notes", key: "notes", width: 40 },
    { header: "Sample File", key: "sample", width: 18 },
  ];

  for (const s of submissions) {
    const row = sheet.addRow({
      submitted: new Date(s.submitted_at),
      name: s.name,
      email: s.email,
      book_title: s.book_title ?? "",
      status: capitalize(s.status),
      bio: s.bio ?? "",
      summary: s.summary ?? "",
      why_lo: s.why_lo ?? "",
      notes: s.notes ?? "",
      sample: s.sample_url ? "Attached" : "",
    });
    row.alignment = { vertical: "top", wrapText: true };
  }

  sheet.getColumn("submitted").numFmt = "yyyy-mm-dd hh:mm";
  const header = sheet.getRow(1);
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${BRAND_RED}` } };
  header.alignment = { vertical: "middle" };
  header.height = 22;
  sheet.autoFilter = { from: "A1", to: "J1" };

  const buffer = await workbook.xlsx.writeBuffer();
  download(
    new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
    `manuscript-submissions-${fileStamp()}.xlsx`
  );
}

// One summary table row per submission
export async function exportSubmissionsToPdf(submissions: ExportableSubmission[], filterLabel: string) {
  const { jsPDF } = await import("jspdf");
  const { default: autoTable } = await import("jspdf-autotable");
  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });

  doc.setFontSize(18);
  doc.text("LO Publications: Manuscript Submissions", 40, 44);
  doc.setFontSize(10);
  doc.setTextColor(110);
  doc.text(`${filterLabel} · ${submissions.length} submission(s) · Exported ${formatDate(new Date().toISOString())}`, 40, 62);

  autoTable(doc, {
    startY: 78,
    head: [["Submitted", "Name", "Email", "Book Title", "Status", "Summary", "Notes"]],
    body: submissions.map((s) => [
      formatDate(s.submitted_at),
      s.name,
      s.email,
      s.book_title || "—",
      capitalize(s.status),
      // Full text is in the Excel export and the single-submission PDF
      truncate(s.summary, 350),
      truncate(s.notes, 200),
    ]),
    styles: { fontSize: 8, cellPadding: 5, valign: "top", overflow: "linebreak" },
    headStyles: { fillColor: `#${BRAND_RED}`, textColor: 255 },
    alternateRowStyles: { fillColor: 248 },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 85 },
      2: { cellWidth: 120 },
      3: { cellWidth: 100 },
      4: { cellWidth: 55 },
      6: { cellWidth: 110 },
    },
    margin: { left: 40, right: 40 },
  });

  doc.save(`manuscript-submissions-${fileStamp()}.pdf`);
}

// Full details of a single submission, for sharing with an editor
export async function exportSubmissionDetailToPdf(s: ExportableSubmission) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const left = 50;
  const width = doc.internal.pageSize.getWidth() - left * 2;
  const bottom = doc.internal.pageSize.getHeight() - 50;
  let y = 60;

  const ensureSpace = (needed: number) => {
    if (y + needed > bottom) {
      doc.addPage();
      y = 60;
    }
  };

  doc.setFontSize(18);
  doc.setTextColor(0);
  for (const line of doc.splitTextToSize(s.book_title || "Untitled Manuscript", width)) {
    doc.text(line, left, y);
    y += 22;
  }
  doc.setFontSize(10);
  doc.setTextColor(110);
  doc.text(`Submitted ${formatDate(s.submitted_at)} · Status: ${capitalize(s.status)}`, left, y);
  y += 30;

  const sections: [string, string | null | undefined][] = [
    ["Submitted By", `${s.name} <${s.email}>`],
    ["Author Bio", s.bio],
    ["Manuscript Summary", s.summary],
    ["Why LO Publications?", s.why_lo],
    ["Sample File", s.sample_url ? "Attached (download it from the admin portal)" : null],
    ["Admin Notes", s.notes],
  ];

  for (const [label, value] of sections) {
    if (!value) continue;
    ensureSpace(40);
    doc.setFontSize(11);
    doc.setTextColor(127, 29, 29);
    doc.text(label.toUpperCase(), left, y);
    y += 16;
    doc.setFontSize(11);
    doc.setTextColor(30);
    for (const line of doc.splitTextToSize(value, width)) {
      ensureSpace(15);
      doc.text(line, left, y);
      y += 15;
    }
    y += 14;
  }

  const slug = (s.book_title || s.name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  doc.save(`submission-${slug || "manuscript"}.pdf`);
}
