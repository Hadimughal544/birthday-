import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Homemade_Apple } from "next/font/google";
import "./globals.css";
import { HER_NAME } from "@/data/content";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const script = Homemade_Apple({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Happy Birthday, ${HER_NAME} ❤️`,
  description: `A little something, made with love, just for ${HER_NAME}.`,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
