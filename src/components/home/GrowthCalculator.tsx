"use client";

import { useState } from "react";

// NEXORA's take on the reference ROI calculator: estimate learning progress from weekly study time.
const tracks = [
  { id: "web", label: "Web", factor: 1 },
  { id: "mobile", label: "Mobile", factor: 1.05 },
  { id: "ai", label: "AI / ML", factor: 1.25 },
  { id: "security", label: "Security", factor: 1.15 },
  { id: "design", label: "UI/UX", factor: 0.9 },
];

const levels = [
  { id: "beginner", label: "Beginner", hours: 220 },
  { id: "intermediate", label: "Intermediate", hours: 150 },
  { id: "advanced", label: "Advanced", hours: 90 },
];

const HOURS_PER_PROJECT = 60;

export function GrowthCalculator() {
  const [weekly, setWeekly] = useState(8);
  const [track, setTrack] = useState(tracks[0]);
  const [level, setLevel] = useState(levels[0]);

  const yearly = weekly * 52;
  const weeksToRoadmap = Math.ceil((level.hours * track.factor) / weekly);
  const projects = Math.max(1, Math.floor(yearly / HOURS_PER_PROJECT));
  const events = Math.min(24, Math.max(2, Math.round(yearly / 40)));
  const pct = ((weekly - 1) / 29) * 100;

  return (
    <section id="growth-calculator" className="py-20 sm:py-28">
      <div className="container-x grid gap-16 md:grid-cols-[1fr_1.15fr] md:gap-10 xl:max-w-[80rem] xl:gap-16">
        <div className="lg:self-center">
          <h2 className="font-display text-[2rem] font-bold uppercase leading-tight sm:text-[2.8rem] lg:text-[3rem]">
            Plan your <span className="font-serif font-medium normal-case italic text-gold">growth</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-[1.8] text-white/50">See what consistent practice with the community could look like over a year.</p>

          <div className="mt-10 space-y-8">
            <div className="space-y-2.5">
              <label htmlFor="weekly" className="flex items-center justify-between text-[13.5px] font-medium text-white/70">
                Study hours per week
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[13px] font-bold text-gold">{weekly}h</span>
              </label>
              <input
                id="weekly"
                type="range"
                min={1}
                max={30}
                value={weekly}
                onChange={(e) => setWeekly(Number(e.target.value))}
                className="range-gold h-2 w-full cursor-pointer appearance-none rounded-full"
                style={{ background: `linear-gradient(to right, #FFE600 ${pct}%, rgba(255,255,255,0.08) ${pct}%)` }}
              />
            </div>

            <fieldset className="space-y-2.5">
              <legend className="mb-2.5 text-[13.5px] font-medium text-white/70">Learning track</legend>
              <div className="flex flex-wrap gap-2">
                {tracks.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={t.id === track.id}
                    onClick={() => setTrack(t)}
                    className={`min-h-[44px] flex-1 cursor-pointer rounded-full px-4 text-[13px] font-semibold transition-colors ${
                      t.id === track.id ? "bg-gold text-black shadow-[0_0_18px_rgba(255,230,0,0.35)]" : "bg-white/[0.05] text-white/50 hover:text-white/80"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2.5 text-[13.5px] font-medium text-white/70">Current level</legend>
              <div className="flex gap-2">
                {levels.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    aria-pressed={l.id === level.id}
                    onClick={() => setLevel(l)}
                    className={`min-h-[44px] flex-1 cursor-pointer rounded-full text-[13px] font-semibold transition-colors ${
                      l.id === level.id ? "bg-gold text-black" : "bg-white/[0.05] text-white/50 hover:text-white/80"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 sm:p-10" aria-live="polite">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
          <p className="relative text-[13px] font-medium uppercase tracking-[0.2em] text-white/50">Practice hours this year</p>
          <p className="relative mt-2 font-display text-6xl font-bold text-gold sm:text-7xl">{yearly.toLocaleString()}</p>
          <div className="relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
            {[
              { v: `${weeksToRoadmap} wks`, l: `${track.label} roadmap complete` },
              { v: `${projects}`, l: "Projects you could ship" },
              { v: `${events}`, l: "Workshops & events" },
              { v: `${Math.round(yearly / 8)}`, l: "Focused study days" },
            ].map((s) => (
              <div key={s.l} className="bg-[#0b0b0b] p-5">
                <div className="font-display text-2xl font-bold">{s.v}</div>
                <div className="mt-1 text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="relative mt-6 text-xs text-white/35">Rough estimates based on typical roadmap length and about {HOURS_PER_PROJECT} hours per small project.</p>
        </div>
      </div>
    </section>
  );
}
