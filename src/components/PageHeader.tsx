export function PageHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="container-x pb-10 pt-16 sm:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
      {desc && <p className="mt-4 max-w-2xl text-lg text-white/65">{desc}</p>}
    </section>
  );
}
