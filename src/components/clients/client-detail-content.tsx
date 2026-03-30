"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTABanner } from "@/components/home/cta-banner";
import type { Client } from "@/data/clients";

export function ClientDetailContent({ client }: { client: Client }) {
  const t = useTranslations("clients");
  const locale = useLocale();

  const desc = locale === "ar" ? client.descAr : locale === "he" ? client.descHe : client.descEn;
  const loc = locale === "ar" ? client.locationAr : client.location;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 paper-texture">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Link
            href={`/${locale}/clients`}
            className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("backToClients")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Color bar */}
            <div className="h-2 rounded-full w-24 mb-8" style={{ backgroundColor: client.color }} />

            <h1 className="font-serif text-5xl md:text-6xl text-[var(--ink)] mb-3">
              {client.nameEn}
            </h1>
            <p className="font-arabic text-3xl text-[var(--accent)] mb-2" dir="rtl">
              {client.nameAr}
            </p>
            {client.taglineAr && (
              <p className="font-arabic text-lg text-[var(--text-muted)] italic mb-8" dir="rtl">
                {client.taglineAr}
              </p>
            )}

            <p className="text-[var(--stone-gray)] text-lg leading-relaxed max-w-2xl">
              {desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-[var(--limestone)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact info */}
            <ScrollReveal>
              <GlassPanel className="h-full">
                <h3 className="font-space text-[var(--accent)] text-sm font-semibold uppercase tracking-wider mb-6">
                  {t("contactInfo")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[var(--accent)]" />
                    <span className="text-[var(--stone-gray)]">{loc}</span>
                  </div>

                  {client.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-[var(--accent)]" />
                      <a href={`tel:${client.phone.replace(/\s/g, "")}`} className="text-[var(--stone-gray)] hover:text-[var(--ink)] transition-colors">
                        {client.phone}
                      </a>
                    </div>
                  )}

                  {client.whatsapp && (
                    <a
                      href={client.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  )}
                </div>
              </GlassPanel>
            </ScrollReveal>

            {/* Social media */}
            <ScrollReveal delay={0.15}>
              <GlassPanel className="h-full">
                <h3 className="font-space text-[var(--accent)] text-sm font-semibold uppercase tracking-wider mb-6">
                  {t("socialMedia")}
                </h3>
                <div className="space-y-4">
                  {client.facebook && (
                    <a
                      href={client.facebook}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center gap-3 text-[var(--stone-gray)] hover:text-[var(--ink)] transition-colors"
                    >
                      <Facebook size={18} className="text-[var(--accent)]" />
                      <span>Facebook</span>
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  )}

                  {client.instagram && (
                    <a
                      href={client.instagram}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center gap-3 text-[var(--stone-gray)] hover:text-[var(--ink)] transition-colors"
                    >
                      <Instagram size={18} className="text-[var(--accent)]" />
                      <span>Instagram</span>
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  )}

                  {client.tiktok && (
                    <a
                      href={client.tiktok}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center gap-3 text-[var(--stone-gray)] hover:text-[var(--ink)] transition-colors"
                    >
                      <ExternalLink size={18} className="text-[var(--accent)]" />
                      <span>TikTok</span>
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  )}

                  {!client.facebook && !client.instagram && !client.tiktok && (
                    <p className="text-[var(--text-muted)] text-sm italic">
                      {t("comingSoon")}
                    </p>
                  )}
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>

          {/* Services we provided */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <GlassPanel>
                <h3 className="font-space text-[var(--accent)] text-sm font-semibold uppercase tracking-wider mb-6">
                  {t("servicesProvided")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {client.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 rounded-full text-sm font-space bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--border)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
