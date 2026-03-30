"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GoldButton } from "@/components/shared/gold-button";
import { SITE } from "@/lib/constants";

export function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 overflow-hidden bg-[var(--limestone)] paper-texture">
      {/* Decorative */}
      <div className="absolute top-10 start-10 w-32 h-32 border-2 border-[var(--blue)]/10 rounded-full" />
      <div className="absolute bottom-10 end-10 w-20 h-20 border-2 border-[var(--accent)]/10 rotate-45" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--ink)] mb-6">
            {t("title", { accent: "" })}
            <span className="text-accent-gradient"> {t("accent")} </span>
          </h2>
          <p className="text-[var(--stone-gray)] text-lg mb-10 leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton href={SITE.whatsapp} external variant="terracotta" size="lg">
              <MessageCircle size={20} />
              {t("whatsapp")}
            </GoldButton>
            <GoldButton href="/contact" variant="outline" size="lg">
              {t("contactForm")}
            </GoldButton>
          </div>
          <p className="mt-12 font-space text-sm text-[var(--text-muted)] tracking-wide">
            {t("tagline")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
