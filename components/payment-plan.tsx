import { project } from "@/lib/project";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

export function PaymentPlan() {
  return (
    <Section id="payment" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Payment Plan"
          title="Construction-linked, so outflow tracks the site"
          intro="An indicative schedule for this demo. You pay as slabs are cast — not upfront."
        />
      </Reveal>

      <Reveal className="mt-8 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
        <ol>
          {project.paymentPlan.map((p, i) => (
            <li
              key={p.stage}
              className="flex items-center gap-4 border-b border-brand-100 px-5 py-4 last:border-b-0 sm:px-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <span className="flex-1 text-sm text-ink/85">{p.stage}</span>
              <span className="hidden h-2 max-w-[160px] flex-1 overflow-hidden rounded-full bg-brand-50 sm:block">
                <span
                  className="block h-full rounded-full bg-gold-500"
                  style={{ width: `${parseInt(p.pct, 10) * 2.5}%` }}
                />
              </span>
              <span className="w-12 text-right font-display text-base font-semibold text-brand">
                {p.pct}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
