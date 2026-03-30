"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WavyDivider } from "@/components/shared/wavy-divider";

export function FeaturedWork() {
  const t = useTranslations("work");
  const locale = useLocale();

  const projects = [
    {
      slug: "golden-line-mobile",
      title: t("goldenLine.title"),
      titleAr: "جولدن لاين موبايل",
      category: t("goldenLine.category"),
      description: t("goldenLine.description"),
      gradient: "from-amber-800/30 via-yellow-700/20 to-stone-400/10",
      accent: "#C5A059",
    },
    {
      slug: "al-daya",
      title: t("alDaya.title"),
      titleAr: "الدايعة شعفاط",
      category: t("alDaya.category"),
      description: t("alDaya.description"),
      gradient: "from-green-800/30 via-orange-700/20 to-stone-400/10",
      accent: "#E8751A",
    },
  ];

  return (
    <>
      <WavyDivider toColor="var(--olive-dark)" />
      <section className="section-dark py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeading
              label={t("label")}
              title={t("title")}
              subtitle={t("subtitle")}
              dark
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.2}>
                <Link href={`/${locale}/work/${project.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                  >
                    <div
                      className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <span
                        className="font-arabic text-5xl font-bold opacity-15"
                        dir="rtl"
                        style={{ color: project.accent }}
                      >
                        {project.titleAr}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="font-space text-xs text-[var(--accent-light)] font-semibold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="font-serif text-2xl text-[var(--sand)] mt-1">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                          <ArrowUpRight
                            size={18}
                            className="text-white/50 group-hover:text-white transition-colors"
                          />
                        </div>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WavyDivider flip fromColor="var(--olive-dark)" toColor="var(--sand)" />
    </>
  );
}
