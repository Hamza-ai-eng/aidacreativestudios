"use client";

import { useLocale } from "next-intl";

/**
 * Renders a small notice on Hebrew-locale editorial pages letting the
 * Hebrew reader know the body content is bilingual EN+AR only.
 *
 * Per Hamzah's Path B decision (REBUILD_HANDOFF 2026-05-06):
 *   - Hebrew chrome (nav, hero, services) is fully translated via messages/he.json
 *   - Editorial body content (Notes, Reports, Series essays) is parallel EN+AR
 *   - Hebrew users on /he/khadija/* see EN body + this notice
 */
export function LocaleNotice() {
  const locale = useLocale();
  if (locale !== "he") return null;

  return (
    <div
      role="note"
      style={{
        background: "var(--paper-2)",
        borderInlineStart: "3px solid var(--wm-red)",
        padding: "12px 16px",
        margin: "24px 0",
        fontSize: "0.9rem",
        color: "var(--ink-dim)",
        fontFamily: "var(--font-body)",
        direction: "rtl",
      }}
    >
      <strong style={{ color: "var(--ink)" }}>שים לב:</strong>{" "}
      תוכן המאמרים זמין בערבית ובאנגלית בלבד. הניווט והממשק תורגמו לעברית.
    </div>
  );
}
