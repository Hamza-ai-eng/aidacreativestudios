export interface Series {
  slug: string;
  status: "live" | "coming-soon";
  fileCount: number;
  accentColor: string;
  externalPath?: string;
}

export const SERIES: Series[] = [
  {
    slug: "human-in-the-loop",
    status: "live",
    fileCount: 7,
    accentColor: "#C41230",
    externalPath: "/editorial/human-in-the-loop/index.html",
  },
  {
    slug: "the-brand-that-stays",
    status: "coming-soon",
    fileCount: 5,
    accentColor: "#B85C38",
  },
  {
    slug: "speaking-arabic",
    status: "coming-soon",
    fileCount: 4,
    accentColor: "#4A7C8A",
  },
];

// ── Archived SEO articles (offline, pending full editorial treatment) ──
// Restored from: C:/AIDA_System/data/archive/aida-voice-articles/articles.ts
