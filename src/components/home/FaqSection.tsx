"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Icon } from "@/components/Icon";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-gold/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="container-x relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.25fr] lg:gap-24 xl:max-w-[80rem]">
        <div>
          <h2 className="font-display text-[1.85rem] font-bold leading-[1.15] sm:text-[2.4rem]">
            NEXORA FAQs.
            <span className="block font-serif font-medium italic text-gold">Let&apos;s clear things up.</span>
          </h2>
          <div className="mt-7 space-y-4 text-sm leading-7 text-white/50">
            <p>Starting out in tech can feel overwhelming. NEXORA brings learning, people and projects together in one place.</p>
            <p>Whether you&apos;re writing your first line of code or shipping your fifth project, we&apos;re here to make it simple.</p>
          </div>
        </div>
        <div className="border-t border-white/[0.07]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/[0.07]">
                <h3>
                  <button
                    type="button"
                    className="group relative flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span
                      className={`pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-gold/70 via-amber-400/40 to-transparent transition-transform duration-500 ${isOpen ? "scale-x-100" : "scale-x-0"}`}
                    />
                    <span className={`text-base font-medium transition-colors ${isOpen ? "text-white" : "text-white/75 group-hover:text-white"}`}>{f.q}</span>
                    <Icon name="plus" className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <p className="overflow-hidden text-sm leading-7 text-white/55">
                    <span className="block pb-5">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
