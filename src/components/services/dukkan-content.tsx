"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
  HatchPattern,
} from "@/components/shared/paper-ornaments";

/**
 * الدّكّان · The Shop
 * Studio/services page. Patina gold register.
 * Shows what AIDA builds and does for clients.
 */
export function DukkanContent() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const services = [
    {
      num: "01",
      ar: "هويّة بصرية",
      en: "Visual Identity",
      desc: isAr
        ? "لوغو، لوحة ألوان، طباعة، نظام بصري كامل. للمطاعم والمؤسسات والمشاريع الفلسطينية."
        : "Logo, colour palette, typography, full visual system. For Palestinian restaurants, institutions, and projects.",
    },
    {
      num: "02",
      ar: "اتصالات مؤسسية",
      en: "Institutional Communications",
      desc: isAr
        ? "تقارير، عروض تقديمية، مواد تواصل للمؤسسات الفلسطينية والعربية. بالعربي أولاً."
        : "Reports, presentations, communication materials for Palestinian and Arab institutions. Arabic first.",
    },
    {
      num: "03",
      ar: "تصميم مطبوع",
      en: "Print Design",
      desc: isAr
        ? "قوائم المطاعم، كتيبات، ملصقات، تصميمات جاهزة للطباعة. مع دعم كامل للغة العربية."
        : "Restaurant menus, brochures, posters, print-ready designs. With full Arabic RTL support.",
    },
    {
      num: "04",
      ar: "سوشيال ميديا",
      en: "Social Media",
      desc: isAr
        ? "محتوى، كابشنز، وإدارة حسابات بالديالكت الفلسطيني المقدسي. مش فصحى. مش خليجي."
        : "Content, captions, and account management in Palestinian Jerusalemite dialect. Not MSA. Not Gulf.",
    },
    {
      num: "05",
      ar: "استراتيجية وبحث",
      en: "Strategy & Research",
      desc: isAr
        ? "تحليل سوق، استراتيجية هوية، أبحاث للمؤسسات الفلسطينية والعربية."
        : "Market analysis, identity strategy, research for Palestinian and Arab institutions.",
    },
  ];

  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(180deg, var(--ground) 0%, var(--ground-mid) 100%)",
          padding: "160px 6vw 100px",
          overflow: "hidden",
          borderBottom: "1px solid rgba(154,122,58,0.2)",
        }}
      >
        <RegistrationMarks color="var(--patina-gold)" inset={28} size={16} opacity={0.25} />

        <CalligraphyGhost
          text="الدّكّان"
          size="clamp(14rem, 28vw, 40rem)"
          color="var(--patina-gold)"
          opacity={0.05}
          top="5%"
          right={isAr ? "auto" : "-4%"}
          left={isAr ? "-4%" : "auto"}
          rotation={-2}
        />

        <HatchPattern
          color="var(--patina-gold)"
          opacity={0.07}
          spacing={6}
          angle={-45}
          top={0}
          right={isAr ? "auto" : 0}
          left={isAr ? 0 : "auto"}
          width="35%"
          height="100%"
        />

        <ArchiveStamp
          lines={["الدّكّان", "STUDIO — RECORD", "AIDA · القدس", "2014 — 2026"]}
          color="var(--patina-gold)"
          rotation={4}
          top="22%"
          left={isAr ? "auto" : "6%"}
          right={isAr ? "6%" : "auto"}
          opacity={0.65}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "860px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "40px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--patina-gold)",
            }}
          >
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--patina-gold)" }} />
            {isAr ? "الشغل التجاري" : "The Studio"}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-ar)",
              fontWeight: 700,
              fontSize: "clamp(4rem, 9vw, 8rem)",
              lineHeight: 1,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "32px",
              direction: "rtl",
            }}
          >
            الدّكّان
          </h1>

          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
              lineHeight: isAr ? 1.85 : 1.65,
              color: "var(--ink-dim)",
              maxWidth: "600px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "بنكتب. وبنبني أيضاً. هويّاتٌ، اتّصالاتٌ، وأنظمةٌ للمؤسسات الفلسطينية والعربية — من القدس."
              : "We write. We also build. Identities, communications, and systems for Palestinian and Arab institutions — from Jerusalem."}
          </p>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ground-mid)",
          padding: "80px 6vw 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1340px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--patina-gold)",
              marginBottom: "56px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>{isAr ? "الخدمات" : "Services"}</span>
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "var(--patina-gold)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "40px",
                  padding: "48px 0",
                  borderTop: i === 0 ? "1px solid rgba(154,122,58,0.3)" : "1px solid rgba(26,20,16,0.08)",
                  borderBottom: i === services.length - 1 ? "1px solid rgba(154,122,58,0.3)" : "none",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: "var(--patina-gold)",
                    opacity: 0.6,
                  }}
                >
                  {svc.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-ar)",
                      fontWeight: 700,
                      fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                      color: "var(--ink)",
                      marginBottom: "4px",
                      direction: "rtl",
                    }}
                  >
                    {svc.ar}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-en)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--patina-gold)",
                      marginBottom: "16px",
                    }}
                  >
                    {svc.en}
                  </div>
                  <p
                    style={{
                      fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                      fontStyle: isAr ? "normal" : "italic",
                      fontSize: "0.95rem",
                      lineHeight: isAr ? 1.85 : 1.7,
                      color: "var(--ink-faded)",
                      direction: isAr ? "rtl" : "ltr",
                      maxWidth: "560px",
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ground-deep)",
          padding: "80px 6vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            fontStyle: isAr ? "normal" : "italic",
            fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
            lineHeight: isAr ? 1.85 : 1.65,
            color: "var(--ink-dim)",
            maxWidth: "520px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {isAr
            ? "عندك مشروع؟ تواصل معنا مباشرة."
            : "Have a project? Get in touch directly."}
        </p>
        <Link
          href={`/${locale}/contact`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--ground)",
            background: "var(--patina-gold)",
            padding: "14px 32px",
            transition: "background 0.2s",
          }}
          className="hover:bg-[var(--patina-copper)]"
        >
          {isAr ? "تواصل" : "Contact"}
          <span>{isAr ? "←" : "→"}</span>
        </Link>
      </section>
    </>
  );
}
