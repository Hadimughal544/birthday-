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
export const RELATIONSHIP_START_DATE = "04-12-2022"; // MM-DD-YYYY
export const SPECIAL_DATE = "";
export const OUR_FIRST_MEMORY =
  "One of the moments I'll never forget… My birthday became unforgettable the day we went to the Mall of Lahore together. Just walking beside you and sharing that time was enough to make it perfect. It was our very first memory, and it is still my favorite.";

export const musicSrc = "/audio/song.mp3";
export const musicTitle = "Our song"; // ✎ EDIT

export const hero = {
  image: "/images/hero.jpeg",
  eyebrow: "To My Favorite Person",
  title: "Happy Birthday, My Love",
  subtitle:
    "Today isn't just your birthday.\nIt's another reminder of how lucky I am to have you in my life.",
};

export const intro = {
  heading: "Another year of you.\nAnother year I'm grateful for.",
  // ✎ EDIT
  body: "I made this little corner of my love just for you  a place to gather some of our moments, some of the things I adore about you, and a few words I don't say out loud nearly enough.",
};

export type TimelineEntry = { title: string; date?: string; text: string; image: string };

// ✎ EDIT — replace each text with your real story.
export const timeline: TimelineEntry[] = [
  {
    title: "The Beginning",
    date: RELATIONSHIP_START_DATE,
    text: "Our story started… It all started at university. I met you, and just like that, my heart was yours. I still miss those days, the craze, the butterflies, the way I fell in love with you. That is where our story began..",
    image: "/images/timeline-01.jpeg",
  },
  {
    title: "The First Memory",
    text: OUR_FIRST_MEMORY,
    image: "/images/timeline-02.jpeg",
  },
  {
    title: "The Journey",
    text: "Through all the little moments, the ordinary days that turned into everything… You are the most important person in my life. Every day with you feels like a gift, and I love you more than words can say. Happy Birthday, my love. May this year bring you all the happiness you deserve.",
    image: "/images/timeline-03.jpeg",
  },
  {
    title: "Today",
    date: SPECIAL_DATE,
    text: "And here we are — and I'd choose you all over again.After everything we have shared, my answer is still you. You are my safest place and my greatest blessing. Happy Birthday, my love. I would choose you in every lifetime",
    image: "/images/timeline-04.jpeg",
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
  { src: "/images/moment1.jpeg", caption: "That smile ❤️", shape: "tall" },
  { src: "/images/moment2.jpeg", caption: "One of my favorite days.", shape: "square" },
  { src: "/images/moment3.jpeg", caption: "Just us.", shape: "tall" },
  { src: "/images/moment4.jpeg", caption: "Forever one of my favorite memories.", shape: "portrait" },
  { src: "/images/moment5.jpeg", caption: "Pure happiness.", shape: "wide" },
  { src: "/images/moment6.jpeg", caption: "Always you.", shape: "tall" },
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
// data/content.ts
export const PERSONAL_LETTER = {
  greeting: "My Shona Motka Bubu,",
  paragraphs: [
    "Happy Birthday, my love. Today is the day the world received one of its most precious gifts, and I am the luckiest person alive because that gift is mine.",
    "I still remember the day I met you at university. I did not know it then, but my life was about to change forever. From that very first moment, you became my favorite person, and every day since has only made me fall for you more.",
    "You are not just a part of my life, you are the reason it feels so complete. Your smile fixes my worst days, your voice is my peace, and just being near you feels like home. I do not know what I did to deserve you, but I thank God for you every single day.",
    "If I could go back to the very beginning, I would walk the same road all over again just to find you. I would choose you in every lifetime, in every version of my story.",
    "On your special day, I wish you endless happiness, success in everything you dream of, and a heart that is always full of love. And I promise to stand beside you, to love you, and to make you feel how important you are to me, today and every day after.",
  ],
  signoff: "Forever and always yours,",
  signature: "Tera Bnda Haider",
};

export const FINAL_MESSAGE = {
  heading: "Happy Birthday, My Love",
  wish: "I hope this year brings you everything your heart deserves.",
  toast: "Here's to more memories,\nmore laughter,\nmore adventures,\nand a lifetime of us.",
  closing: "Forever yours.",
};
