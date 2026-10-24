import Link from "next/link";
import { Logo } from "./Logo";

const cols = [
  { h: "Platform", l: [["Community", "/community"], ["Learning", "/learning"], ["Projects", "/projects"], ["Events", "/events"], ["Groups", "/groups"]] },
  { h: "Company", l: [["About", "/about"], ["Members", "/members"], ["Guidelines", "/guidelines"], ["Contact", "/contact"]] },
];

export function Footer() {
  return (
    <footer className="container-x mt-24 pb-14 pt-2 xl:max-w-[80rem]">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex w-full flex-col gap-4 md:mt-10 lg:max-w-[360px]">
          <Logo width={180} />
          <p className="text-base leading-7 text-white/45">Connect Ideas. Create Impact.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-sm text-white/45 transition-colors hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/45 transition-colors hover:text-white/80">Terms</Link>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-4 md:ml-auto md:mt-10 md:w-auto md:gap-x-16">
          {cols.map((c) => (
            <div key={c.h}>
              <h3 className="text-sm font-semibold">{c.h}</h3>
              <ul className="mt-4 space-y-3">
                {c.l.map(([t, h]) => (
                  <li key={h}><Link href={h} className="text-sm text-white/45 transition-colors hover:text-gold">{t}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-14 border-t border-white/10 pt-6 text-xs text-white/35">© {new Date().getFullYear()} NEXORA. All rights reserved.</p>
    </footer>
  );
}
