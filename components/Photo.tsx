"use client";

import Image from "next/image";
import { useState } from "react";
import { HER_NAME } from "@/data/content";

/**
 * next/image with a graceful fallback: if the file isn't in /public/images yet,
 * an elegant placeholder is shown so the layout never breaks.
 */
export default function Photo({
  src,
  alt,
  sizes,
  priority,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-blush/40 ${className}`}>
      {failed ? (
        <div
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blush/70 via-cream to-rose/50"
        >
          <span className="font-serif text-6xl italic text-wine/25 select-none">
            {HER_NAME.charAt(0)}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
