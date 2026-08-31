"use client";

import Image from "next/image";
import { useState } from "react";
import { project } from "@/lib/project";
import { IconArrow } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function FloorPlans() {
  const [active, setActive] = useState(0);
  const u = project.units[active];

  return (
    <Section id="floor-plans" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Floor Plans"
          title="See how the plan lives"
          intro="Indicative layouts, not to scale. Dimensions are wall-to-wall; the RERA carpet is stated on each plan."
        />
      </Reveal>

      <Reveal className="mt-8">
        <div className="inline-flex rounded-full border border-brand-100 bg-brand-50 p-1">
          {project.units.map((unit, i) => (
            <button
              key={unit.type}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-6 ${
                active === i ? "bg-brand text-white shadow-card" : "text-muted hover:text-brand"
              }`}
            >
              {unit.type.split(" — ")[0]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="overflow-hidden rounded-2xl border border-brand-100 bg-white p-3 shadow-card">
          <div className="relative aspect-square w-full">
            <Image
              key={u.plan}
              src={u.plan}
              alt={`${u.type} floor plan`}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
          <h3 className="font-display text-2xl font-semibold text-brand">{u.type}</h3>
          <p className="mt-1 text-sm text-muted">{u.note}</p>

          <dl className="mt-5 divide-y divide-brand-100 text-sm">
            {[
              ["RERA carpet area", u.carpet],
              ["Utility balcony", u.balcony],
              ["Saleable area", u.saleable],
              ["Bathrooms", u.bath],
              ["Facing options", u.facing],
              ["Starting price", u.price],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-2.5">
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#enquire"
            className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Get this plan as a PDF
            <IconArrow className="h-4 w-4" />
          </a>
          <p className="mt-2 text-center text-[11px] text-muted">
            Demo — the enquiry form stands in for a real download.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
