"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { ArticleCover } from "@/components/shared/article-cover";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTABanner } from "@/components/home/cta-banner";
import { articles as allArticles, COLLECTIONS, type Article } from "@/data/insights/articles";

export function ArticleContent({ article }: { article: Article }) {
  const t = useTranslations("insights");
  const locale = useLocale();
  const col = COLLECTIONS.find((c) => c.id === article.collection);

  return (
    <>
      {/* Article header */}
      <section className="pt-28 pb-12 paper-texture relative">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("backToInsights")}
          </Link>

          <ScrollReveal>
            {/* Collection badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: col?.color }} />
              <span className="font-space text-xs uppercase tracking-wider" style={{ color: col?.color }}>
                {t(`collections.${article.collection}`)}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-[var(--ink)] leading-tight mb-6">
              {t(`articles.${article.titleKey}`)}
            </h1>

            <p className="text-[var(--stone-gray)] text-lg leading-relaxed mb-8">
              {t(`articles.${article.descKey}`)}
            </p>

            {/* Meta bar */}
            <div className="flex items-center gap-6 pb-8 border-b border-[var(--border)]">
              <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] font-space">
                <Clock size={14} />
                {article.readingTime} {t("minRead")}
              </span>
              <span className="text-sm text-[var(--text-muted)] font-space">
                {article.publishedAt}
              </span>
              <button
                onClick={() => navigator.share?.({ url: window.location.href, title: t(`articles.${article.titleKey}`) })}
                className="ms-auto flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Share2 size={14} />
                {t("share")}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <ArticleCover
            title={t(`articles.\${article.titleKey}`)}
            collection={t(`collections.\${article.collection}`)}
            color={col?.color || "#4A7C8A"}
          />
        </div>
      </section>

      {/* Article body */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-[var(--ink)] leading-relaxed space-y-6">
              {t(`articles.${article.bodyKey}`).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[var(--stone-gray)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related articles — internal linking for SEO */}
      <section className="py-16 bg-[var(--limestone)]">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="font-space text-[var(--accent)] text-sm font-semibold uppercase tracking-wider mb-6">
            {t("label")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allArticles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/${locale}/insights/${related.slug}`}
                  className="group block"
                >
                  <div className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                    <h4 className="font-serif text-base text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {t(`articles.${related.titleKey}`)}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)] font-space mt-2 block">
                      {related.readingTime} {t("minRead")}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
