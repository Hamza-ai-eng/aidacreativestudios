"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { WatermelonSeal } from "@/components/shared/watermelon-seal";
import { KeyMark } from "@/components/shared/key-mark";
import { VoiceBlock } from "@/components/shared/voice-block";
import { TatreezBethlehem } from "@/components/shared/tatreez/bethlehem";
import {
  RegistrationMarks,
  InkSplotch,
  CalligraphyGhost,
  ArchiveStamp,
  RulerMark,
} from "@/components/shared/paper-ornaments";

/**
 * Aida — the threshold (Room I, Bait Aida)
 *
 * The hero. عايدة at the door. Right-of-return iconography (the key).
 * Voice register after Barghouti: definition-form.
 *
 * Layered structure follows the existing Hero pattern (paper grain, ink splotches,
 * registration marks, watermelon seal as watermark) — but the headline is the
 * Aida nameplate at architectural scale, with the bilingual definition voice.
 */
export function AidaThreshold() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      className="room-aida room-strip"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "var(--ground)",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "8vh",
      }}
    >
      {/* full-bleed flag-adjacent accent strip at top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, height: "4px",
          background:
            "linear-gradient(90deg, var(--wm-red) 0 25%, var(--wm-green) 25% 50%, var(--patina-gold) 50% 75%, var(--ink) 75% 100%)",
          zIndex: 4,
        }}
      />

      {/* paper grain */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.7'/></svg>\")",
          opacity: 0.07,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* gold wash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 80% 25%, rgba(154, 122, 58, 0.13) 0%, transparent 55%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* red ink wash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at 15% 80%, rgba(196, 26, 42, 0.10) 0%, transparent 50%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* calligraphy ghost — عايدة, massive, faded */}
      <CalligraphyGhost
        text="عايدة"
        size="clamp(28rem, 50vw, 60rem)"
        color="var(--ink)"
        opacity={0.04}
        top="6%"
        left={isAr ? "auto" : "-6%"}
        right={isAr ? "-6%" : "auto"}
        rotation={-2}
      />

      {/* registration marks */}
      <RegistrationMarks color="var(--ink-faded)" inset={28} size={20} opacity={0.4} />

      {/* archive stamp — file: AIDA · 2026 · BAIT */}
      <ArchiveStamp
        lines={["BAIT — AIDA", "JERUSALEM · 2026", "ROOM I · THE THRESHOLD"]}
        color="var(--patina-copper)"
        rotation={-3.5}
        top="14%"
        left={isAr ? "auto" : "5%"}
        right={isAr ? "5%" : "auto"}
      />

      {/* ruler */}
      <RulerMark
        orientation="vertical"
        length="60vh"
        ticks={20}
        color="var(--ink-faded)"
        opacity={0.18}
        top="20vh"
        left={isAr ? "auto" : "1.5vw"}
        right={isAr ? "1.5vw" : "auto"}
      />

      {/* watermelon seal — distant background watermark, reduced for portrait */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          ...(isAr ? { left: "-8vw" } : { right: "-8vw" }),
          bottom: "-10vh",
          width: "44vw", maxWidth: "640px",
          aspectRatio: "1",
          opacity: 0.06,
          mixBlendMode: "multiply",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <WatermelonSeal fill />
      </div>

      {/* ink splotch — gold, behind nameplate */}
      <InkSplotch
        color="var(--patina-gold)"
        opacity={0.10}
        size={480}
        top="28%"
        left={isAr ? "10%" : "auto"}
        right={isAr ? "auto" : "10%"}
        rotation={12}
        seed={5}
      />

      {/* meta row */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          padding: "0 6vw",
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
        <span>{isAr ? "بيت عايدة · القدس" : "BAIT AIDA · JERUSALEM"}</span>
        <span style={{ color: "var(--acc-aida)" }}>
          {isAr ? "غرفة I · العتبة" : "ROOM I · THE THRESHOLD"}
        </span>
      </div>

      {/* foreground — 2-column on desktop (text + portrait), single col on mobile */}
      <div
        className="threshold-grid"
        style={{
          position: "relative",
          zIndex: 3,
          padding: "min(8vh, 80px) 6vw 0",
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
      >
        {/* TEXT COLUMN */}
        <div
          className="threshold-text-col"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isAr ? "flex-end" : "flex-start",
            order: isAr ? 2 : 1,
          }}
        >
        {/* tatreez strip above nameplate */}
        <div style={{ width: "180px", color: "var(--acc-aida)", marginBottom: "18px" }}>
          <TatreezBethlehem />
        </div>

        {/* the nameplate — عايدة, architectural scale */}
        <h1
          style={{
            fontFamily: "var(--font-ar)",
            fontWeight: 700,
            fontSize: "clamp(5rem, 14vw, 12rem)",
            lineHeight: 0.92,
            color: "var(--ink)",
            margin: 0,
            letterSpacing: "-0.02em",
            textShadow: "0 1px 0 rgba(26,20,16,0.06)",
            direction: "rtl",
            textAlign: isAr ? "right" : "left",
            position: "relative",
            zIndex: 4,
          }}
        >
          عايدة
        </h1>

        {/* role line (EN-italic complement) */}
        <p
          style={{
            fontFamily: "var(--font-en)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)",
            color: "var(--ink-dim)",
            marginTop: "8px",
            marginBottom: "32px",
            direction: "ltr",
            textAlign: isAr ? "right" : "left",
          }}
        >
          <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 700 }}>
            Aida
          </strong>{" "}
          — the one who returns
        </p>

        {/* voice — definition form, after Barghouti */}
        <VoiceBlock
          ar={
            <>
              <p style={{ margin: 0 }}>
                عايدة اسم بنت. <span className="em">عايدة اسم مخيّم في بيت لحم.</span> عايدة فعل: «عاد».
              </p>
              <p style={{ margin: "0.4rem 0 0" }}>عايدة هي اللي بترجع.</p>
              <p style={{ margin: "0.9rem 0 0" }}>
                هذا بيتي. على بابه مفتاح. <span className="em">المفتاح موجود.</span>
              </p>
              <p style={{ margin: "0.4rem 0 0", fontWeight: 700 }}>ادخلوا.</p>
            </>
          }
          en={
            <>
              Aida is a girl&apos;s name.{" "}
              <span className="em">Aida is the name of a refugee camp in Bethlehem.</span>{" "}
              Aida is a verb: &ldquo;to return.&rdquo;
              <br />
              Aida is the one who returns.
              <br />
              This is my house. By its door, a key.{" "}
              <span className="em">The key is kept.</span>
              <br />
              <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 700 }}>
                Come in.
              </strong>
            </>
          }
        />

        {/* the key pill */}
        <div style={{ marginTop: "2.2rem", display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              padding: "0.7rem 1.1rem",
              background: "var(--ink)",
              color: "var(--ground)",
              fontFamily: "var(--font-ar)",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            <KeyMark size={20} />
            المفتاح — the key, kept
          </span>
        </div>

        {/* CTAs into the rooms */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            direction: isAr ? "rtl" : "ltr",
          }}
        >
          <Link href={`/${locale}/khadija`} className="room-cta" style={{ background: "var(--acc-khadija)" }}>
            {isAr ? "غرفة الشاهدة" : "The witness's room"}
            <span>{isAr ? "←" : "→"}</span>
          </Link>
          <Link href={`/${locale}/karimeh`} className="room-cta" style={{ background: "var(--acc-karimeh)" }}>
            {isAr ? "غرفة الدّكّان" : "The studio"}
            <span>{isAr ? "←" : "→"}</span>
          </Link>
        </div>
        </div>
        {/* /TEXT COLUMN */}

        {/* PORTRAIT COLUMN */}
        <div
          className="threshold-img-col"
          style={{ order: isAr ? 1 : 2 }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "520px",
              marginInline: "auto",
            }}
          >
            <Image
              src="/portraits/aida.jpg"
              alt="عايدة — العتبة · Aida, the threshold"
              width={832}
              height={1040}
              priority
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "contrast(1.04) saturate(1.04)",
                boxShadow: "0 30px 60px -25px rgba(26, 20, 16, 0.45), 0 8px 20px -10px rgba(154, 122, 58, 0.25)",
              }}
            />
          </div>
        </div>
        {/* /PORTRAIT COLUMN */}
      </div>

      {/* mobile: stack columns vertically */}
      <style>{`
        @media (max-width: 900px) {
          .threshold-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .threshold-text-col,
          .threshold-img-col {
            order: 0 !important;
          }
          .threshold-img-col { order: -1 !important; }
        }
      `}</style>

      {/* scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "3px",
          color: "var(--ink-faded)",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 3,
        }}
      >
        <span>{isAr ? "ادخل" : "enter"}</span>
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
