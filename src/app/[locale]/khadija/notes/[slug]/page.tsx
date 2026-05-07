import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { notes } from "#site/content";
import { localeAlternates, absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  return notes
    .filter((n) => n.status === "published")
    .map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const note = notes.find(
    (n) => n.slug === slug && n.lang === (isAr ? "ar" : "en")
  );
  if (!note) return {};
  return {
    title: note.title,
    description: note.description,
    alternates: localeAlternates(locale, `/khadija/notes/${slug}`),
    openGraph: {
      type: "article",
      publishedTime: note.datePublished,
      authors: [note.author],
      tags: note.tags,
    },
  };
}

export default async function NoteDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const note = notes.find(
    (n) => n.slug === slug && n.lang === (isAr ? "ar" : "en")
  );
  if (!note || note.status !== "published") notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: note.datePublished,
    dateModified: note.dateModified ?? note.datePublished,
    inLanguage: note.lang,
    author: { "@type": "Person", name: note.author },
    publisher: {
      "@type": "Organization",
      name: "AIDA Creative Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://aidacreativestudios.com/og-image.png",
      },
    },
    mainEntityOfPage: absoluteUrl(locale, `/khadija/notes/${slug}`),
    keywords: note.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main
        className="pt-32 pb-24 mx-auto max-w-3xl px-6"
        dir={isAr ? "rtl" : "ltr"}
        data-pagefind-body
        data-pagefind-meta={`lang:${note.lang}`}
      >
        <Link
          href={`/${locale}/khadija/notes`}
          className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)] hover:text-[var(--wm-red)]"
        >
          {isAr ? "← كل الملاحظات" : "← All notes"}
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[var(--ink-faded)]">
          {new Date(note.datePublished).toISOString().slice(0, 10)}
          {note.tags.length > 0 && <> · {note.tags.join(" · ")}</>}
        </p>
        <h1
          className="mt-3 mb-8 leading-[1.05]"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            color: "var(--ink)",
          }}
        >
          {note.title}
        </h1>
        <article
          className="prose prose-lg max-w-none text-[var(--ink)]"
          style={{
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            lineHeight: 1.7,
          }}
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </main>
    </>
  );
}
