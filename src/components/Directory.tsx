import { PageHeader } from "./PageHeader";
import type { Item } from "@/lib/data";

export function Directory({
  eyebrow, title, desc, items, cta,
}: { eyebrow: string; title: string; desc: string; items: Item[]; cta?: string }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} desc={desc} />
      <section className="container-x">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <input className="input max-w-xs" placeholder="Search…" aria-label="Search" disabled />
          {cta && <button className="btn-primary ml-auto" disabled>{cta}</button>}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it) => (
            <article key={it.slug} className="card">
              <p className="text-xs font-medium text-gold">{it.meta}</p>
              <h2 className="mt-2 font-display text-xl font-semibold">{it.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/40">Sample content. Live data arrives with the database phase.</p>
      </section>
    </>
  );
}
