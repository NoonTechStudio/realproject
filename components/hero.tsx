import Image from "next/image";
import { project } from "@/lib/project";
import { IconArrow, IconPin, IconWhatsapp } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand">
      <Image
        src={project.heroImage}
        alt="Modern apartment building with balconies at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/85 via-brand/55 to-brand/92" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_20%,rgba(11,37,69,0.55),transparent)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:min-h-[86vh] lg:justify-end lg:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-200 backdrop-blur">
            {project.configuration}
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85 sm:text-xl">
            {project.tagline}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80">
            <IconPin className="h-4 w-4 text-gold-200" />
            {project.address}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gold-400"
            >
              Book a site visit
              <IconArrow className="h-4 w-4" />
            </a>
            <a
              href={project.developer.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <IconWhatsapp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur sm:grid-cols-4">
          {[
            ["Starting", project.priceFrom],
            ["Possession", project.possession],
            ["Status", project.status],
            ["Homes", "156 · 2 towers"],
          ].map(([k, v]) => (
            <div key={k} className="bg-brand/30 px-4 py-4">
              <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                {k}
              </dt>
              <dd className="mt-1 text-sm font-semibold sm:text-base">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
