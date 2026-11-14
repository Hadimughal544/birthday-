import Reveal from "./Reveal";
import { PERSONAL_LETTER } from "@/data/content";

export default function LoveLetter() {
  const L = PERSONAL_LETTER;
  return (
    <section className="px-4 py-28 sm:px-8 sm:py-36">
      <Reveal className="mx-auto max-w-2xl">
        <article className="paper relative rounded-[3px] px-7 py-14 shadow-[0_30px_80px_-30px_rgba(91,26,43,0.45),0_2px_6px_rgba(91,26,43,0.08)] sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-3 rounded-[2px] border border-gold/25" />
          <p className="mb-10 text-center text-[11px] uppercase tracking-[0.4em] text-rose">A Letter For You</p>
          <h2 className="font-script text-3xl text-wine sm:text-4xl">{L.greeting}</h2>
          <div className="mt-8 space-y-6 font-serif text-[1.25rem] leading-[1.85] text-ink sm:text-[1.4rem]">
            {L.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * i} as="p">
                {p}
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <p className="font-serif text-xl italic text-ink/80">{L.signoff}</p>
            <p className="mt-2 font-script text-2xl text-wine">{L.signature}</p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
