import { PageHeader } from "@/components/PageHeader";
import { pillars } from "@/lib/data";

export const metadata = { title: "About" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="About NEXORA" title="A community made by students, for students" desc="NEXORA connects IT students with the knowledge, people and projects they need to grow." />
      <section className="container-x grid gap-5 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="card">
            <h2 className="font-display text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-white/65">{p.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
