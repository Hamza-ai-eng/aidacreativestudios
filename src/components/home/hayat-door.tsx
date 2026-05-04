"use client";

import { MatriarchStrip } from "./matriarch-strip";
import { TatreezRamallah } from "@/components/shared/tatreez/ramallah";

/**
 * Hayat — the open door (Room V)
 *
 * Contact. The door names itself; the knock names itself.
 * Ramallah tatreez (light, geometric, white linen). Flipped layout.
 */
export function HayatDoor() {
  return (
    <MatriarchStrip
      id="hayat"
      roomClass="room-hayat"
      ordinal="V"
      arRoomLabel="غرفة V — الباب"
      enRoomLabel="ROOM V — THE OPEN DOOR"
      arName="حياة"
      enName="Hayat"
      enRole="the open door"
      hrefSuffix="/hayat"
      imgSrc="/portraits/hayat.jpg"
      imgAlt="حياة — الباب · Hayat, the open door"
      tatreez={<TatreezRamallah />}
      flip
      arVoice={
        <>
          <p style={{ margin: 0 }}>
            الباب اسمه: لا تنزعجوا من الطّرق.
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>
            الطّرق اسمه: <span className="em">في حدا برّا.</span>
          </p>
          <p style={{ margin: "0.4rem 0 0" }}>أنا حياة. أنا اللي بفتح.</p>
        </>
      }
      enVoice={
        <>
          The door&apos;s name is: don&apos;t mind the knocking. The knocking&apos;s name is:{" "}
          <span className="em">someone is outside.</span>
          <br />
          I am Hayat. I am the one who opens.
        </>
      }
      arBody={
        <>
          <p style={{ margin: "0 0 0.6rem" }}>للتواصل، أو شغل جديد، أو سؤال:</p>
          <p style={{ margin: "0 0 0.4rem", fontFamily: "var(--font-cairo)", fontWeight: 700 }}>
            <a
              href="mailto:info@aidacreativestudios.com"
              style={{
                color: "var(--acc-hayat)",
                borderBottom: "2px solid var(--acc-hayat)",
                paddingBottom: "1px",
              }}
            >
              info@aidacreativestudios.com
            </a>
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-cairo)", fontWeight: 700 }}>
            واتساب: <span dir="ltr">+972 52-463-5937</span>
          </p>
        </>
      }
      enBody={
        <>
          <p style={{ margin: "0 0 0.6rem" }}>For new work, a question, or just to say hello:</p>
          <p style={{ margin: "0 0 0.4rem", fontFamily: "var(--font-garamond)", fontWeight: 600 }}>
            <a
              href="mailto:info@aidacreativestudios.com"
              style={{
                color: "var(--acc-hayat)",
                borderBottom: "2px solid var(--acc-hayat)",
                paddingBottom: "1px",
              }}
            >
              info@aidacreativestudios.com
            </a>
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-garamond)", fontWeight: 600 }}>
            WhatsApp: <span dir="ltr">+972 52-463-5937</span>
          </p>
        </>
      }
      arCta="اطرقوا"
      enCta="Knock"
    />
  );
}
