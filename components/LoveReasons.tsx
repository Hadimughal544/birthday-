"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { reasons } from "@/data/content";

export default function LoveReasons() {
  return (
    <section className="relative bg-wine px-6 py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-blush">Things I Love About You</p>
          <h2 className="font-serif text-[clamp(2.2rem,6vw,3.6rem)] font-light italic">
            Just a few of them
          </h2>
        </Reveal>

        <motion.ul
          className="grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          {reasons.map((r, i) => (
            <motion.li
              key={r.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative bg-wine p-8 transition-colors duration-700 hover:bg-[#6a2236] sm:p-9"
            >
              <span className="font-serif text-sm italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-2xl leading-snug transition-transform duration-700 group-hover:-translate-y-1">
                {r.title}
              </h3>
              <div className="my-4 h-px w-8 bg-gold/70 transition-all duration-700 group-hover:w-16" />
              <p className="text-sm leading-6 text-ivory/70">{r.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
