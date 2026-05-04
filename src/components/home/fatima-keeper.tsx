"use client";

import { MatriarchStrip } from "./matriarch-strip";
import { TatreezGalilee } from "@/components/shared/tatreez/galilee";

/**
 * Fatima — the keeper (Room II)
 *
 * About / origin. Multi-generational. Galilee tatreez.
 * Hero image is currently the Femme de Ramallah postcard (mother + daughters)
 * as a placeholder. Will be replaced by Hamzah's Leonardo regen #2 (`fatima.jpg`).
 */
export function FatimaKeeper() {
  return (
    <MatriarchStrip
      id="fatima"
      roomClass="room-fatima"
      ordinal="II"
      arRoomLabel="غرفة II — الحفظ"
      enRoomLabel="ROOM II — THE KEEPER"
      arName="فاطمة"
      enName="Fatima"
      enRole="the keeper"
      hrefSuffix="/fatima"
      imgSrc="/portraits/fatima.jpg"
      imgAlt="فاطمة — الحفظ · Fatima, the keeper"
      tatreez={<TatreezGalilee />}
      arVoice={
        <>
          <p style={{ margin: 0 }}>
            الحكاية ما بتنشر إلا بعد ما تنحفظ. والحفظ بيصير مرّتين.
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            مرّة في الذاكرة. <span className="em">ومرّة في الحجر.</span>
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>أنا فاطمة. أنا الحفظ الأوّل.</p>
        </>
      }
      enVoice={
        <>
          A story is not published until it is kept. And keeping happens{" "}
          <span className="em">twice</span>. Once in memory. Once in stone.
          <br />
          I am Fatima. I am the first keeping.
        </>
      }
      arBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>
            عايدة استوديو ابتدت سنة ٢٠٢٢. الأشغال المهمّة ما بتبدأ في الكلام. بتبدأ في السؤال:
            شو بدّنا نحفظ؟ ولمين؟ ومن وين بنحكي؟
          </p>
          <p style={{ margin: 0 }}>
            بنشتغل مع علامات تجاريّة، مع كتّاب، مع منظّمات. لكل واحد صوت. شغلي أعرفه قبل ما أكتبه.
          </p>
        </>
      }
      enBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>
            Aida Creative Studios began in 2022. Serious work does not begin in talk —
            it begins in the question: what are we keeping, for whom, and from where do we speak?
          </p>
          <p style={{ margin: 0 }}>
            We work with brands, writers, and institutions. Each one has a voice.
            My job is to know it before I write it.
          </p>
        </>
      }
      arCta="ادخلوا غرفة فاطمة"
      enCta="Enter Fatima's room"
    />
  );
}
