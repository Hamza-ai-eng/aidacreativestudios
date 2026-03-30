"use client";

import {
  Palette,
  Instagram,
  UtensilsCrossed,
  Camera,
  MapPin,
  MessageCircle,
  Film,
  Megaphone,
  Globe,
  Calendar,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette, Instagram, UtensilsCrossed, Camera, MapPin, MessageCircle, Film, Megaphone, Globe, Calendar,
};

const SERVICE_KEYS = [
  { key: "brandIdentity", icon: "Palette", price: "3,000 – 5,000 ₪" },
  { key: "socialMedia", icon: "Instagram", price: "1,500 – 2,500 ₪/mo" },
  { key: "foodPhoto", icon: "Camera", price: "800 – 2,000 ₪" },
  { key: "googleBusiness", icon: "MapPin", price: "500 – 1,000 ₪" },
  { key: "whatsappBusiness", icon: "MessageCircle", price: "300 – 600 ₪" },
  { key: "menuDesign", icon: "UtensilsCrossed", price: "1,500 – 2,500 ₪" },
  { key: "shortVideo", icon: "Film", price: "500 – 1,500 ₪" },
  { key: "paidAds", icon: "Megaphone", price: "1,000 – 3,000 ₪/mo" },
  { key: "websites", icon: "Globe", price: "3,000 – 8,000 ₪" },
  { key: "campaignStrategy", icon: "Calendar", price: "2,000 – 5,000 ₪" },
] as const;

export function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICE_KEYS.map((service, i) => {
        const Icon = iconMap[service.icon];
        return (
          <ScrollReveal key={service.key} delay={i * 0.08}>
            <GlassPanel hover className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--terracotta-dim)] flex items-center justify-center mb-5">
                {Icon && <Icon size={24} className="text-[var(--terracotta)]" />}
              </div>
              <h3 className="font-serif text-xl text-[var(--ink)] mb-1">
                {t(service.key)}
              </h3>
              <span className="text-[var(--terracotta)] font-space text-sm font-semibold mb-3">
                {service.price}
              </span>
              <p className="text-[var(--stone-gray)] text-sm leading-relaxed flex-1">
                {t(`${service.key}Desc`)}
              </p>
            </GlassPanel>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
