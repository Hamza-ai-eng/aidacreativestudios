import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassPanel } from "@/components/shared/glass-panel";
import { GoldButton } from "@/components/shared/gold-button";
import { CTABanner } from "@/components/home/cta-banner";
import { ServicesGrid } from "@/components/services/services-grid";

export const metadata: Metadata = {
  title: "Creative Services — Brand Design, Social Media & Menu Design",
  description:
    "Brand identity design, social media content creation, restaurant menu design, pitch decks, and campaign strategy for Palestinian businesses in East Jerusalem. Transparent pricing in ₪.",
};

export default async function ServicesPage() {
  const t = await getTranslations("services");

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading label={t("label")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />
          <ServicesGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
