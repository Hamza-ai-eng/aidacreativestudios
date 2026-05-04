import type { Metadata } from "next";
import { KarimehMaker } from "@/components/home/karimeh-maker";

export const metadata: Metadata = {
  title: "ستّ كريمة · Sitt Karimeh — the maker",
  description:
    "غرفة ستّ كريمة. هويّة بصريّة، محتوى، مواقع، حملات. The studio room of Bait Aida — brand identity, content, websites, and campaigns. After Karimeh Abbud, مصوّرة شمس.",
  openGraph: {
    title: "ستّ كريمة · Sitt Karimeh — the maker",
    description:
      "Sitt Karimeh's room. Brand identity. Content. Websites. Campaigns. After Karimeh Abbud, Lady Photographer.",
  },
};

const SERVICES_AR = [
  { name: "هويّة بصريّة", desc: "بناء أنظمة هوية كاملة — شعار، ألوان، خطوط، دليل براند." },
  { name: "محتوى", desc: "كتابة، تحرير، إستراتيجية محتوى — عربي وإنجليزي." },
  { name: "مواقع", desc: "Next.js، RTL أصيل، أداء عالي، نشر على Vercel." },
  { name: "حملات", desc: "إعلانات مدفوعة، إطلاقات منتجات، حملات موسمية." },
  { name: "تصوير", desc: "تصوير منتجات وأكل وأشخاص — بستوديو وعلى الموقع." },
  { name: "سوشيال ميديا", desc: "إنتاج، جدولة، تفاعل — انستغرام، تيك توك، فيسبوك." },
];

const SERVICES_EN = [
  { name: "Brand identity", desc: "Full identity systems — logo, color, type, brand guide." },
  { name: "Content", desc: "Writing, editing, content strategy — Arabic and English." },
  { name: "Websites", desc: "Next.js, real RTL, high performance, deployed on Vercel." },
  { name: "Campaigns", desc: "Paid ads, product launches, seasonal campaigns." },
  { name: "Photography", desc: "Product, food, and people — studio and on-location." },
  { name: "Social media", desc: "Production, scheduling, engagement — IG, TikTok, Facebook." },
];

export default function KarimehPage() {
  return (
    <main style={{ paddingTop: "120px", background: "var(--ground)" }}>
      <KarimehMaker />
      <KarimehServices />
    </main>
  );
}

function KarimehServices() {
  return (
    <section
      className="room-karimeh"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 6vw",
        background: "var(--ground)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h3
          style={{
            fontFamily: "var(--font-ar)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--acc-karimeh)",
            marginBottom: "2.5rem",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          الشّغل
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES_AR.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                padding: "1.6rem",
                background: "var(--ground-mid)",
                borderInlineStart: "3px solid var(--acc-karimeh)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "var(--acc-karimeh)",
                  fontWeight: 700,
                  marginBottom: "0.7rem",
                }}
              >
                {String(i + 1).padStart(2, "0")} / 06
              </p>
              <h4
                style={{
                  fontFamily: "var(--font-ar)",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "var(--ink)",
                  marginBottom: "0.4rem",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                {svc.name}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-en)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "var(--ink-dim)",
                  marginBottom: "0.8rem",
                }}
              >
                {SERVICES_EN[i].name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ar-body)",
                  fontSize: "0.95rem",
                  color: "var(--ink-dim)",
                  lineHeight: 1.7,
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
