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
  { key: "brandIdentity", icon: "Palette" },
  { key: "socialMedia", icon: "Instagram" },
  { key: "foodPhoto", icon: "Camera" },
  { key: "googleBusiness", icon: "MapPin" },
  { key: "whatsappBusiness", icon: "MessageCircle" },
  { key: "menuDesign", icon: "UtensilsCrossed" },
  { key: "shortVideo", icon: "Film" },
  { key: "paidAds", icon: "Megaphone" },
  { key: "websites", icon: "Globe" },
  { key: "campaignStrategy", icon: "Calendar" },
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
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] flex items-center justify-center mb-5">
                {Icon && <Icon size={24} className="text-[var(--accent)]" />}
              </div>
              <h3 className="font-serif text-xl text-[var(--ink)] mb-1">
                {t(service.key)}
              </h3>
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
