"use client";

import { useState } from "react";
import { project } from "@/lib/project";
import { IconChevron } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Specifications() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section id="specifications" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Specifications"
          title="What's actually in the home"
          intro="The finish schedule, category by category. On a live project this is the annexure to your agreement."
        />
      </Reveal>

      <Reveal className="mt-8 divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white">
        {project.specifications.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.group}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="font-display text-lg font-semibold text-brand">
                  {s.group}
                </span>
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
                  <dl className="divide-y divide-brand-100/70 border-t border-brand-100 px-5 sm:px-6">
                    {s.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="grid gap-1 py-3 text-sm sm:grid-cols-[200px_1fr] sm:gap-4"
                      >
                        <dt className="font-medium text-brand">{k}</dt>
                        <dd className="text-ink/80">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
