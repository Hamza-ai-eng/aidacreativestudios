import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { GoldButton } from "@/components/shared/gold-button";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "تصميم هوية بصرية القدس الشرقية | Brand Identity Design East Jerusalem",
  description: "أفضل وكالة تصميم هوية بصرية في القدس الشرقية. شعارات، ألوان، خطوط، ودليل براند كامل للمشاريع الفلسطينية. AIDA Creative Studios — الوكالة الإبداعية الوحيدة بثلاث لغات.",
};

export default async function BrandingSeoPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Services", href: "/services" }, { label: "Brand Identity Design" }]} />
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--ink)] mb-6 leading-tight">
            Brand Identity Design for Palestinian Businesses in East Jerusalem
          </h1>
          <p className="font-arabic text-2xl text-[var(--accent)] mb-8" dir="rtl">
            تصميم هوية بصرية للمشاريع الفلسطينية في القدس الشرقية
          </p>
          <div className="prose max-w-none text-[var(--stone-gray)] leading-relaxed space-y-4">
            <p>Your brand is the first thing customers see — before they walk through your door, before they read your menu, before they pick up the phone. In East Jerusalem, where 39% of Palestinian businesses have no online presence, a strong visual identity isn't just nice to have. It's the difference between being found and being forgotten.</p>
            <p>AIDA Creative Studios builds complete brand identity systems for Palestinian businesses in Shu'fat, the Old City, and across East Jerusalem. We don't just design logos — we create visual systems that work across every touchpoint: your storefront sign, your Instagram posts, your WhatsApp catalog, your restaurant menu, and your business cards.</p>
            <p dir="rtl" className="font-arabic text-lg">إحنا بنبني أنظمة هوية بصرية كاملة — شعارات بعدة إصدارات، ألوان بأكواد دقيقة، خطوط عربية وإنجليزية، ودليل براند بيخلي كل إشي متناسق. من شعفاط للبلدة القديمة، بنخدم المشاريع الفلسطينية إلي بدها تبين باحترافية.</p>
            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">What's Included in Our Brand Identity Package</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Logo design with 3+ variants (full, icon, horizontal)</li>
              <li>Arabic and English typography system</li>
              <li>Color palette with exact HEX, RGB, and CMYK codes</li>
              <li>Brand guidelines document</li>
              <li>Social media profile templates</li>
              <li>Business card design</li>
              <li>Signage mockup</li>
            </ul>
            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Why Choose AIDA</h2>
            <p>We are the only trilingual creative agency in East Jerusalem. We work in Arabic, English, and Hebrew — meaning your brand works across every market. Our Palestinian dialect expertise means your brand voice sounds authentic, not corporate.</p>
          </div>
          <div className="mt-12">
            <GoldButton href="/contact" variant="terracotta" size="lg">
              Get Your Brand Identity Quote
            </GoldButton>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
