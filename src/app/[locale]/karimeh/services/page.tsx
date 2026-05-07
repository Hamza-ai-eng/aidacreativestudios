import type { Metadata } from "next";
import { localeAlternates, absoluteUrl } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "خدمات الدّكّان · Studio Services" : "Studio Services · خدمات الدّكّان",
    description: isAr
      ? "هويّة بصريّة، تصميم منيو، إدارة سوشيال ميديا، تصوير أكل — للمشاريع الفلسطينيّة والعربيّة من القدس. أسعار شفّافة بالشيكل."
      : "Brand identity, menu design, social media management, food photography — for Palestinian and Arab businesses from Jerusalem. Transparent NIS pricing.",
    alternates: localeAlternates(locale, "/karimeh/services"),
  };
}

type Pack = {
  slugId: string;
  ar: { name: string; subtitle: string; description: string; included: string[]; timeline: string };
  en: { name: string; subtitle: string; description: string; included: string[]; timeline: string };
  priceMin: number;
  priceMax: number;
};

// Price bands are PLACEHOLDERS — Hamzah confirms the final numbers.
const PACKS: Pack[] = [
  {
    slugId: "restaurant-launch",
    priceMin: 9000,
    priceMax: 14000,
    ar: {
      name: "باكج المطعم",
      subtitle: "Restaurant Launch Pack",
      description:
        "كل اللي بحتاجه مطعم جديد عشان يفتح قوي — هويّة بصريّة، منيو ثنائي اللغة، تصوير أكل، شعار وكتالوج Google Business، وقوالب إنستغرام.",
      included: [
        "شعار + هويّة بصريّة كاملة",
        "منيو A3 جاهز للطباعة (عربي + إنجليزي، RTL صحيح)",
        "جلسة تصوير أكل احترافيّة بالمطعم",
        "إعداد Google Business Profile + WhatsApp Business",
        "١٢ قالب إنستغرام",
        "دليل المنيو الرقمي (QR)",
      ],
      timeline: "٤–٦ أسابيع",
    },
    en: {
      name: "Restaurant Launch Pack",
      subtitle: "باكج المطعم",
      description:
        "Everything a new restaurant needs to open strong — brand identity, bilingual menu, food photography, Google Business + WhatsApp, Instagram template kit.",
      included: [
        "Logo + complete brand identity",
        "A3 print-ready menu (Arabic + English, proper RTL)",
        "Professional food photography session at the restaurant",
        "Google Business Profile + WhatsApp Business setup",
        "12 Instagram templates",
        "Digital QR menu",
      ],
      timeline: "4–6 weeks",
    },
  },
  {
    slugId: "shop-identity",
    priceMin: 6500,
    priceMax: 10000,
    ar: {
      name: "باكج المتجر",
      subtitle: "Shop Identity Pack",
      description:
        "هويّة كاملة لمحل تجاري — شعار، شغل اللافتات، قوالب سوشيال، وكتالوج WhatsApp.",
      included: [
        "شعار + هويّة بصريّة",
        "تصميم لافتة المحل",
        "٣ قوالب سوشيال ميديا",
        "إعداد كتالوج WhatsApp Business",
        "كرت أعمال + ورقة فاتورة",
      ],
      timeline: "٣–٤ أسابيع",
    },
    en: {
      name: "Shop Identity Pack",
      subtitle: "باكج المتجر",
      description:
        "Full identity for a shop — logo, signage, social templates, WhatsApp catalog.",
      included: [
        "Logo + brand identity",
        "Storefront signage design",
        "3 social media templates",
        "WhatsApp Business catalog setup",
        "Business card + invoice template",
      ],
      timeline: "3–4 weeks",
    },
  },
  {
    slugId: "institutional-identity",
    priceMin: 14000,
    priceMax: 22000,
    ar: {
      name: "باكج المؤسسة",
      subtitle: "Institutional Identity Pack",
      description:
        "هويّة مؤسسيّة كاملة — للمنظّمات، الجمعيّات، والمتاحف — مع كتاب هويّة وقوالب تقارير.",
      included: [
        "شعار + هويّة بصريّة كاملة",
        "كتاب هويّة ثنائي اللغة (PDF + InDesign)",
        "قالب تقرير مؤسّسي",
        "هويّة موقع إلكتروني (لا يشمل البرمجة)",
        "بطاقات أعمال للفريق",
      ],
      timeline: "٦–٨ أسابيع",
    },
    en: {
      name: "Institutional Identity Pack",
      subtitle: "باكج المؤسسة",
      description:
        "Full institutional identity — for organizations, foundations, museums — with a brand book and report templates.",
      included: [
        "Logo + complete brand identity",
        "Bilingual brand book (PDF + InDesign)",
        "Institutional report template",
        "Web identity (does not include code)",
        "Team business cards",
      ],
      timeline: "6–8 weeks",
    },
  },
];

