import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" desc="Questions, feedback or partnership ideas? Send us a message." />
      <section className="container-x max-w-xl">
        <form className="space-y-4" aria-label="Contact form">
          <label className="block text-sm">Name<input className="input mt-1" name="name" autoComplete="name" /></label>
          <label className="block text-sm">Email<input className="input mt-1" type="email" name="email" autoComplete="email" /></label>
          <label className="block text-sm">Message<textarea className="input mt-1 min-h-32" name="message" /></label>
          <button type="button" className="btn-primary" disabled>Send message</button>
          <p className="text-xs text-white/40">Form submission is wired up in a later phase.</p>
        </form>
      </section>
    </>
  );
}
