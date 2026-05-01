"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
  InkSplotch,
} from "@/components/shared/paper-ornaments";

/**
 * مين إحنا · About
 * A description of what AIDA is. Not a manifesto. Not a pitch.
 * Direct, grounded, in the design register of the rest of the site.
 */
export function AboutContent() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground)",
          padding: "160px 6vw 100px",
          overflow: "hidden",
          borderBottom: "1px solid rgba(26,20,16,0.10)",
        }}
      >
        <RegistrationMarks color="var(--ink-faded)" inset={28} size={16} opacity={0.3} />

        <CalligraphyGhost
          text="مين"
          size="clamp(18rem, 32vw, 44rem)"
          color="var(--wm-green)"
          opacity={0.04}
          top="5%"
          right={isAr ? "auto" : "-4%"}
          left={isAr ? "-4%" : "auto"}
          rotation={-3}
        />

        <ArchiveStamp
          lines={["ABOUT", "AIDA · القدس", "2014 — 2026"]}
          color="var(--patina-gold)"
          rotation={3}
          top="20%"
          right={isAr ? "auto" : "5%"}
          left={isAr ? "5%" : "auto"}
          opacity={0.6}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "860px" }}>
          {/* Kicker */}
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
            {isAr ? "مين إحنا" : "Who We Are"}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-ar)",
              fontWeight: 700,
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              lineHeight: 1,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "48px",
              direction: "rtl",
            }}
          >
            {isAr ? "مين إحنا" : "AIDA"}
          </h1>
        </div>
      </section>

      {/* ── What AIDA is ─────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ground)",
          padding: "80px 6vw 80px",
          borderBottom: "1px solid rgba(26,20,16,0.10)",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              lineHeight: isAr ? 2 : 1.75,
              color: "var(--ink)",
              marginBottom: "40px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "AIDA معهد نقدي فلسطيني ودكّان تصميم، من القدس."
              : "AIDA is a Palestinian critical institute and design studio, based in Jerusalem."}
          </p>

          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              lineHeight: isAr ? 1.9 : 1.75,
              color: "var(--ink-dim)",
              marginBottom: "28px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "بيكتب تقارير مناصرة ويحلّل سياسات ويصمّم هويات بصرية للمؤسسات الفلسطينية والعربية. كلّو من نفس المكان، بنفس الإيد."
              : "We write advocacy reports, analyse policy, and design visual identities for Palestinian and Arab institutions. All from the same place, with the same hand."}
          </p>

          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              lineHeight: isAr ? 1.9 : 1.75,
              color: "var(--ink-dim)",
              marginBottom: "28px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "الجانب النقدي (حريّة) والجانب التجاري (الدّكّان) مش متناقضَين. هم نفس الرهان: إنّ الأدوات والحجج والهوية البصرية كلّها أشكال من أشكال الحضور. والحضور في القدس، مش سهل."
              : "The critical side (حريّة) and the commercial side (الدّكّان) are not contradictions. They are the same bet: that tools, arguments, and visual identity are all forms of presence. And presence in Jerusalem is not easy."}
          </p>

          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              lineHeight: isAr ? 1.9 : 1.75,
              color: "var(--ink-dim)",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "AIDA إجت من واحد، وبتشتغل زي معهد — لأنّو الشغل أكبر من شخص."
              : "AIDA started from one person and works like an institute — because the work is bigger than a person."}
          </p>

          {/* Divider */}
          <div
            style={{
              margin: "64px 0",
              height: "1px",
              background: "linear-gradient(90deg, var(--wm-red) 0%, transparent 60%)",
              opacity: 0.3,
            }}
          />

          {/* Two sides */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px 64px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--wm-red)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                حريّة
                <span style={{ display: "inline-block", width: "24px", height: "1px", background: "var(--wm-red)" }} />
              </div>
              <p
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: "0.95rem",
                  lineHeight: isAr ? 1.9 : 1.7,
                  color: "var(--ink-dim)",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                {isAr
                  ? "تقارير مناصرة. تحليل سياسات. سلاسل تحريرية. حجج موثّقة ومسمّاة."
                  : "Advocacy reports. Policy analysis. Editorial series. Documented, named arguments."}
              </p>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--patina-gold)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                الدّكّان
                <span style={{ display: "inline-block", width: "24px", height: "1px", background: "var(--patina-gold)" }} />
              </div>
              <p
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: "0.95rem",
                  lineHeight: isAr ? 1.9 : 1.7,
                  color: "var(--ink-dim)",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                {isAr
                  ? "هويات بصرية. شغل تصميم. اتصالات مؤسسية. للمطاعم والمؤسسات والمشاريع الفلسطينية."
                  : "Visual identities. Design work. Institutional communications. For Palestinian restaurants, organisations, and projects."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where · when ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground-mid)",
          padding: "80px 6vw",
          overflow: "hidden",
        }}
      >
        <InkSplotch
          color="var(--patina-gold)"
          opacity={0.04}
          size={400}
          bottom="-10%"
          right={isAr ? "auto" : "0%"}
          left={isAr ? "0%" : "auto"}
          rotation={-15}
          seed={3}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1340px",
            margin: "0 auto",
            display: "flex",
            gap: "80px",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {[
            {
              label: isAr ? "المكان" : "Where",
              value: isAr ? "القدس" : "Jerusalem",
              sub: isAr ? "القدس الشرقية، فلسطين" : "East Jerusalem, Palestine",
            },
            {
              label: isAr ? "من" : "Since",
              value: "2014",
              sub: isAr ? "اثنعشر سنة" : "twelve years in",
            },
            {
              label: isAr ? "اللغات" : "Languages",
              value: isAr ? "عربي · إنجليزي" : "AR · EN",
              sub: isAr ? "بالديالكت الفلسطيني المقدسي" : "Palestinian Jerusalemite dialect first",
            },
          ].map((item, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ar)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: "8px",
                  direction: "rtl",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: "0.9rem",
                  color: "var(--ink-faded)",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTAs ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ground)",
          padding: "64px 6vw",
          borderTop: "1px solid rgba(26,20,16,0.10)",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`/${locale}/insights`}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--wm-red)",
            borderBottom: "1px solid var(--wm-red)",
            paddingBottom: "4px",
            transition: "color 0.2s",
          }}
        >
          {isAr ? "حريّة — اقرأ تقاريرنا" : "حريّة — Read our reports"}
        </Link>
        <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>·</span>
        <Link
          href={`/${locale}/services`}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--patina-gold)",
            borderBottom: "1px solid var(--patina-gold)",
            paddingBottom: "4px",
            transition: "color 0.2s",
          }}
        >
          {isAr ? "الدّكّان — شاهد أعمالنا" : "الدّكّان — See our work"}
        </Link>
      </section>
    </>
  );
}
