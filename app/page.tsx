"use client";

import { MotionConfig } from "framer-motion";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import LoveReasons from "@/components/LoveReasons";
import LoveLetter from "@/components/LoveLetter";
import PhotoMoment from "@/components/PhotoMoment";
import FinalMessage from "@/components/FinalMessage";
import MusicPlayer from "@/components/MusicPlayer";

export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <Hero />
        <Intro />
        <Timeline />
        <Gallery />
        <LoveReasons />
        <LoveLetter />
        <PhotoMoment />
        <FinalMessage />
      </main>
      <MusicPlayer />
    </MotionConfig>
  );
}
