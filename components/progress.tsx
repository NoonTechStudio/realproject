import Image from "next/image";
import { project } from "@/lib/project";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

const stateStyle: Record<string, string> = {
  Completed: "bg-green-100 text-green-800",
  "In progress — 6th slab cast": "bg-gold-50 text-gold",
  "Started on lower floors": "bg-gold-50 text-gold",
  "Not started": "bg-brand-50 text-muted",
};

export function ConstructionProgress() {
  const { progress } = project;
  return (
    <div className="bg-cream">
      <Section id="progress" className="py-16 sm:py-24">
        <Reveal>
          <Heading
            kicker="Construction Progress"
            title="Where the site is today"
            intro={progress.updated}
          />
        </Reveal>

        <Reveal className="mt-8 rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-brand">Overall completion</span>
            <span className="font-display text-lg font-semibold text-brand">
              {progress.overall}%
            </span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-brand-50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-400"
              style={{ width: `${progress.overall}%` }}
            />
          </div>
        </Reveal>

        <ol className="mt-8 space-y-6">
          {progress.milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.title}
              delay={i * 60}
              className="grid gap-4 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card sm:grid-cols-[220px_1fr] sm:gap-6"
            >
              <div className="relative aspect-[4/3] bg-brand-50 sm:aspect-auto">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  sizes="(min-width: 640px) 220px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:py-6 sm:pr-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-lg font-semibold text-brand">
                    {m.title}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      stateStyle[m.state] ?? "bg-brand-50 text-muted"
                    }`}
                  >
                    {m.state}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">Target window: {m.date}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-50">
                  <div
                    className="h-full rounded-full bg-gold-500"
                    style={{ width: `${m.pct}%` }}
                  />
                </div>
                <span className="mt-1 block text-xs text-muted">{m.pct}% complete</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </div>
  );
}
