"use client";

import { useEffect, useState } from "react";
import { project } from "@/lib/project";
import { IconArrowUp, IconPhone, IconWhatsapp } from "./icons";

export function Floating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* mobile sticky action bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-2">
          <a
            href={project.developer.phoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-100 py-2.5 text-sm font-semibold text-brand"
          >
            <IconPhone className="h-4 w-4" />
            Call
          </a>
          <a
            href={project.developer.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 text-sm font-semibold text-white"
          >
            <IconWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#enquire"
            className="inline-flex flex-[1.4] items-center justify-center rounded-full bg-brand py-2.5 text-sm font-semibold text-white"
          >
            Book a visit
          </a>
        </div>
      </div>

      {/* desktop back-to-top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 hidden h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-float transition-opacity hover:bg-brand-600 md:flex ${
          show ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <IconArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
