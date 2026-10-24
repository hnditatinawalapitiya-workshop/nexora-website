import Link from "next/link";
import { Logo } from "./Logo";
import { nav } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="flex h-16 w-full items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2" aria-label="NEXORA home">
          <Logo width={120} priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-white/70 transition hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm text-white/70 hover:text-white">Sign in</Link>
          <Link href="/register" className="btn-primary !py-2">Join NEXORA</Link>
        </div>

        {/* Mobile menu: native details element, no client JS needed */}
        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15" aria-label="Menu">
            <span className="block h-0.5 w-5 bg-white shadow-[0_6px_0_#fff,0_-6px_0_#fff]" />
          </summary>
          <div className="absolute right-0 top-12 w-60 rounded-2xl border border-white/10 bg-ink-800 p-3 shadow-2xl">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-gold">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
              <Link href="/login" className="btn-ghost !py-2">Sign in</Link>
              <Link href="/register" className="btn-primary !py-2">Join NEXORA</Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
