"use client";

import { Instagram, Facebook, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const clients = [
  {
    nameEn: "Golden Line Mobile",
    nameAr: "جولدن لاين موبايل",
    descEn: "Premium phone accessories & smartphones — wholesale and retail with delivery across East Jerusalem.",
    descAr: "إكسسوارات وموبايلات فخمة — جملة ومفرق مع توصيل عبر القدس الشرقية.",
    location: "Shu\'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "https://wa.me/972502226559",
    facebook: "https://www.facebook.com/golden.line.mobile.1",
    instagram: "",
    color: "#C5A059",
  },
  {
    nameEn: "Al-Day\'a Shu\'afat",
    nameAr: "الضيعة شعفاط",
    descEn: "Authentic Arabic cuisine — shawarma, grills, and family meals with delivery across Shu\'fat and nearby neighborhoods.",
    descAr: "أكل عربي أصيل — شاورما، مشاوي، ووجبات عائلية مع توصيل بشعفاط والأحياء المجاورة.",
    location: "Shu\'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "",
    facebook: "",
    instagram: "",
    color: "#5B7553",
  },
];

export function OurClients() {
  const t = useTranslations("clients");

  return (
    <section className="py-32 bg-[var(--limestone)]">
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
            <ScrollReveal key={client.nameEn} delay={i * 0.15}>
              <GlassPanel hover className="h-full">
                {/* Color accent bar */}
                <div
                  className="h-1.5 rounded-full mb-6 w-16"
                  style={{ backgroundColor: client.color }}
                />

                {/* Name */}
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-1">
                  {client.nameEn}
                </h3>
                <p className="font-arabic text-lg text-[var(--accent)] mb-4" dir="rtl">
                  {client.nameAr}
                </p>

                {/* Description */}
                <p className="text-[var(--stone-gray)] text-sm leading-relaxed mb-6">
                  {client.descEn}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                  <MapPin size={14} />
                  <span>{client.location}</span>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                  {client.facebook && (
                    <a
                      href={client.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {client.instagram && (
                    <a
                      href={client.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {client.whatsapp && (
                    <a
                      href={client.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </a>
                  )}
                </div>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
