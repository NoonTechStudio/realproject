import Image from "next/image";
import { project } from "@/lib/project";
import { IconArrow, IconBed, IconCompass, IconRuler } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Residences() {
  return (
    <Section id="residences" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Residences"
          title="Two plans, both corner homes"
          intro="Every apartment is a corner or through unit — cross-ventilated, with all bedrooms on an external wall. Carpet areas below are RERA carpet and exclude the utility balcony."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {project.units.map((u, i) => (
          <Reveal
            key={u.type}
            delay={i * 80}
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card"
          >
            <div className="relative aspect-[4/3] border-b border-brand-100 bg-brand-50">
              <Image
                src={u.plan}
                alt={`${u.type} floor plan`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-4"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {u.type}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-2xl font-semibold text-brand">{u.price}</p>
                <span className="text-xs text-muted">{project.priceNote}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{u.note}</p>

              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-brand-100 pt-5 text-sm">
                <div className="flex items-start gap-2">
                  <IconRuler className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    <dt className="text-xs text-muted">Carpet area</dt>
                    <dd className="font-medium text-ink">{u.carpet}</dd>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <IconRuler className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    <dt className="text-xs text-muted">Saleable</dt>
                    <dd className="font-medium text-ink">{u.saleable}</dd>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <IconBed className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    <dt className="text-xs text-muted">Bath / balcony</dt>
                    <dd className="font-medium text-ink">
                      {u.bath} · {u.balcony}
                    </dd>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <IconCompass className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    <dt className="text-xs text-muted">Facing</dt>
                    <dd className="font-medium text-ink">{u.facing}</dd>
                  </span>
                </div>
              </dl>

              <a
                href="#floor-plans"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-gold"
              >
                See the full floor plan
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 overflow-hidden rounded-2xl border border-brand-100">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-brand-50 text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Unit</th>
              <th className="px-4 py-3 font-semibold">Carpet</th>
              <th className="px-4 py-3 font-semibold">Utility balcony</th>
              <th className="px-4 py-3 font-semibold">Saleable</th>
              <th className="px-4 py-3 font-semibold">Starting price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100">
            {project.units.map((u) => (
              <tr key={u.type} className="odd:bg-white even:bg-brand-50/40">
                <td className="px-4 py-3 font-medium text-ink">{u.type}</td>
                <td className="px-4 py-3">{u.carpet}</td>
                <td className="px-4 py-3">{u.balcony}</td>
                <td className="px-4 py-3">{u.saleable}</td>
                <td className="px-4 py-3 font-medium text-brand">{u.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Reveal>
      <p className="mt-3 text-xs text-muted">
        *Indicative prices for this demo, exclusive of stamp duty, registration, GST and statutory charges.
      </p>
    </Section>
  );
}
