import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Community Guidelines" };

const rules = [
  "Be respectful. Disagree with ideas, never with people.",
  "Share knowledge generously and credit your sources.",
  "No spam, harassment, hate speech or illegal content.",
  "Only share code and security research you have the right to share.",
  "Report problems to moderators instead of escalating.",
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Guidelines" title="Community guidelines" desc="Simple rules that keep NEXORA useful and welcoming." />
      <section className="container-x max-w-2xl">
        <ol className="list-decimal space-y-3 pl-5 text-white/75">{rules.map((r) => <li key={r}>{r}</li>)}</ol>
      </section>
    </>
  );
}
