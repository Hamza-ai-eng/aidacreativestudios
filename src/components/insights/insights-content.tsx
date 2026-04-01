"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SERIES } from "@/data/insights/articles";

const SERIES_COPY = {
  "human-in-the-loop": {
    en: {
      label: "Series 01",
      title: "Human in the Loop",
      titleAr: "إنسان في الدوامة",
      subtitle: "AI is not neutral. Seven files from inside the machine.",
      description:
        "The AI systems deployed against Palestinian life — targeting software, facial recognition, humanitarian biometrics, algorithmic suppression, predictive policing. Seven files. One condition.",
    },
    ar: {
      label: "السلسلة 01",
      title: "Human in the Loop",
      titleAr: "إنسان في الدوامة",
      subtitle: "الذكاء الاصطناعي ليس محايداً. سبعة ملفات من داخل الآلة.",
      description:
        "أنظمة الذكاء الاصطناعي الموجّهة ضد الحياة الفلسطينية — برمجيات الاستهداف، التعرف على الوجوه، البيومترية الإنسانية، القمع الخوارزمي، الشرطة التنبؤية. سبعة ملفات. حالة واحدة.",
    },
  },
  "the-brand-that-stays": {
    en: {
      label: "Series 02",
      title: "The Brand That Stays",
      titleAr: "العلامة التي تبقى",
      subtitle: "Building Palestinian businesses that outlast the occupation.",
      description:
        "Brand identity, visibility, and presence for Palestinian entrepreneurs who refuse to be made invisible. What it means to build something that lasts in a place designed to erase you.",
    },
    ar: {
      label: "السلسلة 02",
      title: "The Brand That Stays",
      titleAr: "العلامة التي تبقى",
      subtitle: "بناء أعمال فلسطينية تتجاوز الاحتلال.",
      description:
        "الهوية التجارية والحضور والظهور للرواد الفلسطينيين الذين يرفضون أن يُمحوا. ماذا يعني أن تبني شيئاً يدوم في مكان مصمم لمحوك.",
    },
  },
  "speaking-arabic": {
    en: {
      label: "Series 03",
      title: "Speaking Arabic",
      titleAr: "نتكلم عربي",
      subtitle: "Content, captions, and campaigns that actually land.",
      description:
        "Arabic-language content strategy for businesses in Jerusalem, the West Bank, and the diaspora. The dialect politics, the algorithm gaps, the way a caption has to work twice as hard.",
    },
    ar: {
      label: "السلسلة 03",
      title: "Speaking Arabic",
      titleAr: "نتكلم عربي",
      subtitle: "محتوى وتعليقات وحملات تصل فعلاً.",
      description:
        "استراتيجية المحتوى العربي للشركات في القدس والضفة الغربية والشتات. سياسات اللهجة، الفجوات الخوارزمية، الطريقة التي يجب على التعليق أن يعمل بها بضعف الجهد.",
    },
  },
} as const;

export function InsightsContent() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6">
            <span className="font-space text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
              {isAr ? "صوتنا" : "Our Voice"}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--ink)] leading-tight mb-6 max-w-2xl">
            {isAr ? (
              <span style={{ fontFamily: "var(--font-amiri)" }}>
                نكتب لأن ذلك مهم.
              </span>
            ) : (
              "We write because it matters."
            )}
          </h1>
          <p className="text-[var(--stone-gray)] text-lg leading-relaxed max-w-xl">
            {isAr
              ? "مجموعات تحريرية عن الذكاء الاصطناعي وبناء الأعمال والهوية الفلسطينية. ليست مدونة. سلاسل."
              : "Editorial series on AI, business-building, and Palestinian identity. Not a blog. Series."}
          </p>
        </div>
      </section>

      {/* Series list */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6 flex flex-col gap-0">
          {SERIES.map((series, i) => {
            const copy = SERIES_COPY[series.slug as keyof typeof SERIES_COPY];
            const c = isAr ? copy.ar : copy.en;
            const isLive = series.status === "live";

            return (
              <ScrollReveal key={series.slug} delay={i * 0.1}>
                <div
                  className={`group relative border-t border-[var(--border)] py-12 transition-all duration-300 ${
                    isLive ? "cursor-pointer" : "opacity-60"
                  }`}
                  style={{
                    borderTopColor: i === 0 ? series.accentColor : undefined,
                    borderTopWidth: i === 0 ? "2px" : undefined,
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-8 mb-6">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-space text-xs tracking-[0.2em] uppercase"
                        style={{ color: series.accentColor }}
                      >
                        {c.label}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space tracking-wide ${
                          isLive
                            ? "bg-[var(--olive-dark)] text-[var(--sand)]"
                            : "border border-[var(--border)] text-[var(--stone-gray)]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green-400" : "bg-[var(--stone)]"}`}
                        />
                        {isLive
                          ? isAr ? "متاح الآن" : "Live"
                          : isAr ? "قريباً" : "Coming Soon"}
                      </span>
                    </div>

                    {isLive && (
                      <div className="flex items-center gap-2 text-[var(--stone-gray)] group-hover:text-[var(--ink)] transition-colors">
                        <span className="font-space text-xs tracking-wide">
                          {isAr ? "اقرأ السلسلة" : "Read series"}
                        </span>
                        <ArrowUpRight size={16} />
                      </div>
                    )}
                  </div>

                  {/* Titles */}
                  <div className="mb-4">
                    <h2
                      className="text-3xl md:text-4xl font-serif text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-tight mb-1"
                    >
                      {c.titleAr}
                    </h2>
                    {!isAr && (
                      <p className="font-space text-sm text-[var(--stone-gray)] tracking-wide">
                        {c.subtitle}
                      </p>
                    )}
                    {isAr && (
                      <p
                        className="text-sm text-[var(--stone-gray)]"
                        style={{ fontFamily: "var(--font-cairo)" }}
                      >
                        {c.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description + meta */}
                  <div className="flex items-end justify-between gap-8">
                    <p className="text-[var(--stone-gray)] leading-relaxed max-w-lg text-base">
                      {c.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] shrink-0">
                      <BookOpen size={13} />
                      <span className="font-space text-xs">
                        {series.fileCount} {isAr ? "ملفات" : "files"}
                      </span>
                    </div>
                  </div>

                  {/* Clickable overlay for live series */}
                  {isLive && series.externalPath && (
                    <Link
                      href={series.externalPath}
                      className="absolute inset-0"
                      aria-label={c.titleAr}
                    />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
