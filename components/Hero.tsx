"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Photo from "./Photo";
import Particles from "./Particles";
import { HER_NAME, hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const lines = hero.subtitle.split("\n");
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-deep text-ivory">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <Photo
          src={hero.image}
          alt={`${HER_NAME}`}
          sizes="100vw"
          priority
          className="h-full w-full object-contain "
        />
      </motion.div>

      {/* legibility veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/35 to-deep/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(46,10,21,0.45)_100%)]" />
      <Particles count={16} />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center sm:pb-28">
        <motion.p
          className="mb-4 text-[11px] uppercase tracking-[0.42em] text-blush sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-serif text-balance text-[clamp(2.4rem,9vw,6.5rem)] font-light italic leading-[1.05] text-ivory"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 1.3, ease }}
        >
          {hero.title} <span className="not-italic">❤️</span>
        </motion.h1>

        <motion.div
          className="rule-gold mt-6 w-24"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 2, ease }}
        />

        <motion.p
          className="mt-6 max-w-[22rem] text-balance text-[0.95rem] sm:max-w-md leading-relaxed text-ivory/85 sm:text-base"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 2.2, ease }}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </motion.p>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center text-blush/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3, duration: 1 },
          y: { delay: 3, duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ChevronDown strokeWidth={1.25} className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
