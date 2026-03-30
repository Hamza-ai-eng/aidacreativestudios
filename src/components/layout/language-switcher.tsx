"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Hebrew kept for SEO (routes + hreflang work) but hidden from UI
const ALL_LOCALES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ar", label: "العربية", flag: "ع" },
  { code: "he", label: "עברית", flag: "ע" },
] as const;
const LOCALES = ALL_LOCALES.filter(l => l.code !== "he");

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    // Replace the locale segment in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  }

  const current = ALL_LOCALES.find((l) => l.code === locale) ?? ALL_LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors text-sm"
        aria-label="Change language"
      >
        <Globe size={15} />
        <span className="font-space text-xs font-medium">{current.flag}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={cn(
                "w-full px-4 py-2.5 text-start text-sm transition-colors flex items-center justify-between",
                l.code === locale
                  ? "bg-[var(--accent-dim)] text-[var(--accent)] font-semibold"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]"
              )}
            >
              <span>{l.label}</span>
              <span className="text-xs opacity-60">{l.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
