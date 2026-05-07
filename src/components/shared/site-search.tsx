"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLocale } from "next-intl";
import { pick } from "@/lib/i18n";

type PagefindResult = {
  id: string;
  data: () => Promise<{
    url: string;
    excerpt: string;
    meta: { title?: string; lang?: string; image?: string };
    raw_url?: string;
  }>;
};

type Pagefind = {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
};

/**
 * Site-wide search panel — opens with cmd+k / ctrl+k.
 *
 * Indexes the static build via Pagefind (run at build time per package.json
 * scripts). Results filter to the current locale.
 *
 * Hebrew-locale users see the same panel; results are filtered to en+ar
 * because editorial content is bilingual EN+AR only (per Path B).
 */
export function SiteSearch() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    Array<{ url: string; title: string; excerpt: string; lang: string }>
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<Pagefind | null>(null);

  // Open with cmd/ctrl + K, close with Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  // Lazy-load Pagefind only when the panel opens
  useEffect(() => {
    if (!open || pagefindRef.current) return;
    let cancelled = false;
    (async () => {
      try {
        // Built-in to /_pagefind/ at production build by `pagefind` CLI.
        // Path is constructed at runtime so the bundler doesn't try to resolve it.
        const url = `${window.location.origin}/_pagefind/pagefind.js`;
        const mod = (await import(/* webpackIgnore: true */ /* @vite-ignore */ url)) as Pagefind;
        if (!cancelled) pagefindRef.current = mod;
      } catch {
        // Pagefind may not be present yet in dev — fail quietly
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  const search = useCallback(
    async (q: string) => {
      if (!q.trim() || !pagefindRef.current) {
        setResults([]);
        return;
      }
      const res = await pagefindRef.current.search(q);
      const localized = await Promise.all(
        res.results.slice(0, 10).map(async (r) => {
          const data = await r.data();
          return {
            url: data.url,
            title: data.meta?.title ?? data.url,
            excerpt: data.excerpt,
            lang: data.meta?.lang ?? "en",
          };
        })
      );
      // Prefer current-locale results; show others below
      localized.sort((a, b) => {
        const wantedLang = locale === "ar" ? "ar" : "en";
        const aMatch = a.lang === wantedLang ? 0 : 1;
        const bMatch = b.lang === wantedLang ? 0 : 1;
        return aMatch - bMatch;
      });
      setResults(localized);
    },
    [locale]
  );

  useEffect(() => {
    const t = setTimeout(() => search(query), 200);
    return () => clearTimeout(t);
  }, [query, search]);

  if (!open) return null;

  const placeholder = pick(locale, {
    en: "Search reports, series, notes…",
    ar: "ابحث في التقارير، السلاسل، الملاحظات...",
    he: "חיפוש בדוחות, סדרות, הערות...",
  });

  const noResults = pick(locale, {
    en: "No results.",
    ar: "ما في نتائج.",
    he: "אין תוצאות.",
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26,20,16,0.55)",
        backdropFilter: "blur(4px)",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        paddingTop: "12vh",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "var(--ground)",
          border: "1px solid var(--line)",
          borderRadius: "8px",
          boxShadow: "0 30px 60px -25px rgba(26,20,16,.45)",
          padding: "20px",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          dir={locale === "ar" || locale === "he" ? "rtl" : "ltr"}
          style={{
            width: "100%",
            padding: "12px 14px",
            border: "1px solid var(--line)",
            borderRadius: "4px",
            background: "var(--paper-2)",
            color: "var(--ink)",
            fontSize: "1rem",
            fontFamily:
              locale === "ar" ? "var(--font-ar-body)" : "var(--font-body)",
          }}
        />

        <div style={{ marginTop: "16px" }}>
          {query.trim() === "" ? null : results.length === 0 ? (
            <p style={{ color: "var(--ink-faded)", padding: "12px" }}>
              {noResults}
            </p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {results.map((r, i) => (
                <li
                  key={r.url + i}
                  style={{
                    borderBottom: "1px solid var(--line)",
                    padding: "12px 0",
                  }}
                >
                  <a
                    href={r.url}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      color: "var(--ink)",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily:
                          r.lang === "ar"
                            ? "var(--font-ar)"
                            : "var(--font-en)",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      {r.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--ink-dim)",
                      }}
                      dangerouslySetInnerHTML={{ __html: r.excerpt }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          style={{
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "var(--ink-faded)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>cmd/ctrl+K</span>
          <span>esc</span>
        </div>
      </div>
    </div>
  );
}
