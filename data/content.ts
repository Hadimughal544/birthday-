/**
 * ✦ EVERYTHING you might want to edit lives in this file. ✦
 *
 * Photos: drop files into /public/images/ using the same filenames below
 * (or change the filenames here). Missing photos show an elegant placeholder.
 * Song:   drop your song at /public/audio/song.mp3 (or change musicSrc).
 *
 * Anything marked  ✎ EDIT  is placeholder text for you to personalise.
 */

export const HER_NAME = "Zunaira";
export const BIRTHDAY = "November 16";

// ✎ EDIT — shown on the timeline. Leave as "" to hide the date.
export const RELATIONSHIP_START_DATE = "";
export const SPECIAL_DATE = "";
export const OUR_FIRST_MEMORY =
  "One of the moments I'll never forget… (write your first memory here)";

export const musicSrc = "/audio/song.mp3";
export const musicTitle = "Our song"; // ✎ EDIT

export const hero = {
  image: "/images/hero.jpg",
  eyebrow: "To My Favorite Person",
  title: "Happy Birthday, My Love",
  subtitle:
    "Today isn't just your birthday.\nIt's another reminder of how lucky I am to have you in my life.",
};

export const intro = {
  heading: "Another year of you.\nAnother year I'm grateful for.",
  // ✎ EDIT
  body: "I made this little corner of the internet just for you — a place to gather some of our moments, some of the things I adore about you, and a few words I don't say out loud nearly enough.",
};

export type TimelineEntry = { title: string; date?: string; text: string };

// ✎ EDIT — replace each text with your real story.
export const timeline: TimelineEntry[] = [
  {
    title: "The Beginning",
    date: RELATIONSHIP_START_DATE,
    text: "Our story started… (write how it all began).",
  },
  {
    title: "The First Memory",
    text: OUR_FIRST_MEMORY,
  },
  {
    title: "The Journey",
    text: "Through all the little moments, the ordinary days that turned into everything… (write about your journey).",
  },
  {
    title: "Today",
    date: SPECIAL_DATE,
    text: "And here we are — and I'd choose you all over again.",
  },
];

export type GalleryItem = {
  src: string;
  caption: string;
  /** layout shape in the editorial grid */
  shape: "tall" | "wide" | "square" | "portrait";
};

// ✎ EDIT — captions, order and shapes. Add more entries as you like.
export const gallery: GalleryItem[] = [
  { src: "/images/memory-01.jpg", caption: "That smile ❤️", shape: "tall" },
  { src: "/images/memory-02.jpg", caption: "One of my favorite days.", shape: "square" },
  { src: "/images/memory-03.jpg", caption: "Just us.", shape: "wide" },
  { src: "/images/memory-04.jpg", caption: "Forever one of my favorite memories.", shape: "portrait" },
  { src: "/images/memory-05.jpg", caption: "Pure happiness.", shape: "square" },
  { src: "/images/memory-06.jpg", caption: "Always you.", shape: "tall" },
];

export const photoMoment = {
  image: "/images/moment.jpg",
  text: "With you,\nordinary moments become memories.",
};

export const reasons = [
  { title: "Your Smile", text: "It quietly rearranges my whole day." },
  { title: "Your Kindness", text: "The way you give without ever keeping score." },
  { title: "Ordinary Days, Made Special", text: "You turn the smallest moments into something worth remembering." },
  { title: "Your Strength", text: "Gentle, steady, and far greater than you know." },
  { title: "Your Laugh", text: "My favorite sound in the whole world." },
  { title: "The Way You Care", text: "Thoughtful in a hundred little ways." },
  { title: "Your Beautiful Heart", text: "The truest, warmest thing I know." },
  { title: "Simply You", text: "Just as you are. Exactly as you are." },
];

// ✎ EDIT — replace with your own words. Each string is one paragraph.
export const PERSONAL_LETTER = {
  greeting: "My Love,",
  paragraphs: [
    "Sometimes I wonder how I got so lucky to find someone like you…",
    "(Write your own words here — what she means to you, a memory that still makes you smile, what you hope for her this year. Plain and honest is the most beautiful kind.)",
    "Thank you for being you. Thank you for choosing me.",
  ],
  signoff: "Always yours,",
  signature: "Your husband", // ✎ EDIT — or your name
};

export const FINAL_MESSAGE = {
  heading: "Happy Birthday, My Love",
  wish: "I hope this year brings you everything your heart deserves.",
  toast: "Here's to more memories,\nmore laughter,\nmore adventures,\nand a lifetime of us.",
  closing: "Forever yours.",
};
