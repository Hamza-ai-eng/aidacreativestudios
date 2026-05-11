import type { MetadataRoute } from "next";

const BASE = "https://aidacreativestudios.com";
const LOCALES = ["en", "ar", "he"];

/**
 * Static page paths — V2 (Bait Aida) matriarch-canonical IA.
 * V1 paths (/services, /about, /contact, /insights, /work, /clients) 301 to
 * these via next.config.ts; they are deliberately NOT in this sitemap.
 */
const pages = [
  // Threshold (Aida)
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },

  // Editorial lane (Khadija — the witness)
  { path: "/khadija", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/khadija/reports", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/khadija/reports/offline-by-design", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/khadija/series", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/khadija/series/human-in-the-loop", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/khadija/series/offline-by-design-series", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/khadija/series/when-the-knife-entered", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/khadija/notes", priority: 0.9, changeFrequency: "weekly" as const },

  // Studio lane (Karimeh — the maker)
  { path: "/karimeh", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/karimeh/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/karimeh/work", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/karimeh/work/al-daya", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/karimeh/work/golden-line-mobile", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/karimeh/clients", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/karimeh/clients/al-daya", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/karimeh/clients/golden-line-mobile", priority: 0.75, changeFrequency: "monthly" as const },

  // About / contact (Fatima · Hayat)
  { path: "/fatima", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/fatima/press", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/hayat", priority: 0.85, changeFrequency: "yearly" as const },

  // SEO commercial landings — kept as-is
  { path: "/seo/branding", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/seo/menu-design", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/seo/social-media", priority: 0.85, changeFrequency: "monthly" as const },
];

/**
 * Notes — currently a fixed list seeded from the rebuild plan.
 * Once Velite is wired (Phase 3+4), this should iterate `notes` collection.
 */
const notes = [
  "01-iqsa-mubarmaj-summary",
  "02-chatgpt-bil-arabi",
  "03-karimeh-abboud",
  "04-six-notes-on-lavender",
  "05-irisguard-unrwa",
  "06-arabic-wikipedia",
  "07-whatsapp-falastin",
  "08-how-to-read-a-report",
  "09-archive-2026",
  "10-six-palestinian-maps",
];

/**
 * Series 01 essays — static HTML at /editorial/human-in-the-loop/0X.html, but
 * also exposed as canonical V2 routes once Velite migration completes.
 */
const series01 = [
  "01-kill-list-machine",
  "02-checkpoint-camera",
  "03-stateless-database",
  "04-silenced-feed",
  "05-language-they-didnt-train",
  "06-engineers-dilemma",
  "07-signal-in-the-rubble",
];

/** Series 02 essays — Offline by Design — six bilingual essays. */
const series02 = [
  "01-electricity",
  "02-payment",
  "03-contracts",
  "04-language",
  "05-geography",
  "06-accountability",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const pushLocalized = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${path}`])
          ),
        },
      });
    }
  };

  for (const p of pages) {
    pushLocalized(p.path, p.priority, p.changeFrequency);
  }

  for (const slug of notes) {
    pushLocalized(`/khadija/notes/${slug}`, 0.7, "monthly");
  }
  for (const slug of series01) {
    pushLocalized(`/khadija/series/human-in-the-loop/${slug}`, 0.75, "monthly");
  }
  for (const slug of series02) {
    pushLocalized(`/khadija/series/offline-by-design-series/${slug}`, 0.75, "monthly");
  }

  return entries;
}
