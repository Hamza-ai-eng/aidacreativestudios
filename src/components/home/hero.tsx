"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { WatermelonSeal } from "@/components/shared/watermelon-seal";
import {
  RegistrationMarks,
  InkSplotch,
  CalligraphyGhost,
  ArchiveStamp,
  RulerMark,
  TatreezPattern,
} from "@/components/shared/paper-ornaments";

/**
 * Hero — homepage landing
 *
 * Layered structure (bottom to top):
 *   1. Beige paper ground
 *   2. Section grain (multiply)
 *   3. Red ink wash (upper right) + green wash (lower left)
 *   4. Calligraphy ghost — massive faded "إقصاء" behind the headline
 *   5. Multiple ink splotches (red + green)
 *   6. Registration corner marks
 *   7. Tatreez pattern strip — top edge
 *   8. Vertical ruler mark — side
 *   9. Archive stamp — file ID
 *   10. Hero watermark seal — large translucent
 *   11. Small accent seals — corners
 *   12. Foreground content (kicker, headline, quote, CTA)
 *   13. Scroll indicator
 */
export function Hero() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "var(--ground)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "10vh",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 2: Section grain ─────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.7'/></svg>\")",
          opacity: 0.08,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 3: Red wash (upper right) ───────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 30%, rgba(196,26,42,0.12) 0%, transparent 55%)",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      {/* ── Layer 3b: Green wash (lower left) ─────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 12% 85%, rgba(42,92,58,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      {/* ── Layer 4: Calligraphy ghost — massive faded Arabic ── */}
      <CalligraphyGhost
        text="إقصاء"
        size="clamp(28rem, 50vw, 60rem)"
        color="var(--ink)"
        opacity={0.035}
        top="8%"
        left={isAr ? "auto" : "-8%"}
        right={isAr ? "-8%" : "auto"}
        rotation={-4}
      />

      {/* ── Layer 5: Ink splotches — red bleed behind headline ── */}
      <InkSplotch
        color="var(--wm-red)"
        opacity={0.08}
        size={520}
        top="35%"
        left={isAr ? "5%" : "auto"}
        right={isAr ? "auto" : "5%"}
        rotation={15}
        seed={3}
      />

      <InkSplotch
        color="var(--wm-green)"
        opacity={0.07}
        size={340}
        bottom="15%"
        left={isAr ? "auto" : "8%"}
        right={isAr ? "8%" : "auto"}
        rotation={-25}
        seed={7}
      />

      {/* ── Layer 6: Corner registration marks ─────────────── */}
      <RegistrationMarks color="var(--ink-faded)" inset={32} size={20} opacity={0.45} />

      {/* ── Layer 7: Tatreez pattern strip — top edge ──────── */}
      <TatreezPattern
        color="var(--wm-red-deep)"
        opacity={0.16}
        size={20}
        width={320}
        height={20}
        top={20}
        left={isAr ? "auto" : "6vw"}
        right={isAr ? "6vw" : "auto"}
      />

      {/* ── Layer 8: Vertical ruler mark — side edge ───────── */}
      <RulerMark
        orientation="vertical"
        length="60vh"
        ticks={20}
        color="var(--ink-faded)"
        opacity={0.2}
        top="20vh"
        left={isAr ? "auto" : "1vw"}
        right={isAr ? "1vw" : "auto"}
      />

      {/* ── Layer 9: Archive stamp ─────────────────────────── */}
      <ArchiveStamp
        lines={["FILE — 01", "AIDA · 2026", "OFFLINE BY DESIGN"]}
        color="var(--patina-copper)"
        rotation={-3.5}
        top="14%"
        left={isAr ? "auto" : "5%"}
        right={isAr ? "5%" : "auto"}
      />

      {/* ── Layer 10: Watermark seal (large) ───────────────── */}
      <div
        style={{
          position: "absolute",
          ...(isAr ? { left: "3vw" } : { right: "3vw" }),
          top: "50%",
          transform: "translateY(-50%)",
          width: "44vw",
          maxWidth: "640px",
          aspectRatio: "1",
          opacity: 0.18,
          pointerEvents: "none",
          zIndex: 1,
          mixBlendMode: "multiply",
        }}
      >
        <WatermelonSeal fill />
      </div>

      {/* ── Layer 11: Small accent seal ────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          ...(isAr ? { left: "12%" } : { right: "12%" }),
          opacity: 0.35,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          transform: "rotate(-12deg)",
          zIndex: 1,
        }}
      >
        <WatermelonSeal size={64} />
      </div>

      {/* ── Layer 12a: Top stripe (publisher mark) ─────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, var(--wm-red) 0%, var(--wm-red) 30%, var(--wm-white) 30%, var(--wm-white) 33%, var(--wm-green) 33%, var(--wm-green) 100%)",
          opacity: 0.85,
          zIndex: 2,
        }}
      />

      {/* ── Layer 12b: Meta row ────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "120px 6vw 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--ink-faded)",
        }}
      >
        <span>{isAr ? "تقرير ٠١ · أبريل ٢٠٢٦" : "REPORT 01 · APRIL 2026"}</span>
        <span style={{ color: "var(--patina-copper)" }}>
          {isAr ? "إقصاء مبرمَج · OFFLINE BY DESIGN" : "إقصاء مبرمَج · OFFLINE BY DESIGN"}
        </span>
      </div>

      {/* ── Layer 12c: Foreground content ──────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 6vw",
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: isAr ? "flex-end" : "flex-start",
        }}
      >
        {/* Kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "32px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--wm-red)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "48px",
              height: "1px",
              background: "var(--wm-red)",
            }}
          />
          {isAr ? "صدر حديثاً · OUT NOW" : "OUT NOW · صدر حديثاً"}
        </div>

        {/* Arabic display headline */}
        <h1
          style={{
            fontFamily: "var(--font-ar)",
            fontWeight: 700,
            fontSize: "clamp(5rem, 15vw, 13rem)",
            lineHeight: 0.95,
            color: "var(--ink)",
            marginRight: isAr ? "-2vw" : "0",
            marginLeft: isAr ? "0" : "-2vw",
            letterSpacing: "-0.02em",
            textShadow: "0 1px 0 rgba(26,20,16,0.06)",
            direction: "rtl",
            position: "relative",
            zIndex: 3,
          }}
        >
          إقصاءٌ مبرمَج
        </h1>

        {/* English subtitle */}
        <div
          style={{
            fontFamily: "var(--font-en)",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            lineHeight: 1,
            color: "var(--wm-red)",
            marginTop: "24px",
            marginBottom: "40px",
            position: "relative",
            zIndex: 3,
          }}
        >
          Offline{" "}
          <span
            style={{
              fontStyle: "normal",
              color: "var(--ink-faded)",
              margin: "0 12px",
              fontWeight: 400,
            }}
          >
            ·
          </span>{" "}
          by Design.
        </div>

        {/* Quote */}
        <p
          style={{
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            fontStyle: isAr ? "normal" : "italic",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            lineHeight: isAr ? 1.95 : 1.7,
            color: "var(--ink-dim)",
            maxWidth: "640px",
            marginBottom: "36px",
            textAlign: isAr ? "right" : "left",
            direction: isAr ? "rtl" : "ltr",
            position: "relative",
            zIndex: 3,
          }}
        >
          {isAr
            ? "اللاجئون الفلسطينيون ليسوا مُستثنَين من الذكاء الاصطناعي بالصدفة، ولا بالإهمال. هم مُستثنَون بالبنية ذاتها التي تتعاقد صناعة الذكاء الاصطناعي على إدامتها. الإقصاء هو المنتَج."
            : "Palestinian refugees are not excluded from AI by accident or oversight. They are excluded by the same architecture of dispossession the AI industry is contracted to sustain. The exclusion is the product."}
        </p>

        {/* CTA */}
        <Link
          href={`/${locale}/insights`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            fontStyle: isAr ? "normal" : "italic",
            fontWeight: 500,
            fontSize: isAr ? "1rem" : "1.1rem",
            color: "var(--wm-red)",
            borderBottom: "1px solid transparent",
            paddingBottom: "4px",
            transition: "gap 0.2s, border-color 0.2s",
            position: "relative",
            zIndex: 3,
          }}
          className="group hover:border-b-[var(--wm-red)] hover:gap-[22px]"
        >
          <span>{isAr ? "اقرأ التقرير" : "Read the report"}</span>
          <span style={{ fontFamily: "var(--font-en)", fontSize: "1.4em" }}>←</span>
        </Link>
      </div>

      {/* ── Layer 13: Scroll indicator ─────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "3px",
          color: "var(--ink-faded)",
          zIndex: 2,
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span>{isAr ? "اقرأ" : "scroll"}</span>
        <span
          style={{
            display: "block",
            width: "1px",
            height: "32px",
            background: "var(--ink-faded)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
