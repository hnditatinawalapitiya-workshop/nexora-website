import { testimonials } from "@/lib/data";

// Infinite slide track; pauses on hover. Quotes in data.ts are placeholders until real member feedback exists.
export function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="overflow-hidden py-20 sm:py-28">
      <div className="container-x mb-14 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.025em] sm:text-5xl">What members say</h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] text-white/55">Feedback from the students, leads and mentors building NEXORA.</p>
      </div>
      <div className="slide-mask relative">
        <div className="flex w-max animate-marquee gap-5 [animation-duration:50s] hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure
              key={i}
              aria-hidden={i >= testimonials.length}
              className="flex w-[88vw] max-w-[560px] shrink-0 flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <blockquote className="text-[18px] font-light leading-relaxed text-white/80 sm:text-[19px]">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-lg font-bold text-gold ring-1 ring-gold/30">
                  {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[16px] font-medium">{t.name}</span>
                  <span className="truncate text-[13.5px] text-white/45">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
