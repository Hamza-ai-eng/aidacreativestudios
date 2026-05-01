"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
  InkSplotch,
  RulerMark,
} from "@/components/shared/paper-ornaments";

/**
 * حريّة — Freedom
 * The editorial / advocacy landing page.
 * Shows: the advocacy report + the Human in the Loop series.
 * Old "coming soon" ghost series removed.
 */
export function InsightsContent() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <>
      {/* ── Hero section ──────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground)",
          padding: "160px 6vw 80px",
          overflow: "hidden",
          borderBottom: "1px solid rgba(26,20,16,0.10)",
        }}
      >
        {/* Registration marks */}
        <RegistrationMarks color="var(--ink-faded)" inset={28} size={16} opacity={0.35} />

        {/* Ghost Arabic behind headline */}
        <CalligraphyGhost
          text="حريّة"
          size="clamp(20rem, 35vw, 40rem)"
          color="var(--wm-red-deep)"
          opacity={0.04}
          top="0%"
          left={isAr ? "auto" : "-5%"}
          right={isAr ? "-5%" : "auto"}
          rotation={-3}
        />

        {/* Ruler mark */}
        <RulerMark
          orientation="vertical"
          length="70%"
          ticks={18}
          color="var(--ink-faded)"
          opacity={0.15}
          top="15%"
          left={isAr ? "auto" : "1.5vw"}
          right={isAr ? "1.5vw" : "auto"}
        />

        {/* Archive stamp */}
        <ArchiveStamp
          lines={["حريّة · FREEDOM", "AIDA · القدس", "VOL. I · 2026"]}
          color="var(--wm-red-deep)"
          rotation={-3}
          top="18%"
          right={isAr ? "auto" : "5%"}
          left={isAr ? "5%" : "auto"}
          opacity={0.55}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "860px",
          }}
        >
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
              color: "var(--wm-red)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background: "var(--wm-red)",
              }}
            />
            {isAr ? "أقسامنا" : "Our Work"}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
              fontWeight: 700,
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(4rem, 10vw, 8rem)",
              lineHeight: 1,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "32px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr ? "حريّة" : "Hurriyeh"}
          </h1>

          <p
            style={{
              fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
              fontStyle: isAr ? "normal" : "italic",
              fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
              lineHeight: isAr ? 1.85 : 1.65,
              color: "var(--ink-dim)",
              maxWidth: "600px",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            {isAr
              ? "تقارير المناصرة والسلاسل التحريرية من عايدة. نكتب لأن الكتابة شكل من أشكال البقاء."
              : "Advocacy reports and editorial series from AIDA. We write because writing is a form of staying."}
          </p>
        </div>
      </section>

      {/* ── Advocacy Report — Offline by Design ─────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground-mid)",
          padding: "80px 6vw",
          overflow: "hidden",
          borderBottom: "1px solid rgba(26,20,16,0.10)",
        }}
      >
        {/* Red ink splotch */}
        <InkSplotch
          color="var(--wm-red)"
          opacity={0.04}
          size={600}
          top="-10%"
          right={isAr ? "auto" : "-5%"}
          left={isAr ? "-5%" : "auto"}
          rotation={10}
          seed={5}
        />

        <ArchiveStamp
          lines={["REPORT — 01", "ADVOCACY", "APRIL 2026"]}
          color="var(--wm-red-deep)"
          rotation={2}
          bottom="8%"
          left={isAr ? "auto" : "5%"}
          right={isAr ? "5%" : "auto"}
          opacity={0.5}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1340px",
            margin: "0 auto",
          }}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--wm-red)",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>REPORT</span>
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background: "var(--wm-red)",
              }}
            />
            <span style={{ color: "var(--ink-faded)" }}>01</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Content */}
            <div>
              {/* Primary title — language-first */}
              <h2
                style={{
                  fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                  fontWeight: 700,
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: isAr ? "clamp(2.4rem, 5vw, 4.5rem)" : "clamp(2rem, 4vw, 3.8rem)",
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  marginBottom: "12px",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                {isAr ? "إقصاء مبرمَج" : "Offline by Design"}
              </h2>

              {/* Secondary line */}
              <div
                style={{
                  fontFamily: isAr ? "var(--font-en)" : "var(--font-ar)",
                  fontWeight: isAr ? 900 : 400,
                  fontStyle: isAr ? "italic" : "normal",
                  fontSize: isAr ? "clamp(1.2rem, 2vw, 1.8rem)" : "clamp(1rem, 1.4vw, 1.3rem)",
                  color: "var(--wm-red)",
                  marginBottom: "32px",
                  direction: isAr ? "ltr" : "rtl",
                }}
              >
                {isAr ? "Offline by Design" : "إقصاء مبرمَج"}
              </div>

              <p
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
                  lineHeight: isAr ? 1.85 : 1.7,
                  color: "var(--ink-dim)",
                  maxWidth: "620px",
                  marginBottom: "40px",
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                {isAr
                  ? "اللاجئون الفلسطينيون ليسوا مُستثنَين من الذكاء الاصطناعي بالصدفة. هم مُستثنَون بنفس البنية التي تتعاقد صناعة الذكاء الاصطناعي على إدامتها. الإقصاء هو المنتَج."
                  : "Palestinian refugees are not excluded from AI by accident or oversight. They are excluded by the same architecture of dispossession the AI industry is contracted to sustain. The exclusion is the product."}
              </p>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginBottom: "48px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                <span>AIDA Critical Institute</span>
                <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
                <span>April 2026</span>
                <span style={{ color: "var(--wm-red)", opacity: 0.4 }}>·</span>
                <span>Lebanon · Jordan · Syria · West Bank</span>
              </div>

              {/* CTA */}
              <Link
                href={`/${locale}/insights/offline-by-design`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--ground)",
                  background: "var(--wm-red)",
                  padding: "14px 28px",
                  transition: "background 0.2s",
                }}
                className="hover:bg-[var(--wm-red-deep)]"
              >
                {isAr ? "اقرأ التقرير" : "Read the report"}
                <span style={{ fontFamily: "var(--font-en)", fontSize: "1.2em" }}>
                  {isAr ? "←" : "→"}
                </span>
              </Link>
            </div>

            {/* Right side — stat block */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                borderLeft: isAr ? "none" : "1px solid rgba(196,26,42,0.2)",
                borderRight: isAr ? "1px solid rgba(196,26,42,0.2)" : "none",
                paddingLeft: isAr ? "0" : "48px",
                paddingRight: isAr ? "48px" : "0",
                minWidth: "220px",
              }}
            >
              {[
                { num: "5.9M", label: isAr ? "لاجئ فلسطيني مسجّل" : "registered Palestinian refugees" },
                { num: "$20", label: isAr ? "اشتراك ChatGPT شهرياً" : "ChatGPT Plus / month" },
                { num: "$16.67", label: isAr ? "مساعدة UNRWA للشخص" : "UNRWA assistance / person" },
                { num: "0", label: isAr ? "بطاقة. لا حساب. لا وصول." : "cards. No account. No access." },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      color: "var(--wm-red-hot)",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                      fontStyle: isAr ? "normal" : "italic",
                      fontSize: "0.85rem",
                      color: "var(--ink-faded)",
                      lineHeight: 1.4,
                      direction: isAr ? "rtl" : "ltr",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Human in the Loop series ─────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--ground)",
          padding: "80px 6vw 120px",
          overflow: "hidden",
        }}
      >
        <CalligraphyGhost
          text="سلسلة"
          size="clamp(12rem, 22vw, 28rem)"
          color="var(--ink)"
          opacity={0.03}
          bottom="5%"
          right={isAr ? "auto" : "2%"}
          left={isAr ? "2%" : "auto"}
          rotation={4}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1340px",
            margin: "0 auto",
          }}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--wm-green)",
              marginBottom: "56px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>SERIES</span>
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "1px",
                background: "var(--wm-green)",
              }}
            />
            <span style={{ color: "var(--ink-faded)" }}>01</span>
          </div>

          {/* Series card */}
          <div
            style={{
              borderTop: "2px solid var(--wm-red)",
              paddingTop: "48px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "64px",
                alignItems: "start",
              }}
            >
              <div>
                {/* Series label */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--wm-red)",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: "var(--wm-green)",
                      color: "var(--ground)",
                      fontSize: "9px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#4ADE80",
                        display: "inline-block",
                      }}
                    />
                    {isAr ? "متاح" : "LIVE"}
                  </span>
                  <span style={{ color: "var(--ink-faded)" }}>
                    {isAr ? "السلسلة ٠١" : "Series 01"}
                  </span>
                </div>

                {/* Title — language-first */}
                <h2
                  style={{
                    fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)",
                    fontWeight: 700,
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: isAr ? "clamp(2rem, 4vw, 3.5rem)" : "clamp(1.6rem, 3vw, 2.8rem)",
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    marginBottom: "8px",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  {isAr ? "إنسان في الدوامة" : "Human in the Loop"}
                </h2>
                <div
                  style={{
                    fontFamily: isAr ? "var(--font-en)" : "var(--font-ar)",
                    fontStyle: isAr ? "italic" : "normal",
                    fontWeight: isAr ? 700 : 400,
                    fontSize: isAr ? "clamp(1rem, 1.8vw, 1.4rem)" : "clamp(0.9rem, 1.3vw, 1.1rem)",
                    color: "var(--ink-dim)",
                    marginBottom: "28px",
                    direction: isAr ? "ltr" : "rtl",
                  }}
                >
                  {isAr ? "Human in the Loop" : "إنسان في الدوامة"}
                </div>

                <p
                  style={{
                    fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                    fontStyle: isAr ? "normal" : "italic",
                    fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                    lineHeight: isAr ? 1.85 : 1.7,
                    color: "var(--ink-dim)",
                    maxWidth: "560px",
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  {isAr
                    ? "أنظمة الذكاء الاصطناعي الموجّهة ضد الحياة الفلسطينية — برمجيات الاستهداف، التعرف على الوجوه، البيومترية الإنسانية، القمع الخوارزمي. سبعة ملفات. حالة واحدة."
                    : "AI systems deployed against Palestinian life — targeting software, facial recognition, humanitarian biometrics, algorithmic suppression, predictive policing. Seven files. One condition."}
                </p>
              </div>

              {/* Right — file count + CTA */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isAr ? "flex-start" : "flex-end",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(3rem, 5vw, 5rem)",
                    fontWeight: 700,
                    color: "var(--wm-red)",
                    lineHeight: 1,
                    opacity: 0.25,
                  }}
                >
                  07
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {isAr ? "ملفات" : "files"}
                </div>

                <a
                  href="/editorial/human-in-the-loop/index.html"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--wm-red)",
                    borderBottom: "1px solid var(--wm-red)",
                    paddingBottom: "4px",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  className="hover:text-[var(--wm-red-deep)]"
                >
                  {isAr ? "اقرأ السلسلة" : "Read series"}
                  <span>{isAr ? "←" : "→"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider + more coming */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(26,20,16,0.10)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "1rem",
                color: "var(--ink-faded)",
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {isAr ? "المزيد قادم. بكرا في المشمش." : "More coming. Not soon. But coming."}
            </p>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              AIDA · 2026
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
