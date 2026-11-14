import Reveal from "./Reveal";
import { Sparkle } from "./Particles";
import { intro } from "@/data/content";

export default function Intro() {
  return (
    <section id="intro" className="relative px-6 py-28 text-center sm:py-40">
      <Sparkle className="left-[12%] top-24" />
      <Sparkle className="right-[14%] top-40 h-2 w-2" delay={1.4} />
      <Sparkle className="bottom-24 left-[22%] h-2 w-2" delay={2.2} />

      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="rule-gold mx-auto mb-10 w-16" />
        </Reveal>
        <Reveal delay={0.1} as="h2">
          <span className="block font-serif text-[clamp(2.1rem,6.5vw,4rem)] font-light italic leading-[1.15] text-wine">
            {intro.heading.split("\n").map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </span>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-10 max-w-lg text-base leading-8 text-ink/80 sm:text-lg">
            {intro.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
