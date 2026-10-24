import { features } from "@/lib/data";
import { Icon, type IconName } from "@/components/Icon";

const featureIcons: IconName[] = ["users", "book", "rocket", "calendar"];

// Sticky stacking cards: each feature pins and the next one slides over it.
export function FeatureStack() {
  return (
    <section id="features" className="container-x py-24 xl:max-w-[80rem]">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow">Our features</p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-5xl">
          Everything you need to <span className="font-serif font-medium normal-case italic text-gold">grow</span>
        </h2>
      </div>
      <div className="space-y-8">
        {features.map((f, i) => (
          <article
            key={f.title}
            className="sticky grid gap-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] md:grid-cols-2 md:p-12"
            style={{ top: `${88 + i * 18}px` }}
          >
            <div>
              <span className="font-display text-sm text-gold">0{i + 1} / 0{features.length}</span>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{f.title}</h3>
              <p className="mt-4 leading-relaxed text-white/60">{f.desc}</p>
              <ul className="mt-6 space-y-3">
                {f.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gold/[0.12] via-black to-black">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-6 rounded-full border border-dashed border-gold/15" aria-hidden="true" />
              <Icon name={featureIcons[i]} className="relative h-20 w-20 text-gold drop-shadow-[0_0_24px_rgba(255,230,0,0.5)]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
