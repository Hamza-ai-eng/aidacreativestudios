import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { reports } from "#site/content";
import { localeAlternates, absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  return reports
    .filter((r) => r.status === "published")
    .map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const r = reports.find(
    (x) => x.slug === slug && x.lang === (isAr ? "ar" : "en")
  );
  if (!r) return {};
  return {
    title: r.title,
    description: r.description,
    alternates: localeAlternates(locale, `/khadija/reports/${slug}`),
    openGraph: {
      type: "article",
      publishedTime: r.datePublished,
      authors: [r.author],
    },
  };
}

export default async function ReportDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const r = reports.find(
    (x) => x.slug === slug && x.lang === (isAr ? "ar" : "en")
  );
  if (!r || r.status !== "published") notFound();

  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: r.title,
    description: r.description,
    datePublished: r.datePublished,
    dateModified: r.dateModified ?? r.datePublished,
    inLanguage: r.lang,
    author: { "@type": "Organization", name: "AIDA Creative Studios" },
    publisher: {
      "@type": "Organization",
      name: "AIDA Creative Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://aidacreativestudios.com/og-image.png",
      },
    },
    mainEntityOfPage: absoluteUrl(locale, `/khadija/reports/${slug}`),
    keywords: r.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <main
        className="pt-32 pb-24 mx-auto max-w-3xl px-6"
        dir={isAr ? "rtl" : "ltr"}
        data-pagefind-body
        data-pagefind-meta={`lang:${r.lang}`}
      >
        <Link
          href={`/${locale}/khadija/reports`}
          className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)] hover:text-[var(--wm-red)]"
        >
          {isAr ? "← كل التقارير" : "← All reports"}
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[var(--wm-red)]">
          {isAr ? `تقرير ${String(r.reportNumber).padStart(2, "0")}` : `Report ${String(r.reportNumber).padStart(2, "0")}`} · {new Date(r.datePublished).getFullYear()}
        </p>
        <h1
          className="mt-3 mb-6 leading-[1.05]"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "clamp(2rem, 5.5vw, 4rem)",
            color: "var(--ink)",
          }}
        >
          {r.title}
        </h1>
        <p className="text-[var(--ink-dim)] mb-8 max-w-prose text-lg leading-relaxed">
          {r.description}
        </p>
        {r.pdfUrl && (
          <a
            href={r.pdfUrl}
            className="inline-block mb-12 px-6 py-3 bg-[var(--ink)] text-[var(--ground)] text-sm tracking-wider uppercase hover:bg-[var(--wm-red)] transition"
          >
            {isAr ? "حمّل التقرير الكامل (PDF)" : "Download the full report (PDF)"}
          </a>
        )}
        {r.executiveSummary && (
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                fontSize: "1.5rem",
                color: "var(--ink)",
              }}
            >
              {isAr ? "ملخّص تنفيذي" : "Executive summary"}
            </h2>
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: r.executiveSummary }}
            />
          </section>
        )}
        <article
          className="prose prose-lg max-w-none text-[var(--ink)]"
          style={{
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            lineHeight: 1.7,
          }}
          dangerouslySetInnerHTML={{ __html: r.content }}
        />
      </main>
    </>
  );
}
