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

      <section className="py-24 bg-[var(--limestone)]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading label={t("pricingLabel")} title={t("pricingTitle")} subtitle={t("pricingSubtitle")} />

          <GlassPanel className="overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-4 px-4 text-[var(--terracotta)] font-space text-sm font-semibold">Service</th>
                  <th className="py-4 px-4 text-[var(--terracotta)] font-space text-sm font-semibold text-end">Price Range</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Brand Identity Kit", "3,000 – 5,000 ₪"],
                  ["Social Media Management (monthly)", "1,500 – 2,500 ₪/mo"],
                  ["Food & Product Photography", "800 – 2,000 ₪"],
                  ["Google Business Profile Setup", "500 – 1,000 ₪"],
                  ["WhatsApp Business Setup", "300 – 600 ₪"],
                  ["Menu & Print Design", "1,500 – 2,500 ₪"],
                  ["Short-Form Video (Reels/TikTok)", "500 – 1,500 ₪"],
                  ["Paid Ads Management (monthly)", "1,000 – 3,000 ₪/mo"],
                  ["Website & Landing Pages", "3,000 – 8,000 ₪"],
                  ["Seasonal Campaign Package", "2,000 – 5,000 ₪"],
                ].map(([service, price], i) => (
                  <tr key={service} className={i % 2 === 0 ? "bg-transparent" : "bg-[var(--terracotta-dim)]"}>
                    <td className="py-3.5 px-4 text-[var(--ink)]">{service}</td>
                    <td className="py-3.5 px-4 text-[var(--terracotta)] font-semibold text-end">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassPanel>

          <div className="text-center mt-10">
            <GoldButton href="/contact" variant="terracotta" size="lg">
              {t("getQuote")}
            </GoldButton>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
