"use client";

import { useState } from "react";
import { project } from "@/lib/project";
import { IconChevron } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section id="faq" className="py-16 sm:py-24">
      <Reveal>
        <Heading kicker="Good to know" title="Questions, answered" />
      </Reveal>

      <Reveal className="mt-8 divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white">
        {project.faqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="font-medium text-brand">{q}</span>
                <IconChevron
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75 sm:px-6">
                    {a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
