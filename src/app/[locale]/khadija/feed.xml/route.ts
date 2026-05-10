import { notes, reports, series } from "#site/content";
import { buildRss, type FeedEntry } from "@/lib/rss";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const lang = isAr ? "ar" : "en";

  const all: FeedEntry[] = [
    ...notes
      .filter((n) => n.lang === lang && n.status === "published")
      .map((n) => ({
        title: n.title,
        description: n.description,
        link: `https://aidacreativestudios.com/${locale}/khadija/notes/${n.slug}`,
        guid: `https://aidacreativestudios.com/${locale}/khadija/notes/${n.slug}`,
        pubDate: n.datePublished,
        author: n.author,
        categories: ["Notes", ...n.tags],
      })),
    ...reports
      .filter((r) => r.lang === lang && r.status === "published")
      .map((r) => ({
        title: r.title,
        description: r.description,
        link: `https://aidacreativestudios.com/${locale}/khadija/reports/${r.slug}`,
        guid: `https://aidacreativestudios.com/${locale}/khadija/reports/${r.slug}`,
        pubDate: r.datePublished,
        author: r.author,
        categories: ["Report", ...r.tags],
      })),
    ...series
      .filter((s) => s.lang === lang && s.status === "published")
      .map((s) => ({
        title: s.title,
        description: s.description,
        link: `https://aidacreativestudios.com/${locale}/khadija/series/${s.series}/${s.slug}`,
        guid: `https://aidacreativestudios.com/${locale}/khadija/series/${s.series}/${s.slug}`,
        pubDate: s.datePublished,
        author: s.author,
        categories: ["Series", s.series, ...s.tags],
      })),
  ].sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));

  const xml = buildRss(
    {
      title: isAr
        ? "حجّة خديجة · AIDA — كل المقالات والتقارير"
        : "Hajjeh Khadija · AIDA — All editorial",
      description: isAr
        ? "تقارير، سلاسل، وملاحظات من معهد عايدة النقدي."
        : "Reports, series, and notes from AIDA's critical practice.",
      link: `https://aidacreativestudios.com/${locale}/khadija`,
      feedUrl: `https://aidacreativestudios.com/${locale}/khadija/feed.xml`,
      language: lang,
    },
    all
  );

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
