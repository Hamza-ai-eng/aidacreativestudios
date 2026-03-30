"use client";

import { Sparkles, Heart, Cpu, Ear, Search, PenTool, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WavyDivider } from "@/components/shared/wavy-divider";

export function AboutContent() {
  const t = useTranslations("about");

  const values = [
    { icon: Sparkles, title: t("studioGrade"), description: t("studioGradeDesc") },
    { icon: Cpu, title: t("aiPowered"), description: t("aiPoweredDesc") },
    { icon: Heart, title: t("localHeart"), description: t("localHeartDesc") },
  ];

  const approach = [
    { icon: Ear, step: "01", title: t("approachListen"), description: t("approachListenDesc") },
    { icon: Search, step: "02", title: t("approachStudy"), description: t("approachStudyDesc") },
    { icon: PenTool, step: "03", title: t("approachCreate"), description: t("approachCreateDesc") },
    { icon: Rocket, step: "04", title: t("approachLaunch"), description: t("approachLaunchDesc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 paper-texture relative">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <SectionHeading label={t("label")} title={t("title")} subtitle={t("subtitle")} />
          </ScrollReveal>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-[var(--limestone)]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <GlassPanel className="aspect-square flex items-center justify-center bg-[var(--sand)]">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--terracotta-dim)] flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-4xl text-[var(--terracotta)]">H</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--ink)]">{t("founderName")}</h3>
                  <p className="text-[var(--terracotta)] font-space text-sm mt-1">{t("founderRole")}</p>
                </div>
              </GlassPanel>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="font-serif text-3xl text-[var(--ink)] mb-6">
                {t("founderQuote")}
              </h3>
              <div className="space-y-4 text-[var(--stone-gray)] leading-relaxed">
                <p>{t("story1")}</p>
                <p>{t("story2")}</p>
                <p>{t("story3")}</p>
                <p className="font-semibold text-[var(--ink)]">{t("story4")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionHeading
              label={t("approachLabel")}
              title={t("approachTitle")}
              subtitle={t("approachSubtitle")}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a, i) => (
              <ScrollReveal key={a.step} delay={i * 0.12}>
                <div className="relative h-full">
                  {/* Step number */}
                  <span className="font-space text-[var(--terracotta)] text-xs font-bold tracking-wider opacity-60 mb-3 block">
                    {a.step}
                  </span>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-dim)] flex items-center justify-center mb-4">
                    <a.icon size={22} className="text-[var(--blue)]" />
                  </div>
                  {/* Content */}
                  <h3 className="font-serif text-lg text-[var(--ink)] mb-2">{a.title}</h3>
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed">{a.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--limestone)]">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionHeading label={t("philosophyLabel")} title={t("philosophyTitle")} subtitle={t("philosophySubtitle")} />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.15}>
                <GlassPanel hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-[var(--terracotta-dim)] flex items-center justify-center mx-auto mb-5">
                    <v.icon size={28} className="text-[var(--terracotta)]" />
                  </div>
                  <h3 className="font-serif text-xl text-[var(--ink)] mb-3">{v.title}</h3>
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed">{v.description}</p>
                </GlassPanel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <WavyDivider toColor="var(--olive-dark)" />
      <section className="section-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="font-serif text-3xl md:text-4xl text-[var(--terracotta-light)] leading-relaxed">
              &ldquo;{t("quoteAr")}&rdquo;
            </p>
            {/* بطيخ — for those who see */}
            <div className="flex justify-center gap-2 mt-6" aria-hidden="true" title="🍉">
              <span className="w-[8px] h-[4px] rounded-t-full bg-[#5B7553] opacity-35" />
              <span className="w-[8px] h-[4px] rounded-t-full bg-[#CE2C30] opacity-30" />
              <span className="w-[8px] h-[4px] rounded-t-full bg-[#2A3328] opacity-25" />
              <span className="w-[3px] h-[4px] bg-[#2A3328] opacity-15 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <WavyDivider flip fromColor="var(--olive-dark)" toColor="var(--sand)" />
    </>
  );
}
