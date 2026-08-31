import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 md:scroll-mt-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
      <span className="h-px w-6 bg-gold-400" />
      {children}
    </span>
  );
}

export function Heading({
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
