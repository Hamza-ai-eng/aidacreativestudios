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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* ── Card 1: REPORT 01 — Offline by Design ──────────────────── */}
          <Link
            href={`/${locale}/insights/offline-by-design`}
            style={{
              display: "block",
              padding: "1.8rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-khadija)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              textDecoration: "none",
              color: "var(--ink)",
            }}
            className="hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              REPORT 01 · APRIL 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.4rem",
              }}
            >
              Offline by Design
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "var(--ink-dim)",
                marginBottom: "1rem",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              إقصاءٌ مبرمَج
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {isAr
                ? "التقرير الكامل عن الإقصاء الرقمي للمخيمات الفلسطينية. ٢٥ صفحة."
                : "The full advocacy report on digital exclusion in Palestinian camps. 25 pages."}
            </p>
          </Link>

          {/* ── Card 2: SERIES 01 — Human in the Loop ──────────────────── */}
          <Link
            href="/editorial/human-in-the-loop"
            style={{
              display: "block",
              padding: "1.8rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-khadija)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              textDecoration: "none",
              color: "var(--ink)",
            }}
            className="hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              SERIES 01 · 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.4rem",
              }}
            >
              Human in the Loop
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "var(--ink-dim)",
                marginBottom: "1rem",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              الإنسان في الحلقة
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {isAr
                ? "سبع مقالات طويلة عن الذكاء الاصطناعي، الأتمتة، والمستقبل الفلسطيني."
                : "Seven long-form essays on AI, automation, and Palestinian futures."}
            </p>
          </Link>

          {/* ── Card 3: SERIES 02 — Offline by Design — The Series ──────── */}
          <Link
            href="/editorial/offline-by-design-series"
            style={{
              display: "block",
              padding: "1.8rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-khadija)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              textDecoration: "none",
              color: "var(--ink)",
            }}
            className="hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              SERIES 02 · MAY 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.4rem",
              }}
            >
              Offline by Design{" "}
              <span style={{ fontStyle: "normal", fontWeight: 400, color: "var(--ink-dim)" }}>
                — The Series
              </span>
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "var(--ink-dim)",
                marginBottom: "1rem",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              إقصاءٌ مبرمَج{" "}
              <span style={{ fontWeight: 400 }}>— السلسلة</span>
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {isAr
                ? "ست مقالات بلغتين، رفيقات التقرير، عن الإقصاء الرقمي."
                : "Six bilingual essays, companions to the report, on digital exclusion."}
            </p>
          </Link>

          {/* ── Card 4: SERIES 03 — When the Knife Entered ─────────────── */}
          <Link
            href="/editorial/when-the-knife-entered"
            style={{
              display: "block",
              padding: "1.8rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-khadija)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              textDecoration: "none",
              color: "var(--ink)",
            }}
            className="hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              SERIES 03 · MAY 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.4rem",
              }}
            >
              The Key Became a Fingerprint
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "var(--ink-dim)",
                marginBottom: "1rem",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              المفتاح صار بَصمة
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              {isAr
                ? "سَبع مقالات على الجَسَد — القلب، الرئتين، العينين، اليدين، العمود الفقري، البطن، القدمين. كل ملف فيه استبدال."
                : "Seven essays mapped along the body — heart, lungs, eyes, hands, spine, belly, feet. Each file an X became Y replacement."}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
