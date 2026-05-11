"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { VoiceBlock } from "@/components/shared/voice-block";

/**
 * MatriarchStrip — homepage strip for one matriarch room
 *
 * The shared room primitive used by Fatima, Khadija, Karimeh, Hayat on the
 * homepage. Each instance gets:
 *   - room id + accent class (sets --acc CSS variable)
 *   - hero image (with offset color block frame)
 *   - matriarch nameplate + role
 *   - bilingual voice block
 *   - body paragraph(s)
 *   - tatreez strip (passed in via children slot)
 *   - CTA to the full room page
 */

interface MatriarchStripProps {
  id: string;                            /* DOM id, e.g. "fatima" */
  roomClass: string;                     /* "room-fatima" etc — sets --acc */
  ordinal: string;                       /* "II", "III" … */
  arRoomLabel: string;                   /* "غرفة II — الحفظ" */
  enRoomLabel: string;                   /* "ROOM II — THE KEEPER" */
  arName: string;                        /* "فاطمة" */
  enName: string;                        /* "Fatima" */
  enRole: string;                        /* "the keeper" */
  arVoice: ReactNode;
  enVoice: ReactNode;
  arBody?: ReactNode;
  enBody?: ReactNode;
  arCta: string;                         /* "ادخلوا غرفة فاطمة" */
  enCta: string;                         /* "Enter Fatima's room" */
  hrefSuffix: string;                    /* "/fatima" */
  imgSrc: string;
  imgAlt: string;
  tatreez: ReactNode;                    /* <TatreezGalilee /> etc */
  flip?: boolean;                        /* swap image + text columns */
}

export function MatriarchStrip(props: MatriarchStripProps) {
  const {
    id, roomClass, ordinal, arRoomLabel, enRoomLabel,
    arName, enName, enRole,
    arVoice, enVoice, arBody, enBody, arCta, enCta, hrefSuffix,
    imgSrc, imgAlt, tatreez, flip = false,
  } = props;

  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section
      id={id}
      className={`${roomClass} room-strip`}
      style={{
        position: "relative",
        padding: "clamp(4rem, 9vw, 9rem) 6vw",
        background: "var(--ground)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: flip ? "minmax(0, 7fr) minmax(0, 5fr)" : "minmax(0, 5fr) minmax(0, 7fr)",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
        }}
        className="matriarch-grid"
      >
        {/* image col */}
        <div
          style={{
            order: flip ? 2 : 1,
          }}
          className="matriarch-img-col"
        >
          <div className="portrait-frame" style={{ position: "relative" }}>
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* text col */}
        <div
          style={{ order: flip ? 1 : 2 }}
          className="matriarch-text-col"
        >
          {/* room meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              color: "var(--acc)",
              marginBottom: "1.1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <span>{isAr ? arRoomLabel : enRoomLabel}</span>
            <span style={{ flex: 1, height: "2px", background: "var(--acc)", opacity: 0.3 }} />
          </div>

          {/* tatreez */}
          <div
            style={{
              maxWidth: "200px",
              color: "var(--acc)",
              marginBottom: "1.2rem",
            }}
          >
            {tatreez}
          </div>

          {/* nameplate */}
          <h2 className="matriarch-name" style={{ marginBottom: "0.4rem" }}>
            {arName}
            <span className="ord">{ordinal}</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-en)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "var(--ink-dim)",
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 700 }}>
              {enName}
            </strong>{" "}
            — {enRole}
          </p>

          {/* voice */}
          <VoiceBlock ar={arVoice} en={enVoice} />

          {/* body (optional — some rooms render none) */}
          {(isAr ? arBody : enBody) ? (
            <div
              style={{
                marginTop: "2rem",
                maxWidth: "60ch",
                fontFamily: "var(--font-ar-body)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--ink)",
                direction: isAr ? "rtl" : "ltr",
                textAlign: isAr ? "right" : "left",
              }}
            >
              {isAr ? arBody : enBody}
            </div>
          ) : null}

          {/* cta */}
          <div style={{ marginTop: "2.2rem" }}>
            <Link href={`/${locale}${hrefSuffix}`} className="room-cta">
              <span>{isAr ? arCta : enCta}</span>
              <span>{isAr ? "←" : "→"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile: stack columns */}
      <style>{`
        @media (max-width: 820px) {
          .matriarch-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .matriarch-img-col, .matriarch-text-col {
            order: 0 !important;
          }
          .matriarch-img-col { order: -1 !important; }
        }
      `}</style>
    </section>
  );
}
