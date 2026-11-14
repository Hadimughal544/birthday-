"use client";

import { useEffect, useState } from "react";

/** A handful of slow-drifting soft dots. Pure CSS animation, no layout cost. */
export default function Particles({
  count = 14,
  tone = "light",
}: {
  count?: number;
  tone?: "light" | "wine";
}) {
  const [items, setItems] = useState<
    { left: number; size: number; dur: number; delay: number; dx: number; o: number }[]
  >([]);

  // generated on the client only, avoiding hydration mismatches
  useEffect(() => {
    setItems(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        dur: 16 + Math.random() * 18,
        delay: -Math.random() * 30,
        dx: (Math.random() - 0.5) * 80,
        o: 0.25 + Math.random() * 0.4,
      })),
    );
  }, [count]);

  const color = tone === "light" ? "rgba(255,236,224,0.9)" : "rgba(201,134,143,0.7)";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="particle absolute bottom-[-10px] rounded-full blur-[0.5px]"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: color,
              boxShadow: `0 0 ${p.size * 3}px ${color}`,
              animation: `drift ${p.dur}s linear ${p.delay}s infinite`,
              "--dx": `${p.dx}px`,
              "--o": p.o,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`twinkle absolute h-3 w-3 text-gold ${className}`}
      style={{ animation: `twinkle 3.6s ease-in-out ${delay}s infinite` }}
      fill="currentColor"
    >
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12 6.4-.6 11.4-5.6 12-12z" />
    </svg>
  );
}
