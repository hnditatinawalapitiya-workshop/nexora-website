import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" desc="Draft placeholder. Have this reviewed and completed before launch." />
      <section className="container-x max-w-2xl space-y-4 text-white/70">
        <p>NEXORA collects only the information needed to run the platform, such as your name, email and the content you publish.</p>
        <p>Passwords are stored as hashes. You will be able to export or delete your data from account settings.</p>
      </section>
    </>
  );
}
