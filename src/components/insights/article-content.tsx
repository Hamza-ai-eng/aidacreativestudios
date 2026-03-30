"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTABanner } from "@/components/home/cta-banner";
import { COLLECTIONS, type Article } from "@/data/insights/articles";

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

      <CTABanner />
    </>
  );
}
