import type { Metadata } from "next";
import { HayatDoor } from "@/components/home/hayat-door";

export const metadata: Metadata = {
  title: "حياة · Hayat — the open door",
  description:
    "غرفة حياة. الباب اسمه: لا تنزعجوا من الطّرق. تواصل مع عايدة استوديو. Contact Aida Creative Studios — for new work, a question, or just to say hello.",
  openGraph: {
    title: "حياة · Hayat — the open door",
    description: "Hayat's room. The door is open. Knock whenever you want.",
  },
};

export default function HayatPage() {
  return (
    <main style={{ paddingTop: "120px", background: "var(--ground)" }}>
      <HayatDoor />
      <HayatChannels />
    </main>
  );
}

function HayatChannels() {
  return (
    <section
      className="room-hayat"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 6vw",
        background: "var(--ground)",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-ar)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--acc-hayat)",
            marginBottom: "2rem",
            direction: "rtl",
          }}
        >
          أربع طرق للطّرق
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <a
            href="mailto:info@aidacreativestudios.com"
            style={{
              padding: "1.6rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-hayat)",
              textDecoration: "none",
              color: "var(--ink)",
              transition: "transform 200ms ease",
            }}
            className="hover:-translate-y-1"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                color: "var(--acc-hayat)",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              EMAIL
            </p>
            <p style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: "0.95rem" }}>
              info@aidacreativestudios.com
            </p>
          </a>

          <a
            href="https://wa.me/972524635937"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1.6rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-hayat)",
              textDecoration: "none",
              color: "var(--ink)",
              transition: "transform 200ms ease",
            }}
            className="hover:-translate-y-1"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                color: "var(--acc-hayat)",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              WHATSAPP
            </p>
            <p
              style={{
                fontFamily: "var(--font-cairo)",
                fontWeight: 700,
                fontSize: "0.95rem",
                direction: "ltr",
              }}
            >
              +972 52-463-5937
            </p>
          </a>

          <a
            href="https://www.instagram.com/aida.creative.consultancy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1.6rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-hayat)",
              textDecoration: "none",
              color: "var(--ink)",
              transition: "transform 200ms ease",
            }}
            className="hover:-translate-y-1"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                color: "var(--acc-hayat)",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              INSTAGRAM
            </p>
            <p style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: "0.95rem" }}>
              @aida.creative.consultancy
            </p>
          </a>

          <a
            href="https://www.tiktok.com/@aida.creative"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1.6rem",
              background: "var(--ground-mid)",
              border: "1px solid var(--acc-hayat)",
              textDecoration: "none",
              color: "var(--ink)",
              transition: "transform 200ms ease",
            }}
            className="hover:-translate-y-1"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                color: "var(--acc-hayat)",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              TIKTOK
            </p>
            <p style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: "0.95rem" }}>
              @aida.creative
            </p>
          </a>
        </div>

        <p
          style={{
            marginTop: "3rem",
            fontFamily: "var(--font-en)",
            fontStyle: "italic",
            color: "var(--ink-dim)",
            fontSize: "1rem",
          }}
        >
          Working hours, Sun–Thu, 09:00–18:00 Jerusalem.
        </p>
      </div>
    </section>
  );
}
