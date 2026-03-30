"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Palette, Instagram, Cpu, MapPin, Calendar, Layers, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassPanel } from "@/components/shared/glass-panel";
import { articles, COLLECTIONS } from "@/data/insights/articles";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette, Instagram, Cpu, MapPin, Calendar, Layers,
};

export function InsightsContent() {
  const t = useTranslations("insights");
  const locale = useLocale();

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>
      </section>

      {/* Collection tags */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {COLLECTIONS.map((col) => {
              const Icon = iconMap[col.icon];
              return (
                <span
                  key={col.id}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm font-space"
                  style={{ color: col.color }}
                >
                  {Icon && <Icon size={14} />}
                  {t(`collections.${col.id}`)}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              const col = COLLECTIONS.find((c) => c.id === article.collection);
              return (
                <ScrollReveal key={article.slug} delay={i * 0.08}>
                  <Link href={`/${locale}/insights/${article.slug}`} className="group block h-full">
                    <GlassPanel hover className="h-full flex flex-col">
                      {/* Collection badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: col?.color }}
                        />
                        <span className="font-space text-xs uppercase tracking-wider" style={{ color: col?.color }}>
                          {t(`collections.${article.collection}`)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl text-[var(--ink)] mb-3 group-hover:text-[var(--terracotta)] transition-colors leading-snug">
                        {t(`articles.${article.titleKey}`)}
                      </h3>

                      {/* Description */}
                      <p className="text-[var(--stone-gray)] text-sm leading-relaxed flex-1 mb-4">
                        {t(`articles.${article.descKey}`)}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] font-space">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readingTime} {t("minRead")}
                        </span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </GlassPanel>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
