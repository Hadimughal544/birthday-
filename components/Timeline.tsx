"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { timeline } from "@/data/content";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-cream/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-20 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-rose">Our Story</p>
          <h2 className="font-serif text-[clamp(2.2rem,6vw,3.6rem)] font-light italic text-wine">
            How we got here
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* track + progress line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-wine/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-[11px] top-0 w-px bg-gradient-to-b from-gold to-wine md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-16 md:space-y-24">
            {timeline.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.title} className="relative pl-12 md:grid md:grid-cols-2 md:gap-20 md:pl-0">
                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-ivory ring-1 ring-gold md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-wine" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -36 : 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      left
                        ? "md:col-start-1 md:pr-4 md:text-right"
                        : "md:col-start-2 md:pl-4"
                    }
                  >
                    {e.date ? (
                      <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold">{e.date}</p>
                    ) : null}
                    <h3 className="font-serif text-3xl text-wine">{e.title}</h3>
                    <p className="mt-3 text-base leading-7 text-ink/75">{e.text}</p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
