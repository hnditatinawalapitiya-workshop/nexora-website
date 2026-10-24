export function Marquee({ items, label }: { items: string[]; label?: string }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-900/60 py-4" aria-label={label}>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap" aria-hidden="true">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
