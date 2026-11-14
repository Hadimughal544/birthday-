"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { gallery, type GalleryItem } from "@/data/content";

const aspect: Record<GalleryItem["shape"], string> = {
  tall: "aspect-[3/4.4]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const n = gallery.length;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)),
    [n],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <section className="px-4 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-rose">Our Memories</p>
          <h2 className="font-serif text-[clamp(2.2rem,6vw,3.6rem)] font-light italic text-wine">
            Moments I keep
          </h2>
        </Reveal>

        <div className="columns-2 gap-3 sm:gap-5 md:columns-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.1} className="mb-3 break-inside-avoid sm:mb-5">
              <figure>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open photo: ${g.caption}`}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[3px] shadow-[0_10px_30px_-12px_rgba(91,26,43,0.35)]"
                >
                  <Photo
                    src={g.src}
                    alt={g.caption}
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className={`w-full ${aspect[g.shape]}`}
                    imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </button>
                <figcaption className="mt-3 px-1 font-serif text-lg italic text-wine/80 sm:text-xl">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full text-ivory/80 hover:text-ivory"
            >
              <X />
            </button>
            <button
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/80 hover:text-ivory sm:left-4"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
            </button>
            <button
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/80 hover:text-ivory sm:right-4"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
            </button>

            <motion.div
              key={open}
              className="w-[88vw] max-w-3xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) step(1);
                else if (info.offset.x > 70) step(-1);
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Photo
                src={gallery[open].src}
                alt={gallery[open].caption}
                sizes="90vw"
                className="h-[72svh] w-full rounded-[3px]"
                imgClassName="!object-contain"
              />
              <p className="mt-4 text-center font-serif text-xl italic text-ivory">
                {gallery[open].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
