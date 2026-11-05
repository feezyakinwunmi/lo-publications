// scripts/test-barcode-engine.mjs
// Quick checks for the Free Barcode Generator engine (src/lib/barcode/engine.js).
// Run: node scripts/test-barcode-engine.mjs
// The full scan tests (which decode generated barcodes) are described in docs/barcode-generator.md.
import assert from "node:assert";
import { Buffer } from "node:buffer";
import B from "../src/lib/barcode/engine.js";

const I = B._internal;
let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.error("FAIL", name, "\n  ", e.message); }
}

/* ---------- check digits ---------- */
test('GTIN check digits (published examples)', () => {
  assert.strictEqual(I.gtinCheck('400638133393'), 1);   // EAN-13 4006381333931
  assert.strictEqual(I.gtinCheck('978316148410'), 0);   // ISBN 978-3-16-148410-0
  assert.strictEqual(I.gtinCheck('03600029145'), 2);    // UPC-A 036000291452
  assert.strictEqual(I.gtinCheck('978030640615'), 7);   // ISBN 978-0-306-40615-7
});
test('ISBN-10 check digit and X', () => {
  assert.strictEqual(I.isbn10Check('030640615'), '2');
  assert.strictEqual(I.isbn10Check('080442957'), 'X');
});
test('EAN-5 check (Wikipedia example 05415 -> 1)', () => assert.strictEqual(I.ean5Check('05415'), 1));
test('Code 39 mod-43 check (LOP-42 -> Q)', () => assert.strictEqual(I.code39Check('LOP-42'), 'Q'));

/* ---------- tables ---------- */
test('EAN-13 encodes to 95 modules with guards in place', () => {
  const enc = I.encodeEan13('9783161484100');
  assert.strictEqual(enc.length, 95);
  assert.strictEqual(enc.slice(0, 3), '101'); assert.strictEqual(enc.slice(45, 50), '01010'); assert.strictEqual(enc.slice(92), '101');
  assert.strictEqual(I.encodeEan5('90000').length, 47);
});
test('Code 128 table: 107 patterns, each 11 modules (stop 13)', () => {
  assert.strictEqual(I.C128.length, 107);
  I.C128.forEach((p, i) => {
    const sum = [...p].reduce((a, b) => a + Number(b), 0);
    assert.strictEqual(sum, i === 106 ? 13 : 11, 'pattern ' + i);
  });
  assert.strictEqual(I.C128[103], '211412'); assert.strictEqual(I.C128[104], '211214');
  assert.strictEqual(I.C128[105], '211232'); assert.strictEqual(I.C128[106], '2331112');
});
test('Code 39 table: 43 chars, 3 wide of 9 elements each', () => {
  assert.strictEqual(I.C39.length, 43);
  I.C39.forEach((p, i) => assert.strictEqual([...p].filter(c => c === '3').length, 3, I.C39_CHARS[i]));
});
test('Helvetica width table matches the standard AFM (spot check)', () => {
  assert.strictEqual(I.HELV['0'.charCodeAt(0) - 32], 556);
  assert.strictEqual(I.HELV['W'.charCodeAt(0) - 32], 944);
  assert.strictEqual(I.HELV['i'.charCodeAt(0) - 32], 222);
  assert.strictEqual(I.HELV.length, 95);
});

/* ---------- QR capacity tables ---------- */
test('QR total and data codewords match ISO 18004 table 7/9', () => {
  const total = { 1: 26, 2: 44, 3: 70, 4: 100, 5: 134, 6: 172, 7: 196, 8: 242, 9: 292, 10: 346, 20: 1085, 25: 1588, 27: 1828, 40: 3706 };
  Object.keys(total).forEach(v => assert.strictEqual(Math.floor(I.qrRawModules(Number(v)) / 8), total[v], 'version ' + v));
  const data = { '1L': 19, '1M': 16, '1Q': 13, '1H': 9, '10M': 216, '40L': 2956, '40M': 2334, '40Q': 1666, '40H': 1276 };
  const li = { L: 0, M: 1, Q: 2, H: 3 };
  Object.keys(data).forEach(k => assert.strictEqual(I.qrDataCodewords(Number(k.slice(0, -1)), li[k.slice(-1)]), data[k], k));
});
test('QR byte capacity at version 40 (2953 L / 1273 H)', () => {
  assert.strictEqual(B.qrCapacityBytes('L'), 2953);
  assert.strictEqual(B.qrCapacityBytes('H'), 1273);
});
test('QR mode selection', () => {
  assert.strictEqual(B.qrEncode('0123456789', 'M').mode, 'numeric');
  assert.strictEqual(B.qrEncode('HELLO WORLD', 'M').mode, 'alnum');
  assert.strictEqual(B.qrEncode('https://lopublications.com', 'M').mode, 'byte');
});
test('QR "HELLO WORLD" at Q picks version 1', () => assert.strictEqual(B.qrEncode('HELLO WORLD', 'Q').version, 1));

