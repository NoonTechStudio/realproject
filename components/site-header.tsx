"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, project } from "@/lib/project";
import { IconArrow, IconClose, IconMenu, IconPhone } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-brand-100 bg-white/95 shadow-[0_6px_24px_-16px_rgba(11,37,69,0.5)] backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src={project.developer.logo}
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 rounded-lg sm:h-10 sm:w-10"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-brand sm:text-lg">
                {project.name}
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                by {project.developer.name}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={project.developer.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 px-4 py-2 text-sm font-medium text-brand transition-colors hover:border-brand-400 hover:bg-brand-50"
            >
              <IconPhone className="h-4 w-4" />
              {project.developer.phoneDisplay}
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Book a site visit
              <IconArrow className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 text-brand md:hidden"
          >
            <IconMenu />
          </button>
        </div>

        {/* section nav — desktop/tablet only; mobile uses the drawer */}
        <nav className="mx-auto hidden w-full max-w-6xl px-2 sm:px-6 md:block">
          <ul className="no-scrollbar flex gap-1 overflow-x-auto pb-1">
            {nav.map((n) => (
              <li key={n.id} className="shrink-0">
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`relative block px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === n.id
                      ? "text-brand"
                      : "text-muted hover:text-brand"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold-500 transition-transform duration-300 ${
                      active === n.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-brand/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-float transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
            <span className="font-display text-lg font-semibold text-brand">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 text-brand"
            >
              <IconClose />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-3 py-3">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    active === n.id ? "bg-brand-50 text-brand" : "text-ink"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-brand-100 p-4">
            <a
              href={project.developer.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-brand-100 px-4 py-3 text-sm font-medium text-brand"
            >
              <IconPhone className="h-4 w-4" />
              {project.developer.phoneDisplay}
            </a>
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book a site visit
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
