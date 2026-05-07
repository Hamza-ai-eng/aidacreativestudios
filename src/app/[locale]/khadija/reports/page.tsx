import type { Metadata } from "next";
import Link from "next/link";
import { reports } from "#site/content";
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
    title: isAr ? "تقارير · Reports" : "Reports · تقارير",
    description: isAr
      ? "تقارير المناصرة من معهد عايدة — أبحاث طويلة في الذكاء الاصطناعي وحقوق الفلسطينيين الرقمية."
      : "Advocacy reports from AIDA — long-form research on AI and Palestinian digital rights.",
    alternates: localeAlternates(locale, "/khadija/reports"),
  };
}

export default async function ReportsIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const items = reports
    .filter((r) => r.lang === (isAr ? "ar" : "en") && r.status === "published")
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
        {isAr ? "تقارير" : "Reports"}
      </h1>
      <p className="text-[var(--ink-dim)] mb-12 max-w-prose">
        {isAr
          ? "تقارير المناصرة الكاملة — أبحاث طويلة بصيغة PDF + ملخّص تنفيذي على الموقع."
          : "Full advocacy reports — long-form research as PDF + an HTML executive summary."}
      </p>
      {items.length === 0 ? (
        <p className="text-[var(--ink-faded)] italic">
          {isAr ? "ما طلع تقرير لسّا." : "No reports yet."}
        </p>
      ) : (
        <ul className="space-y-12">
          {items.map((r) => (
            <li key={r.slug} className="border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0">
              <Link href={`/${locale}/khadija/reports/${r.slug}`} className="block group">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--wm-red)] mb-2">
                  {isAr ? `تقرير ${String(r.reportNumber).padStart(2, "0")}` : `Report ${String(r.reportNumber).padStart(2, "0")}`} · {new Date(r.datePublished).getFullYear()}
                </p>
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontSize: "2rem",
                    color: "var(--ink)",
                    lineHeight: 1.1,
                  }}
                >
                  {r.title}
                </h2>
                <p className="text-[var(--ink-dim)] leading-relaxed">{r.description}</p>
                {r.headlineStat && (
                  <p className="mt-4 text-sm">
                    <span className="font-mono text-[var(--wm-red)]">{r.headlineStat.value}</span>
                    <span className="text-[var(--ink-faded)] ms-2">{r.headlineStat.label}</span>
                  </p>
                )}
                <span className="inline-block mt-4 text-sm text-[var(--wm-red)] group-hover:underline">
                  {isAr ? "اقرأ التقرير ←" : "Read the report →"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
