// src/app/books/BookShelfHero.tsx
// "The Curved Library": a 3D shelf of our real books on a receding arc. The centre book turns to show
// its cover; clicking it grows a paper sheet out of the cover into a full-screen detail page where the
// cover bleeds in like ink. One requestAnimationFrame loop drives everything (DOM is updated directly,
// not through React state, so it stays smooth).
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import NextLink from "next/link";
import { BookOpen, User, X } from "lucide-react";
import { CATEGORIES, authorHref, readLinkFor, type CatalogueBook } from "../data/catalogue";
import spineColors from "./spineColors.json";

const RED = "#8d171c";
const MAX_BOOKS = 30;
const P = 1400; // CSS perspective in px

type Colour = [number, number, number, number];
const COLOURS = spineColors as unknown as Record<string, Colour>;

const smooth = (t: number) => t * t * (3 - 2 * t);
const catName = (key: string) => {
  const n = CATEGORIES.find((c) => c.key === key)?.name ?? "";
  return n.split(/,| and /)[0].trim();
};
const catTone = (key: string) => CATEGORIES.find((c) => c.key === key)?.tone ?? RED;

function spineStyle(book: CatalogueBook) {
  const c = book.coverImage ? COLOURS[book.coverImage] : undefined;
  let r: number, g: number, b: number;
  if (c) [r, g, b] = c;
  else {
    const hex = catTone(book.category).replace("#", "");
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const dark = (f: number) => `rgb(${Math.round(r * f)},${Math.round(g * f)},${Math.round(b * f)})`;
  return {
    background: `linear-gradient(90deg, ${dark(0.72)} 0%, ${dark(1)} 22%, ${dark(1.04)} 55%, ${dark(0.8)} 100%)`,
    color: lum > 0.62 ? "#1b1b1b" : "#fbf7f0",
  };
}

export default function BookShelfHero({ books: allBooks, totalTitles }: { books: CatalogueBook[]; totalTitles: number | string }) {
  // Books with covers, grouped by category so the ruler reads cleanly
  const books = useMemo(() => {
    const order = CATEGORIES.map((c) => c.key as string);
    return allBooks
      .filter((b) => b.coverImage)
      .sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category))
      .slice(0, MAX_BOOKS);
  }, [allBooks]);

  const N = books.length;
  const COPIES = N > 0 ? Math.max(1, Math.ceil(30 / N)) : 1;
  const V = N * COPIES;
  const START = Math.min(5, Math.max(0, N - 1));

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleMask = useRef<HTMLDivElement>(null);
  const subMask = useRef<HTMLDivElement>(null);
  const metaMask = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLButtonElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<SVGGElement>(null);

  const [detail, setDetail] = useState<CatalogueBook | null>(null);
  const [counter, setCounter] = useState(START);

  // Mutable animation state shared by the loop and the input handlers
  const st = useRef({
    s: START + N,
    T: START + N,
    H: 400,
    ws: 46,
    d: 266,
    gap: 12,
    U: 520,
    XS: new Float32Array(1),
    W: 1200,
    cy: 300,
    active: -1,
    dragging: false,
    dragMoved: false,
    dragX0: 0,
    dragT0: 0,
    mx: -1,
    my: -1,
    cx: -100,
    cyCursor: -100,
    tiltX: 0,
    tiltY: 0,
    lift: new Float32Array(Math.max(1, V)),
    hover: -1,
    dot: 0,
    detailOpen: false,
    reduced: false,
    wheelTimer: 0 as unknown as ReturnType<typeof setTimeout>,
    inView: true,
    coverLoaded: new Uint8Array(Math.max(1, V)),
  });

  const relOf = (v: number, s: number) => {
    let r = (((v - s) % V) + V) % V;
    if (r >= V / 2) r -= V;
    return r;
  };

  /* ------------------------------ caption swap ------------------------------ */
  const swap = (mask: HTMLDivElement | null, text: string, dir: number, cls: string) => {
    if (!mask) return;
    const reduced = st.current.reduced;
    const span = document.createElement("span");
    span.className = `absolute inset-x-0 top-0 block ${cls}`;
    span.textContent = text;
    const old = Array.from(mask.children) as HTMLElement[];
    mask.appendChild(span);
    if (reduced || dir === 0) {
      old.forEach((o) => o.remove());
      return;
    }
    const opts: KeyframeAnimationOptions = { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" };
    span.animate([{ transform: `translateY(${dir * 105}%)` }, { transform: "translateY(0)" }], opts);
    old.forEach((o) => {
      const a = o.animate([{ transform: getComputedStyle(o).transform === "none" ? "translateY(0)" : getComputedStyle(o).transform }, { transform: `translateY(${-dir * 105}%)` }], opts);
      a.onfinish = () => o.remove();
    });
  };

  const setCaption = (i: number, dir: number) => {
    const b = books[i];
    if (!b) return;
    swap(titleMask.current, b.title, dir, "truncate text-[clamp(24px,3vw,40px)] font-bold leading-tight tracking-tight text-[#8d171c]");
    swap(subMask.current, `By ${b.author}`, dir, "truncate text-[11px] font-semibold uppercase tracking-[.22em] text-[#8d171c]");
    swap(metaMask.current, catName(b.category).toUpperCase(), dir, "truncate text-[11px] font-medium tracking-[.12em] text-neutral-800");
    setCounter(i);
  };

  /* ------------------------------ geometry ------------------------------ */
  const measure = () => {
    const sec = sectionRef.current;
    if (!sec) return;
    const S = st.current;
    const W = window.innerWidth;
    const hh = sec.clientHeight;
    const phone = W < 768;
    S.W = W;
    S.H = phone ? Math.min(W * 0.62, hh * 0.38) : Math.min(hh * 0.46, W * 0.3);
    S.cy = hh * (phone ? 0.44 : 0.43);
    S.ws = S.H * 0.115;
    S.d = S.H * 0.667;
    S.gap = S.H * 0.03;
    S.U = S.H * (phone ? 1.05 : 1.3);
    const steps = Math.ceil((3 * S.U) / 2) + 2;
    const XS = new Float32Array(steps);
    let acc = 0;
    for (let i = 0; i < steps; i++) {
      const u = i * 2;
      XS[i] = acc;
      acc += 2 / (1 + Math.pow(u / S.U, 1.6));
    }
    S.XS = XS;
    sec.style.setProperty("--H", `${S.H}px`);
    sec.style.setProperty("--cy", `${S.cy}px`);
    // Face sizes
    tapeRefs.current.forEach((el) => {
      if (!el) return;
      const sp = el.children[0] as HTMLElement;
      const cv = el.children[1] as HTMLElement;
      Object.assign(sp.style, { width: `${S.ws}px`, height: `${S.H}px`, left: `${-S.ws / 2}px`, top: `${-S.H / 2}px`, transform: `translateZ(${S.d / 2}px)` });
      Object.assign(cv.style, { width: `${S.d}px`, height: `${S.H}px`, left: `${-S.d / 2}px`, top: `${-S.H / 2}px`, transform: `rotateY(90deg) translateZ(${S.ws / 2}px)` });
    });
  };

  /* ------------------------------ main loop ------------------------------ */
  useEffect(() => {
    if (N === 0) return;
    const S = st.current;
    S.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    measure();
    setCaption(START, 0);
    S.active = START;

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(([e]) => (S.inView = e.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) io.observe(sectionRef.current);

    let last = performance.now();
    let raf = 0;
    const F = (r: number) => {
      const B = Math.abs(r) < 1 ? (r + Math.sin(Math.PI * r) / Math.PI) / 2 : Math.sign(r) * 0.5;
      return r * (S.ws + S.gap) + (S.d - S.ws + 1.4 * S.gap) * B;
    };
    const scl = (u: number) => 1 / (1 + Math.pow(Math.abs(u) / S.U, 1.6));
    const xsc = (u: number) => Math.sign(u) * S.XS[Math.min(S.XS.length - 1, Math.floor(Math.abs(u) / 2))];

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!S.inView && !S.detailOpen) return;

      // Spring towards target
      const k = S.dragging ? 18 : 5.2;
      S.s = S.reduced && !S.dragging ? S.T : S.s + (S.T - S.s) * (1 - Math.exp(-k * dt));
      if (Math.abs(S.s) > V * 4) {
        const shift = Math.round(S.s / V) * V;
        S.s -= shift;
        S.T -= shift;
      }

      // Active book and caption
      const act = ((Math.round(S.s) % N) + N) % N;
      if (act !== S.active) {
        setCaption(act, Math.sign(S.T - S.s) || 1);
        S.active = act;
      }

      // Cover tilt follows the pointer
      const settled = Math.abs(S.T - S.s) < 0.3;
      const onCover =
        settled && !S.detailOpen && Math.abs(S.mx - S.W / 2) < S.d * 0.55 && Math.abs(S.my - S.cy) < S.H * 0.55;
      const tY = onCover ? ((S.mx - S.W / 2) / (S.d * 0.55)) * 8 : S.mx >= 0 ? ((S.mx - S.W / 2) / S.W) * 4 : 0;
      const tX = onCover ? (-(S.my - S.cy) / (S.H / 2)) * 5 : 0;
      S.tiltY += (tY - S.tiltY) * (1 - Math.exp(-7 * dt));
      S.tiltX += (tX - S.tiltX) * (1 - Math.exp(-7 * dt));

      // Tapes
      for (let v = 0; v < V; v++) {
        const el = tapeRefs.current[v];
        if (!el) continue;
        const r = relOf(v, S.s);
        const u = F(r);
        if (Math.abs(u) > S.U * 1.95) {
          if (el.style.visibility !== "hidden") el.style.visibility = "hidden";
          continue;
        }
        if (el.style.visibility === "hidden") el.style.visibility = "visible";
        // Lazy-load covers that come near the centre
        if (!S.coverLoaded[v] && Math.abs(r) < 4) {
          const cv = el.children[1] as HTMLElement;
          cv.style.backgroundImage = `url("${books[v % N].coverImage}")`;
          S.coverLoaded[v] = 1;
        }
        const targetLift = S.hover === v && Math.abs(r) > 0.5 ? 1 : 0;
        S.lift[v] = S.reduced ? targetLift : S.lift[v] + (targetLift - S.lift[v]) * (1 - Math.exp(-12 * dt));
        const o = smooth(Math.max(0, 1 - Math.abs(r)));
        const sc = scl(u);
        const kk = 1 / sc;
        const z = P * (1 - kk) + o * S.H * 0.1;
        const x = xsc(u) * kk;
        const y = (S.H * 0.5 * (1 - sc) * 0.42 + o * S.H * 0.012 - S.lift[v] * S.H * 0.05) * kk;
        const rotY = Math.sign(u) * Math.min(1, Math.abs(u) / S.U) * 26 * (1 - o) - 90 * o + S.tiltY * o;
        const rotX = S.tiltX * o;
        el.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,${z.toFixed(2)}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        el.style.zIndex = String(Math.round(3000 + z));
        const spShade = el.children[0].lastElementChild as HTMLElement;
        const cvShade = el.children[1].lastElementChild as HTMLElement;
        spShade.style.opacity = String(Math.min(0.6, o * 0.55 + (1 - sc) * 0.32));
        cvShade.style.opacity = String((1 - o) * 0.82);
      }

      // Play ring
      if (ringRef.current) {
        const ps = S.detailOpen ? 0 : smooth(Math.max(0, 1 - Math.abs(S.T - S.s) * 3));
        ringRef.current.style.transform = `translate(-50%,-50%) scale(${ps.toFixed(3)})`;
        ringRef.current.style.left = `${S.W / 2 - S.d / 2 - 4}px`;
        ringRef.current.style.top = `${S.cy + S.H * 0.38}px`;
      }

      // Ruler dot
      if (dotRef.current && N > 1) {
        const fs = ((S.s % N) + N) % N;
        let target = fs > N - 1 ? (fs - (N - 1) < 0.5 ? 1 : 0) : fs / (N - 1);
        target = Math.min(1, Math.max(0, target));
        S.dot = Math.abs(target - S.dot) > 0.3 || S.reduced ? target : S.dot + (target - S.dot) * (1 - Math.exp(-14 * dt));
        dotRef.current.style.left = `${(S.dot * 100).toFixed(3)}%`;
      }

      // Custom cursor
      const cur = cursorRef.current;
      if (cur) {
        S.cx += (S.mx - S.cx) * (1 - Math.exp(-16 * dt));
        S.cyCursor += (S.my - S.cyCursor) * (1 - Math.exp(-16 * dt));
        cur.style.transform = `translate(${S.cx.toFixed(1)}px,${S.cyCursor.toFixed(1)}px)`;
        cur.style.visibility = S.mx < 0 ? "hidden" : "visible";
        cur.dataset.state = onCover ? "open" : S.hover >= 0 ? "spine" : cur.dataset.hot === "1" ? "btn" : "";
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  /* ------------------------------ navigation ------------------------------ */
  const step = (n: number) => {
    const S = st.current;
    S.T = Math.round(S.T) + n;
  };

  const goTo = (i: number) => {
    const S = st.current;
    const cur = ((Math.round(S.T) % N) + N) % N;
    let diff = i - cur;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    S.T = Math.round(S.T) + diff;
  };

  const onTapeClick = (v: number) => {
    const S = st.current;
    if (S.dragMoved) return;
    const r = relOf(v, S.s);
    if (Math.abs(r) < 0.5 && Math.abs(S.T - S.s) < 0.3) openDetail();
    else S.T = Math.round(S.T + r);
  };

  // Keyboard: only while the hero is on screen and nothing is being typed
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const S = st.current;
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (S.detailOpen) {
        if (e.key === "Escape") closeDetail();
        return;
      }
      if (!S.inView) return;
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Enter" && document.activeElement === document.body) openDetail();
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  /* ------------------------------ pointer ------------------------------ */
  const onPointerMove = (e: React.PointerEvent) => {
    const S = st.current;
    const rect = sectionRef.current!.getBoundingClientRect();
    S.mx = e.clientX - rect.left;
    S.my = e.clientY - rect.top;
    if (S.dragging) {
      const dx = e.clientX - S.dragX0;
      if (Math.abs(dx) > 5) S.dragMoved = true;
      if (S.dragMoved) S.T = S.dragT0 - dx / (S.ws + S.gap);
    }
    if (cursorRef.current) {
      const hot = (e.target as HTMLElement).closest("a,button,[data-hot]");
      cursorRef.current.dataset.hot = hot ? "1" : "0";
    }
  };
  const onPointerDown = (e: React.PointerEvent) => {
    const S = st.current;
    if ((e.target as HTMLElement).closest("a,button")) return;
    S.dragging = true;
    S.dragMoved = false;
    S.dragX0 = e.clientX;
    S.dragT0 = S.T;
  };
  const endDrag = () => {
    const S = st.current;
    if (!S.dragging) return;
    S.dragging = false;
    if (S.dragMoved) S.T = Math.round(S.T);
    setTimeout(() => (S.dragMoved = false), 0);
  };
  const onLeave = () => {
    const S = st.current;
    S.mx = -1;
    S.my = -1;
    S.hover = -1;
    endDrag();
  };
  // Horizontal trackpad swipes (and shift + wheel) scrub the shelf; vertical scrolling still scrolls the page
  const onWheel = (e: React.WheelEvent) => {
    const S = st.current;
    if (S.detailOpen) return;
    const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
    if (!dx) return;
    S.T += (dx / (S.ws + S.gap)) * 0.5;
    clearTimeout(S.wheelTimer);
    S.wheelTimer = setTimeout(() => (S.T = Math.round(S.T)), 160);
  };

  const onRulerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    goTo(Math.round(t * (N - 1)));
  };

  /* ------------------------------ detail sheet ------------------------------ */
  const coverRect = () => {
    const S = st.current;
    const v = (((Math.round(S.T) % V) + V) % V);
    const el = tapeRefs.current[v]?.children[1] as HTMLElement | undefined;
    const r = el?.getBoundingClientRect();
    if (!r || r.width < 2) {
      return { top: window.innerHeight / 2, left: window.innerWidth / 2, right: window.innerWidth / 2, bottom: window.innerHeight / 2 };
    }
    return { top: r.top, left: r.left, right: window.innerWidth - r.right, bottom: window.innerHeight - r.bottom };
  };

  const openDetail = () => {
    const S = st.current;
    if (S.detailOpen || N === 0) return;
    S.T = Math.round(S.T);
    S.detailOpen = true;
    const book = books[((Math.round(S.T) % N) + N) % N];
    setDetail(book);
  };

  // Run the open animation once the sheet has rendered with the new book
  useEffect(() => {
    if (!detail) return;
    const S = st.current;
    const sheet = sheetRef.current;
    if (!sheet) return;
    const dur = S.reduced ? 1 : 1050;
    const r = coverRect();
    sheet.animate(
      [{ clipPath: `inset(${r.top}px ${r.right}px ${r.bottom}px ${r.left}px round 3px)` }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }],
      { duration: dur, easing: "cubic-bezier(.76,0,.18,1)", fill: "both" }
    );
    sheet.querySelectorAll<HTMLElement>("[data-rise]").forEach((n, i) => {
      n.animate([{ transform: "translateY(110%)" }, { transform: "translateY(0)" }], {
        duration: S.reduced ? 1 : 900,
        delay: S.reduced ? 0 : 620 + i * 75,
        easing: "cubic-bezier(.2,.8,.2,1)",
        fill: "both",
      });
    });
    // Ink bleed: grow the masked circles
    const circles = Array.from(circlesRef.current?.querySelectorAll("circle") ?? []);
    const delays = [0, 120, 220, 300, 360, 420, 180];
    const t0 = performance.now() + (S.reduced ? -5000 : 520);
    let raf = 0;
    const grow = (now: number) => {
      let running = false;
      circles.forEach((c, i) => {
        const t = Math.min(1, Math.max(0, (now - t0 - delays[i]) / 1250));
        if (t < 1) running = true;
        c.setAttribute("r", String(720 * (1 - Math.pow(1 - t, 3))));
      });
      if (running) raf = requestAnimationFrame(grow);
    };
    raf = requestAnimationFrame(grow);
    document.body.style.overflow = "hidden";
    (sheet.querySelector("[data-close]") as HTMLElement | null)?.focus({ preventScroll: true });
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail]);

  const closeDetail = () => {
    const S = st.current;
    const sheet = sheetRef.current;
    if (!sheet || !S.detailOpen) return;
    const r = coverRect();
    const a = sheet.animate(
      [{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: `inset(${r.top}px ${r.right}px ${r.bottom}px ${r.left}px round 3px)` }],
      { duration: S.reduced ? 1 : 850, easing: "cubic-bezier(.76,0,.18,1)", fill: "both" }
    );
    a.onfinish = () => {
      S.detailOpen = false;
      sheet.getAnimations({ subtree: true }).forEach((an) => an.cancel());
      setDetail(null);
    };
  };

  if (N === 0) return null;

  // Ruler: one tick per book, a labelled major tick where each category starts
  const majors: { i: number; label: string }[] = [];
  books.forEach((b, i) => {
    if (i === 0 || books[i - 1].category !== b.category) majors.push({ i, label: catName(b.category) });
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Browse our books on the shelf"
      className="shelf-hero relative h-[100svh] min-h-[640px] max-h-[1100px] select-none overflow-hidden bg-[#efe9df] text-neutral-900"
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={onLeave}
      onWheel={onWheel}
    >
      {/* Paper grain */}
      <div aria-hidden="true" className="shelf-grain pointer-events-none absolute inset-0 z-[40]" />

      {/* Giant halftone words */}
      <div aria-hidden="true" className="shelf-halftone pointer-events-none absolute left-[2.4vw] top-[18%] z-[1] rotate-180">
        STORIES
      </div>
      <div aria-hidden="true" className="shelf-halftone pointer-events-none absolute right-[2.4vw] top-[18%] z-[1]">
        PURPOSE
      </div>

      {/* Top labels (below the site navbar) */}
      <div className="absolute inset-x-0 top-[84px] z-[30] flex items-center justify-between px-5 text-[#8d171c] md:top-[96px] md:px-9">
        <div className="flex items-center gap-4">
          <h1 className="text-[10.5px] font-semibold uppercase tracking-[.16em]">Our Published Works</h1>
          <span className="hidden h-px w-10 bg-[#8d171c] sm:block" />
          <span className="hidden text-[10.5px] font-semibold uppercase tracking-[.16em] sm:block">LO Publications Library</span>
        </div>
        <p className="text-[10.5px] font-semibold uppercase tracking-[.16em]">
          {String(counter + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          <span className="hidden sm:inline"> · {totalTitles} titles in total</span>
        </p>
      </div>

      {/* Floor shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 z-[5] -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "calc(var(--cy) + var(--H) * .47)",
          width: "min(96vw, calc(var(--H) * 3.6))",
          height: "calc(var(--H) * .26)",
          background: "radial-gradient(50% 50% at 50% 40%, rgba(40,32,20,.30), rgba(40,32,20,.10) 55%, transparent 72%)",
        }}
      />

      {/* Shelf */}
      <div
        className="absolute inset-x-0 z-[10]"
        style={{
          top: "calc(var(--cy) - var(--H) / 2 - 50px)",
          height: "calc(var(--H) + 100px)",
          perspective: `${P}px`,
          perspectiveOrigin: "50% 50%",
          touchAction: "pan-y",
        }}
      >
        <div ref={stageRef} className="absolute left-1/2 top-1/2 h-0 w-0" style={{ transformStyle: "preserve-3d" }}>
          {Array.from({ length: V }).map((_, v) => {
            const b = books[v % N];
            const sp = spineStyle(b);
            const surname = b.author.split(" ").slice(-1)[0];
            return (
              <div
                key={v}
                ref={(el) => {
                  tapeRefs.current[v] = el;
                }}
                className="absolute left-0 top-0 h-0 w-0 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => onTapeClick(v)}
                onPointerEnter={() => (st.current.hover = v)}
                onPointerLeave={() => {
                  if (st.current.hover === v) st.current.hover = -1;
                }}
                role="button"
                tabIndex={-1}
                aria-label={`${b.title} by ${b.author}`}
              >
                {/* Spine */}
                <div
                  className="absolute flex flex-col items-center justify-between overflow-hidden rounded-[2px] py-[6%]"
                  style={{ ...sp, backfaceVisibility: "hidden", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)" }}
                >
                  <span className="text-[9px] font-black tracking-tight opacity-80">LO</span>
                  <span
                    className="max-h-[70%] overflow-hidden text-ellipsis whitespace-nowrap font-semibold uppercase tracking-[.08em]"
                    style={{ writingMode: "vertical-rl", fontSize: "calc(var(--H) * .034)" }}
                  >
                    {b.title.split(":")[0]}
                  </span>
                  <span
                    className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[.12em] opacity-75"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {surname}
                  </span>
                  <span className="pointer-events-none absolute inset-0 bg-black opacity-0" />
                </div>
                {/* Cover */}
                <div
                  className="absolute overflow-hidden rounded-[3px] bg-neutral-300 bg-cover bg-center"
                  style={{ backfaceVisibility: "hidden", boxShadow: "0 34px 60px -30px rgba(20,16,10,.6)" }}
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" style={{ width: "6%" }} />
                  <span className="pointer-events-none absolute inset-0 bg-black opacity-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Open ring on the cover corner */}
      <button
        ref={ringRef}
        onClick={openDetail}
        aria-label="Open book details"
        className="absolute z-[20] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#8d171c] bg-[#efe9df]/85 text-[#8d171c] backdrop-blur-sm transition-colors hover:bg-[#8d171c] hover:text-white"
        style={{ transform: "translate(-50%,-50%) scale(0)" }}
      >
        <BookOpen size={16} />
      </button>

      {/* Caption */}
      <div className="absolute left-1/2 z-[20] flex w-[min(64vw,700px)] -translate-x-1/2 flex-col items-center gap-2.5 text-center" style={{ top: "calc(var(--cy) + var(--H) / 2 + 4vh)" }}>
        <div ref={titleMask} className="relative h-[clamp(30px,3.6vw,48px)] w-full overflow-hidden" />
        <div ref={subMask} className="relative h-[14px] w-full overflow-hidden" />
        <span className="h-px w-[18px] bg-[#8d171c]" />
        <div ref={metaMask} className="relative h-[14px] w-full overflow-hidden" />
      </div>

      {/* Arrows */}
      {[-1, 1].map((dir) => (
        <button
          key={dir}
          onClick={() => step(dir)}
          aria-label={dir < 0 ? "Previous book" : "Next book"}
          className="shelf-arrow absolute z-[20] flex h-11 w-11 items-center justify-center text-[#8d171c] transition-colors hover:text-black"
          style={{
            left: `calc(50% ${dir < 0 ? "-" : "+"} min(30vw, 400px) - 22px)`,
            top: "calc(var(--cy) + var(--H) / 2 + 4vh + 4px)",
          }}
          data-side={dir < 0 ? "l" : "r"}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ transform: dir > 0 ? "scaleX(-1)" : undefined }}>
            <path d="M6 1L1 6l5 5M1 6h23" />
          </svg>
        </button>
      ))}

      {/* Ruler */}
      <div className="absolute inset-x-5 bottom-[54px] z-[20] h-10 md:inset-x-9 md:bottom-[64px]">
        <div className="relative h-full w-full cursor-pointer" onClick={onRulerClick} data-hot title="Jump to a book">
          <span className="absolute inset-x-0 top-3 h-px bg-[#8d171c]/75" />
          {books.map((b, i) => {
            const major = majors.find((m) => m.i === i);
            return (
              <span
                key={i}
                className="absolute top-3 w-px bg-[#8d171c]"
                style={{ left: `${N > 1 ? (i / (N - 1)) * 100 : 0}%`, height: major ? 13 : 7, opacity: major ? 0.75 : 0.4 }}
              />
            );
          })}
          {majors.map((m, j) => (
            <span
              key={m.i}
              className={`absolute top-[28px] whitespace-nowrap text-[9.5px] font-medium uppercase tracking-wider text-[#8d171c] ${j % 2 ? "max-md:hidden" : ""}`}
              style={{
                left: `${N > 1 ? (m.i / (N - 1)) * 100 : 0}%`,
                transform: m.i === 0 ? "none" : m.i === N - 1 ? "translateX(-100%)" : "translateX(-50%)",
              }}
            >
              {m.label}
            </span>
          ))}
          <span ref={dotRef} className="absolute top-3 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d171c]" />
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute inset-x-5 bottom-5 z-[20] flex justify-between text-[10px] font-semibold uppercase tracking-[.16em] text-[#8d171c] md:inset-x-9 md:bottom-6">
        <span className="hidden sm:inline">Drag, swipe or use ← → to browse</span>
        <span className="sm:hidden">Swipe to browse</span>
        <a href="#catalogue" className="hover:underline">Full catalogue ↓</a>
      </div>

      {/* Custom cursor (mouse only) */}
      <div ref={cursorRef} aria-hidden="true" className="shelf-cursor pointer-events-none absolute left-0 top-0 z-[100] hidden">
        <span className="ring" />
        <span className="dot" />
        <span className="label">
          OPEN
          <br />
          BOOK
        </span>
      </div>

      {/* Detail sheet */}
      {detail && (
        <div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${detail.title} by ${detail.author}`}
          className="fixed inset-0 z-[80] overflow-y-auto bg-[#f6f2ec] text-neutral-900"
          style={{ clipPath: "inset(50% 50% 50% 50%)" }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            data-close
            onClick={closeDetail}
            className="absolute left-5 top-5 z-10 inline-flex h-9 items-center gap-2 border border-neutral-900/80 px-3 text-[10.5px] font-semibold uppercase tracking-[.14em] transition hover:bg-neutral-900 hover:text-white md:left-9 md:top-7"
          >
            <X size={14} /> Close
          </button>
          <p className="absolute right-5 top-7 hidden text-[10.5px] font-semibold uppercase tracking-[.16em] text-[#8d171c] md:right-9 md:block">
            LO Publications <span className="mx-2 inline-block h-px w-10 align-middle bg-[#8d171c]" /> Library
          </p>

          <div className="grid min-h-full gap-10 px-6 pb-14 pt-24 md:grid-cols-[1fr_auto] md:items-center md:gap-[4vw] md:px-[7vw] md:pt-[110px]">
            <div className="order-2 grid max-w-[520px] gap-4 md:order-1">
              {[
                <p key="c" className="text-[10.5px] font-semibold uppercase tracking-[.22em] text-[#8d171c]">{catName(detail.category)}</p>,
                <h2 key="t" className="text-[clamp(34px,4.6vw,68px)] font-bold leading-[1.02] tracking-tight text-[#8d171c]">{detail.title}</h2>,
                <p key="a" className="text-sm font-medium uppercase tracking-[.12em] text-neutral-500">By {detail.author}</p>,
                <p key="d" className="max-w-[42ch] text-[17px] leading-relaxed text-neutral-700">
                  Published with LO Publications. Request a copy or read more, and discover the author behind the book.
                </p>,
                <div key="b" className="mt-2 flex flex-wrap gap-3">
                  <a
                    href={readLinkFor(detail)}
                    target={detail.readUrl ? "_blank" : undefined}
                    rel={detail.readUrl ? "noopener noreferrer" : undefined}
                    className="inline-flex h-11 items-center gap-2 border border-[#8d171c] bg-[#8d171c] px-5 text-[11px] font-semibold uppercase tracking-[.14em] text-white transition hover:bg-[#6b1215]"
                  >
                    <BookOpen size={15} /> {detail.readUrl ? "Read the book" : "Request this book"}
                  </a>
                  <NextLink
                    href={authorHref(detail.authorSlug)}
                    className="inline-flex h-11 items-center gap-2 border border-[#8d171c] px-5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#8d171c] transition hover:bg-[#8d171c] hover:text-white"
                  >
                    <User size={15} /> About the author
                  </NextLink>
                </div>,
              ].map((node, i) => (
                <div key={i} className="overflow-hidden py-0.5">
                  <div data-rise>{node}</div>
                </div>
              ))}
            </div>

            <div className="order-1 flex justify-center md:order-2">
              <svg viewBox="0 0 600 900" className="h-[46svh] w-auto drop-shadow-2xl md:h-[min(78vh,760px)]" role="img" aria-label={`Cover of ${detail.title}`}>
                <defs>
                  <filter id="shelf-ink" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves={3} seed={7} />
                    <feDisplacementMap in="SourceGraphic" scale={120} xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <mask id="shelf-ink-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="900">
                    <g ref={circlesRef} filter="url(#shelf-ink)" fill="#fff">
                      {[
                        [190, 330],
                        [430, 600],
                        [320, 120],
                        [110, 760],
                        [500, 250],
                        [330, 860],
                        [290, 470],
                      ].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r={0} />
                      ))}
                    </g>
                  </mask>
                  <clipPath id="shelf-poster-clip">
                    <rect width="600" height="900" rx="6" />
                  </clipPath>
                </defs>
                <g clipPath="url(#shelf-poster-clip)">
                  <image href={detail.coverImage} width="600" height="900" preserveAspectRatio="xMidYMid slice" mask="url(#shelf-ink-mask)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
