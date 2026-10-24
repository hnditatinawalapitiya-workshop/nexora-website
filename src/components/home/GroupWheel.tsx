"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { groups } from "@/lib/data";
import { Icon, type IconName } from "@/components/Icon";

const icons: Record<string, IconName> = {
  web: "code", mobile: "phone", ai: "cpu", security: "shield",
  design: "pen", cloud: "cloud", data: "chart", oss: "branch",
};

const STEP = 36; // degrees between items on the wheel

// Cinematic wheel: scrolling rotates a large arc so each interest group passes through the spotlight.
export function GroupWheel() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const [radius, setRadius] = useState(640);

  useEffect(() => {
    const size = () => setRadius(Math.min(760, Math.max(420, window.innerHeight * 0.72)));
    size();
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, []);

  const rotation = -p * (groups.length - 1) * STEP;
  const active = Math.round(p * (groups.length - 1));
  const current = groups[active];

  return (
    <section ref={ref} id="groups" aria-label="Interest groups" className="relative h-[400vh] bg-[#130f00]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,200,0,0.28),transparent_30%),radial-gradient(circle_at_70%_35%,rgba(255,140,40,0.18),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/90 to-transparent" />

        <div className="relative z-10 pt-24 text-center sm:pt-28">
          <p className="eyebrow">Built for every interest</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-5xl">Find your circle</h2>
        </div>

        {/* Pivot sits above the viewport so the visible part of the wheel is a gentle arc. */}
        <div className="absolute left-1/2" style={{ top: `calc(${radius * -1}px + 62vh)` }}>
          <div
            className="absolute rounded-full border border-gold/15"
            style={{ width: radius * 2, height: radius * 2, left: -radius, top: -radius }}
            aria-hidden="true"
          />
          <div className="absolute" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 120ms linear" }}>
            {groups.map((g, i) => {
              const angle = (90 + i * STEP) * (Math.PI / 180);
              const isActive = i === active;
              return (
                <div
                  key={g.slug}
                  className="absolute w-[190px] sm:w-[220px]"
                  style={{
                    left: Math.cos(angle) * radius,
                    top: Math.sin(angle) * radius,
                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                    transition: "transform 120ms linear",
                  }}
                >
                  <div
                    className="flex flex-col items-center text-center transition duration-300"
                    style={{ opacity: isActive ? 1 : 0.35, transform: `scale(${isActive ? 1.08 : 0.9})` }}
                  >
                    <div className="mb-3 flex h-[72px] w-[72px] items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-gold/25 to-black/80 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <Icon name={icons[g.slug] ?? "code"} className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-base font-semibold sm:text-lg">{g.title}</h3>
                    <span className="mt-1.5 block h-0.5 w-10 bg-gradient-to-r from-gold via-amber-400 to-transparent" />
                    <p className="mt-1.5 text-xs leading-5 text-white/60 sm:text-sm">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4">
          <div className="flex gap-1.5" aria-hidden="true">
            {groups.map((g, i) => (
              <span key={g.slug} className={`h-1 rounded-full transition-all ${i === active ? "w-6 bg-gold" : "w-1.5 bg-white/25"}`} />
            ))}
          </div>
          <Link href="/groups" className="btn-ghost !py-2 text-xs">
            Explore {current.title} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
