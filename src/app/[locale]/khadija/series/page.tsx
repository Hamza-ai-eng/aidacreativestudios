import type { Metadata } from "next";
import Link from "next/link";
import { series as allEssays } from "#site/content";
import { localeAlternates } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "سلاسل · Series" : "Series · سلاسل",
    description: isAr
      ? "سلاسل المقالات الطويلة من معهد عايدة — كل سلسلة فحص متعدد المقالات لموضوع واحد."
      : "Essay series from AIDA — each series is a multi-essay investigation of one subject.",
    alternates: localeAlternates(locale, "/khadija/series"),
  };
}

const SERIES_TITLES: Record<string, { en: string; ar: string; description: { en: string; ar: string } }> = {
  "human-in-the-loop": {
    en: "Human in the Loop",
    ar: "الإنسان في الدوامة",
    description: {
      en: "Seven essays on AI deployed against Palestinian life — targeting software, facial recognition, humanitarian biometrics, content moderation, language erasure.",
      ar: "سبع مقالات عن أنظمة ذكاء اصطناعي اشتغلت ضد الحياة الفلسطينية — برامج استهداف، تعرّف على الوجه، بصمات بيومترية، إدارة محتوى، محو لغوي.",
    },
  },
  "offline-by-design": {
    en: "Offline by Design — The Series",
    ar: "إقصاء مبرمَج — السلسلة",
    description: {
      en: "Six essays on the architecture of digital exclusion — electricity, payment, contracts, language, geography, accountability.",
      ar: "ستّ مقالات عن طريقة إقصاء الفلسطيني من العالم الرقمي — كهربا، دفع، عقود، لغة، جغرافيا، محاسبة.",
    },
  },
  "when-the-knife-entered": {
    en: "The Key Became a Fingerprint",
    ar: "المفتاح صار بَصمة",
    description: {
      en: "Seven essays mapped along the body — heart, lungs, eyes, hands, spine, belly, feet. Each file an X became Y replacement that chorus the umbrella title.",
      ar: "سَبع مقالات على الجَسَد — القلب، الرئتين، العينين، اليدين، العمود الفقري، البطن، القدمين. كل ملف فيه استبدال «صار» بيلاقي العنوان الكبير.",
    },
  },
};

export default async function SeriesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const seriesSlugs = [...new Set(allEssays.map((e) => e.series))];

  return (
    <main className="pt-32 pb-24 mx-auto max-w-3xl px-6" dir={isAr ? "rtl" : "ltr"}>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-faded)]">
        {isAr ? "غرفة حجّة خديجة" : "Khadija's Room"}
      </p>
      <h1
        className="mt-4 mb-6 leading-[0.95]"
        style={{
          fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          color: "var(--ink)",
        }}
      >
        {isAr ? "سلاسل" : "Series"}
      </h1>
      <ul className="space-y-12">
        {seriesSlugs.map((slug) => {
          const meta = SERIES_TITLES[slug];
          if (!meta) return null;
          const count = allEssays.filter(
            (e) => e.series === slug && e.lang === (isAr ? "ar" : "en")
          ).length;
          return (
            <li
              key={slug}
              className="border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0"
            >
              <Link href={`/${locale}/khadija/series/${slug}`} className="block group">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--wm-red)] mb-2">
                  {isAr ? "سلسلة" : "Series"} · {count} {isAr ? "مقالة" : "essays"}
                </p>
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontSize: "1.8rem",
                    color: "var(--ink)",
                    lineHeight: 1.15,
                  }}
                >
                  {isAr ? meta.ar : meta.en}
                </h2>
                <p className="text-[var(--ink-dim)] leading-relaxed">
                  {isAr ? meta.description.ar : meta.description.en}
                </p>
                <span className="inline-block mt-3 text-sm text-[var(--wm-red)] group-hover:underline">
                  {isAr ? "ادخل السلسلة ←" : "Open the series →"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
