import Image from "next/image";
import { project } from "@/lib/project";
import { EnquiryForm } from "./enquiry-form";
import { IconCheck, IconPhone, IconPin, IconWhatsapp } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function Overview() {
  return (
    <Section id="overview" className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div>
          <Reveal>
            <Heading
              kicker="Overview"
              title="A quiet address, two minutes from everything"
              intro={project.overview.lead}
            />
          </Reveal>

          <Reveal className="mt-8 space-y-4 text-base leading-relaxed text-ink/80">
            {project.overview.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:grid-cols-3">
              {project.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-brand">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <span>
              <span className="font-medium text-ink">RERA:</span> {project.reraNumber}
            </span>
          </Reveal>
          <p className="mt-1 text-xs text-muted">{project.reraNote}</p>
        </div>

        {/* sidebar */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
            <div className="flex items-center gap-3">
              <Image
                src={project.developer.logo}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl"
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  Developer
                </p>
                <p className="font-display text-lg font-semibold text-brand">
                  {project.developer.name}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.developer.blurb}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-brand-50 px-3 py-2">
                <span className="block font-display text-base font-semibold text-brand">
                  {project.developer.experienceYears} yrs
                </span>
                <span className="text-xs text-muted">in Vadodara</span>
              </div>
              <div className="rounded-lg bg-brand-50 px-3 py-2">
                <span className="block font-display text-base font-semibold text-brand">
                  {project.developer.delivered.split(" · ")[0]}
                </span>
                <span className="text-xs text-muted">
                  {project.developer.delivered.split(" · ")[1]}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-brand p-4 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                Price {project.priceNote}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">
                {project.priceFrom}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/70">
                <IconPin className="h-3.5 w-3.5" />
                {project.locality} · Possession {project.possession}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href={project.developer.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-100 px-4 py-2.5 text-sm font-medium text-brand hover:bg-brand-50"
              >
                <IconPhone className="h-4 w-4" />
                {project.developer.phoneDisplay}
              </a>
              <a
                href={project.developer.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-95"
              >
                <IconWhatsapp className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>

            <ul className="mt-4 space-y-1.5 text-xs text-muted">
              {["Site visits 7 days a week", "Home-loan desk on site", "Zero brokerage — direct from developer"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <IconCheck className="h-3.5 w-3.5 text-brand" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <div className="mt-4 lg:hidden">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
