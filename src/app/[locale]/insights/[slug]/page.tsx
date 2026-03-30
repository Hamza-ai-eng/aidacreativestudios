import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { articles } from "@/data/insights/articles";
import { ArticleContent } from "@/components/insights/article-content";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const t = await getTranslations({ locale, namespace: "insights" });

  return {
    title: t(`articles.${article.titleKey}`),
    description: t(`articles.${article.descKey}`),
    alternates: {
      canonical: `https://aidacreativestudios.com/${locale}/insights/${slug}`,
      languages: {
        en: `https://aidacreativestudios.com/en/insights/${slug}`,
        ar: `https://aidacreativestudios.com/ar/insights/${slug}`,
        he: `https://aidacreativestudios.com/he/insights/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "insights" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t(`articles.${article.titleKey}`),
    description: t(`articles.${article.descKey}`),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: "Hamzah Barhameyeh",
      jobTitle: "Founder & Creative Director",
    },
    publisher: {
      "@type": "Organization",
      name: "AIDA Creative Studios",
      url: "https://aidacreativestudios.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aidacreativestudios.com/${locale}/insights/${slug}`,
    },
    inLanguage: locale,
    wordCount: t(`articles.${article.bodyKey}`).split(/\s+/).length,
    articleSection: article.collection,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent article={article} />
    </>
  );
}
