import { reports } from "#site/content";
import { buildRss, type FeedEntry } from "@/lib/rss";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const lang = isAr ? "ar" : "en";

  const entries: FeedEntry[] = reports
    .filter((r) => r.lang === lang && r.status === "published")
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .map((r) => ({
      title: r.title,
      description: r.description,
      link: `https://aidacreativestudios.com/${locale}/khadija/reports/${r.slug}`,
      guid: `https://aidacreativestudios.com/${locale}/khadija/reports/${r.slug}`,
      pubDate: r.datePublished,
      author: r.author,
      categories: r.tags,
    }));

  const xml = buildRss(
    {
      title: isAr ? "تقارير · AIDA" : "Reports · AIDA",
      description: isAr
        ? "تقارير المناصرة الكاملة من معهد عايدة."
        : "Full advocacy reports from AIDA's critical practice.",
      link: `https://aidacreativestudios.com/${locale}/khadija/reports`,
      feedUrl: `https://aidacreativestudios.com/${locale}/khadija/reports/feed.xml`,
      language: lang,
    },
    entries
  );

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