const FAQS: { ar: { q: string; a: string }; en: { q: string; a: string } }[] = [
  {
    ar: {
      q: "ليش الأسعار بالشيكل ومش بالدولار؟",
      a: "إحنا في القدس وعملاؤنا الفلسطينيون يعملون بالشيكل. الأسعار بعملة العميل احترام، مش غموض.",
    },
    en: {
      q: "Why are prices in NIS and not in USD?",
      a: "We are in Jerusalem and our Palestinian clients work in NIS. Pricing in the client's currency is respect, not opacity.",
    },
  },
  {
    ar: {
      q: "بتعملوا تخفيضات للجمعيّات والمشاريع الصغيرة؟",
      a: "في حالات معيّنة، آه. اكتب لنا على الواتساب +972 52-463-5937 وحكينا.",
    },
    en: {
      q: "Do you offer discounts for nonprofits and small projects?",
      a: "In specific cases, yes. WhatsApp us at +972 52-463-5937 and we'll talk.",
    },
  },
  {
    ar: {
      q: "ما رح يكون شغلي زي شغل ثاني عملتوه؟",
      a: "كل شغلة بنبدأها من الصفر. ما بنعيد قوالب. كل علامة تجاريّة عندها صوت — وظيفتنا نعرفه قبل ما نرسمه.",
    },
    en: {
      q: "Won't my work look like work you've done for someone else?",
      a: "Every project begins from scratch. We don't recycle templates. Every brand has a voice — our job is to know it before we draw it.",
    },
  },
  {
    ar: {
      q: "كم مرّة بقدر أعدّل قبل الاستلام النهائي؟",
      a: "جولتين تعديل مشمولة في كل باكج. التعديل الثالث وما فوق بسعر إضافي حسب نطاق الشغل.",
    },
    en: {
      q: "How many revisions are included?",
      a: "Two rounds of revisions per pack. Additional rounds are billed at scope.",
    },
  },
  {
    ar: {
      q: "هل بتشتغلوا مع مشاريع برّا القدس؟",
      a: "آه — رام الله، بيت لحم، الناصرة، حيفا، عمّان، بيروت. الشغل الإبداعي ما عنده حدود.",
    },
    en: {
      q: "Do you work with businesses outside Jerusalem?",
      a: "Yes — Ramallah, Bethlehem, Nazareth, Haifa, Amman, Beirut. Creative work has no borders.",
    },
  },
  {
    ar: {
      q: "ليش ١٢ قالب إنستغرام مش ٢٠؟",
      a: "لأن مع ٢٠ ما بتستعملهم كلهم. الفعليّة أهم من العدد. ١٢ قالب مدروسة بتغطّي ٩٠٪ من احتياجاتك.",
    },
    en: {
      q: "Why 12 Instagram templates and not 20?",
      a: "Because with 20 you don't use all of them. Practical beats numerous. 12 considered templates cover 90% of your needs.",
    },
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": PACKS.map((p) => ({
      "@type": "Service",
      name: p.en.name,
      alternateName: p.ar.name,
      description: p[isAr ? "ar" : "en"].description,
      provider: { "@id": "https://aidacreativestudios.com" },
      areaServed: { "@type": "City", name: "Jerusalem" },
      availableLanguage: ["ar", "en"],
      offers: {
        "@type": "Offer",
        priceCurrency: "ILS",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "ILS",
          minPrice: p.priceMin,
          maxPrice: p.priceMax,
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f[isAr ? "ar" : "en"].q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f[isAr ? "ar" : "en"].a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-32 pb-24 mx-auto max-w-4xl px-6" dir={isAr ? "rtl" : "ltr"}>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)]">
          {isAr ? "غرفة ستّ كريمة" : "Karimeh's Room"}
        </p>
        <h1
          className="mt-4 mb-6 leading-[0.95]"
          style={{
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "var(--ink)",
          }}
        >
          {isAr ? "خدمات الدّكّان" : "The Studio"}
        </h1>
        <p className="text-[var(--ink-dim)] mb-16 max-w-prose text-lg leading-relaxed">
          {isAr
            ? "ثلاث باكجات. كل واحدة مدروسة لنوع مشروع. الأسعار بالشيكل، ظاهرة قبل المحادثة. اللي ما بنحكي معاه عن سعر، بنخسر وقته."
            : "Three packs. Each one engineered for one kind of project. Prices in NIS, shown before the conversation. Anyone we don't tell the price to, we waste their time."}
        </p>

        <p className="mb-12 text-sm bg-[var(--paper-2)] p-4 border-s-4 border-[var(--wm-red)] text-[var(--ink-dim)]">
          {isAr
            ? "ملاحظة: الأسعار التالية placeholders — حمزة بيؤكّد الأرقام النهائيّة قبل النشر."
            : "Note: Price bands below are placeholders — Hamzah confirms final numbers before publish."}
        </p>

        {/* Three packs */}
        <ul className="space-y-16">
          {PACKS.map((p) => {
            const c = isAr ? p.ar : p.en;
            return (
              <li key={p.slugId} className="border-t border-[var(--line)] pt-12 first:border-t-0 first:pt-0">
                <h2
                  className="mb-1"
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontSize: "2rem",
                    color: "var(--ink)",
                    lineHeight: 1.1,
                  }}
                >
                  {c.name}
                </h2>
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-faded)] mb-6">
                  {c.subtitle}
                </p>
                <p className="text-[var(--ink)] mb-8 leading-relaxed">{c.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-faded)] mb-3">
                      {isAr ? "السعر" : "Price"}
                    </p>
                    <p
                      className="font-mono text-2xl text-[var(--wm-red)]"
                    >
                      ₪{p.priceMin.toLocaleString()}–₪{p.priceMax.toLocaleString()}
                    </p>
                    <p className="text-xs text-[var(--ink-faded)] mt-1">
                      [PLACEHOLDER — Hamzah confirms]
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-faded)] mb-3">
                      {isAr ? "المدّة" : "Timeline"}
                    </p>
                    <p className="text-[var(--ink)]">{c.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-faded)] mb-3">
                    {isAr ? "اللي بيتشمل" : "What's included"}
                  </p>
                  <ul className="space-y-2">
                    {c.included.map((it) => (
                      <li key={it} className="text-[var(--ink)] flex gap-3">
                        <span className="text-[var(--wm-red)]">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/972524635937"
                  className="inline-block mt-8 px-6 py-3 bg-[var(--ink)] text-[var(--ground)] text-sm tracking-wider uppercase hover:bg-[var(--wm-red)] transition"
                >
                  {isAr ? `اطلب ${c.name}` : `Request ${c.name}`}
                </a>
              </li>
            );
          })}
        </ul>

        {/* FAQ */}
        <section className="mt-24 border-t-4 border-[var(--ink)] pt-12">
          <h2
            className="mb-12"
            style={{
              fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
              fontSize: "2rem",
              color: "var(--ink)",
            }}
          >
            {isAr ? "أسئلة بنسمعها كثير" : "Questions we get"}
          </h2>
          <ul className="space-y-8">
            {FAQS.map((f, i) => {
              const c = isAr ? f.ar : f.en;
              return (
                <li key={i} className="border-t border-[var(--line)] pt-6 first:border-t-0 first:pt-0">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                      fontSize: "1.1rem",
                      color: "var(--ink)",
                      fontWeight: 600,
                    }}
                  >
                    {c.q}
                  </h3>
                  <p className="text-[var(--ink-dim)] leading-relaxed">{c.a}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
