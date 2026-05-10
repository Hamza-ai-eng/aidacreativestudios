import { notes } from "#site/content";
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

  const entries: FeedEntry[] = notes
    .filter((n) => n.lang === lang && n.status === "published")
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .map((n) => ({
      title: n.title,
      description: n.description,
      link: `https://aidacreativestudios.com/${locale}/khadija/notes/${n.slug}`,
      guid: `https://aidacreativestudios.com/${locale}/khadija/notes/${n.slug}`,
      pubDate: n.datePublished,
      author: n.author,
      categories: n.tags,
    }));

  const xml = buildRss(
    {
      title: isAr
        ? "ملاحظات · AIDA"
        : "Notes · AIDA",
      description: isAr
        ? "ملاحظات قصيرة من معهد عايدة. مرتين بالشهر."
        : "Short notes from AIDA. Twice a month.",
      link: `https://aidacreativestudios.com/${locale}/khadija/notes`,
      feedUrl: `https://aidacreativestudios.com/${locale}/khadija/notes/feed.xml`,
      language: lang,
    },
    entries
  );

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
