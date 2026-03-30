"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { WavyDivider } from "@/components/shared/wavy-divider";
import { CTABanner } from "@/components/home/cta-banner";

interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  process: { step: string; description: string }[];
  palette: { name: string; hex: string }[];
  logoVariants?: string[];
  themes?: { name: string; nameAr: string; color: string }[];
}

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  const t = useTranslations("work");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 paper-texture">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm hover:text-[var(--terracotta)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("backToWork")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-space text-[var(--terracotta)] text-sm font-semibold uppercase tracking-[0.2em]">
              {study.category}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--ink)] mt-3 mb-4">
              {study.title}
            </h1>
            <p className="font-arabic text-2xl text-[var(--text-muted)] mb-6" dir="rtl">
              {study.taglineAr}
            </p>
            <p className="text-[var(--stone-gray)] text-lg max-w-3xl leading-relaxed">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[var(--limestone)]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 0.1}>
                <GlassPanel className="text-center bg-[var(--sand)]">
                  <div className="text-3xl font-serif text-gold-gradient mb-1">{r.value}</div>
                  <div className="font-space text-xs text-[var(--stone-gray)] uppercase tracking-wider">{r.label}</div>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h3 className="font-space text-[var(--terracotta)] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              {t("theChallenge")}
            </h3>
            <p className="text-[var(--stone-gray)] leading-relaxed">{study.challenge}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="font-space text-[var(--terracotta)] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              {t("ourSolution")}
            </h3>
            <p className="text-[var(--stone-gray)] leading-relaxed">{study.solution}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <WavyDivider toColor="var(--olive-dark)" />
      <section className="section-dark py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h3 className="font-space text-[var(--terracotta-light)] font-semibold text-sm uppercase tracking-[0.2em] mb-12 text-center">
              {t("process")}
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full">
                  <div className="text-[var(--terracotta-light)] font-serif text-3xl mb-3 opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-semibold text-[var(--sand)] mb-2">{p.step}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WavyDivider flip fromColor="var(--olive-dark)" toColor="var(--sand)" />

      {/* Color Palette */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h3 className="font-space text-[var(--terracotta)] font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-center">
              {t("colorPalette")}
            </h3>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {study.palette.map((color, i) => (
              <ScrollReveal key={color.hex} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-xl shadow-lg border border-[var(--border)]" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-[var(--stone-gray)]">{color.name}</span>
                  <span className="text-xs text-[var(--text-muted)] font-mono">{color.hex}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Variants / Menu Themes */}
      {study.logoVariants && (
        <section className="py-24 bg-[var(--limestone)]">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <h3 className="font-space text-[var(--terracotta)] font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-center">
                {t("logoVariants")}
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {study.logoVariants.map((variant, i) => (
                <ScrollReveal key={variant} delay={i * 0.08}>
                  <GlassPanel className="text-center py-8 bg-[var(--sand)]">
                    <div className="w-16 h-16 rounded-xl bg-[var(--terracotta-dim)] flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-2xl text-[var(--terracotta)]">G</span>
                    </div>
                    <span className="font-space text-sm text-[var(--stone-gray)]">{variant}</span>
                  </GlassPanel>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {study.themes && (
        <section className="py-24 bg-[var(--limestone)]">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <h3 className="font-space text-[var(--terracotta)] font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-center">
                {t("menuThemes")}
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {study.themes.map((theme, i) => (
                <ScrollReveal key={theme.name} delay={i * 0.08}>
                  <GlassPanel className="text-center py-8 bg-[var(--sand)]">
                    <div className="w-16 h-16 rounded-xl mx-auto mb-3 border border-[var(--border)]" style={{ backgroundColor: theme.color }} />
                    <span className="text-sm text-[var(--ink)] block">{theme.name}</span>
                    <span className="text-sm text-[var(--text-muted)] font-arabic" dir="rtl">{theme.nameAr}</span>
                  </GlassPanel>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
