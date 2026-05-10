import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "#site/content";
import { localeAlternates } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "ملاحظات · Notes" : "Notes · ملاحظات",
    description: isAr
      ? "ملاحظات قصيرة من معهد عايدة — تحليل، نقد، وقراءات في الذكاء الاصطناعي والتكنولوجيا والقدس."
      : "Short notes from AIDA — analysis, criticism, and readings on AI, technology, and Jerusalem.",
    alternates: localeAlternates(locale, "/khadija/notes"),
  };
}

export default async function NotesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const items = notes
    .filter((n) => n.lang === (isAr ? "ar" : "en") && n.status === "published")
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  return (
    <main className="pt-32 pb-24 mx-auto max-w-3xl px-6" dir={isAr ? "rtl" : "ltr"}>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)]">
        {isAr ? "غرفة حجّة خديجة" : "Khadija's Room"}
      </p>
      <h1
        className="mt-4 mb-6 leading-[0.95]"
        style={{
          fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          color: "var(--ink)",
        }}
      >
        {isAr ? "ملاحظات" : "Notes"}
      </h1>
      <p className="text-[var(--ink-dim)] mb-12 max-w-prose">
        {isAr
          ? "كتابات قصيرة. مرتين بالشهر. عربي وإنجليزي. ما حدا بيستعجل."
          : "Short writings. Twice a month. Arabic and English. No one is in a hurry."}
      </p>

      {items.length === 0 ? (
        <p className="text-[var(--ink-faded)] italic">
          {isAr ? "لسّا ما طلعت ملاحظة. قريباً." : "No notes yet. Soon."}
        </p>
      ) : (
        <ul className="space-y-8">
          {items.map((n) => (
            <li
              key={n.slug}
              className="border-t border-[var(--line)] pt-6 first:border-t-0 first:pt-0"
            >
              <Link
                href={`/${locale}/khadija/notes/${n.slug}`}
                className="block group"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-faded)] mb-2">
                  {new Date(n.datePublished).toISOString().slice(0, 10)}
                  {n.tags.length > 0 && (
                    <> · {n.tags.slice(0, 2).join(" · ")}</>
                  )}
                </p>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontSize: "1.6rem",
                    color: "var(--ink)",
                    lineHeight: 1.15,
                  }}
                >
                  {n.title}
                </h2>
                <p className="text-[var(--ink-dim)] leading-relaxed">
                  {n.description}
                </p>
                <span className="inline-block mt-3 text-sm text-[var(--wm-red)] group-hover:underline">
                  {isAr ? "اقرأ ←" : "Read →"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
