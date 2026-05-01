"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { WatermelonSeal } from "@/components/shared/watermelon-seal";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

/* Nav links — Arabic first, English fallback */
const NAV_LINKS = {
  ar: [
    { href: "/insights", label: "حريّة" },
    { href: "/services", label: "الدّكّان" },
    { href: "/about",    label: "مين إحنا" },
    { href: "/contact",  label: "تواصل" },
  ],
  en: [
    { href: "/insights", label: "Hurriyeh" },
    { href: "/services", label: "Dukkan" },
    { href: "/about",    label: "About" },
    { href: "/contact",  label: "Contact" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const isAr = locale === "ar";

  const links = isAr ? NAV_LINKS.ar : NAV_LINKS.en;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const resolveHref = (href: string) => `/${locale}${href}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-[var(--ground)]/92 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
      style={{
        background: scrolled
          ? undefined
          : "linear-gradient(to bottom, rgba(242,235,224,0.92) 0%, rgba(242,235,224,0) 100%)",
      }}
    >
      <nav className="flex justify-between items-center px-[6vw] py-6">

        {/* Mark + wordmark */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-4 group"
          aria-label="AIDA Critical Institute — الصفحة الرئيسية"
        >
          <WatermelonSeal size={30} hoverable />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--ink-dim)",
              transition: "color 0.2s",
            }}
            className="hidden sm:block group-hover:text-[var(--ink)]"
          >
            AIDA · القدس
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => {
            const href = resolveHref(link.href);
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={link.href}
                href={href}
                style={{
                  fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                  fontStyle: isAr ? "normal" : "italic",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: active ? "var(--ink)" : "var(--ink-dim)",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.2s",
                  borderBottom: active ? "1px solid var(--wm-red)" : "1px solid transparent",
                }}
                className="hover:text-[var(--ink)]"
              >
                {link.label}
              </Link>
            );
          })}

          {/* Language toggle */}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ color: "var(--ink-dim)", padding: "4px" }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="0" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="0" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "var(--ground)",
              borderTop: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <div className="px-[6vw] py-8 flex flex-col gap-6">
              {links.map((link) => {
                const href = resolveHref(link.href);
                return (
                  <Link
                    key={link.href}
                    href={href}
                    style={{
                      fontFamily: isAr ? "var(--font-ar-body)" : "var(--font-body)",
                      fontStyle: isAr ? "normal" : "italic",
                      fontSize: "1.25rem",
                      color: "var(--ink-dim)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
