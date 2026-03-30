"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const clients = [
  { name: "Golden Line Mobile", nameAr: "جولدن لاين موبايل" },
  { name: "Al-Day'a Shu'afat", nameAr: "الضيعة شعفاط" },
  { name: "AIDA Creative", nameAr: "أيدا كرييتف" },
];

export function ClientLogos() {
  const t = useTranslations("clients");

  return (
    <section className="py-20 border-y border-[var(--border)] overflow-hidden bg-[var(--limestone)]">
      <ScrollReveal>
        <p className="text-center font-space text-[var(--text-muted)] text-sm uppercase tracking-[0.2em] mb-8">
          {t("trusted")}
        </p>
      </ScrollReveal>

      <div className="relative">
        <div className="marquee-track">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0 mx-12 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] font-serif font-bold text-sm">
                {client.name[0]}
              </div>
              <span className="text-[var(--stone-gray)] text-sm whitespace-nowrap font-medium">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
