/*!
 * LO Barcode Engine 1.0.0
 * Client-side barcode and QR code generation for the LO Publications
 * Free Barcode Generator. No dependencies and no DOM access, so it runs in the
 * browser and in Node.
 *
 * Used by the Free Barcode Generator at /resources/barcode-generator.
 * Types are in engine.d.ts. Docs: docs/barcode-generator.md.
 *
 * Formats: ISBN (Bookland EAN-13 + EAN-5 price add-on), EAN-13, UPC-A,
 * Code 128 (subsets B and C), Code 39 (optional mod-43 check), QR Code
 * (versions 1-40, numeric / alphanumeric / byte mode, ECC L/M/Q/H).
 *
 * Output is a "drawing": a list of black rectangles and text items in
 * abstract units, plus the size of one unit in millimetres. Renderers turn
 * a drawing into SVG, PDF or a canvas, so every format shares one output path.
 */
/* eslint-disable */
const LOBarcode = (function () {
  'use strict';

  var VERSION = '1.0.0';

  /* ------------------------------------------------------------------ */
  /* Text metrics (Helvetica, 1/1000 em, ASCII 32-126)                   */
  /* ------------------------------------------------------------------ */
  var HELV = [
    278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278,
    556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556,
    1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778,
    667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556,
    333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556,
    556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584
  ];
  var FONT_STACK = 'Helvetica, Arial, "Liberation Sans", sans-serif';

  function textWidthEm(s) {
    var w = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      w += (c >= 32 && c <= 126) ? HELV[c - 32] : 600;
    }
    return w / 1000;
  }

  /* ------------------------------------------------------------------ */
  /* Shared helpers                                                      */
  /* ------------------------------------------------------------------ */
  function fail(message) { return { ok: false, message: message }; }
  function clamp(n, lo, hi) { return Math.min(hi, Math.max(lo, n)); }

  function utf8Bytes(s) {
    if (typeof TextEncoder !== 'undefined') return Array.prototype.slice.call(new TextEncoder().encode(s));
    var out = [], str = unescape(encodeURIComponent(s));
    for (var i = 0; i < str.length; i++) out.push(str.charCodeAt(i));
    return out;
  }

  // Turns a module string ("1011...") into merged bar rectangles.
  function pushRuns(rects, mod, x0, yOf, hOf) {
    var i = 0;
    while (i < mod.length) {
      if (mod[i] === '1') {
        var h = hOf(i), y = yOf(i), j = i;
        while (j + 1 < mod.length && mod[j + 1] === '1' && hOf(j + 1) === h && yOf(j + 1) === y) j++;
        rects.push({ x: x0 + i, y: y, w: j - i + 1, h: h });
        i = j + 1;
      } else i++;
    }
  }

  // Width digits ("212222", bar first) to a module string.
  function widthsToModules(widths) {
    var m = '';
    for (var i = 0; i < widths.length; i++) {
      var n = Number(widths[i]), ch = i % 2 === 0 ? '1' : '0';
      for (var k = 0; k < n; k++) m += ch;
    }
    return m;
  }

  /* ------------------------------------------------------------------ */
  /* GTIN family: EAN-13, UPC-A, ISBN, EAN-5 add-on                      */
  /* ------------------------------------------------------------------ */
  var EAN_L = ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'];
  var EAN_G = ['0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'];
  var EAN_R = EAN_L.map(function (c) { return c.replace(/[01]/g, function (b) { return b === '0' ? '1' : '0'; }); });
  var EAN_PARITY = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];
  var EAN5_PARITY = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

  // Check digit for any GTIN body (weights 3,1,3... from the right).
  function gtinCheck(body) {
    var s = 0, n = body.length;
    for (var i = 0; i < n; i++) s += Number(body[n - 1 - i]) * (i % 2 === 0 ? 3 : 1);
    return (10 - (s % 10)) % 10;
  }
  function isbn10Check(d9) {
    var s = 0;
    for (var i = 0; i < 9; i++) s += Number(d9[i]) * (10 - i);
    var c = (11 - (s % 11)) % 11;
    return c === 10 ? 'X' : String(c);
  }
  function ean5Check(d5) {
    var a = d5.split('').map(Number);
    return (3 * (a[0] + a[2] + a[4]) + 9 * (a[1] + a[3])) % 10;
  }
  function encodeEan13(d13) {
    var par = EAN_PARITY[Number(d13[0])], m = '101';
    for (var i = 1; i <= 6; i++) m += (par[i - 1] === 'L' ? EAN_L : EAN_G)[Number(d13[i])];
    m += '01010';
    for (var j = 7; j <= 12; j++) m += EAN_R[Number(d13[j])];
    return m + '101';
  }
  function encodeEan5(d5) {
    var par = EAN5_PARITY[ean5Check(d5)], m = '1011';
    for (var i = 0; i < 5; i++) {
      m += (par[i] === 'L' ? EAN_L : EAN_G)[Number(d5[i])];
      if (i < 4) m += '01';
    }
    return m;
  }

  function compactDigits(raw) {
    return String(raw).trim().replace(/[\s\-‐-―.]+/g, '');
  }

  function parseIsbn(raw) {
    var s = String(raw).trim().replace(/^isbn(-?1[03])?\s*:?\s*/i, '');
    if (!s) return { state: 'empty', message: 'Enter the ISBN printed on your copyright page.' };
    var parts = s.split(/[\s\-‐-―]+/).filter(Boolean);
    var compact = parts.join('').toUpperCase();
    if (/[^0-9X]/.test(compact)) return { state: 'error', message: 'An ISBN has digits only, with optional hyphens.' };
    var n = compact.length;
    if (n === 10) {
      if (/X/.test(compact.slice(0, 9))) return { state: 'error', message: 'X can only be the last character of a 10-digit ISBN.' };
      var want10 = isbn10Check(compact.slice(0, 9));
      if (compact[9] !== want10) return { state: 'error', message: 'This ISBN-10 is not valid. Its last character should be ' + want10 + ', not ' + compact[9] + '. Check the number with your ISBN agency record.' };
      var body = '978' + compact.slice(0, 9), c13 = gtinCheck(body), digits = body + c13;
      var label = digits;
      if (parts.length === 4 && parts[3].length === 1) label = '978-' + parts[0] + '-' + parts[1] + '-' + parts[2] + '-' + c13;
      return { state: 'ok', digits: digits, label: label, note: 'Converted your ISBN-10 to ISBN-13 ' + label + '.' };
    }
    if (n < 13) return { state: 'partial', message: n + ' of 13 digits entered.' };
    if (n > 13) return { state: 'error', message: 'That is ' + n + ' digits. An ISBN-13 has 13.' };
    if (/X/.test(compact)) return { state: 'error', message: 'An ISBN-13 has digits only. X is only used in 10-digit ISBNs.' };
    if (compact.slice(0, 3) !== '978' && compact.slice(0, 3) !== '979') return { state: 'error', message: 'Every ISBN-13 starts with 978 or 979.' };
    var want = gtinCheck(compact.slice(0, 12));
    if (Number(compact[12]) !== want) return { state: 'error', message: 'This ISBN is not valid. Its last digit should be ' + want + ', not ' + compact[12] + '. Check the number with your ISBN agency record.' };
    var lab = compact;
    if (parts.length === 5 && parts[0].length === 3 && parts[4].length === 1) lab = parts.join('-');
    return { state: 'ok', digits: compact, label: lab, note: 'Valid ISBN-13.' };
  }

  var CURRENCIES = {
    '5': { name: 'US dollar', symbol: 'US$' },
    '6': { name: 'Canadian dollar', symbol: 'CA$' },
    '0': { name: 'British pound', symbol: '£' },
    '3': { name: 'Australian dollar', symbol: 'A$' },
    '4': { name: 'New Zealand dollar', symbol: 'NZ$' }
  };

  // mode: none | placeholder | price.  Returns {addon, note} or {error}.
  function parsePrice(mode, currency, amountRaw) {
    if (!mode || mode === 'none') return { addon: null };
    if (mode === 'placeholder') return { addon: '90000', note: 'No price set (90000)' };
    var cur = CURRENCIES[currency];
    if (!cur) return { error: 'Choose a currency.' };
    var a = String(amountRaw == null ? '' : amountRaw).trim().replace(/^[^\d]+/, '').replace(',', '.');
    if (!/^\d{1,6}(\.\d{1,2})?$/.test(a)) return { error: 'Enter the price as a number, for example 9.99.' };
    var cents = Math.round(parseFloat(a) * 100);
    if (cents < 1) return { error: 'The price must be at least 0.01.' };
    if (cents > 9999) {
      if (currency === '5') return { addon: '59999', note: 'US$100 or more (59999)' };
      return { error: 'A price add-on can hold up to 99.99. For a higher price choose "No price set".' };
    }
    return { addon: currency + ('0000' + cents).slice(-4), note: cur.symbol + (cents / 100).toFixed(2) };
  }

  // Geometry for EAN-13 / UPC-A / ISBN in modules (X = 0.33 mm at 100%).
  var GT = { normH: 69, guardH: 74, digitSize: 10, isbnTop: 13, plainTop: 2 };

  function drawEan13(d13, opts) {
    var isbnLabel = opts.isbnLabel, addon = opts.addon;
    var QL = 11, T = isbnLabel ? GT.isbnTop : GT.plainTop;
    var rects = [], texts = [];
    var isGuard = function (i) { return i < 3 || (i >= 45 && i < 50) || i >= 92; };
    pushRuns(rects, encodeEan13(d13), QL, function () { return T; }, function (i) { return isGuard(i) ? GT.guardH : GT.normH; });
    var dy = T + GT.normH + 8.5, ds = GT.digitSize;
    if (isbnLabel) {
      var line = 'ISBN ' + isbnLabel;
      var fs = Math.min(9, 95 / textWidthEm(line));
      texts.push({ s: line, x: QL + 47.5, y: T - 3.2, size: fs, anchor: 'middle' });
    }
    texts.push({ s: d13[0], x: QL - 5.5, y: dy, size: ds, anchor: 'middle' });
    for (var i = 0; i < 6; i++) {
      texts.push({ s: d13[1 + i], x: QL + 3 + 7 * i + 3.5, y: dy, size: ds, anchor: 'middle' });
      texts.push({ s: d13[7 + i], x: QL + 50 + 7 * i + 3.5, y: dy, size: ds, anchor: 'middle' });
    }
    var w = QL + 95 + 7;
    if (addon) {
      var ax = QL + 95 + 9, aTop = T + 9;
      pushRuns(rects, encodeEan5(addon), ax, function () { return aTop; }, function () { return T + GT.guardH - aTop; });
      for (var k = 0; k < 5; k++) texts.push({ s: addon[k], x: ax + 4 + 9 * k + 3.5, y: aTop - 1.6, size: ds, anchor: 'middle' });
      w = ax + 47 + 5;
    }
    return { w: w, h: dy + 2.5, rects: rects, texts: texts };
  }

  function drawUpcA(d12) {
    var QL = 9, T = GT.plainTop, rects = [], texts = [];
    var ext = function (i) { return i < 10 || (i >= 45 && i < 50) || i >= 85; };
    pushRuns(rects, encodeEan13('0' + d12), QL, function () { return T; }, function (i) { return ext(i) ? GT.guardH : GT.normH; });
    var dy = T + GT.normH + 8.5, ds = GT.digitSize, small = 7;
    texts.push({ s: d12[0], x: QL - 4.2, y: T + GT.guardH, size: small, anchor: 'middle' });
    for (var i = 1; i <= 5; i++) texts.push({ s: d12[i], x: QL + 3 + 7 * i + 3.5, y: dy, size: ds, anchor: 'middle' });
    for (var j = 6; j <= 10; j++) texts.push({ s: d12[j], x: QL + 50 + 7 * (j - 6) + 3.5, y: dy, size: ds, anchor: 'middle' });
    texts.push({ s: d12[11], x: QL + 95 + 4.2, y: T + GT.guardH, size: small, anchor: 'middle' });
    return { w: QL + 95 + 9, h: dy + 2.5, rects: rects, texts: texts };
  }

  /* ------------------------------------------------------------------ */
  /* Code 128 (subsets B and C)                                          */
  /* ------------------------------------------------------------------ */
  var C128 = ('212222 222122 222221 121223 121322 131222 122213 122312 132212 221213 221312 231212 112232 122132 122231 113222 ' +
    '123122 123221 223211 221132 221231 213212 223112 312131 311222 321122 321221 312212 322112 322211 212123 212321 232121 ' +
    '111323 131123 131321 112313 132113 132311 211313 231113 231311 112133 112331 132131 113123 113321 133121 313121 211331 ' +
    '231131 213113 213311 213131 311123 311321 331121 312113 312311 332111 314111 221411 431111 111224 111422 121124 121421 ' +
    '141122 141221 112214 112412 122114 122411 142112 142211 241211 221114 413111 241112 134111 111242 121142 121241 114212 ' +
    '124112 124211 411212 421112 421211 212141 214121 412121 111143 111341 131141 114113 114311 411113 411311 113141 114131 ' +
    '311141 411131 211412 211214 211232 2331112').split(' ');
  var C128_START_B = 104, C128_START_C = 105, C128_CODE_B = 100, C128_CODE_C = 99, C128_STOP = 106;

  function digitRun(s, i) { var n = 0; while (i + n < s.length && s.charCodeAt(i + n) >= 48 && s.charCodeAt(i + n) <= 57) n++; return n; }

  // Returns the symbol values (start, data, check, stop).
  function code128Values(s) {
    var len = s.length, run0 = digitRun(s, 0);
    var set = (run0 >= 4 || (run0 === len && len === 2)) ? 'C' : 'B';
    var v = [set === 'C' ? C128_START_C : C128_START_B], i = 0;
    while (i < len) {
      if (set === 'C') {
        if (digitRun(s, i) >= 2) { v.push(Number(s.substr(i, 2))); i += 2; }
        else { v.push(C128_CODE_B); set = 'B'; }
      } else {
        var run = digitRun(s, i);
        if (run >= 4 && (i + run === len || run >= 6)) {
          if (run % 2 === 1) { v.push(s.charCodeAt(i) - 32); i++; }
          v.push(C128_CODE_C); set = 'C';
        } else { v.push(s.charCodeAt(i) - 32); i++; }
      }
    }
    var sum = v[0];
    for (var k = 1; k < v.length; k++) sum += v[k] * k;
    v.push(sum % 103);
    v.push(C128_STOP);
    return v;
  }
  function encodeCode128(s) {
    return code128Values(s).map(function (x) { return widthsToModules(C128[x]); }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* Code 39                                                             */
  /* ------------------------------------------------------------------ */
  var C39_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%';
  var C39 = ('111331311 311311113 113311113 313311111 111331113 311331111 113331111 111311313 311311311 113311311 311113113 ' +
    '113113113 313113111 111133113 311133111 113133111 111113313 311113311 113113311 111133311 311111133 113111133 313111131 ' +
    '111131133 311131131 113131131 111111333 311111331 113111331 111131331 331111113 133111113 333111111 131131113 331131111 ' +
    '133131111 131111313 331111311 133111311 131313111 131311131 131113131 111313131').split(' ');
  var C39_STAR = '131131311';

  function code39Check(s) {
    var sum = 0;
    for (var i = 0; i < s.length; i++) sum += C39_CHARS.indexOf(s[i]);
    return C39_CHARS[sum % 43];
  }
  function encodeCode39(s) {
    var chars = [C39_STAR];
    for (var i = 0; i < s.length; i++) chars.push(C39[C39_CHARS.indexOf(s[i])]);
    chars.push(C39_STAR);
    return chars.map(widthsToModules).join('0');
  }

  /* ------------------------------------------------------------------ */
  /* QR Code (ISO/IEC 18004)                                             */
  /* ------------------------------------------------------------------ */
  var QR_LEVELS = { L: { idx: 0, bits: 1 }, M: { idx: 1, bits: 0 }, Q: { idx: 2, bits: 3 }, H: { idx: 3, bits: 2 } };
  var QR_ECC_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  var QR_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  var QR_ALNUM = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';

  function qrRawModules(ver) {
    var r = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      var na = Math.floor(ver / 7) + 2;
      r -= (25 * na - 10) * na - 55;
      if (ver >= 7) r -= 36;
    }
    return r;
  }
  function qrDataCodewords(ver, li) {
    return Math.floor(qrRawModules(ver) / 8) - QR_ECC_PER_BLOCK[li][ver] * QR_BLOCKS[li][ver];
  }
  function gfMul(x, y) {
    var z = 0;
    for (var i = 7; i >= 0; i--) {
      z = (z << 1) ^ ((z >>> 7) * 0x11D);
      z ^= ((y >>> i) & 1) * x;
    }
    return z & 0xFF;
  }
  function rsDivisor(degree) {
    var r = [];
    for (var i = 0; i < degree - 1; i++) r.push(0);
    r.push(1);
    var root = 1;
    for (var k = 0; k < degree; k++) {
      for (var j = 0; j < r.length; j++) {
        r[j] = gfMul(r[j], root);
        if (j + 1 < r.length) r[j] ^= r[j + 1];
      }
      root = gfMul(root, 0x02);
    }
    return r;
  }
  function rsRemainder(data, div) {
    var r = div.map(function () { return 0; });
    data.forEach(function (b) {
      var f = b ^ r.shift();
      r.push(0);
      div.forEach(function (coef, i) { r[i] ^= gfMul(coef, f); });
    });
    return r;
  }
  function qrMode(text) {
    if (/^[0-9]+$/.test(text)) return 'numeric';
    var alnum = true;
    for (var i = 0; i < text.length; i++) if (QR_ALNUM.indexOf(text[i]) < 0) { alnum = false; break; }
    return alnum ? 'alnum' : 'byte';
  }
  function qrCountBits(mode, ver) {
    var i = ver <= 9 ? 0 : ver <= 26 ? 1 : 2;
    return { numeric: [10, 12, 14], alnum: [9, 11, 13], byte: [8, 16, 16] }[mode][i];
  }
  function qrDataBits(mode, text, bytes) {
    var bits = [];
    var put = function (val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    if (mode === 'numeric') {
      for (var i = 0; i < text.length; i += 3) {
        var chunk = text.substr(i, 3);
        put(Number(chunk), chunk.length * 3 + 1);
      }
    } else if (mode === 'alnum') {
      for (var j = 0; j + 1 < text.length; j += 2) put(QR_ALNUM.indexOf(text[j]) * 45 + QR_ALNUM.indexOf(text[j + 1]), 11);
      if (text.length % 2) put(QR_ALNUM.indexOf(text[text.length - 1]), 6);
    } else bytes.forEach(function (b) { put(b, 8); });
    return bits;
  }
  function qrCapacityBytes(level) {
    return qrDataCodewords(40, QR_LEVELS[level].idx) - 3;
  }

  function qrEncode(text, level, forceMask) {
    var li = QR_LEVELS[level].idx, formatBitsEcc = QR_LEVELS[level].bits;
    var mode = qrMode(text), bytes = mode === 'byte' ? utf8Bytes(text) : null;
    var count = mode === 'byte' ? bytes.length : text.length;
    var dataBits = qrDataBits(mode, text, bytes || []);
    var ver, capBits;
    for (ver = 1; ver <= 40; ver++) {
      capBits = qrDataCodewords(ver, li) * 8;
      var cc = qrCountBits(mode, ver);
      if (count < (1 << cc) && 4 + cc + dataBits.length <= capBits) break;
    }
    if (ver > 40) return null;

    var bits = [];
    var put = function (val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put({ numeric: 1, alnum: 2, byte: 4 }[mode], 4);
    put(count, qrCountBits(mode, ver));
    bits = bits.concat(dataBits);
    put(0, Math.min(4, capBits - bits.length));
    put(0, (8 - bits.length % 8) % 8);
    for (var pad = 0xEC; bits.length < capBits; pad ^= 0xEC ^ 0x11) put(pad, 8);
    var data = [];
    for (var b = 0; b < bits.length; b += 8) {
      var byte = 0;
      for (var k = 0; k < 8; k++) byte = (byte << 1) | bits[b + k];
      data.push(byte);
    }

    // Error correction and interleaving
    var numBlocks = QR_BLOCKS[li][ver], eccLen = QR_ECC_PER_BLOCK[li][ver];
    var rawCw = Math.floor(qrRawModules(ver) / 8);
    var numShort = numBlocks - rawCw % numBlocks, shortLen = Math.floor(rawCw / numBlocks);
    var div = rsDivisor(eccLen), blocks = [], p = 0;
    for (var bi = 0; bi < numBlocks; bi++) {
      var dat = data.slice(p, p + shortLen - eccLen + (bi < numShort ? 0 : 1));
      p += dat.length;
      var ecc = rsRemainder(dat, div);
      if (bi < numShort) dat.push(0);
      blocks.push(dat.concat(ecc));
    }
    var cw = [];
    for (var ci = 0; ci < blocks[0].length; ci++) {
      for (var bj = 0; bj < blocks.length; bj++) {
        if (ci !== shortLen - eccLen || bj >= numShort) cw.push(blocks[bj][ci]);
      }
    }

    // Matrix with function patterns
    var n = ver * 4 + 17, mods = [], fn = [];
    for (var y = 0; y < n; y++) { mods.push(new Array(n).fill(false)); fn.push(new Array(n).fill(false)); }
    var setF = function (x, y2, dark) { mods[y2][x] = dark; fn[y2][x] = true; };
    for (var t = 0; t < n; t++) { setF(6, t, t % 2 === 0); setF(t, 6, t % 2 === 0); }
    var finder = function (cx, cy) {
      for (var dy = -4; dy <= 4; dy++) for (var dx = -4; dx <= 4; dx++) {
        var dist = Math.max(Math.abs(dx), Math.abs(dy)), xx = cx + dx, yy = cy + dy;
        if (xx >= 0 && xx < n && yy >= 0 && yy < n) setF(xx, yy, dist !== 2 && dist !== 4);
      }
    };
    finder(3, 3); finder(n - 4, 3); finder(3, n - 4);
    var align = [];
    if (ver > 1) {
      var na = Math.floor(ver / 7) + 2;
      var step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (na * 2 - 2)) * 2;
      align = [6];
      for (var pos = n - 7; align.length < na; pos -= step) align.splice(1, 0, pos);
    }
    for (var ai = 0; ai < align.length; ai++) for (var aj = 0; aj < align.length; aj++) {
      var last = align.length - 1;
      if ((ai === 0 && aj === 0) || (ai === 0 && aj === last) || (ai === last && aj === 0)) continue;
      for (var ady = -2; ady <= 2; ady++) for (var adx = -2; adx <= 2; adx++) {
        setF(align[ai] + adx, align[aj] + ady, Math.max(Math.abs(adx), Math.abs(ady)) !== 1);
      }
    }
    var drawFormat = function (mask) {
      var d = (formatBitsEcc << 3) | mask, rem = d;
      for (var i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      var fb = ((d << 10) | rem) ^ 0x5412;
      var bit = function (i) { return ((fb >>> i) & 1) !== 0; };
      for (var a = 0; a <= 5; a++) setF(8, a, bit(a));
      setF(8, 7, bit(6)); setF(8, 8, bit(7)); setF(7, 8, bit(8));
      for (var c = 9; c < 15; c++) setF(14 - c, 8, bit(c));
      for (var e = 0; e < 8; e++) setF(n - 1 - e, 8, bit(e));
      for (var g = 8; g < 15; g++) setF(8, n - 15 + g, bit(g));
      setF(8, n - 8, true);
    };
    drawFormat(0);
    if (ver >= 7) {
      var vr = ver;
      for (var vi = 0; vi < 12; vi++) vr = (vr << 1) ^ ((vr >>> 11) * 0x1F25);
      var vb = (ver << 12) | vr;
      for (var vk = 0; vk < 18; vk++) {
        var vbit = ((vb >>> vk) & 1) !== 0, va = n - 11 + vk % 3, vbb = Math.floor(vk / 3);
        setF(va, vbb, vbit); setF(vbb, va, vbit);
      }
    }

    // Place data in the zigzag
    var bitIdx = 0, total = cw.length * 8;
    for (var right = n - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (var vert = 0; vert < n; vert++) {
        for (var jj = 0; jj < 2; jj++) {
          var x = right - jj, upward = ((right + 1) & 2) === 0, yy2 = upward ? n - 1 - vert : vert;
          if (!fn[yy2][x] && bitIdx < total) {
            mods[yy2][x] = ((cw[bitIdx >>> 3] >>> (7 - (bitIdx & 7))) & 1) !== 0;
            bitIdx++;
          }
        }
      }
    }

    var maskFn = [
      function (x, y) { return (x + y) % 2 === 0; },
      function (x, y) { return y % 2 === 0; },
      function (x) { return x % 3 === 0; },
      function (x, y) { return (x + y) % 3 === 0; },
      function (x, y) { return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; },
      function (x, y) { return x * y % 2 + x * y % 3 === 0; },
      function (x, y) { return (x * y % 2 + x * y % 3) % 2 === 0; },
      function (x, y) { return ((x + y) % 2 + x * y % 3) % 2 === 0; }
    ];
    var applyMask = function (m) {
      for (var y3 = 0; y3 < n; y3++) for (var x3 = 0; x3 < n; x3++) {
        if (!fn[y3][x3] && maskFn[m](x3, y3)) mods[y3][x3] = !mods[y3][x3];
      }
    };
    var best = forceMask, bestScore = Infinity;
    if (best === undefined || best === null) {
      for (var m = 0; m < 8; m++) {
        applyMask(m); drawFormat(m);
        var sc = qrPenalty(mods, n);
        if (sc < bestScore) { bestScore = sc; best = m; }
        applyMask(m);
      }
    }
    applyMask(best); drawFormat(best);
    return { size: n, modules: mods, version: ver, level: level, mask: best, mode: mode, dataCodewords: data.length };
  }

  function qrPenalty(m, n) {
    var p = 0, x, y, run;
    for (y = 0; y < n; y++) {
      run = 1;
      for (x = 1; x < n; x++) {
        if (m[y][x] === m[y][x - 1]) run++;
        else { if (run >= 5) p += run - 2; run = 1; }
      }
      if (run >= 5) p += run - 2;
    }
    for (x = 0; x < n; x++) {
      run = 1;
      for (y = 1; y < n; y++) {
        if (m[y][x] === m[y - 1][x]) run++;
        else { if (run >= 5) p += run - 2; run = 1; }
      }
      if (run >= 5) p += run - 2;
    }
    for (y = 0; y < n - 1; y++) for (x = 0; x < n - 1; x++) {
      var c = m[y][x];
      if (c === m[y][x + 1] && c === m[y + 1][x] && c === m[y + 1][x + 1]) p += 3;
    }
    var P1 = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0], P2 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
    var match = function (get) {
      var a = true, b = true;
      for (var k = 0; k < 11; k++) {
        var v = get(k) ? 1 : 0;
        if (v !== P1[k]) a = false;
        if (v !== P2[k]) b = false;
      }
      return (a ? 1 : 0) + (b ? 1 : 0);
    };
    for (y = 0; y < n; y++) for (x = 0; x <= n - 11; x++) p += 40 * match(function (k) { return m[y][x + k]; });
    for (x = 0; x < n; x++) for (y = 0; y <= n - 11; y++) p += 40 * match(function (k) { return m[y + k][x]; });
    var dark = 0;
    for (y = 0; y < n; y++) for (x = 0; x < n; x++) if (m[y][x]) dark++;
    var tot = n * n, k2 = Math.ceil(Math.abs(dark * 20 - tot * 10) / tot) - 1;
    p += Math.max(0, k2) * 10;
    return p;
  }

  /* ------------------------------------------------------------------ */
  /* QR content helpers                                                  */
  /* ------------------------------------------------------------------ */
  function vEsc(s) { return String(s || '').replace(/([\\;,])/g, '\\$1').replace(/\r?\n/g, '\\n'); }
  function wifiEsc(s) { return String(s || '').replace(/([\\;,:"])/g, '\\$1'); }

  // kind: text | vcard | wifi.  fields: plain object.  Returns {ok,text} or {ok:false,message}.
  function qrPayload(kind, f) {
    f = f || {};
    if (kind === 'vcard') {
      var name = String(f.name || '').trim();
      if (!name) return fail('Enter a name for the contact card.');
      var lines = ['BEGIN:VCARD', 'VERSION:3.0'];
      var parts = name.split(/\s+/), last = parts.length > 1 ? parts.pop() : '', first = parts.join(' ');
      lines.push('N:' + vEsc(last) + ';' + vEsc(first) + ';;;');
      lines.push('FN:' + vEsc(name));
      if (f.org) lines.push('ORG:' + vEsc(f.org));
      if (f.title) lines.push('TITLE:' + vEsc(f.title));
      if (f.phone) lines.push('TEL;TYPE=CELL:' + vEsc(f.phone));
      if (f.email) lines.push('EMAIL:' + vEsc(f.email));
      if (f.url) lines.push('URL:' + vEsc(f.url));
      lines.push('END:VCARD');
      return { ok: true, text: lines.join('\r\n') };
    }
    if (kind === 'wifi') {
      var ssid = String(f.ssid || '');
      if (!ssid.trim()) return fail('Enter the Wi-Fi network name.');
      var sec = f.security || 'WPA';
      if (sec !== 'nopass' && !f.password) return fail('Enter the Wi-Fi password, or choose "No password".');
      return { ok: true, text: 'WIFI:T:' + sec + ';S:' + wifiEsc(ssid) + ';' + (sec !== 'nopass' ? 'P:' + wifiEsc(f.password) + ';' : '') + (f.hidden ? 'H:true;' : '') + ';' };
    }
    var t = String(f.text == null ? '' : f.text);
    if (!t.trim()) return fail('Enter a link or some text.');
    return { ok: true, text: t };
  }

  /* ------------------------------------------------------------------ */
  /* Format registry, validation and drawing                             */
  /* ------------------------------------------------------------------ */
  var FORMATS = [
    { id: 'isbn', name: 'ISBN (books)', family: 'gtin', example: '978-3-16-148410-0' },
    { id: 'ean13', name: 'EAN-13', family: 'gtin', example: '4006381333931' },
    { id: 'upca', name: 'UPC-A', family: 'gtin', example: '036000291452' },
    { id: 'code128', name: 'Code 128', family: 'linear', example: 'LO-PUB-2026-0001' },
    { id: 'code39', name: 'Code 39', family: 'linear', example: 'LOP-42' },
    { id: 'qr', name: 'QR Code', family: 'matrix', example: 'https://lopublications.com' }
  ];
  var FORMAT_BY_ID = {};
  FORMATS.forEach(function (f) { FORMAT_BY_ID[f.id] = f; });

  var DEFAULTS = {
    magnification: 100,  // GTIN family, percent (80-200)
    xMm: 0.33,           // linear, narrow bar width
    heightMm: 15,        // linear, bar height
    showText: true,      // linear, human-readable line
    code39Check: false,
    qrLevel: 'M',
    qrSizeMm: 30,
    caption: ''
  };

  // Validate input for one format. Returns {ok, value, label, note} or {ok:false, message, partial}.
  function validate(formatId, raw, o) {
    o = o || {};
    var s = String(raw == null ? '' : raw);
    if (formatId === 'isbn') {
      var p = parseIsbn(s);
      if (p.state !== 'ok') return { ok: false, message: p.message, partial: p.state === 'partial' || p.state === 'empty' };
      return { ok: true, value: p.digits, label: p.label, note: p.note };
    }
    if (formatId === 'ean13' || formatId === 'upca') {
      var full = formatId === 'ean13' ? 13 : 12, name = formatId === 'ean13' ? 'EAN-13' : 'UPC-A';
      var d = compactDigits(s);
      if (!d) return { ok: false, partial: true, message: 'Enter the ' + (full - 1) + ' or ' + full + ' digits of your ' + name + ' number.' };
      if (/\D/.test(d)) return { ok: false, message: name + ' numbers contain digits only.' };
      if (d.length < full - 1) return { ok: false, partial: true, message: d.length + ' of ' + full + ' digits entered.' };
      if (d.length > full) return { ok: false, message: 'That is ' + d.length + ' digits. ' + name + ' has ' + full + ', including the check digit.' };
      var body = d.slice(0, full - 1), chk = gtinCheck(body), note;
      if (d.length === full) {
        if (Number(d[full - 1]) !== chk) return { ok: false, message: 'The check digit should be ' + chk + ', not ' + d[full - 1] + '. Check the number you were given.' };
        note = 'Valid ' + name + '.';
      } else note = 'Check digit ' + chk + ' added.';
      var v = body + chk;
      if (formatId === 'ean13' && /^97[89]/.test(v)) note += ' This is a book number. Choose ISBN to add the ISBN line and a price.';
      return { ok: true, value: v, label: v, note: note };
    }
    if (formatId === 'code128') {
      if (!s.length) return { ok: false, partial: true, message: 'Enter the text or number to encode.' };
      var bad = [];
      for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if ((c < 32 || c > 126) && bad.indexOf(s[i]) < 0) bad.push(s[i]);
      }
      if (bad.length) return { ok: false, message: 'Code 128 accepts English letters, digits, spaces and keyboard symbols. Remove: ' + bad.map(function (ch) { return ch === '\t' ? 'tab' : ch === '\n' ? 'line break' : ch; }).join(' ') };
      if (s.length > 80) return { ok: false, message: 'Keep Code 128 to 80 characters or fewer. This has ' + s.length + '.' };
      return { ok: true, value: s, label: s };
    }
    if (formatId === 'code39') {
      if (!s.length) return { ok: false, partial: true, message: 'Enter the text or number to encode.' };
      var up = s.toUpperCase(), bad39 = [];
      for (var j = 0; j < up.length; j++) if (C39_CHARS.indexOf(up[j]) < 0 && bad39.indexOf(up[j]) < 0) bad39.push(up[j]);
      if (bad39.length) return { ok: false, message: 'Code 39 accepts A-Z, 0-9, space and - . $ / + %. Remove: ' + bad39.join(' ') };
      if (up.length > 43) return { ok: false, message: 'Keep Code 39 to 43 characters or fewer. This has ' + up.length + '.' };
      var val = up, n39 = up !== s ? 'Letters changed to capitals. Code 39 has no lowercase.' : undefined;
      if (o.code39Check) { val = up + code39Check(up); n39 = (n39 ? n39 + ' ' : '') + 'Check character ' + val[val.length - 1] + ' added.'; }
      return { ok: true, value: val, label: val, note: n39 };
    }
    if (formatId === 'qr') {
      if (!s.length || !s.trim()) return { ok: false, partial: true, message: 'Enter a link or some text.' };
      var level = o.qrLevel || 'M', mode = qrMode(s);
      var bits = 4 + qrCountBits(mode, 40) + qrDataBits(mode, s, mode === 'byte' ? utf8Bytes(s) : []).length;
      var cap = qrDataCodewords(40, QR_LEVELS[level].idx) * 8;
      if (bits > cap) return { ok: false, message: 'Too long for one QR code at this error correction. Shorten the text or choose a lower error correction level.' };
      return { ok: true, value: s, label: s };
    }
    return { ok: false, message: 'Unknown format.' };
  }

  function addCaption(d, caption, unitMm) {
    caption = String(caption || '').replace(/\s+/g, ' ').trim();
    if (!caption) return d;
    var em = textWidthEm(caption);
    var size = 3.0 / unitMm, minSize = 1.8 / unitMm, avail = d.w * 0.96;
    if (em * size > avail) size = Math.max(minSize, avail / em);
    var tw = em * size;
    if (tw > d.w * 0.98) {
      var extra = (tw - d.w * 0.96) / 2;
      d.rects.forEach(function (r) { r.x += extra; });
      d.texts.forEach(function (t) { t.x += extra; });
      d.w += extra * 2;
    }
    var y = d.h + size * 1.05;
    d.texts.push({ s: caption, x: d.w / 2, y: y, size: size, anchor: 'middle', caption: true });
    d.h = y + size * 0.45;
    return d;
  }

  // Build a drawing.  Returns {ok, drawing, info, value, label, note} or {ok:false, message}.
  function build(formatId, raw, opts) {
    var o = {};
    Object.keys(DEFAULTS).forEach(function (k) { o[k] = DEFAULTS[k]; });
    Object.keys(opts || {}).forEach(function (k) { if (opts[k] !== undefined) o[k] = opts[k]; });
    var v = validate(formatId, raw, o);
    if (!v.ok) return v;
    var d, unitMm, info = {};
    if (formatId === 'isbn' || formatId === 'ean13' || formatId === 'upca') {
      var mag = clamp(Number(o.magnification) || 100, 80, 200);
      unitMm = 0.33 * mag / 100;
      if (formatId === 'upca') d = drawUpcA(v.value);
      else {
        var addon = null;
        if (formatId === 'isbn') {
          var pr = parsePrice(o.priceMode, o.currency, o.price);
          if (pr.error) return { ok: false, message: pr.error, field: 'price' };
          addon = pr.addon;
          info.addon = addon; info.priceNote = pr.note;
        }
        d = drawEan13(v.value, { isbnLabel: formatId === 'isbn' ? v.label : null, addon: addon });
      }
      info.magnification = mag;
    } else if (formatId === 'code128' || formatId === 'code39') {
      unitMm = clamp(Number(o.xMm) || 0.33, 0.17, 2);
      var hMm = clamp(Number(o.heightMm) || 15, 4, 100);
      var mods = formatId === 'code128' ? encodeCode128(v.value) : encodeCode39(v.value);
      var Q = 10, T = 2, H = hMm / unitMm, rects = [], texts = [];
      pushRuns(rects, mods, Q, function () { return T; }, function () { return H; });
      var w = Q * 2 + mods.length, h = T + H + 2;
      if (o.showText !== false) {
        var hr = v.label, em = textWidthEm(hr), size = Math.min(2.8 / unitMm, (mods.length) / em);
        size = Math.max(size, 1.6 / unitMm);
        var y = T + H + size * 0.95;
        texts.push({ s: hr, x: w / 2, y: y, size: size, anchor: 'middle' });
        h = y + size * 0.35;
        if (em * size > w) {
          var ex = (em * size - w) / 2 + 2;
          rects.forEach(function (r) { r.x += ex; });
          texts[0].x += ex; w += ex * 2;
        }
      }
      d = { w: w, h: h, rects: rects, texts: texts };
      info.modules = mods.length;
      if (formatId === 'code128') info.values = code128Values(v.value);
    } else if (formatId === 'qr') {
      var q = qrEncode(v.value, o.qrLevel || 'M');
      if (!q) return fail('Too long for one QR code at this error correction.');
      var QZ = 4, n = q.size, qrects = [];
      for (var yy = 0; yy < n; yy++) {
        var x = 0;
        while (x < n) {
          if (q.modules[yy][x]) {
            var x2 = x;
            while (x2 + 1 < n && q.modules[yy][x2 + 1]) x2++;
            qrects.push({ x: QZ + x, y: QZ + yy, w: x2 - x + 1, h: 1 });
            x = x2 + 1;
          } else x++;
        }
      }
      var sizeMm = clamp(Number(o.qrSizeMm) || 30, 10, 300);
      unitMm = sizeMm / (n + 2 * QZ);
      d = { w: n + 2 * QZ, h: n + 2 * QZ, rects: qrects, texts: [] };
      info.version = q.version; info.level = q.level; info.mask = q.mask; info.mode = q.mode; info.size = n;
      info.moduleMm = unitMm;
    } else return fail('Unknown format.');
    addCaption(d, o.caption, unitMm);
    d.unitMm = unitMm;
    d.format = formatId;
    return { ok: true, drawing: d, info: info, value: v.value, label: v.label, note: v.note };
  }

  /* ------------------------------------------------------------------ */
  /* Renderers                                                           */
  /* ------------------------------------------------------------------ */
  function xmlEsc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function num(n) { return Number(n.toFixed(4)).toString(); }

  // opts: {background: 'white'|'none', physical: true (adds mm width/height), title}
  function toSVG(d, opts) {
    opts = opts || {};
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + num(d.w) + ' ' + num(d.h) + '"';
    if (opts.physical) s += ' width="' + num(d.w * d.unitMm) + 'mm" height="' + num(d.h * d.unitMm) + 'mm"';
    s += ' shape-rendering="crispEdges"';
    s += opts.title ? ' role="img" aria-label="' + xmlEsc(opts.title) + '">' : '>';
    if (opts.title) s += '<title>' + xmlEsc(opts.title) + '</title>';
    if (opts.background !== 'none') s += '<rect width="' + num(d.w) + '" height="' + num(d.h) + '" fill="#ffffff"/>';
    s += '<path fill="#000000" d="' + d.rects.map(function (r) {
      return 'M' + num(r.x) + ' ' + num(r.y) + 'h' + num(r.w) + 'v' + num(r.h) + 'h-' + num(r.w) + 'z';
    }).join('') + '"/>';
    if (d.texts.length) {
      s += '<g fill="#000000" font-family=\'' + FONT_STACK + '\' shape-rendering="auto">';
      d.texts.forEach(function (t) {
        s += '<text x="' + num(t.x) + '" y="' + num(t.y) + '" font-size="' + num(t.size) + '"' +
          (t.anchor !== 'start' ? ' text-anchor="' + t.anchor + '"' : '') + '>' + xmlEsc(t.s) + '</text>';
      });
      s += '</g>';
    }
    return s + '</svg>';
  }

  // Latin-1 / WinAnsi bytes for PDF text; characters outside become "?".
  var WIN_EXTRA = { 0x20AC: 0x80, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2013: 0x96, 0x2014: 0x97, 0x2022: 0x95, 0x2026: 0x85 };
  function pdfTextBytes(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i), b = c < 128 || (c >= 160 && c <= 255) ? c : (WIN_EXTRA[c] || 63);
      var ch = String.fromCharCode(b);
      out += (ch === '(' || ch === ')' || ch === '\\') ? '\\' + ch : ch;
    }
    return out;
  }

  // Vector PDF, one page sized to the drawing, bars in 100% black (CMYK K).
  function toPDF(d, opts) {
    opts = opts || {};
    var u = d.unitMm * 72 / 25.4, f = function (n) { return n.toFixed(3); };
    var W = d.w * u, H = d.h * u, c = '';
    if (opts.background === 'white') c += '0 0 0 0 k 0 0 ' + f(W) + ' ' + f(H) + ' re f\n';
    c += '0 0 0 1 k\n';
    d.rects.forEach(function (r) { c += f(r.x * u) + ' ' + f((d.h - r.y - r.h) * u) + ' ' + f(r.w * u) + ' ' + f(r.h * u) + ' re\n'; });
    if (d.rects.length) c += 'f\n';
    d.texts.forEach(function (t) {
      var size = t.size * u, tw = textWidthEm(t.s) * size;
      var x = t.x * u - (t.anchor === 'middle' ? tw / 2 : t.anchor === 'end' ? tw : 0);
      c += 'BT /F1 ' + f(size) + ' Tf ' + f(x) + ' ' + f((d.h - t.y) * u) + ' Td (' + pdfTextBytes(t.s) + ') Tj ET\n';
    });
    var objs = [null,
      '<< /Type /Catalog /Pages 2 0 R >>',
      '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + f(W) + ' ' + f(H) + '] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
      '<< /Length ' + c.length + ' >>\nstream\n' + c + 'endstream',
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
      '<< /Producer (LO Publications Free Barcode Generator ' + VERSION + ') /Title (' + pdfTextBytes(opts.title || 'Barcode') + ') >>'
    ];
    var out = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', offs = [];
    for (var i = 1; i < objs.length; i++) { offs[i] = out.length; out += i + ' 0 obj\n' + objs[i] + '\nendobj\n'; }
    var xref = out.length;
    out += 'xref\n0 ' + objs.length + '\n0000000000 65535 f \n';
    for (var j = 1; j < objs.length; j++) out += ('0000000000' + offs[j]).slice(-10) + ' 00000 n \n';
    out += 'trailer\n<< /Size ' + objs.length + ' /Root 1 0 R /Info 6 0 R >>\nstartxref\n' + xref + '\n%%EOF\n';
    var bytes = new Uint8Array(out.length);
    for (var k = 0; k < out.length; k++) bytes[k] = out.charCodeAt(k) & 255;
    return bytes;
  }

  // Pixels per unit for raster output near the target dpi, kept as a whole number so bars stay sharp.
  function rasterPlan(d, targetDpi, maxPx) {
    targetDpi = targetDpi || 600; maxPx = maxPx || 12000;
    var ppu = Math.max(1, Math.round(d.unitMm * targetDpi / 25.4));
    while (ppu > 1 && Math.max(d.w, d.h) * ppu > maxPx) ppu--;
    return { ppu: ppu, width: Math.round(d.w * ppu), height: Math.round(d.h * ppu), dpi: ppu * 25.4 / d.unitMm };
  }

  // Draws onto a 2D canvas context (browser).  ctx must be sized by the caller.
  function drawToCanvas(ctx, d, ppu, opts) {
    opts = opts || {};
    if (opts.background !== 'none') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, Math.round(d.w * ppu), Math.round(d.h * ppu)); }
    ctx.fillStyle = '#000000';
    d.rects.forEach(function (r) {
      var x0 = Math.round(r.x * ppu), y0 = Math.round(r.y * ppu);
      ctx.fillRect(x0, y0, Math.round((r.x + r.w) * ppu) - x0, Math.round((r.y + r.h) * ppu) - y0);
    });
    d.texts.forEach(function (t) {
      ctx.font = (t.size * ppu) + 'px ' + FONT_STACK;
      ctx.textAlign = t.anchor === 'middle' ? 'center' : t.anchor === 'end' ? 'right' : 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(t.s, t.x * ppu, t.y * ppu);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Files: CRC-32, PNG dpi, ZIP, CSV, XLSX                              */
  /* ------------------------------------------------------------------ */
  var CRC_TABLE = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes, start, end) {
    var c = 0xFFFFFFFF;
    for (var i = start || 0, e = end === undefined ? bytes.length : end; i < e; i++) c = CRC_TABLE[(c ^ bytes[i]) & 255] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  // Adds a pHYs chunk so design apps place the PNG at its true printed size.
  function pngWithDpi(png, dpi) {
    var ppm = Math.round(dpi / 0.0254);
    var chunk = new Uint8Array(21), dv = new DataView(chunk.buffer);
    dv.setUint32(0, 9);
    chunk.set([0x70, 0x48, 0x59, 0x73], 4);
    dv.setUint32(8, ppm); dv.setUint32(12, ppm); chunk[16] = 1;
    dv.setUint32(17, crc32(chunk, 4, 17));
    var insertAt = 33;  // after the signature and IHDR
    var out = new Uint8Array(png.length + chunk.length);
    out.set(png.subarray(0, insertAt), 0);
    out.set(chunk, insertAt);
    out.set(png.subarray(insertAt), insertAt + chunk.length);
    return out;
  }

  function toBytes(x) {
    if (x instanceof Uint8Array) return x;
    if (typeof x === 'string') return new Uint8Array(utf8Bytes(x));
    return new Uint8Array(x);
  }

  // files: [{name, data: Uint8Array|string}] -> Uint8Array (stored, no compression)
  function makeZip(files) {
    var parts = [], central = [], offset = 0, now = new Date();
    var dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | Math.floor(now.getSeconds() / 2);
    var dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    files.forEach(function (f) {
      var name = new Uint8Array(utf8Bytes(f.name)), data = toBytes(f.data), crc = crc32(data);
      var lh = new Uint8Array(30 + name.length), lv = new DataView(lh.buffer);
      lv.setUint32(0, 0x04034b50, true); lv.setUint16(4, 20, true); lv.setUint16(6, 0x0800, true); lv.setUint16(8, 0, true);
      lv.setUint16(10, dosTime, true); lv.setUint16(12, dosDate, true); lv.setUint32(14, crc, true);
      lv.setUint32(18, data.length, true); lv.setUint32(22, data.length, true); lv.setUint16(26, name.length, true); lv.setUint16(28, 0, true);
      lh.set(name, 30);
      var ch = new Uint8Array(46 + name.length), cv = new DataView(ch.buffer);
      cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true); cv.setUint16(12, dosTime, true); cv.setUint16(14, dosDate, true); cv.setUint32(16, crc, true);
      cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, name.length, true);
      cv.setUint32(42, offset, true);
      ch.set(name, 46);
      parts.push(lh, data); central.push(ch);
      offset += lh.length + data.length;
    });
    var cdSize = central.reduce(function (a, b) { return a + b.length; }, 0);
    var end = new Uint8Array(22), ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true); ev.setUint32(16, offset, true);
    var all = parts.concat(central, [end]), total = all.reduce(function (a, b) { return a + b.length; }, 0);
    var out = new Uint8Array(total), p = 0;
    all.forEach(function (b) { out.set(b, p); p += b.length; });
    return out;
  }

  function parseCSV(text) {
    text = String(text).replace(/^﻿/, '');
    var first = text.split(/\r?\n/)[0] || '';
    var delim = ',', best = -1;
    [',', ';', '\t'].forEach(function (d) { var n = first.split(d).length; if (n > best) { best = n; delim = d; } });
    var rows = [], row = [], field = '', q = false, i = 0;
    while (i < text.length) {
      var c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
        else field += c;
      } else if (c === '"' && field === '') q = true;
      else if (c === delim) { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        row.push(field); rows.push(row); row = []; field = '';
        if (c === '\r' && text[i + 1] === '\n') i++;
      } else field += c;
      i++;
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return trimRows(rows);
  }
  function trimRows(rows) {
    var isEmpty = function (r) { return !r || r.every(function (c) { return String(c == null ? '' : c).trim() === ''; }); };
    while (rows.length && isEmpty(rows[rows.length - 1])) rows.pop();
    return rows;
  }

  function xmlText(s) {
    return String(s).replace(/&(#x[0-9a-f]+|#\d+|lt|gt|amp|quot|apos);/gi, function (m, e) {
      if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
      return { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" }[e.toLowerCase()];
    });
  }
  function bytesToText(u8) {
    if (typeof TextDecoder !== 'undefined') return new TextDecoder('utf-8').decode(u8);
    return decodeURIComponent(escape(String.fromCharCode.apply(null, u8)));
  }

  function openZip(u8) {
    var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength), eocd = -1;
    for (var i = u8.length - 22; i >= Math.max(0, u8.length - 65557); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error('not_zip');
    var count = dv.getUint16(eocd + 10, true), p = dv.getUint32(eocd + 16, true), entries = {};
    for (var k = 0; k < count; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) throw new Error('bad_zip');
      var nlen = dv.getUint16(p + 28, true), elen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true);
      var name = bytesToText(u8.subarray(p + 46, p + 46 + nlen));
      entries[name] = { method: dv.getUint16(p + 10, true), size: dv.getUint32(p + 20, true), offset: dv.getUint32(p + 42, true) };
      p += 46 + nlen + elen + clen;
    }
    return { entries: entries, dv: dv, u8: u8 };
  }
  function zipEntry(zip, name, inflateRaw) {
    var e = zip.entries[name];
    if (!e) return Promise.resolve(null);
    var lo = e.offset, start = lo + 30 + zip.dv.getUint16(lo + 26, true) + zip.dv.getUint16(lo + 28, true);
    var data = zip.u8.subarray(start, start + e.size);
    if (e.method === 0) return Promise.resolve(data);
    if (e.method === 8) return Promise.resolve(inflateRaw(data));
    return Promise.reject(new Error('unsupported_compression'));
  }

  function colIndex(ref) {
    var letters = (ref.match(/^[A-Z]+/i) || ['A'])[0].toUpperCase(), n = 0;
    for (var i = 0; i < letters.length; i++) n = n * 26 + letters.charCodeAt(i) - 64;
    return n - 1;
  }
  function cleanNumber(v) {
    if (!/^-?\d+(\.\d+)?(E[+-]?\d+)?$/i.test(v)) return v;
    var n = Number(v);
    if (!isFinite(n)) return v;
    if (Number.isInteger(n) && Math.abs(n) < 1e21) return n.toFixed(0);
    return String(parseFloat(n.toPrecision(15)));
  }

  // Reads the first worksheet of an .xlsx file into rows of strings.
  // inflateRaw(Uint8Array) -> Uint8Array | Promise<Uint8Array>
  function readXLSX(buffer, inflateRaw) {
    var u8 = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer), zip;
    try { zip = openZip(u8); } catch (e) { return Promise.reject(new Error('This file is not a valid .xlsx workbook.')); }
    var get = function (n) { return zipEntry(zip, n, inflateRaw).then(function (b) { return b ? bytesToText(b) : null; }); };
    return Promise.all([get('xl/workbook.xml'), get('xl/_rels/workbook.xml.rels'), get('xl/sharedStrings.xml')]).then(function (r) {
      if (!r[0]) throw new Error('This file is not a valid .xlsx workbook.');
      var sheet = r[0].match(/<sheet\b[^>]*>/), rid = sheet && (sheet[0].match(/\br:id="([^"]+)"/) || sheet[0].match(/\bid="([^"]+)"/));
      var path = 'xl/worksheets/sheet1.xml';
      if (rid && r[1]) {
        var rel = r[1].match(new RegExp('<Relationship\\b[^>]*\\bId="' + rid[1] + '"[^>]*>'));
        var target = rel && rel[0].match(/\bTarget="([^"]+)"/);
        if (target) path = target[1][0] === '/' ? target[1].slice(1) : 'xl/' + target[1].replace(/^\.\//, '');
      }
      var shared = [];
      if (r[2]) {
        var siRe = /<si\b[^>]*>([\s\S]*?)<\/si>/g, m;
        while ((m = siRe.exec(r[2]))) {
          var inner = m[1].replace(/<rPh\b[\s\S]*?<\/rPh>/g, ''), txt = '', tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g, tm;
          while ((tm = tRe.exec(inner))) txt += xmlText(tm[1]);
          shared.push(txt);
        }
      }
      return get(path).then(function (xml) {
        if (!xml) throw new Error('Could not find the first worksheet in this workbook.');
        var rows = [], rowRe = /<row\b([^>]*?)(?:\/>|>([\s\S]*?)<\/row>)/g, rm, autoRow = 0;
        while ((rm = rowRe.exec(xml))) {
          var rAttr = rm[1].match(/\br="(\d+)"/), rowIdx = rAttr ? Number(rAttr[1]) - 1 : autoRow;
          autoRow = rowIdx + 1;
          var cells = [], cRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g, cm, autoCol = 0;
          var body = rm[2] || '';
          while ((cm = cRe.exec(body))) {
            var attrs = cm[1], ref = attrs.match(/\br="([A-Z]+)\d*"/i), ci = ref ? colIndex(ref[1]) : autoCol;
            autoCol = ci + 1;
            var t = (attrs.match(/\bt="([^"]+)"/) || [])[1], inner2 = cm[2] || '', val = '';
            var vm = inner2.match(/<v>([\s\S]*?)<\/v>/);
            if (t === 's') val = vm ? (shared[Number(vm[1])] || '') : '';
            else if (t === 'inlineStr') { var it = '', itRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g, im; while ((im = itRe.exec(inner2))) it += xmlText(im[1]); val = it; }
            else if (t === 'b') val = vm && vm[1] === '1' ? 'TRUE' : 'FALSE';
            else if (t === 'str' || t === 'e') val = vm ? xmlText(vm[1]) : '';
            else val = vm ? cleanNumber(vm[1]) : '';
            cells[ci] = val;
          }
          for (var z = 0; z < cells.length; z++) if (cells[z] === undefined) cells[z] = '';
          rows[rowIdx] = cells;
        }
        for (var y = 0; y < rows.length; y++) if (!rows[y]) rows[y] = [];
        return trimRows(rows);
      });
    });
  }

  // Works out which columns hold the data, caption, file name and price.
  var HEAD = {
    data: /^(data|value|values|code|codes|barcode|barcodes|isbn|isbn-?13|ean|ean-?13|upc|upc-?a|gtin|sku|number|text|content|link|url)$/i,
    caption: /^(caption|label|title|name|description|text below|book title)$/i,
    file: /^(file ?name|filename|file|output)$/i,
    price: /^(price|amount|rrp)$/i
  };
  function mapColumns(rows) {
    var head = (rows[0] || []).map(function (c) { return String(c || '').trim(); });
    var idx = { data: -1, caption: -1, file: -1, price: -1 };
    head.forEach(function (h, i) {
      Object.keys(HEAD).forEach(function (k) { if (idx[k] < 0 && HEAD[k].test(h)) idx[k] = i; });
    });
    if (idx.data >= 0) return { header: true, cols: idx, start: 1 };
    return { header: false, cols: { data: 0, caption: rows.some(function (r) { return r.length > 1; }) ? 1 : -1, file: -1, price: -1 }, start: 0 };
  }

  function safeFileName(s, max) {
    var out = String(s || '').normalize ? String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '') : String(s || '');
    out = out.replace(/[^A-Za-z0-9._ -]+/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^[-.]+|[-.]+$/g, '');
    return out.slice(0, max || 60) || 'barcode';
  }

  return {
    VERSION: VERSION,
    FORMATS: FORMATS,
    FORMAT_BY_ID: FORMAT_BY_ID,
    DEFAULTS: DEFAULTS,
    CURRENCIES: CURRENCIES,
    validate: validate,
    build: build,
    parseIsbn: parseIsbn,
    parsePrice: parsePrice,
    qrPayload: qrPayload,
    qrEncode: qrEncode,
    qrCapacityBytes: qrCapacityBytes,
    toSVG: toSVG,
    toPDF: toPDF,
    rasterPlan: rasterPlan,
    drawToCanvas: drawToCanvas,
    pngWithDpi: pngWithDpi,
    makeZip: makeZip,
    parseCSV: parseCSV,
    readXLSX: readXLSX,
    mapColumns: mapColumns,
    safeFileName: safeFileName,
    textWidthEm: textWidthEm,
    crc32: crc32,
    // Exposed for tests and maintenance
    _internal: {
      gtinCheck: gtinCheck, isbn10Check: isbn10Check, ean5Check: ean5Check,
      encodeEan13: encodeEan13, encodeEan5: encodeEan5, encodeCode128: encodeCode128, code128Values: code128Values,
      encodeCode39: encodeCode39, code39Check: code39Check, qrDataCodewords: qrDataCodewords, qrRawModules: qrRawModules,
      C128: C128, C39: C39, C39_CHARS: C39_CHARS, HELV: HELV
    }
  };
})();

export default LOBarcode;
