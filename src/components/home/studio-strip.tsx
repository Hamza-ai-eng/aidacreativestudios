"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  TatreezPattern,
  CalligraphyGhost,
  ArchiveStamp,
  HatchPattern,
} from "@/components/shared/paper-ornaments";

/**
 * Studio Strip — agency register section
 * Patina gold. Vertical label. Short statement.
 * From homepage.html: section.studio
 */
export function StudioStrip() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, var(--ground-mid) 0%, var(--ground-deep) 100%)",
        padding: "96px 6vw",
        overflow: "hidden",
      }}
    >
      {/* Layered paper texture */}
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

      {/* Patina gold wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(154,122,58,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      {/* Tatreez pattern — left edge full height */}
      <TatreezPattern
        color="var(--patina-gold)"
        opacity={0.22}
        size={24}
        width={24}
        height={300}
        top="50%"
        left={isAr ? "auto" : "1vw"}
        right={isAr ? "1vw" : "auto"}
      />

      {/* Calligraphy ghost — "استوديو" in patina gold */}
      <CalligraphyGhost
        text="استوديو"
        size="clamp(8rem, 18vw, 18rem)"
        color="var(--patina-gold)"
        opacity={0.05}
        top="10%"
        right={isAr ? "auto" : "5%"}
        left={isAr ? "5%" : "auto"}
        rotation={-2}
      />

      {/* Hatch pattern — top corner */}
      <HatchPattern
        color="var(--patina-copper)"
        opacity={0.10}
        spacing={6}
        angle={-45}
        top={0}
        left={isAr ? "auto" : 0}
        right={isAr ? 0 : "auto"}
        width="30%"
        height="60%"
      />

      {/* Archive stamp — gold */}
      <ArchiveStamp
        lines={["STUDIO — RECORD", "AIDA · القدس", "2014 — 2026"]}
        color="var(--patina-gold)"
        rotation={4}
        top="15%"
        left={isAr ? "auto" : "8%"}
        right={isAr ? "8%" : "auto"}
        opacity={0.7}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1340px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Vertical label */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--patina-gold)",
            writingMode: "vertical-rl",
            transform: isAr ? "none" : "rotate(180deg)",
            borderLeft: isAr ? "none" : "1px solid var(--patina-gold)",
            borderRight: isAr ? "1px solid var(--patina-gold)" : "none",
            paddingLeft: isAr ? "0" : "16px",
            paddingRight: isAr ? "16px" : "0",
          }}
        >
          {isAr ? "الاستوديو · STUDIO" : "STUDIO · الاستوديو"}
        </span>

        {/* Statement */}
        <p
          style={{
            fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
            fontStyle: isAr ? "normal" : "italic",
            fontSize: "clamp(1.2rem, 2vw, 1.65rem)",
            lineHeight: isAr ? 1.85 : 1.55,
            color: "var(--ink)",
            maxWidth: "680px",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          {isAr ? (
            <>
              نَكتب.{" "}
              <em style={{ color: "var(--patina-gold)", fontStyle: "normal" }}>ونَبني أيضاً.</em>{" "}
              هويّاتٌ، اتّصالاتٌ، وأنظمةٌ للمؤسسات الفلسطينية والعربية — من القدس.
            </>
          ) : (
            <>
              We write.{" "}
              <em style={{ color: "var(--patina-gold)" }}>We also build.</em>{" "}
              Identities, communications, and systems for Palestinian and Arab
              institutions — from Jerusalem.
            </>
          )}
        </p>

        {/* CTA */}
        <Link
          href={`/${locale}/services`}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--patina-gold)",
            whiteSpace: "nowrap",
            borderBottom: "1px solid var(--patina-gold)",
            paddingBottom: "6px",
            transition: "color 0.2s",
          }}
          className="hover:text-[var(--ink)]"
        >
          {isAr ? "شاهد أعمالنا ←" : "See our work →"}
        </Link>
      </div>
    </section>
  );
}
