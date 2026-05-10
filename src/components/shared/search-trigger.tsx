"use client";

import { useEffect } from "react";

/**
 * Small button that fires a synthetic cmd+K keydown so SiteSearch opens.
 * Renders as text in the navbar; mostly visible for users on touch devices
 * who don't know the keyboard shortcut.
 */
export function SearchTrigger({ label }: { label: string }) {
  // Wrapper so the keyboard-shortcut hint is reasonable on macOS vs everywhere
  useEffect(() => {
    // no-op; reserved for future enhancement
  }, []);

  function fireOpen() {
    const ev = new KeyboardEvent("keydown", {
      key: "k",
      code: "KeyK",
      ctrlKey: true,
      bubbles: true,
    });
    window.dispatchEvent(ev);
  }

  return (
    <button
      onClick={fireOpen}
      aria-label={label}
      style={{
        background: "transparent",
        border: "1px solid var(--line)",
        color: "var(--ink-faded)",
        padding: "6px 10px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "color 0.2s, border-color 0.2s",
      }}
    >
      {label}
    </button>
  );
}
