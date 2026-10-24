import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { Loader } from "@/components/home/Loader";
import { Hero } from "@/components/home/Hero";
import { RevealStatement } from "@/components/home/RevealStatement";
import { GroupWheel } from "@/components/home/GroupWheel";
import { FeatureStack } from "@/components/home/FeatureStack";
import { FaqSection } from "@/components/home/FaqSection";
import { GrowthCalculator } from "@/components/home/GrowthCalculator";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <Marquee items={["Our features", "Community", "Learning", "Projects", "Events", "Groups"]} label="NEXORA features" />
      <RevealStatement />
      <GroupWheel />
      <Marquee items={["Powered by students", "Learn", "Build", "Collaborate", "Ship", "Grow"]} />
      <FeatureStack />
      <FaqSection />
      <GrowthCalculator />
      <Testimonials />

      <section className="container-x pt-10">
        <div className="relative overflow-hidden rounded-[32px] border border-gold/25 bg-[#0b0b0b] px-6 py-20 text-center sm:py-28">
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-2/3 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
          <h2 className="relative font-display text-3xl font-bold uppercase sm:text-6xl">
            Where ideas become <span className="font-serif font-medium normal-case italic text-gold">impact.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/60">From learning paths to project teams, everything you need to grow in tech is here.</p>
          <Link href="/register" className="btn-primary relative mt-9">Start your journey</Link>
        </div>
      </section>
    </>
  );
}
