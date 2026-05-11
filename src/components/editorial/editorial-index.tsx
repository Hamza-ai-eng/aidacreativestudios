"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/**
 * EditorialIndex — four cards for Hajjeh Khadija's room
 *
 * Four published works:
 *   - Report 01: Offline by Design (the advocacy report; Next.js route)
 *   - Series 01: Human in the Loop (static HTML at /editorial/human-in-the-loop/)
 *   - Series 02: Offline by Design — The Series (static HTML at /editorial/offline-by-design-series/)
 *   - Series 03: When the Knife Entered / المفتاح صار بَصمة (static HTML at /editorial/when-the-knife-entered/)
 *
 * Series 02 shares the brand name with Report 01; the sub-tag (— السلسلة /
 * — The Series) is what disambiguates them. Confirmed by Hamzah 2026-05-04.
 * Series 03 added 2026-05-11 with v2.2.0-knife.
 */
export function EditorialIndex() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      className="room-khadija"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 6vw",
        background: "var(--ground)",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h3
          style={{
            fontFamily: "var(--font-ar)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--acc-khadija)",
            marginBottom: "0.6rem",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          {isAr ? "الكتابة الطويلة" : "The Long Writing"}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-en)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "var(--ink-dim)",
            textAlign: "center",
            marginBottom: "2.6rem",
          }}
        >
          {isAr
            ? "أربع منشورات. لغتين. بدون عجلة."
            : "Four published works. Two languages. No rush."}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.6rem",
          }}
        >
          {[
            {
              href: `/${locale}/insights/offline-by-design`,
              image: "/editorial/images/report/report-a.jpg",
              meta: "REPORT 01 · APRIL 2026",
              titleEn: "Offline by Design",
              titleArDecoration: null,
              titleAr: "إقصاءٌ مبرمَج",
              blurbEn:
                "The full advocacy report on digital exclusion in Palestinian camps. 25 pages.",
              blurbAr:
                "التقرير الكامل عن الإقصاء الرقمي للمخيمات الفلسطينية. ٢٥ صفحة.",
            },
            {
              href: "/editorial/human-in-the-loop",
              image: "/editorial/images/leonardo/v4/01-A_v4.jpg",
              meta: "SERIES 01 · 2026",
              titleEn: "Human in the Loop",
              titleArDecoration: null,
              titleAr: "الإنسان في الحلقة",
              blurbEn:
                "Seven long-form essays on AI, automation, and Palestinian futures.",
              blurbAr:
                "سبع مقالات طويلة عن الذكاء الاصطناعي، الأتمتة، والمستقبل الفلسطيني.",
            },
            {
              href: "/editorial/offline-by-design-series",
              image: "/editorial/images/report/report-c.jpg",
              meta: "SERIES 02 · MAY 2026",
              titleEn: "Offline by Design",
              titleEnDecoration: " — The Series",
              titleAr: "إقصاءٌ مبرمَج",
              titleArDecoration: " — السلسلة",
              blurbEn:
                "Six bilingual essays, companions to the report, on digital exclusion.",
              blurbAr:
                "ست مقالات بلغتين، رفيقات التقرير، عن الإقصاء الرقمي.",
            },
            {
              href: "/editorial/the-key-became-a-fingerprint",
              image: "/editorial/images/leonardo/series-03/01_heart_A.jpg",
              meta: "SERIES 03 · MAY 2026",
              titleEn: "The Key Became a Fingerprint",
              titleArDecoration: null,
              titleAr: "المفتاح صار بَصمة",
              blurbEn:
                "Seven essays mapped along the body — heart, lungs, eyes, hands, spine, belly, feet. Each file an X became Y replacement.",
              blurbAr:
                "سَبع مقالات على الجَسَد — القلب، الرئتين، العينين، اليدين، العمود الفقري، البطن، القدمين. كل ملف فيه استبدال.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                minHeight: "460px",
                padding: "1.8rem",
                backgroundImage: `url('${c.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#1A1410",
                textDecoration: "none",
                color: "#F5F0E8",
                overflow: "hidden",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
              className="hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--acc-khadija)]"
            >
              {/* dark gradient overlay for legibility */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(26,20,16,0.32) 0%, rgba(26,20,16,0.22) 38%, rgba(26,20,16,0.80) 78%, rgba(26,20,16,0.96) 100%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--acc-khadija)",
                    fontWeight: 700,
                    marginBottom: "0.9rem",
                  }}
                >
                  {c.meta}
                </p>
                <h4
                  style={{
                    fontFamily: "var(--font-en)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                    color: "#F5F0E8",
                    lineHeight: 1.12,
                    marginBottom: "0.4rem",
                    textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                  }}
                >
                  {c.titleEn}
                  {c.titleEnDecoration ? (
                    <span
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        color: "rgba(245,240,232,0.75)",
                      }}
                    >
                      {c.titleEnDecoration}
                    </span>
                  ) : null}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-ar)",
                    fontWeight: 700,
                    fontSize: "1.45rem",
                    color: "rgba(245,240,232,0.85)",
                    marginBottom: "1rem",
                    direction: "rtl",
                    textAlign: "right",
                    textShadow: "0 2px 14px rgba(0,0,0,0.55)",
                  }}
                >
                  {c.titleAr}
                  {c.titleArDecoration ? (
                    <span style={{ fontWeight: 400 }}>{c.titleArDecoration}</span>
                  ) : null}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "rgba(245,240,232,0.82)",
                    lineHeight: 1.65,
                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {isAr ? c.blurbAr : c.blurbEn}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
