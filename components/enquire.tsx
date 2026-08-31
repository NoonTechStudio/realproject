import { project } from "@/lib/project";
import { EnquiryForm } from "./enquiry-form";
import { IconCheck, IconPhone, IconPin, IconWhatsapp } from "./icons";
import { Reveal } from "./reveal";

export function Enquire() {
  return (
    <section id="enquire" className="scroll-mt-32 bg-brand text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            <span className="h-px w-6 bg-gold-400" />
            Enquire
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Come see it for yourself
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            Site visits run seven days a week. Leave your details and the Surti
            Developer team will call you back to fix a time, share the current
            price list and walk you through the sample flat.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={project.developer.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
            >
              <IconPhone className="h-5 w-5 text-gold-200" />
              <span>
                <span className="block text-white/60">Call</span>
                <span className="font-semibold">{project.developer.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={project.developer.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
            >
              <IconWhatsapp className="h-5 w-5 text-gold-200" />
              <span>
                <span className="block text-white/60">WhatsApp</span>
                <span className="font-semibold">Message the sales team</span>
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-200" />
              <span>
                <span className="block text-white/60">Site & experience centre</span>
                <span className="font-semibold">{project.address}</span>
              </span>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            {["Zero brokerage", "Home-loan desk on site", "RERA-carpet plans"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-gold-200" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <EnquiryForm variant="panel" className="text-ink" />
        </Reveal>
      </div>
    </section>
  );
}
