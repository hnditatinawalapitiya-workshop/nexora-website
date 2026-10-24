import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Terms of Use" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" desc="Draft placeholder. Have this reviewed and completed before launch." />
      <section className="container-x max-w-2xl space-y-4 text-white/70">
        <p>By using NEXORA you agree to follow the community guidelines and to be responsible for the content you post.</p>
        <p>NEXORA may remove content or suspend accounts that violate these terms.</p>
      </section>
    </>
  );
}
