"use client";

import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { clients } from "@/data/clients";

export function ClientsContent() {
  const t = useTranslations("clients");
  const locale = useLocale();

  return (
    <section className="pt-32 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <ScrollReveal key={client.slug} delay={i * 0.15}>
              <Link href={`/${locale}/clients/${client.slug}`} className="group block h-full">
                <GlassPanel hover className="h-full relative overflow-hidden">
                  {/* Color accent bar */}
                  <div
                    className="h-1.5 rounded-full mb-6 w-16"
                    style={{ backgroundColor: client.color }}
                  />

                  {/* Name */}
                  <h3 className="font-serif text-2xl text-[var(--ink)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {client.nameEn}
                  </h3>
                  <p className="font-arabic text-lg text-[var(--accent)] mb-4" dir="rtl">
                    {client.nameAr}
                  </p>

                  {/* Description */}
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed mb-6">
                    {locale === "ar" ? client.descAr : locale === "he" ? client.descHe : client.descEn}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                    <MapPin size={14} />
                    <span>{locale === "ar" ? client.locationAr : client.location}</span>
                  </div>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 rounded-full text-xs font-space bg-[var(--accent-dim)] text-[var(--accent)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 end-6 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                    <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-white transition-colors" />
                  </div>
                </GlassPanel>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
