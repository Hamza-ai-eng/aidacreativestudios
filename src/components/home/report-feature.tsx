"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
  HatchPattern,
  InkSplotch,
} from "@/components/shared/paper-ornaments";

/**
 * Report Feature — Offline by Design / إقصاء مبرمَج
 * Homepage section: featured advocacy report.
 * Red register. Three key stats + CTA. Visual-first layout.
 * IMAGE SLOT: replace the ink-wash block with a Leonardo image
 * once /public/editorial/images/report/offline-by-design.jpg exists.
 */

export function ReportFeature() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      style={{
        position: "relative",
        background: "var(--ground-deep)",
        overflow: "hidden",
        borderTop: "1px solid rgba(196,26,42,0.2)",
      }}
    >
      {/* Paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.7'/></svg>\")",
          opacity: 0.10,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      <RegistrationMarks color="var(--ink-faded)" inset={20} size={14} opacity={0.2} />

      <InkSplotch
        color="var(--wm-red)"
        opacity={0.06}
        size={600}
        top="-10%"
        right={isAr ? "auto" : "-10%"}
        left={isAr ? "-10%" : "auto"}
        rotation={10}
        seed={4}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1340px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "560px",
        }}
      >
        {/* ── Left: visual panel ── */}
        <div
          style={{
            position: "relative",
            background: "var(--void)",
            overflow: "hidden",
            order: isAr ? 1 : 0,
            minHeight: "400px",
          }}
        >
          {/* IMAGE SLOT — replace this div with <Image> once report visual is generated */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 40% 50%, rgba(196,26,42,0.25) 0%, rgba(196,26,42,0.05) 50%, transparent 80%)",
            }}
          />

          <HatchPattern
            color="var(--wm-red)"
            opacity={0.12}
            spacing={8}
            angle={-45}
            top={0}
            left={0}
            width="100%"
            height="100%"
          />

          {/* Big ghost text fills the visual panel */}
          <CalligraphyGhost
            text="إقصاء"
            size="clamp(16rem, 30vw, 40rem)"
            color="var(--wm-red)"
            opacity={0.18}
            top="15%"
            left="-10%"
            rotation={-8}
          />

          {/* Stats layered over the visual */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: isAr ? "auto" : "40px",
              right: isAr ? "40px" : "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              { num: "5.9M", labelAr: "لاجئ مسجّل لدى الأونروا", labelEn: "UNRWA-registered refugees" },
              { num: "$20", labelAr: "اشتراك ChatGPT Plus / شهر", labelEn: "ChatGPT Plus / month" },
              { num: "$16.67", labelAr: "مساعدة الأونروا / شخص / شهر", labelEn: "UNRWA aid / person / month" },
            ].map((stat) => (
              <div key={stat.num} style={{ direction: isAr ? "rtl" : "ltr" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    color: "var(--wm-red-hot)",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "3px",
                    lineHeight: 1.4,
                  }}
                >
                  {isAr ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>

          {/* Report 01 stamp */}
          <ArchiveStamp
            lines={["REPORT — 01", "AIDA · القدس", "APRIL 2026", "ADVOCACY"]}
            color="var(--wm-red)"
            rotation={-4}
            top="20px"
            right={isAr ? "auto" : "24px"}
            left={isAr ? "24px" : "auto"}
            opacity={0.5}
          />
        </div>

        {/* ── Right: text panel ── */}
        <div
          style={{
            padding: "72px 6vw 72px 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "32px",
            order: isAr ? 0 : 1,
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {/* Kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--wm-red)",
            }}
          >
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--wm-red)" }} />
            {isAr ? "تقرير مناصرة · حريّة" : "Advocacy Report · Hurriyeh"}
          </div>

          {/* Title */}
          <div>
            <h2
              style={{
                fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                fontWeight: 700,
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 0.95,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              {isAr ? "إقصاءٌ مبرمَج" : "Offline by Design"}
            </h2>
            <div
              style={{
                fontFamily: isAr ? "var(--font-en)" : "var(--font-ar)",
                fontWeight: isAr ? 700 : 400,
                fontStyle: isAr ? "italic" : "normal",
                fontSize: isAr ? "1.4rem" : "1rem",
                color: "var(--wm-red)",
                opacity: 0.7,
              }}
            >
              {isAr ? "Offline by Design" : "إقصاءٌ مبرمَج"}
            </div>
          </div>

          {/* Summary */}
          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              lineHeight: isAr ? 1.95 : 1.75,
              color: "var(--ink-dim)",
              maxWidth: "480px",
            }}
          >
            {isAr
              ? "العوائق البنيوية أمام وصول اللاجئين الفلسطينيين إلى أدوات الذكاء الاصطناعي في لبنان والأردن وسوريا والضفة الغربية المحتلة. كهرباء. مصارف. نت. لغة. والشركات نفسها بتتعاقد مع الجيش الإسرائيلي."
              : "The structural barriers keeping Palestinian refugees in Lebanon, Jordan, Syria, and the occupied West Bank from AI tools. Power. Banking. Connectivity. Language. And the same companies contracted to the Israeli military."}
          </p>

          {/* Pull */}
          <blockquote
            style={{
              borderLeft: isAr ? "none" : "3px solid var(--wm-red)",
              borderRight: isAr ? "3px solid var(--wm-red)" : "none",
              paddingLeft: isAr ? "0" : "20px",
              paddingRight: isAr ? "20px" : "0",
              fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
              fontWeight: 700,
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              lineHeight: isAr ? 1.7 : 1.45,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            {isAr
              ? "مستبعدين بنفس البنية اللي صناعة الذكاء الاصطناعي عم تتعاقد لتديمها."
              : "Excluded by the same architecture the AI industry is contracted to sustain."}
          </blockquote>

          {/* CTA */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href={`/${locale}/insights/offline-by-design`}
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
                padding: "14px 28px",
                transition: "background 0.2s",
              }}
              className="hover:bg-[var(--wm-red-deep)]"
            >
              {isAr ? "← اقرأ التقرير" : "Read the report →"}
            </Link>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {isAr ? "أبريل ٢٠٢٦ · ٢٥–٣٠ دقيقة" : "April 2026 · 25–30 min read"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
