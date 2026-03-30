import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { GoldButton } from "@/components/shared/gold-button";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "تصميم منيو مطعم عربي القدس | Arabic Restaurant Menu Design Jerusalem",
  description: "تصميم منيو مطعم عربي احترافي في القدس. دعم RTL كامل، طباعة A3 جاهزة، تصوير أكل، وتوزيع استراتيجي للأصناف يرفع متوسط الفاتورة. AIDA Creative Studios.",
};

export default async function MenuDesignSeoPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Services", href: "/services" }, { label: "Menu Design" }]} />
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--ink)] mb-6 leading-tight">
            Arabic Restaurant Menu Design in Jerusalem
          </h1>
          <p className="font-arabic text-2xl text-[var(--accent)] mb-8" dir="rtl">
            تصميم منيو مطعم عربي احترافي في القدس
          </p>
          <div className="prose max-w-none text-[var(--stone-gray)] leading-relaxed space-y-4">
            <p>Your menu is your most powerful sales tool. It's the one piece of marketing that 100% of your customers read, every single visit. A badly designed menu with tiny fonts, no photos, and random item placement leaves money on the table. A strategically designed menu — with proper Arabic RTL layout, appetizing food photography, and smart item positioning — can increase your average order value by 15-25%.</p>
            <p>AIDA Creative Studios designs print-ready restaurant menus for Arabic restaurants, cafes, and food businesses across Jerusalem. We specialize in bilingual Arabic-English menus with full RTL support, meaning your Arabic text flows naturally from right to left while English descriptions sit perfectly alongside. No awkward flipping, no broken layouts, no text running into margins.</p>
            <p dir="rtl" className="font-arabic text-lg">المنيو مش بس قائمة أكل — هو أداة بيع. إحنا بنصمم منيوهات بتخلي الزبون يطلب أكثر. توزيع الأصناف، حجم الخط، الصور، والألوان — كل إشي مدروس عشان يرفع متوسط الفاتورة ويخلي تجربة الزبون أحسن.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Strategic Menu Engineering</h2>
            <p>We don't just make your menu look pretty — we engineer it to sell. Menu psychology is real: where you place a dish, how you describe it, whether it has a photo, and what sits next to it all affect what customers order. We use proven menu engineering techniques adapted specifically for Arabic dining culture:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Golden triangle positioning:</strong> High-margin items placed where eyes land first in RTL reading patterns</li>
              <li><strong>Strategic upsell placement:</strong> Appetizers, sides, and drinks positioned to increase per-table revenue</li>
              <li><strong>Decoy pricing:</strong> Item arrangement that makes your best-margin dishes feel like the obvious choice</li>
              <li><strong>Photo placement:</strong> Research shows photographed items sell 30% more — we photograph your hero dishes and place them strategically</li>
            </ul>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Print-Ready A3 and Digital Formats</h2>
            <p>Every menu we deliver is print-ready in A3 format with proper bleed, crop marks, and CMYK color profiles — ready to send straight to any print shop in Jerusalem. But we also deliver digital versions optimized for your QR code table cards, your Instagram highlights, your WhatsApp catalog, and your Google Business Profile. One design system, every format your restaurant needs.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Food Photography</h2>
            <p>Menus without photos are menus without sales. We offer professional food photography sessions at your restaurant — styled, lit, and shot to make your dishes look as good as they taste. Every photo is color-corrected and formatted for both print (300 DPI CMYK) and digital (optimized WebP for fast loading). We photograph your top sellers and signature dishes so the menu practically orders for the customer.</p>

            <p dir="rtl" className="font-arabic text-lg">بنصور أكلك بطريقة بتخلي الزبون يطلب قبل ما يقعد. تصوير احترافي بمطعمك، بإضاءة صح وتنسيق يخلي كل طبق يبين بأحسن شكل. الصور بتطلع جاهزة للطباعة وللسوشيال ميديا.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Full RTL Arabic Support</h2>
            <p>Most designers treat Arabic as an afterthought — they design in English first, then try to flip everything. The result is broken layouts, misaligned text, and menus that feel foreign to Arabic-reading customers. We design Arabic-first with proper RTL flow, correct Arabic typography using professional typefaces, and natural bilingual hierarchy that respects both languages.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">What's Included</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Full menu design with RTL Arabic and English layout</li>
              <li>Print-ready A3 PDF with bleed and crop marks</li>
              <li>Digital menu for QR codes and social media</li>
              <li>Food photography session (up to 15 dishes)</li>
              <li>Strategic item placement and menu engineering</li>
              <li>Two rounds of revisions</li>
              <li>Source files for future updates</li>
            </ul>
          </div>
          <div className="mt-12">
            <GoldButton href="/contact" variant="terracotta" size="lg">
              Get Your Menu Design Quote
            </GoldButton>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
