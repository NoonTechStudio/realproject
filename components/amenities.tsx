import { project } from "@/lib/project";
import { groupIcons, IconCheck } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Amenities() {
  return (
    <Section id="amenities" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Amenities"
          title="A ground floor that belongs to residents"
          intro="Parking sits on the podium so the 24 m court between the towers stays car-free — for the clubhouse, the pool deck, the play zone and the jogging loop."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {project.amenityGroups.map((g, i) => {
          const Icon = groupIcons[g.group as keyof typeof groupIcons];
          return (
            <Reveal
              key={g.group}
              delay={i * 80}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand">
                  {g.group}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
