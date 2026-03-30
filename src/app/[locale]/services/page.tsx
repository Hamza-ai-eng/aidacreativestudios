import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
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
          <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Services" }]} />
          <SectionHeading label={t("label")} title={t("pageTitle")} subtitle={t("pageSubtitle")} />
          <ServicesGrid />
        </div>
      </section>

      <CTABanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does branding cost in East Jerusalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand identity packages for Palestinian businesses in East Jerusalem typically range from entry-level logo design to complete brand systems. AIDA Creative Studios offers full brand identity including logo variants, color palette, typography, and guidelines. Contact us for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create content in Arabic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All our social media content, captions, and brand copy is written in authentic Palestinian Jerusalemite dialect — not formal MSA or Gulf Arabic. We also work in English and Hebrew."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage our Google Business Profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We set up and optimize Google Business Profiles for Palestinian businesses in East Jerusalem — including photos, hours, categories, posts, and review strategy — so customers find you on Google Maps before your competitors."
          }
        },
        {
          "@type": "Question",
          "name": "What social media platforms do you manage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manage Instagram, Facebook, and TikTok accounts with content creation, scheduling, and engagement — all in authentic Palestinian dialect that drives real customers through your door."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Restaurant branding is one of our specialties. We design print-ready Arabic menus with RTL support, food photography, and social media content. Our menu designs are strategically built to maximize average order value."
          }
        }
      ]
    }) }}
      />
    </>
  );
}
