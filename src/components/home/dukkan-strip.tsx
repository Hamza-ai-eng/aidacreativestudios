"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  HatchPattern,
  TatreezPattern,
} from "@/components/shared/paper-ornaments";

/**
 * Dukkan Strip — studio/services homepage section
 * Gold register. Shows all 5 services + CTA.
 * Replaces the thin StudioStrip.
 */

const SERVICES = [
  {
    num: "01",
    ar: "هويّة بصرية",
    en: "Visual Identity",
    descAr: "لوغو، لوحة ألوان، طباعة، نظام بصري كامل.",
    descEn: "Logo, colour palette, typography, full visual system.",
  },
  {
    num: "02",
    ar: "اتصالات مؤسسية",
    en: "Institutional Communications",
    descAr: "تقارير، عروض تقديمية، مواد تواصل. بالعربي أولاً.",
    descEn: "Reports, presentations, communication materials. Arabic first.",
  },
  {
    num: "03",
    ar: "تصميم مطبوع",
    en: "Print Design",
    descAr: "قوائم مطاعم، كتيبات، ملصقات. مع دعم كامل للعربية.",
    descEn: "Menus, brochures, posters. Full Arabic RTL support.",
  },
  {
    num: "04",
    ar: "سوشيال ميديا",
    en: "Social Media",
    descAr: "محتوى وإدارة بالديالكت الفلسطيني المقدسي. مش فصحى.",
    descEn: "Content and management in Palestinian Jerusalemite dialect. Not MSA.",
  },
  {
    num: "05",
    ar: "استراتيجية وبحث",
    en: "Strategy & Research",
    descAr: "تحليل سوق، استراتيجية هوية، أبحاث للمؤسسات الفلسطينية والعربية.",
    descEn: "Market analysis, identity strategy, research for Palestinian and Arab institutions.",
  },
];

export function DukkanStrip() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, var(--ground-mid) 0%, var(--ground-deep) 100%)",
        padding: "100px 6vw 80px",
        overflow: "hidden",
        borderTop: "1px solid rgba(154,122,58,0.3)",
      }}
    >
      {/* Paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.4'/></svg>\")",
          opacity: 0.08,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* Gold wash — bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(154,122,58,0.12) 0%, transparent 55%)",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      <CalligraphyGhost
        text="الدّكّان"
        size="clamp(14rem, 24vw, 32rem)"
        color="var(--patina-gold)"
        opacity={0.05}
        top="5%"
        right={isAr ? "auto" : "-3%"}
        left={isAr ? "-3%" : "auto"}
        rotation={-2}
      />

      <HatchPattern
        color="var(--patina-copper)"
        opacity={0.09}
        spacing={6}
        angle={-45}
        top={0}
        left={isAr ? "auto" : 0}
        right={isAr ? 0 : "auto"}
        width="28%"
        height="55%"
      />

      <TatreezPattern
        color="var(--patina-gold)"
        opacity={0.18}
        size={24}
        width={24}
        height={280}
        top="50%"
        right={isAr ? "auto" : "1vw"}
        left={isAr ? "1vw" : "auto"}
      />

      <ArchiveStamp
        lines={["الدّكّان", "STUDIO — RECORD", "AIDA · القدس", "2014 — 2026"]}
        color="var(--patina-gold)"
        rotation={4}
        top="14%"
        left={isAr ? "auto" : "7%"}
        right={isAr ? "7%" : "auto"}
        opacity={0.6}
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
                color: "var(--patina-gold)",
              }}
            >
              <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--patina-gold)" }} />
              {isAr ? "الدّكّان · الاستوديو" : "Dukkan · The Studio"}
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
              {isAr ? "بنكتب. وبنبني أيضاً." : "We write. We also build."}
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
                ? "هويّاتٌ، اتّصالاتٌ، وأنظمةٌ للمؤسسات الفلسطينية والعربية — من القدس."
                : "Identities, communications, and systems for Palestinian and Arab institutions — from Jerusalem."}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: isAr ? "flex-start" : "flex-end",
            }}
          >
            <Link
              href={`/${locale}/services`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--patina-gold)",
                borderBottom: "1px solid var(--patina-gold)",
                paddingBottom: "4px",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-70"
            >
              {isAr ? "شاهد أعمالنا ←" : "See our work →"}
            </Link>
            <Link
              href={`/${locale}/contact`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--ink-faded)",
                borderBottom: "1px solid var(--ink-faded)",
                paddingBottom: "4px",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-70"
            >
              {isAr ? "تواصل ←" : "Get in touch →"}
            </Link>
          </div>
        </div>

        {/* Services list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              style={{
                display: "grid",
                gridTemplateColumns: isAr ? "1fr 48px" : "48px 1fr",
                gap: "32px",
                padding: "28px 0",
                borderTop: "1px solid rgba(154,122,58,0.2)",
                borderBottom: i === SERVICES.length - 1 ? "1px solid rgba(154,122,58,0.2)" : "none",
                alignItems: "baseline",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {!isAr && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--patina-gold)",
                    opacity: 0.6,
                  }}
                >
                  {svc.num}
                </span>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px 40px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                      fontWeight: 600,
                      fontStyle: isAr ? "normal" : "italic",
                      fontSize: isAr ? "clamp(1.1rem, 1.8vw, 1.4rem)" : "clamp(1rem, 1.6vw, 1.25rem)",
                      color: "var(--ink)",
                    }}
                  >
                    {isAr ? svc.ar : svc.en}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: isAr ? "0" : "16px",
                      marginRight: isAr ? "16px" : "0",
                      fontFamily: isAr ? "var(--font-en)" : "var(--font-ar)",
                      fontStyle: isAr ? "italic" : "normal",
                      fontSize: "0.85rem",
                      color: "var(--patina-gold)",
                    }}
                  >
                    {isAr ? svc.en : svc.ar}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: "0.9rem",
                    color: "var(--ink-faded)",
                    lineHeight: isAr ? 1.8 : 1.6,
                    maxWidth: "400px",
                    textAlign: isAr ? "right" : "left",
                    margin: 0,
                  }}
                >
                  {isAr ? svc.descAr : svc.descEn}
                </p>
              </div>
              {isAr && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--patina-gold)",
                    opacity: 0.6,
                    textAlign: "left",
                  }}
                >
                  {svc.num}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
