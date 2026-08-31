import { project } from "@/lib/project";
import { IconSparkle } from "./icons";
import { Section } from "./primitives";
import { Reveal } from "./reveal";

export function Highlights() {
  return (
    <div className="bg-brand text-white">
      <Section className="py-14 sm:py-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            <span className="h-px w-6 bg-gold-400" />
            Why Yusuf Residency
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Six decisions you feel every day
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 60} className="bg-brand p-6">
              <IconSparkle className="h-5 w-5 text-gold-200" />
              <h3 className="mt-3 font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{h.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </div>
  );
}
