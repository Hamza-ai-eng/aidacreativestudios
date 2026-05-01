import {
  Playfair_Display,
  Cairo,
  Amiri,
  EB_Garamond,
  Space_Mono,
  /* Kept for any legacy references still in codebase */
  Inter,
  Heebo,
  Space_Grotesk,
} from "next/font/google";

// ── Watermelon Patina Design System · v1.0 ──────────────────

/** Arabic display — classical Naskh, architectural scale */
export const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});

/** Arabic body — readable, modern, not decorative */
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

/** English display — the judge's voice */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/** English body — has age in it, not a tech product */
export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

/** Monospace — numbers, file names, metadata, evidence */
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

// ── Legacy — kept so old components don't break ──────────────

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
