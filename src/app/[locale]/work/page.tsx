import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeaturedWork } from "@/components/home/featured-work";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Portfolio — Brand Identity & Restaurant Menu Design Case Studies",
  description:
    "See how AIDA transforms Palestinian businesses with world-class brand design, social media strategy, and restaurant menu design. Real case studies from East Jerusalem.",
};

export default async function WorkPage() {
  const t = await getTranslations("work");

  return (
    <>
      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading label={t("label")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />
        </div>
      </section>
      <FeaturedWork />
      <CTABanner />
    </>
  );
}
