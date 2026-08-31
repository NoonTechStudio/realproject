import Image from "next/image";
import { project } from "@/lib/project";
import { IconArrow, IconPin } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Location() {
  const { location } = project;
  return (
    <Section id="location" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Location"
          title="Tandalja, on the 30 m Sun Pharma Road"
          intro={location.blurb}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            <Image
              src={location.map}
              alt="Map of Yusuf Residency in Tandalja, Vadodara"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href={location.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-brand-50"
          >
            <span className="flex items-center gap-2">
              <IconPin className="h-4 w-4 text-gold" />
              {project.address}
            </span>
            <IconArrow className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {location.categories.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {c.label}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {c.places.map(([name, dist]) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="text-ink/80">{name}</span>
                    <span className="shrink-0 font-medium text-brand">{dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
