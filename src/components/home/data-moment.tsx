"use client";

import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  InkSplotch,
  ArchiveStamp,
  RulerMark,
  HatchPattern,
} from "@/components/shared/paper-ornaments";

/** حسابُ الإقصاء · The Math of Exclusion
 *
 * Three data rows: ChatGPT price / UNRWA cash / zero bank accounts.
 * Sourced from: OpenAI 2026 / UNRWA Lebanon 2024 / Statutory exclusion.
 * From homepage.html: section.data-moment
 */
export function DataMoment() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const rows = [
    {
      num: "$20",
      unit: isAr ? "/ شهر" : "/ month",
      label: isAr ? "اشتراك ChatGPT Plus." : "ChatGPT Plus subscription.",
      src: "OpenAI · 2026",
    },
    {
      num: "$16.67",
      unit: isAr ? "/ شخص" : "/ person",
      label: isAr
        ? "المساعدة النقدية الطارئة من الأونروا، شهرياً."
        : "UNRWA emergency cash assistance, monthly.",
      src: "UNRWA · Lebanon · 2024",
    },
    {
      num: "0",
      unit: isAr ? "بطاقة" : "cards",
      label: isAr
        ? "لا حساب مصرفي. لا بطاقة ائتمان. تصل المساعدة نقداً."
        : "No bank account. No credit card. Aid arrives as cash.",
      src: "Statutory exclusion · 60 yrs",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        background: "var(--ground-deep)",
        padding: "140px 6vw",
        overflow: "hidden",
      }}
    >
      {/* Layered paper texture */}
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

      {/* Top edge — torn paper line in red */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--wm-red) 30%, var(--wm-red-deep) 50%, var(--wm-red) 70%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Section number — massive ghost */}
      <CalligraphyGhost
        text="٠٢"
        size="clamp(20rem, 35vw, 35rem)"
        color="var(--wm-red-deep)"
        opacity={0.06}
        top="5%"
        left={isAr ? "auto" : "-2%"}
        right={isAr ? "-2%" : "auto"}
        rotation={-6}
      />

      {/* Diagonal hatching — bottom right */}
      <HatchPattern
        color="var(--ink)"
        opacity={0.06}
        spacing={5}
        angle={45}
        bottom={0}
        right={0}
        width="40%"
        height="50%"
      />

      {/* Vertical ruler — far edge */}
      <RulerMark
        orientation="vertical"
        length="80%"
        ticks={20}
        color="var(--ink-faded)"
        opacity={0.18}
        top="10%"
        left={isAr ? "auto" : "1.5vw"}
        right={isAr ? "1.5vw" : "auto"}
      />

      {/* Red ink splotch — behind the $20 row */}
      <InkSplotch
        color="var(--wm-red)"
        opacity={0.04}
        size={500}
        top="15%"
        left={isAr ? "auto" : "0%"}
        right={isAr ? "0%" : "auto"}
        rotation={20}
        seed={11}
      />

      {/* Archive stamp — corner */}
      <ArchiveStamp
        lines={["DATA — ٠٢", "EVIDENCE", "AIDA · 2026"]}
        color="var(--ink-dim)"
        rotation={2}
        bottom="6%"
        right={isAr ? "auto" : "5%"}
        left={isAr ? "5%" : "auto"}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1340px", margin: "0 auto" }}>

        {/* Kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "80px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "var(--wm-red)" }}>٠٢</span>
          <span style={{ width: "60px", height: "1px", background: "var(--wm-red)", display: "inline-block" }} />
          <span style={{ color: "var(--text-secondary)" }}>
            {isAr ? "حسابُ الإقصاء · The Math of Exclusion" : "The Math of Exclusion · حسابُ الإقصاء"}
          </span>
        </div>

        {/* Data rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {rows.map((row, i) => (
            <div
              key={`row-${i}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "48px",
                alignItems: "baseline",
                padding: "42px 0",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(26,20,16,0.12)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  lineHeight: 1,
                  color: "var(--wm-red-hot)",
                  letterSpacing: "-0.02em",
                }}
              >
                {row.num}
                <span
                  style={{
                    fontSize: "0.5em",
                    color: "var(--wm-red)",
                    fontWeight: 400,
                    marginLeft: isAr ? "0" : "8px",
                    marginRight: isAr ? "8px" : "0",
                  }}
                >
                  {row.unit}
                </span>
              </div>
              <div
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
                  color: "var(--ink-dim)",
                  textAlign: isAr ? "left" : "right",
                  lineHeight: isAr ? 1.7 : 1.4,
                  maxWidth: "380px",
                }}
              >
                {row.label}
                <span
                  style={{
                    display: "block",
                    marginTop: "6px",
                    fontFamily: "var(--font-mono)",
                    fontStyle: "normal",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {row.src}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coda */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid rgba(196,26,42,0.25)",
            fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
            fontWeight: 700,
            fontStyle: isAr ? "normal" : "italic",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: 1.4,
            color: "var(--ink)",
            maxWidth: "780px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {isAr ? (
            <>
              الفجوة ليست بين السعر والدخل. الفجوة بين{" "}
              <em style={{ color: "var(--wm-red-hot)", fontStyle: "normal" }}>منتَجٍ</em>{" "}
              وبين{" "}
              <em style={{ color: "var(--wm-green-pale)", fontStyle: "normal" }}>بنيةٍ</em>{" "}
              صُمِّمت كي لا تَصِل إليه.
            </>
          ) : (
            <>
              The gap is not between price and income. The gap is between a{" "}
              <em style={{ color: "var(--wm-red-hot)" }}>product</em> and an{" "}
              <em style={{ color: "var(--wm-green-pale)" }}>architecture</em> designed so it
              never arrives.
            </>
          )}
        </div>
      </div>
    </section>
  );
}
