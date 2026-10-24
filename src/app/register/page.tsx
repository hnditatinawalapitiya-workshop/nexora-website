import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = { title: "Create account" };

export default function Page() {
  return (
    <section className="container-x flex justify-center py-16">
      <div className="card w-full max-w-md !p-8 hover:!border-white/10">
        <Logo width={180} className="mx-auto" />
        <h1 className="mt-2 text-center font-display text-2xl font-bold">Join NEXORA</h1>
        <form className="mt-6 space-y-4" aria-label="Create account">
          <label className="block text-sm">Name<input className="input mt-1" autoComplete="name" /></label>
          <label className="block text-sm">Email<input className="input mt-1" type="email" autoComplete="email" /></label>
          <label className="block text-sm">Password<input className="input mt-1" type="password" autoComplete="new-password" /></label>
          <label className="flex items-start gap-2 text-xs text-white/60">
            <input type="checkbox" className="mt-0.5 accent-[#FFE600]" />
            <span>I accept the <Link href="/terms" className="text-gold">Terms</Link> and <Link href="/privacy" className="text-gold">Privacy Policy</Link>.</span>
          </label>
          <button type="button" className="btn-primary w-full" disabled>Create account</button>
        </form>
        <p className="mt-4 text-center text-sm text-white/60">
          Already a member? <Link href="/login" className="text-gold hover:underline">Sign in</Link>
        </p>
        <p className="mt-2 text-center text-xs text-white/40">Authentication arrives in phase 3.</p>
      </div>
    </section>
  );
}