/* ---------- validation ---------- */
test('ISBN validation', () => {
  assert.ok(B.validate('isbn', '978-3-16-148410-0').ok);
  assert.ok(B.validate('isbn', 'ISBN 978 0 306 40615 7').ok);
  const bad = B.validate('isbn', '978-3-16-148410-1');
  assert.ok(!bad.ok && /last digit should be 0/.test(bad.message));
  assert.ok(!B.validate('isbn', '977-3-16-148410-4').ok, 'non-978/979 prefix rejected');
  assert.ok(B.validate('isbn', '9783161').partial, 'partial input is not an error');
  assert.ok(!B.validate('isbn', '978316148410').ok, '12 digits: no check digit is invented for ISBN');
  const ten = B.validate('isbn', '0-306-40615-2');
  assert.strictEqual(ten.value, '9780306406157');
  assert.strictEqual(ten.label, '978-0-306-40615-7');
  assert.ok(!B.validate('isbn', '0-306-40615-3').ok);
});
test('EAN-13 and UPC-A validation', () => {
  assert.strictEqual(B.validate('ean13', '400638133393').value, '4006381333931');
  assert.ok(!B.validate('ean13', '4006381333932').ok);
  assert.ok(/book number/.test(B.validate('ean13', '9783161484100').note));
  assert.strictEqual(B.validate('upca', '03600029145').value, '036000291452');
  assert.ok(!B.validate('upca', '036000291453').ok);
  assert.ok(!B.validate('upca', '0360002914A2').ok);
});
test('Code 128 and Code 39 validation', () => {
  assert.ok(B.validate('code128', 'Hello, World! 123').ok);
  assert.ok(!B.validate('code128', 'Café').ok);
  assert.strictEqual(B.validate('code39', 'abc-1').value, 'ABC-1');
  assert.ok(!B.validate('code39', 'A*B').ok);
  assert.ok(!B.validate('code39', 'A_B').ok);
});
test('Price add-on codes', () => {
  assert.strictEqual(B.parsePrice('price', '5', '6.99').addon, '50699');
  assert.strictEqual(B.parsePrice('price', '0', '12,50').addon, '01250');
  assert.strictEqual(B.parsePrice('price', '6', '$24').addon, '62400');
  assert.strictEqual(B.parsePrice('price', '5', '149.00').addon, '59999');
  assert.ok(B.parsePrice('price', '0', '120').error);
  assert.ok(B.parsePrice('price', '5', 'abc').error);
  assert.strictEqual(B.parsePrice('placeholder').addon, '90000');
  assert.strictEqual(B.parsePrice('none').addon, null);
});

/* ---------- Code 128 subset switching ---------- */
test('Code 128 uses subset C for long digit runs', () => {
  const v = I.code128Values('12345678');
  assert.deepStrictEqual(v.slice(0, 5), [105, 12, 34, 56, 78]);
  const w = I.code128Values('AB123456');
  assert.deepStrictEqual(w.slice(0, 4), [104, 33, 34, 99]);
  const odd = I.code128Values('A1234567');
  assert.deepStrictEqual(odd.slice(0, 4), [104, 33, 17, 99], 'odd run: one digit in B, then C');
});

/* ---------- outputs ---------- */
test('SVG output is well formed and sized in mm', () => {
  const r = B.build('isbn', '978-3-16-148410-0', { priceMode: 'placeholder', caption: 'A <Book> & "Title"' });
  const svg = B.toSVG(r.drawing, { physical: true, background: 'none', title: 'x' });
  assert.ok(/width="[\d.]+mm"/.test(svg));
  assert.ok(svg.includes('&lt;Book&gt; &amp; &quot;Title&quot;'));
  assert.ok(!svg.includes('fill="#ffffff"'), 'transparent background has no white rect');
});
test('PDF output has a valid xref table', () => {
  const r = B.build('code128', 'ABC123', { caption: 'Caption (with) brackets\\' });
  const pdf = Buffer.from(B.toPDF(r.drawing, {}));
  const s = pdf.toString('latin1');
  const xref = Number(s.match(/startxref\n(\d+)/)[1]);
  assert.ok(s.slice(xref).startsWith('xref'));
  const offs = [...s.slice(xref).matchAll(/(\d{10}) 00000 n/g)].map(m => Number(m[1]));
  offs.forEach((o, i) => assert.ok(s.slice(o).startsWith((i + 1) + ' 0 obj'), 'object ' + (i + 1)));
  assert.ok(s.includes('\\(with\\)'));
});
test('PNG dpi chunk is inserted with a valid CRC', () => {
  // 1x1 PNG
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
  const out = Buffer.from(B.pngWithDpi(new Uint8Array(png), 600));
  assert.strictEqual(out.slice(37, 41).toString('latin1'), 'pHYs');
  assert.strictEqual(out.readUInt32BE(41), Math.round(600 / 0.0254));
  assert.strictEqual(out.readUInt32BE(50), B.crc32(out, 37, 50));
});
test('ZIP output has the right signatures', () => {
  const z = Buffer.from(B.makeZip([{ name: 'a.txt', data: 'hello' }, { name: 'b/é.svg', data: '<svg/>' }]));
  assert.strictEqual(z.readUInt32LE(0), 0x04034b50);
  assert.strictEqual(z.readUInt32LE(z.length - 22), 0x06054b50);
  assert.strictEqual(z.readUInt16LE(z.length - 12), 2);
});
test('CSV parser handles quotes, semicolons and BOM', () => {
  assert.deepStrictEqual(B.parseCSV('﻿data,caption\r\n"978-3-16-148410-0","My ""Big"" Book, 2nd"\r\n\r\n'),
    [['data', 'caption'], ['978-3-16-148410-0', 'My "Big" Book, 2nd']]);
  assert.deepStrictEqual(B.parseCSV('data;caption\n123;abc'), [['data', 'caption'], ['123', 'abc']]);
});
test('Column mapping with and without a header row', () => {
  const m1 = B.mapColumns([['Title', 'ISBN', 'Price'], ['x', '978', '9.99']]);
  assert.deepStrictEqual([m1.header, m1.cols.data, m1.cols.caption, m1.cols.price], [true, 1, 0, 2]);
  const m2 = B.mapColumns([['ABC123', 'Box 1'], ['ABC124', 'Box 2']]);
  assert.deepStrictEqual([m2.header, m2.cols.data, m2.cols.caption], [false, 0, 1]);
});


console.log(`Barcode engine: ${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
