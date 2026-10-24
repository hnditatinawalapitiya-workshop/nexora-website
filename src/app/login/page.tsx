import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = { title: "Sign in" };

export default function Page() {
  return (
    <section className="container-x flex justify-center py-16">
      <div className="card w-full max-w-md !p-8 hover:!border-white/10">
        <Logo width={180} className="mx-auto" />
        <h1 className="mt-2 text-center font-display text-2xl font-bold">Welcome back</h1>
        <form className="mt-6 space-y-4" aria-label="Sign in">
          <label className="block text-sm">Email<input className="input mt-1" type="email" autoComplete="email" /></label>
          <label className="block text-sm">Password<input className="input mt-1" type="password" autoComplete="current-password" /></label>
          <button type="button" className="btn-primary w-full" disabled>Sign in</button>
        </form>
        <p className="mt-4 text-center text-sm text-white/60">
          New here? <Link href="/register" className="text-gold hover:underline">Create an account</Link>
        </p>
        <p className="mt-2 text-center text-xs text-white/40">Authentication arrives in phase 3.</p>
      </div>
    </section>
  );
}
