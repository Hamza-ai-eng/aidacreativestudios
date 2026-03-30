"use client";

import { Palette, Instagram, Camera } from "lucide-react";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoldButton } from "@/components/shared/gold-button";

export function ServicesPreview() {
  const t = useTranslations("services");

  const highlights = [
    { icon: Palette, title: t("brandIdentity"), description: t("brandIdentityDesc"), accent: "terracotta" as const },
    { icon: Instagram, title: t("socialMedia"), description: t("socialMediaDesc"), accent: "blue" as const },
    { icon: Camera, title: t("foodPhoto"), description: t("foodPhotoDesc"), accent: "terracotta" as const },
  ];

  return (
    <section className="relative py-32 gradient-sand">
      {/* Dot grid subtle texture */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading label={t("label")} title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <GlassPanel
                hover
                accent={item.accent}
                className={`h-full ${i === 1 ? "md:-translate-y-4" : ""}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--terracotta-dim)] flex items-center justify-center mb-6">
                  <item.icon size={26} className="text-[var(--terracotta)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--ink)] mb-3 terracotta-underline inline-block">
                  {item.title}
                </h3>
                <p className="text-[var(--stone-gray)] text-sm leading-relaxed mt-5">
                  {item.description}
                </p>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-14">
          <GoldButton href="/services" variant="outline">
            {t("allServices")}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
