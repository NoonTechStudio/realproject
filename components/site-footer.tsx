import Image from "next/image";
import { nav, project } from "@/lib/project";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={project.developer.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
              />
              <span className="font-display text-lg font-semibold text-brand">
                {project.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted">
              {project.configuration} · {project.locality}. A project by{" "}
              {project.developer.name}.
            </p>
            <p className="mt-3 text-xs text-muted">
              RERA: {project.reraNumber}
            </p>
          </div>

          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-muted hover:text-brand">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a href={project.developer.phoneHref} className="hover:text-brand">
                  {project.developer.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={project.developer.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  WhatsApp
                </a>
              </li>
              <li>{project.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-gold">
          <strong className="font-semibold">Demo disclaimer.</strong>{" "}
          {project.disclaimer}
        </div>

        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {project.developer.name} (fictional). Design
          experiment — not an offer or an invitation to invest.
        </p>
      </div>
    </footer>
  );
}
