import type { MetadataRoute } from "next";
import { articles } from "@/data/insights/articles";

const BASE = "https://aidacreativestudios.com";
const LOCALES = ["en", "ar", "he"];

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/insights", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work/golden-line-mobile", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/work/al-daya", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of pages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  // Insight articles
  for (const article of articles) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE}/${locale}/insights/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}/insights/${article.slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
