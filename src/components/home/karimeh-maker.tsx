"use client";

import { MatriarchStrip } from "./matriarch-strip";
import { TatreezBethlehem } from "@/components/shared/tatreez/bethlehem";

/**
 * Sitt Karimeh — the maker (Room IV)
 *
 * Studio / client work. Direct homage to Karimeh Abbud (Bethlehem 1896–1940).
 * Bethlehem tatreez (copper register).
 */
export function KarimehMaker() {
  return (
    <MatriarchStrip
      id="karimeh"
      roomClass="room-karimeh"
      ordinal="IV"
      arRoomLabel="غرفة IV — الدّكّان"
      enRoomLabel="ROOM IV — THE STUDIO"
      arName="ستّ كريمة"
      enName="Sitt Karimeh"
      enRole="the maker · for Karimeh Abbud, Lady Photographer (1896–1940)"
      hrefSuffix="/karimeh"
      imgSrc="/portraits/karimeh.jpg"
      imgAlt="ستّ كريمة — الدّكّان · Sitt Karimeh, the maker"
      tatreez={<TatreezBethlehem />}
      arVoice={
        <>
          <p style={{ margin: 0 }}>
            كريمة عبود (١٨٩٦–١٩٤٠) كانت توقّع كل صورة:{" "}
            <span className="em">«مصوّرة شمس».</span>
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            لا «مصوّرة محترفة». لا «مصوّرة فوتوغرافية». مصوّرة شمس.
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            الشمس موجودة. وظيفة الصورة تحفظها.
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            أنا ستّ كريمة. شغلي أحفظ الشمس على أسمائكم.
          </p>
        </>
      }
      enVoice={
        <>
          Karimeh Abbud (1896–1940) signed every photograph:{" "}
          <span className="em">&ldquo;sun photographer.&rdquo;</span>{" "}
          Not &ldquo;professional photographer.&rdquo; Not &ldquo;photographic photographer.&rdquo; Sun photographer.
          <br />
          The sun is here. The photograph&apos;s job is to keep it. I am Sitt Karimeh.
          My job is to keep the sun on your names.
        </>
      }
      arBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>هون بنشتغل مع العملاء.</p>
          <p style={{ margin: 0 }}>
            هويّة بصريّة. محتوى. مواقع. حملات. كل شغلة بتطلع من هون موقّعة بإسم.
            زي ما كانت كريمة توقّع.
          </p>
        </>
      }
      enBody={
        <>
          <p style={{ margin: "0 0 1rem" }}>This is where we work with clients.</p>
          <p style={{ margin: 0 }}>
            Brand identity. Content. Websites. Campaigns. Every piece that leaves
            this room is signed with a name. As Karimeh signed hers.
          </p>
        </>
      }
      arCta="شوفوا الشغل"
      enCta="See the work"
    />
  );
}
