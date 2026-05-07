import type { Metadata } from "next";
import { FatimaKeeper } from "@/components/home/fatima-keeper";

export const revalidate = 300; // ISR — 300s


export const metadata: Metadata = {
  title: "فاطمة · Fatima — the keeper",
  description:
    "غرفة فاطمة في بيت عايدة. الحفظ بيصير مرّتين: مرّة في الذاكرة، مرّة في الحجر. About Aida Creative Studios — the keeper of the story before it is built.",
  openGraph: {
    title: "فاطمة · Fatima — the keeper",
    description:
      "Fatima's room in Bait Aida. Keeping happens twice: once in memory, once in stone.",
  },
};

/**
 * Fatima's full room page — the keeper · about
 *
 * For now, the homepage strip is reused as the page content. Phase 4B will
 * extend with a multi-generational image carousel, mission, who-we-work-with.
 */
export default function FatimaPage() {
  return (
    <main style={{ paddingTop: "120px", background: "var(--ground)" }}>
      <FatimaKeeper />
      <FatimaDeepContent />
    </main>
  );
}

function FatimaDeepContent() {
  return (
    <section
      className="room-fatima"
      style={{
        padding: "clamp(3rem, 7vw, 6rem) 6vw",
        maxWidth: "1280px",
        margin: "0 auto",
        background: "var(--ground)",
      }}
    >
      <div
        style={{
          maxWidth: "70ch",
          margin: "0 auto",
          fontFamily: "var(--font-ar-body)",
          fontSize: "1.08rem",
          lineHeight: 1.85,
          color: "var(--ink)",
          direction: "rtl",
          textAlign: "right",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-ar)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--acc-fatima)",
            marginBottom: "1.5rem",
          }}
        >
          ثلاث حفظات
        </h3>
        <p>
          قبل ما نطبع شي — منشيله مرّة في الذاكرة، مرّة في الحجر، ومرّة في النّاس. ثلاث حفظات.
          هاي هي شغل عايدة استوديو من ٢٠٢٢: حفظ الصوت قبل النّشر، حفظ القصّة قبل التصميم، حفظ
          الزّبون قبل المنتج.
        </p>
        <p>
          منشتغل مع علامات تجاريّة، مع كتّاب، مع منظّمات، مع مخيّمات وخدمات وطنية. كل واحد
          عنده صوت. شغلي أعرفه قبل ما أكتبه. وما بنشتغل بعجلة.
        </p>
      </div>
    </section>
  );
}
