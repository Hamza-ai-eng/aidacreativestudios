/**
 * Minimal RSS 2.0 generator for AIDA editorial feeds.
 *
 * Used by route handlers under /[locale]/khadija/.../feed.xml/route.ts
 */

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export type FeedEntry = {
  title: string;
  description: string;
  link: string;
  pubDate: string; // ISO date
  guid: string;
  author?: string;
  categories?: string[];
};

export type FeedConfig = {
  title: string;
  description: string;
  link: string; // canonical site URL for this feed (e.g. https://.../khadija)
  feedUrl: string; // self-link to this very feed
  language: "en" | "ar";
};

export function buildRss(cfg: FeedConfig, entries: FeedEntry[]): string {
  const items = entries
    .map(
      (e) => `    <item>
      <title>${escapeXml(e.title)}</title>
      <description>${escapeXml(e.description)}</description>
      <link>${escapeXml(e.link)}</link>
      <guid isPermaLink="true">${escapeXml(e.guid)}</guid>
      <pubDate>${new Date(e.pubDate).toUTCString()}</pubDate>${
        e.author ? `\n      <author>${escapeXml(e.author)}</author>` : ""
      }${
        e.categories?.length
          ? "\n" +
            e.categories
              .map((c) => `      <category>${escapeXml(c)}</category>`)
              .join("\n")
          : ""
      }
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(cfg.title)}</title>
    <description>${escapeXml(cfg.description)}</description>
    <link>${escapeXml(cfg.link)}</link>
    <atom:link href="${escapeXml(cfg.feedUrl)}" rel="self" type="application/rss+xml" />
    <language>${cfg.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>AIDA Creative Studios</generator>
${items}
  </channel>
</rss>
`;
}
