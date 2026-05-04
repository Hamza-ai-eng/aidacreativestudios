"use client";

import { MatriarchStrip } from "./matriarch-strip";
import { TatreezHebron } from "@/components/shared/tatreez/hebron";

/**
 * Hajjeh Khadija — the witness (Room III)
 *
 * Editorial. HITL series, Offline by Design, the long writing.
 * Hebron tatreez (deep red, dense). Flipped layout (text-left, img-right).
 */
export function KhadijaWitness() {
  return (
    <MatriarchStrip
      id="khadija"
      roomClass="room-khadija"
      ordinal="III"
      arRoomLabel="غرفة III — الشاهدة"
      enRoomLabel="ROOM III — THE WITNESS"
      arName="حجّة خديجة"
      enName="Hajjeh Khadija"
      enRole="the witness"
      hrefSuffix="/khadija"
      imgSrc="/portraits/khadija.jpg"
      imgAlt="حجّة خديجة — الشاهدة · Hajjeh Khadija, the witness"
      tatreez={<TatreezHebron />}
      flip
      arVoice={
        <>
          <p style={{ margin: 0 }}>
            الكلمة عندي مش جميلة. <span className="em">الكلمة شغلانة.</span>
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            بتشتغل ساعة، بتشتغل سنة، بتشتغل لمّا الدّنيا تنام.
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            أنا حجّة خديجة. أنا اللي بحرّك الكلمة لمّا تتعب.
          </p>
        </>
      }
      enVoice={
        <>
          A word, to me, is not beautiful. <span className="em">A word is a worker.</span>{" "}
          She works an hour, she works a year, she works while the world sleeps.
          <br />
          I am Hajjeh Khadija. I am the one who moves the word when she is tired.
        </>
      }
      arBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>هون بتعيش الكتابة الطويلة.</p>
          <p style={{ margin: 0 }}>
            سلسلة <em style={{ color: "var(--acc-khadija)", fontFamily: "var(--font-en)", fontStyle: "italic", fontWeight: 700 }}>Human in the Loop</em>.
            تقرير <em style={{ color: "var(--acc-khadija)", fontFamily: "var(--font-en)", fontStyle: "italic", fontWeight: 700 }}>Offline by Design</em>.
            التقارير اللي بتحتاج وقت قبل ما تنشر. خمستعش صفحة. لغتين. ما في عجلة.
          </p>
        </>
      }
      enBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>This is where the long writing lives.</p>
          <p style={{ margin: 0 }}>
            The <em style={{ color: "var(--acc-khadija)" }}>Human in the Loop</em> series.
            The <em style={{ color: "var(--acc-khadija)" }}>Offline by Design</em> report.
            The reports that need time before they are published. Fifteen pages. Two languages. No rush.
          </p>
        </>
      }
      arCta="اقرؤوا الشاهدة"
      enCta="Read the witness"
    />
  );
}
