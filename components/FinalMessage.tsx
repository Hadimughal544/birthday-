import Reveal from "./Reveal";
import Particles, { Sparkle } from "./Particles";
import { FINAL_MESSAGE as F, HER_NAME } from "@/data/content";

export default function FinalMessage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-blush/30 to-cream px-6 py-32 text-center sm:py-44">
      <Particles count={10} tone="wine" />
      <Sparkle className="left-[15%] top-28" />
      <Sparkle className="right-[18%] top-48 h-2 w-2" delay={1.6} />
      <Sparkle className="bottom-32 right-[26%]" delay={0.8} />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <div
            className="heartbeat mx-auto mb-10 h-14 w-14 text-wine drop-shadow-[0_0_22px_rgba(201,134,143,0.7)]"
            style={{ animation: "heartbeat 3.2s ease-in-out infinite" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2 0 3.5 1.1 4.4 2.6.9-1.5 2.4-2.6 4.4-2.6 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z" />
            </svg>
          </div>
        </Reveal>
        <Reveal delay={0.1} as="h2">
          <span className="block font-serif text-[clamp(2.4rem,8vw,5rem)] font-light italic leading-[1.1] text-wine">
            {F.heading} <span className="not-italic">❤️</span>
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-base leading-8 text-ink/80 sm:text-lg">{F.wish}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-10 font-serif text-[1.45rem] italic leading-[1.7] text-wine sm:text-[1.7rem]">
            {F.toast.split("\n").map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="rule-gold mx-auto my-12 w-20" />
          <p className="font-script text-3xl text-wine sm:text-4xl">{F.closing}</p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-rose">For {HER_NAME} · November 16</p>
        </Reveal>
      </div>
    </section>
  );
}
