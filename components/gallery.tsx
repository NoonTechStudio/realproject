"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { project } from "@/lib/project";
import { IconArrow, IconClose } from "./icons";
import { Heading, Section } from "./primitives";
import { Reveal } from "./reveal";

const items = project.gallery;

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <Section id="gallery" className="py-16 sm:py-24">
      <Reveal>
        <Heading
          kicker="Gallery"
          title="A look around"
          intro="Representative imagery for this demo — a live listing would carry the project's own photography, a walkthrough film and a sample-flat tour."
        />
      </Reveal>

      <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl border border-brand-100 bg-brand-50 ${
              i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={g.src}
              alt={g.caption}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/85 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
              {g.caption}
            </span>
          </button>
        ))}
      </Reveal>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-brand/95 p-4 backdrop-blur"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="flex items-center justify-between text-white">
            <span className="text-sm text-white/70">
              {open + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
            >
              <IconClose />
            </button>
          </div>

          <div
            className="relative mx-auto my-4 flex w-full max-w-4xl flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={items[open].src}
              src={items[open].src}
              alt={items[open].caption}
              width={1400}
              height={1000}
              className="max-h-full w-auto rounded-xl border border-white/10 object-contain"
            />
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-0 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white text-brand shadow-float hover:bg-gold-200 sm:-translate-x-1/2"
            >
              <IconArrow className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-0 inline-flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full bg-white text-brand shadow-float hover:bg-gold-200"
            >
              <IconArrow className="h-5 w-5" />
            </button>
          </div>

          <p
            className="text-center text-sm text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            {items[open].caption}
          </p>
        </div>
      )}
    </Section>
  );
}
