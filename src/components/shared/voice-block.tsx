/**
 * VoiceBlock — bilingual matriarch voice container
 *
 * Each room of Bait Aida opens with the matriarch's voice. AR primary, EN
 * follows. Voice register is after Mourid Barghouti's "I Saw Ramallah" —
 * definition-form, name-listings, the literal becoming political.
 *
 * Visual: 3px solid border-inline-start in the room's accent color
 * (set by the parent room via the --acc CSS variable through a .room-* class).
 */

import { ReactNode } from "react";

interface VoiceBlockProps {
  ar: ReactNode;     /* Arabic block — primary voice */
  en?: ReactNode;    /* English translation, smaller, italic */
  className?: string;
}

export function VoiceBlock({ ar, en, className }: VoiceBlockProps) {
  return (
    <blockquote className={`voice-block ${className ?? ""}`} style={{ margin: 0 }}>
      <div className="voice-ar" style={{ direction: "rtl", textAlign: "right" }}>
        {ar}
      </div>
      {en && (
        <div
          className="voice-en"
          style={{ marginTop: "0.9rem", direction: "ltr", textAlign: "left" }}
        >
          {en}
        </div>
      )}
    </blockquote>
  );
}
