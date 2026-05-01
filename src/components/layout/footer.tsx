import Link from "next/link";
import { useLocale } from "next-intl";
import { WatermelonSeal } from "@/components/shared/watermelon-seal";
import {
  CalligraphyGhost,
  ArchiveStamp,
  RegistrationMarks,
} from "@/components/shared/paper-ornaments";
import { SITE } from "@/lib/constants";

const FOOTER_LINKS = {
  ar: [
    { href: "/insights", label: "حريّة" },
    { href: "/services", label: "الدّكّان" },
    { href: "/about",    label: "مين إحنا" },
    { href: "/contact",  label: "تواصل" },
  ],
  en: [
    { href: "/insights", label: "حريّة" },
    { href: "/services", label: "الدّكّان" },
    { href: "/about",    label: "About" },
    { href: "/contact",  label: "Contact" },
  ],
};

export function Footer() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const links = isAr ? FOOTER_LINKS.ar : FOOTER_LINKS.en;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        background: "var(--void)",
        padding: "80px 6vw 48px",
        textAlign: "center",
        overflow: "hidden",
        borderTop: "1px solid rgba(26,20,16,0.12)",
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

      {/* Background seal — large, faded */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "320px",
          height: "320px",
          transform: "translate(-50%, -50%)",
          opacity: 0.06,
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      >
        <WatermelonSeal fill />
      </div>

      {/* Registration marks at corners */}
      <RegistrationMarks color="var(--ink-faded)" inset={20} size={14} opacity={0.3} />

      {/* Calligraphy ghost */}
      <CalligraphyGhost
        text="القدس"
        size="clamp(6rem, 14vw, 12rem)"
        color="var(--ink)"
        opacity={0.04}
        top="15%"
        left="3%"
        rotation={-3}
      />

      {/* Archive stamp — version */}
      <ArchiveStamp
        lines={["v1.0 · 2026", "WATERMELON PATINA"]}
        color="var(--patina-gold)"
        rotation={3}
        top="10%"
        right="3%"
        opacity={0.6}
      />

      {/* Top stripe — flag colors */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, var(--wm-red) 0%, var(--wm-red) 33%, var(--ink) 33%, var(--ink) 50%, var(--wm-white) 50%, var(--wm-white) 67%, var(--wm-green) 67%, var(--wm-green) 100%)",
          opacity: 0.7,
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Seal */}
        <WatermelonSeal size={48} hoverable />

        {/* Name */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--ink-dim)",
          }}
        >
          AIDA Critical Institute · القدس · Jerusalem
        </p>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              style={{
                fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                fontStyle: isAr ? "normal" : "italic",
                fontSize: "0.9rem",
                color: "var(--ink-dim)",
                transition: "color 0.2s",
              }}
              className="hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Meta row */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "var(--text-muted)",
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href={`mailto:${SITE.email}`}
            style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
            className="hover:text-[var(--wm-red)]"
          >
            {SITE.email}
          </a>
          <span style={{ color: "var(--text-muted)", opacity: 0.5 }}>·</span>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
            className="hover:text-[var(--wm-red)]"
          >
            Instagram
          </a>
          <span style={{ color: "var(--text-muted)", opacity: 0.5 }}>·</span>
          <span style={{ color: "var(--text-muted)" }}>© {year} AIDA Creative Consulting</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(196,26,42,0.3), transparent)",
            margin: "8px 0",
          }}
        />

        {/* Version stamp */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--patina-gold)",
            opacity: 0.6,
          }}
        >
          DESIGN SYSTEM v1.0 · WATERMELON PATINA · Apr 2026
        </p>
      </div>
    </footer>
  );
}
