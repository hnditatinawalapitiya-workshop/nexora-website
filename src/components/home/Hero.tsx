import Link from "next/link";
import { HeroOrb } from "./HeroOrb";
import { groups } from "@/lib/data";

// Full-width 3-column hero matching the reference: headline / waveform orb / scrolling "for" rail.
export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="hero-atmosphere pointer-events-none absolute inset-0" />
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] w-full flex-col px-5 pb-8 sm:px-8 lg:px-12 lg:pb-10">
        <div className="relative grid flex-1 items-center gap-9 py-8 xl:grid-cols-[minmax(14rem,0.95fr)_minmax(24rem,1.35fr)_minmax(14rem,0.95fr)] xl:gap-4 xl:py-4">
          <div className="order-2 max-w-[24rem] self-end xl:order-1 xl:pb-[4.5rem]">
            <h1 className="fade-up mb-5 font-display text-[2.1rem] font-bold uppercase leading-[1.05] sm:text-[2.75rem] xl:mb-6 xl:text-[3.3rem]">
              Connect Ideas,
              <br />
              Create Real
              <br />
              <span className="text-gold">Impact</span>
            </h1>
            <p className="fade-up max-w-[22rem] text-[0.75rem] uppercase leading-[1.6] tracking-[0.05em] text-white/80 [animation-delay:150ms]">
              NEXORA is a student-driven technology community. Learn together, publish projects, find collaborators and join events, all in one place.
            </p>
            <div className="fade-up mt-7 flex flex-wrap gap-3 [animation-delay:300ms]">
              <Link href="/register" className="btn-primary">Join the community</Link>
              <Link href="/learning" className="btn-ghost">Explore learning</Link>
            </div>
          </div>

          <div className="scale-in relative z-20 order-1 flex flex-col items-center justify-center xl:order-2">
            <div className="relative flex w-full max-w-[min(96vw,calc(100svh-9rem),54rem)] flex-col items-center xl:max-w-[min(46rem,calc(100svh-10rem))]">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="absolute h-[74%] w-[74%] rounded-full border border-white/20 opacity-20" />
                <div className="absolute h-[126%] w-[126%] rounded-full border border-white/20 opacity-30" />
                <div className="absolute h-[205%] w-[205%] rounded-full border border-white/20 opacity-30" />
              </div>
              <div className="pointer-events-none absolute inset-x-[14%] top-[14%] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,200,0,0.22),transparent_48%),radial-gradient(circle_at_72%_50%,rgba(255,140,0,0.18),transparent_36%)] blur-3xl" aria-hidden="true" />
              <HeroOrb />
            </div>
          </div>

          <div className="order-3 ml-auto hidden w-full max-w-[18.5rem] xl:block xl:pt-6">
            <h2 className="mb-3 font-display text-xl font-bold">NEXORA for</h2>
            <div className="rail-mask relative h-[clamp(480px,72svh,640px)] overflow-hidden">
              <div className="flex animate-rail flex-col gap-8 hover:[animation-play-state:paused]">
                {[...groups, ...groups].map((g, i) => (
                  <article key={i} className="border-l-2 border-white/20 py-1 pl-4 transition-colors hover:border-gold" aria-hidden={i >= groups.length}>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide">{g.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/60">{g.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
