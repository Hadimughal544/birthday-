"use client";

import { Music, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { musicSrc, musicTitle } from "@/data/content";

/** Optional, click-to-play only. Hidden until the audio file is confirmed to exist. */
export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(musicSrc, { method: "HEAD" })
      .then((r) => {
        const type = r.headers.get("content-type") ?? "";
        if (alive && r.ok && type.startsWith("audio")) setAvailable(true);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (!available) return null;

  const toggle = async () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audio} src={musicSrc} loop preload="none" onEnded={() => setPlaying(false)} />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : `Play music: ${musicTitle}`}
        className="fixed bottom-4 right-4 z-40 flex h-12 items-center gap-2 rounded-full border border-white/40 bg-ivory/70 px-4 text-sm text-wine shadow-lg backdrop-blur-md transition hover:bg-ivory"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        <span className="font-serif italic">{playing ? "Pause" : musicTitle}</span>
      </button>
    </>
  );
}
