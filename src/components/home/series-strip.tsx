"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RulerMark,
  InkSplotch,
} from "@/components/shared/paper-ornaments";

/**
 * Series Strip — Hurriyeh / حريّة
 * Homepage section driving to the HITL series.
 * Red register. Shows all 7 articles + CTA.
 */

const HITL_ARTICLES = [
  {
    num: "01",
    ar: "آلة القتل",
    en: "The Kill List Machine",
    sub: isAr => isAr ? "لافندر / أين أبو / الإنجيل" : "Lavender · Where's Daddy · Gospel",
  },
  {
    num: "02",
    ar: "كاميرا نقطة التفتيش",
    en: "The Checkpoint Camera",
    sub: isAr => isAr ? "بلو وولف / وولف باك / ريد وولف" : "Blue Wolf · Wolf Pack · Red Wolf",
  },
  {
    num: "03",
    ar: "قاعدة البيانات عديمة الجنسية",
    en: "The Stateless Database",
    sub: isAr => isAr ? "IrisGuard · UNHCR · UNRWA" : "IrisGuard · UNHCR · UNRWA",
  },
  {
    num: "04",
    ar: "الفيد المُسكَت",
    en: "The Silenced Feed",
    sub: isAr => isAr ? "Meta · 7amleh · رفعت العرعير" : "Meta · 7amleh · Refaat Alareer",
  },
  {
    num: "05",
    ar: "اللغة التي لم يتدرّبوا عليها",
    en: "The Language They Didn't Train",
    sub: isAr => isAr ? "العربية الفلسطينية · NLP · محو هوية" : "Palestinian Arabic · NLP · erasure",
  },
  {
    num: "06",
    ar: "معضلة المهندس",
    en: "The Engineer's Dilemma",
    sub: isAr => isAr ? "العمال التقنيون الفلسطينيون في Google وMeta" : "Palestinian tech workers at Google · Meta · Microsoft",
  },
  {
    num: "07",
    ar: "إشارة في الأنقاض",
    en: "Signal in the Rubble",
    sub: isAr => isAr ? "غزة · الذكاء الاصطناعي للبقاء وإعادة البناء" : "Gaza · AI for survival and rebuilding",
  },
];

export function SeriesStrip() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      style={{
        position: "relative",
        background: "var(--ground-mid)",
        padding: "100px 6vw 80px",
        overflow: "hidden",
        borderTop: "2px solid var(--wm-red)",
      }}
    >
      {/* Paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.7'/></svg>\")",
          opacity: 0.07,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      <CalligraphyGhost
        text="حريّة"
        size="clamp(16rem, 28vw, 36rem)"
        color="var(--wm-red)"
        opacity={0.04}
        top="5%"
        right={isAr ? "auto" : "-4%"}
        left={isAr ? "-4%" : "auto"}
        rotation={-3}
      />

      <InkSplotch
        color="var(--wm-red)"
        opacity={0.04}
        size={400}
        bottom="-5%"
        left={isAr ? "auto" : "55%"}
        right={isAr ? "55%" : "auto"}
        rotation={15}
        seed={7}
      />

      <RulerMark
        orientation="vertical"
        length="70%"
        ticks={18}
        color="var(--ink-faded)"
        opacity={0.15}
        top="15%"
        left={isAr ? "auto" : "1.5vw"}
        right={isAr ? "1.5vw" : "auto"}
      />

      <ArchiveStamp
        lines={["SERIES — 01", "HUMAN IN THE LOOP", "AIDA · القدس", "2026"]}
        color="var(--wm-red)"
        rotation={-3}
        top="12%"
        right={isAr ? "auto" : "5%"}
        left={isAr ? "5%" : "auto"}
        opacity={0.5}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "64px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--wm-red)",
              }}
            >
              <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--wm-red)" }} />
              {isAr ? "حريّة · السلسلة الأولى" : "Hurriyeh · Series 01"}
            </div>
            <h2
              style={{
                fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                fontWeight: 700,
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr ? "إنسان في الدوامة" : "Human in the Loop"}
            </h2>
            <p
              style={{
                fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
                color: "var(--ink-faded)",
                marginTop: "12px",
                maxWidth: "520px",
                lineHeight: isAr ? 1.85 : 1.65,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr
                ? "سبع مقالات عن الذكاء الاصطناعي والحالة الفلسطينية. من المراقبة إلى الحجب، ومن قوائم الاستهداف إلى المحو اللغوي."
                : "Seven pieces on AI and the Palestinian condition. From surveillance to content suppression, from targeting lists to linguistic erasure."}
            </p>
          </div>

          <Link
            href={`/${locale}/insights`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--wm-red)",
              borderBottom: "1px solid var(--wm-red)",
              paddingBottom: "4px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            className="hover:opacity-70"
          >
            {isAr ? "اقرأ السلسلة ←" : "Read the series →"}
          </Link>
        </div>

        {/* Article list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {HITL_ARTICLES.map((article, i) => (
            <Link
              key={article.num}
              href={`/${locale}/insights`}
              style={{
                display: "grid",
                gridTemplateColumns: isAr ? "1fr 48px" : "48px 1fr",
                gap: "24px",
                padding: "24px 0",
                borderTop: "1px solid rgba(196,26,42,0.15)",
                borderBottom: i === HITL_ARTICLES.length - 1 ? "1px solid rgba(196,26,42,0.15)" : "none",
                alignItems: "baseline",
                textDecoration: "none",
                transition: "background 0.2s",
                direction: isAr ? "rtl" : "ltr",
              }}
              className="hover:bg-[rgba(196,26,42,0.03)]"
            >
              {!isAr && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--wm-red)",
                    opacity: 0.5,
                  }}
                >
                  {article.num}
                </span>
              )}
              <div>
                <div
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontWeight: 600,
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: isAr ? "clamp(1rem, 1.6vw, 1.3rem)" : "clamp(0.95rem, 1.4vw, 1.2rem)",
                    color: "var(--ink)",
                    marginBottom: "4px",
                  }}
                >
                  {isAr ? article.ar : article.en}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {article.sub(isAr)}
                </div>
              </div>
              {isAr && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--wm-red)",
                    opacity: 0.5,
                    textAlign: "left",
                  }}
                >
                  {article.num}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
