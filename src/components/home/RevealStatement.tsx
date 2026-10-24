"use client";

import { useEffect, useRef } from "react";
import { Icon, type IconName } from "@/components/Icon";

// Port of the reference "Trusted by" gallery: cards orbit the statement along a closed spline
// (passing behind the text mid-way) while each word sharpens from blur as you scroll.

// Spline control points (px at 1440px wide), scale and opacity along the orbit.
const XS = [960, 400, -250, -500, -380, 5, 390, 560, 270, -580, -580, -960];
const YS = [540, 500, 270, 30, -190, -270, -190, 10, 255, 520, 580, 780];
const SCALE = [0.28, 0.75, 0.83, 0.84, 0.8, 0.75, 0.8, 0.84, 0.88, 0.62, 0.35, 0.28];
const OPACITY = [0, 0.8, 0.86, 0.9, 0.8, 0.72, 0.8, 0.9, 0.88, 0.58, 0.22, 0];

const cards: { label: string; icon: IconName }[] = [
  { label: "Web Development", icon: "code" },
  { label: "Mobile Apps", icon: "phone" },
  { label: "AI & Machine Learning", icon: "cpu" },
  { label: "Cybersecurity", icon: "shield" },
  { label: "UI/UX Design", icon: "pen" },
  { label: "Cloud & DevOps", icon: "cloud" },
  { label: "Data Science", icon: "chart" },
];

const words = [
  { text: "Built", line: 0, at: 0, init: 0.45 },
  { text: "by", line: 0, at: 0.05, init: 0.38 },
  { text: "students", line: 0, at: 0.1, init: 0.28 },
  { text: "who", line: 0, at: 0.16, init: 0.18 },
  { text: "value", line: 1, at: 0.23, init: 0.12 },
  { text: "real-world", line: 1, at: 0.3, init: 0.09, serif: true },
  { text: "skills", line: 2, at: 0.36, init: 0.07 },
  { text: "and", line: 2, at: 0.39, init: 0.07 },
  { text: "impact.", line: 2, at: 0.42, init: 0.07, serif: true },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// Catmull-Rom through evenly spaced points, t in [0, 1].
function spline(pts: number[], t: number) {
  const n = pts.length;
  const pos = t * (n - 1);
  const i = Math.min(Math.floor(pos), n - 2);
  const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[Math.min(n - 1, i + 1)], p3 = pts[Math.min(n - 1, i + 2)];
  const f = pos - i, f2 = f * f, f3 = f2 * f;
  return 0.5 * (2 * p1 + (-p0 + p2) * f + (2 * p0 - 5 * p1 + 4 * p2 - p3) * f2 + (-p0 + 3 * p1 - 3 * p2 + p3) * f3);
}

function viewportScale(w: number) {
  if (w < 640) return 0.33;
  if (w < 768) return 0.46;
  if (w < 1024) return 0.58;
  return Math.min(1, w / 1440);
}

export function RevealStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vp = viewportScale(window.innerWidth);
    let smooth = -1;
    let raf = 0;
    let running = false;

    const render = (f: number) => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const x = clamp01(1.75 * f - 0.09 * i);
        el.style.transform = `translate(${spline(XS, x) * vp}px, ${spline(YS, x) * vp}px) scale(${Math.max(0.1, spline(SCALE, x)) * vp})`;
        el.style.opacity = String(clamp01(spline(OPACITY, x)));
        el.style.zIndex = x > 0.32 && x < 0.59 ? "5" : "15";
      });
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        const w = words[i];
        const local = clamp01((f - w.at) / 0.09);
        el.style.opacity = String(w.init + (1 - w.init) * local);
        const blur = (w.serif ? 10 : 18) * (1 - local);
        el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : "none";
        el.style.transform = `translateY(${10 * (1 - local)}px)`;
      });
      const out = clamp01((f - 0.62) / 0.26);
      if (textRef.current) {
        textRef.current.style.opacity = String(1 - out);
        textRef.current.style.filter = out > 0.005 ? `blur(${(14 * out).toFixed(1)}px)` : "none";
        textRef.current.style.transform = `translateY(${-50 * out}px)`;
      }
      if (barRef.current) barRef.current.style.transform = `scaleY(${f})`;
    };

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const raw = dist > 0 ? clamp01(-rect.top / dist) : 0;
      const target = 0.03 + 0.85 * raw;
      // Critically-damped-ish easing toward the scroll target (stands in for a spring).
      smooth = smooth < 0 || reduced ? target : smooth + (target - smooth) * 0.12;
      render(smooth);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(section);
    const onResize = () => { vp = viewportScale(window.innerWidth); };
    window.addEventListener("resize", onResize);
    tick();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const lines = [0, 1, 2].map((l) => words.map((w, i) => ({ ...w, i })).filter((w) => w.line === l));

  return (
    <div ref={sectionRef} id="statement" className="relative h-[700vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: 1600 }}>
        {cards.map((c, i) => (
          <div
            key={c.label}
            ref={(el) => { cardRefs.current[i] = el; }}
            aria-hidden="true"
            className="absolute flex flex-col items-center justify-center gap-4 rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/[0.12] to-black/90 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md"
            style={{ left: "calc(50% - 140px)", top: "calc(50% - 93.5px)", width: 280, height: 187, opacity: 0, willChange: "transform, opacity" }}
          >
            <Icon name={c.icon} className="h-12 w-12 text-gold drop-shadow-[0_0_18px_rgba(255,214,0,0.55)]" />
            <span className="font-display text-lg font-semibold">{c.label}</span>
          </div>
        ))}

        <div ref={textRef} className="pointer-events-none absolute inset-0 z-10 flex select-none items-center justify-center px-4 sm:px-8">
          <h2 className="text-center font-display" style={{ fontSize: "clamp(1.25rem, 3vw, 4rem)", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            {lines.map((line, li) => (
              <span key={li} className="flex flex-wrap justify-center gap-x-[0.26em]">
                {line.map((w) => (
                  <span
                    key={w.text}
                    ref={(el) => { wordRefs.current[w.i] = el; }}
                    className={w.serif ? "font-light italic text-gold/90" : "font-bold text-white"}
                    style={{ display: "inline-block", opacity: w.init, letterSpacing: w.serif ? "-0.01em" : undefined }}
                  >
                    {w.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 z-[25] h-10 w-px -translate-x-1/2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <div ref={barRef} className="h-full w-full origin-top bg-gold/50" style={{ transform: "scaleY(0)" }} />
        </div>
      </div>
    </div>
  );
}
