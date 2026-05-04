import type { Metadata } from "next";
import Link from "next/link";
import { KhadijaWitness } from "@/components/home/khadija-witness";

export const metadata: Metadata = {
  title: "حجّة خديجة · Hajjeh Khadija — the witness",
  description:
    "غرفة حجّة خديجة. الكتابة الطويلة في عايدة: سلسلة Human in the Loop، تقرير Offline by Design. The editorial room of Bait Aida — long-form writing on AI, displacement, and Palestinian futures.",
  openGraph: {
    title: "حجّة خديجة · Hajjeh Khadija — the witness",
    description:
      "Hajjeh Khadija's room. The long writing — Human in the Loop, Offline by Design, advocacy reports.",
  },
};

/**
 * Khadija's full room page — the witness · editorial
 *
 * Lists the editorial work: HITL series + Offline by Design report.
 * Links to existing /editorial/ static HTML routes.
 */
export default function KhadijaPage() {
  return (
    <main style={{ paddingTop: "120px", background: "var(--ground)" }}>
      <KhadijaWitness />
      <KhadijaEditorialIndex />
    </main>
  );
}

function KhadijaEditorialIndex() {
  return (
    <section
      className="room-khadija"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 6vw",
        background: "var(--ground)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h3
          style={{
            fontFamily: "var(--font-ar)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--acc-khadija)",
            marginBottom: "2rem",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          الكتابة الطويلة
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "2rem",
          }}
        >
          {/* Offline by Design — the report */}
          <Link
            href="/editorial/offline-by-design-series"
            style={{
              display: "block",
              padding: "2rem",
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
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              REPORT 01 · APRIL 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.6rem",
              }}
            >
              Offline by Design
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.4rem",
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
                fontSize: "1rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              Six bilingual essays on digital exclusion in Palestinian camps. Read the series.
            </p>
          </Link>

          {/* HITL series */}
          <Link
            href="/editorial/human-in-the-loop"
            style={{
              display: "block",
              padding: "2rem",
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
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--acc-khadija)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              SERIES 01 · 2026
            </p>
            <h4
              style={{
                fontFamily: "var(--font-en)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "0.6rem",
              }}
            >
              Human in the Loop
            </h4>
            <p
              style={{
                fontFamily: "var(--font-ar)",
                fontWeight: 700,
                fontSize: "1.4rem",
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
                fontSize: "1rem",
                color: "var(--ink-dim)",
                lineHeight: 1.6,
              }}
            >
              Seven long-form pieces on AI, automation, and Palestinian futures. Read the series.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
