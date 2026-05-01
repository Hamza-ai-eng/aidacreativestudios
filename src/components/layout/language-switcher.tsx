"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

// Hebrew kept for SEO (routes + hreflang work) but hidden from UI
const VISIBLE_LOCALES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ar", label: "العربية", flag: "عربي" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  const opposite = VISIBLE_LOCALES.find((l) => l.code !== locale) ?? VISIBLE_LOCALES[0];

  return (
    <button
      onClick={() => switchLocale(opposite.code)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--ink-dim)",
        border: "1px solid rgba(26,20,16,0.18)",
        padding: "6px 12px",
        background: "transparent",
        cursor: "pointer",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--wm-red)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--wm-red)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,20,16,0.18)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-dim)";
      }}
      aria-label={`Switch to ${opposite.label}`}
    >
      {opposite.flag}
    </button>
  );
}
