"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RulerMark,
} from "@/components/shared/paper-ornaments";

/**
 * Series Strip — Hurriyeh / حريّة
 * Homepage section: 7 HITL article image cards + CTA.
 * Images from /public/editorial/images/leonardo/v3/
 */

const HITL_ARTICLES = [
  {
    num: "01",
    ar: "آلة القتل",
    en: "The Kill List Machine",
    subAr: "لافندر · أين أبو · الإنجيل",
    subEn: "Lavender · Where's Daddy · Gospel",
    img: "/editorial/images/leonardo/v3/01-A_v3_vintage_114244.jpg",
  },
  {
    num: "02",
    ar: "كاميرا نقطة التفتيش",
    en: "The Checkpoint Camera",
    subAr: "بلو وولف · وولف باك · ريد وولف",
    subEn: "Blue Wolf · Wolf Pack · Red Wolf",
    img: "/editorial/images/leonardo/v3/02-A_v3_vintage_114345.jpg",
  },
  {
    num: "03",
    ar: "قاعدة البيانات عديمة الجنسية",
    en: "The Stateless Database",
    subAr: "IrisGuard · UNHCR · UNRWA",
    subEn: "IrisGuard · UNHCR · UNRWA",
    img: "/editorial/images/leonardo/v3/03-A_v3_phoenix_113832.jpg",
  },
  {
    num: "04",
    ar: "الفيد المُسكَت",
    en: "The Silenced Feed",
    subAr: "Meta · 7amleh · رفعت العرعير",
    subEn: "Meta · 7amleh · Refaat Alareer",
    img: "/editorial/images/leonardo/v3/04-A_v3_phoenix_113942.jpg",
  },
  {
    num: "05",
    ar: "اللغة التي لم يتدرّبوا عليها",
    en: "The Language They Didn't Train",
    subAr: "العربية الفلسطينية · NLP · محو هوية",
    subEn: "Palestinian Arabic · NLP · erasure",
    img: "/editorial/images/leonardo/v3/05-C_v3_visionxl_114428.jpg",
  },
  {
    num: "06",
    ar: "معضلة المهندس",
    en: "The Engineer's Dilemma",
    subAr: "العمال التقنيون الفلسطينيون في Google وMeta",
    subEn: "Palestinian tech workers at Google · Meta · Microsoft",
    img: "/editorial/images/leonardo/v3/06-A_v3_visionxl_114447.jpg",
  },
  {
    num: "07",
    ar: "إشارة في الأنقاض",
    en: "Signal in the Rubble",
    subAr: "غزة · الذكاء الاصطناعي للبقاء وإعادة البناء",
    subEn: "Gaza · AI for survival and rebuilding",
    img: "/editorial/images/leonardo/v3/07-A_v3_visionxl_114535.jpg",
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

      <RulerMark
        orientation="vertical"
        length="70%"
        ticks={18}
        color="var(--ink-faded)"
        opacity={0.12}
        top="15%"
        left={isAr ? "auto" : "1.5vw"}
        right={isAr ? "1.5vw" : "auto"}
      />

      <ArchiveStamp
        lines={["SERIES — 01", "HUMAN IN THE LOOP", "AIDA · القدس", "2026"]}
        color="var(--wm-red)"
        rotation={-3}
        top="10%"
        right={isAr ? "auto" : "5%"}
        left={isAr ? "5%" : "auto"}
        opacity={0.45}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto" }}>

        {/* ── Section header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "56px",
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
                lineHeight: 1.05,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                marginBottom: "14px",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr ? "إنسان في الدوامة" : "Human in the Loop"}
            </h2>
            <p
              style={{
                fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                color: "var(--ink-faded)",
                maxWidth: "520px",
                lineHeight: isAr ? 1.85 : 1.65,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr
                ? "سبع مقالات عن الذكاء الاصطناعي والحالة الفلسطينية. من المراقبة إلى الحجب، ومن قوائم الاستهداف إلى المحو اللغوي."
                : "Seven pieces on AI and the Palestinian condition. Surveillance. Content suppression. Targeting lists. Linguistic erasure."}
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
            className="hover:opacity-60"
          >
            {isAr ? "← اقرأ السلسلة" : "Read the series →"}
          </Link>
        </div>

        {/* ── 7 article cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "2px",
          }}
        >
          {HITL_ARTICLES.map((article) => (
            <Link
              key={article.num}
              href={`/${locale}/insights`}
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                textDecoration: "none",
                background: "var(--ground-deep)",
              }}
              className="group"
            >
              {/* Photo */}
              <Image
                src={article.img}
                alt={isAr ? article.ar : article.en}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                style={{ objectFit: "cover", transition: "transform 0.5s ease", filter: "grayscale(20%)" }}
                className="group-hover:scale-105"
              />

              {/* Permanent dark gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,20,16,0.88) 0%, rgba(26,20,16,0.25) 55%, rgba(26,20,16,0) 100%)",
                }}
              />

              {/* Red top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--wm-red)",
                  opacity: 0.85,
                }}
              />

              {/* Number */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: isAr ? "auto" : "16px",
                  right: isAr ? "16px" : "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                }}
              >
                {article.num}
              </span>

              {/* Title + sub at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <div
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontWeight: 700,
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: isAr ? "clamp(1rem, 1.5vw, 1.15rem)" : "clamp(0.9rem, 1.3vw, 1.05rem)",
                    color: "#fff",
                    lineHeight: 1.25,
                    marginBottom: "6px",
                  }}
                >
                  {isAr ? article.ar : article.en}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.5,
                  }}
                >
                  {isAr ? article.subAr : article.subEn}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href={`/${locale}/insights`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--ground)",
              background: "var(--wm-red)",
              padding: "14px 32px",
              transition: "background 0.2s",
            }}
            className="hover:bg-[var(--wm-red-deep)]"
          >
            {isAr ? "← اقرأ السلسلة كاملة" : "Read the full series →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
