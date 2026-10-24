import { Logo } from "@/components/Logo";

// Pure-CSS intro overlay: plays once on load, then clips away. No JS, so it can never get stuck.
export function Loader() {
  return (
    <div className="intro-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-black" aria-hidden="true">
      <Logo width={200} priority />
      <div className="h-px w-14 overflow-hidden rounded-full bg-white/10">
        <div className="intro-loader-bar h-full w-full bg-gold/70" />
      </div>
    </div>
  );
}
