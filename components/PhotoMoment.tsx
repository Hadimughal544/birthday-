"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { photoMoment } from "@/data/content";

export default function PhotoMoment() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[85svh] min-h-[480px] overflow-hidden bg-deep">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Photo src={photoMoment.image} alt="" sizes="100vw" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-deep/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(46,10,21,0.7)_100%)]" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <Reveal as="h2">
          <span className="block font-serif text-[clamp(2.1rem,7vw,4.8rem)] font-light italic leading-[1.2] text-ivory">
            {photoMoment.text.split("\n").map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
