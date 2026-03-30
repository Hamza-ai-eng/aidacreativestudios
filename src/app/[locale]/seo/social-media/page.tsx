import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { GoldButton } from "@/components/shared/gold-button";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "إدارة سوشيال ميديا القدس الشرقية | Social Media Management East Jerusalem",
  description: "إدارة حسابات سوشيال ميديا للمشاريع الفلسطينية في القدس الشرقية. إنستغرام، فيسبوك، تيك توك، وواتساب بزنس. محتوى بالعامية الفلسطينية المقدسية. AIDA Creative Studios.",
};

export default async function SocialMediaSeoPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Services", href: "/services" }, { label: "Social Media Management" }]} />
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--ink)] mb-6 leading-tight">
            Social Media Management for Palestinian Businesses in East Jerusalem
          </h1>
          <p className="font-arabic text-2xl text-[var(--accent)] mb-8" dir="rtl">
            إدارة سوشيال ميديا للمشاريع الفلسطينية في القدس الشرقية
          </p>
          <div className="prose max-w-none text-[var(--stone-gray)] leading-relaxed space-y-4">
            <p>Most Palestinian businesses in East Jerusalem post once a week, use stock photos, and wonder why their social media isn't working. The problem isn't the algorithm — it's the content. Your customers scroll past generic Arabic content because it doesn't sound like them. They engage with content that speaks their dialect, shows their neighborhood, and feels real.</p>
            <p>AIDA Creative Studios manages Instagram, Facebook, and TikTok accounts for Palestinian businesses across East Jerusalem — from restaurants in the Old City to retail shops in Shu'fat to service businesses in Beit Hanina. We don't just schedule posts. We create original content in authentic Palestinian Jerusalemite dialect that stops the scroll and drives real foot traffic.</p>
            <p dir="rtl" className="font-arabic text-lg">إحنا مش بس بنرفع بوستات — بنصنع محتوى أصلي بالعامية الفلسطينية المقدسية. بنعرف كيف الناس بالقدس بتحكي، شو بتحب تشوف، وكيف بتتفاعل. المحتوى تبعنا بيوصل لأنه حقيقي، مش مترجم ولا منسوخ من حد ثاني.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Platforms We Manage</h2>
            <p><strong>Instagram:</strong> We handle feed posts, Reels, Stories, and carousels. Every piece is designed with your brand colors, shot or sourced specifically for your business, and captioned in dialect that resonates. We optimize hashtags for Jerusalem-specific discovery and engage with your local community daily.</p>
            <p><strong>Facebook:</strong> Still the primary platform for Palestinian audiences over 30. We create shareable content, manage your business page, respond to messages and comments, and run targeted campaigns that reach East Jerusalem neighborhoods specifically.</p>
            <p><strong>TikTok:</strong> The fastest-growing platform among young Palestinians in Jerusalem. We produce short-form video content — behind-the-scenes, product showcases, day-in-the-life clips — that builds brand awareness with the next generation of customers.</p>
            <p><strong>WhatsApp Business:</strong> We set up and optimize your WhatsApp Business profile with catalog integration, automated greeting messages, quick replies in Arabic, and broadcast list strategy. For many Palestinian businesses, WhatsApp is the primary sales channel — we make sure yours converts.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">Why Palestinian Dialect Matters</h2>
            <p>Generic Arabic content written in Gulf dialect or formal MSA doesn't connect with Jerusalemite audiences. When your caption says "تسوّق" instead of "اشتري" or uses "يالله" instead of "يللا", your audience feels the disconnect instantly. Our content creators are native Palestinian Jerusalemite speakers who write the way your customers actually talk — and that authenticity drives engagement rates 3x higher than translated content.</p>

            <p dir="rtl" className="font-arabic text-lg">المحتوى إلي بنكتبه بيحكي لغة الناس — مش عربي فصحى ولا لهجة خليجية. لما الزبون يقرأ بوست وبيحس إنه واحد من الحارة كاتبه، بيتفاعل، بيشارك، وبيجي عالمحل. هاد الفرق بين سوشيال ميديا بتشتغل وسوشيال ميديا بس موجودة.</p>

            <h2 className="font-serif text-2xl text-[var(--ink)] mt-8">What's Included</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Content calendar with 12-20 posts per month</li>
              <li>Original graphic design matching your brand identity</li>
              <li>Palestinian dialect captions and hashtag strategy</li>
              <li>Instagram Reels and TikTok short-form video</li>
              <li>Story templates and highlight cover design</li>
              <li>Community management and comment responses</li>
              <li>WhatsApp Business setup and catalog optimization</li>
              <li>Monthly performance report with actionable insights</li>
            </ul>
          </div>
          <div className="mt-12">
            <GoldButton href="/contact" variant="terracotta" size="lg">
              Get Your Social Media Quote
            </GoldButton>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
