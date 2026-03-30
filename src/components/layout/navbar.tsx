"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const th = useTranslations("hero");
  const locale = useLocale();

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/insights`, label: t("insights") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
    {/* Free Audit Banner */}
    {!bannerDismissed && (
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[var(--terracotta)] text-white text-center py-1.5 px-4">
        <div className="flex items-center justify-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-xs sm:text-sm font-medium hover:underline"
          >
            {th("audit")}
          </a>
          <button
            onClick={() => setBannerDismissed(true)}
            className="text-white/70 hover:text-white text-xs ms-2"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    )}
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        bannerDismissed ? "top-0" : "top-[32px]",
        scrolled
          ? "bg-[var(--sand)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[var(--ink)] flex items-center justify-center text-[var(--sand)] font-serif font-bold text-lg transition-all group-hover:rounded-2xl group-hover:bg-[var(--terracotta)]">
            A
          </div>
          <span className="font-serif text-lg text-[var(--ink)] hidden sm:block">
            AIDA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-space text-sm font-medium transition-colors duration-300",
                pathname === link.href
                  ? "text-[var(--terracotta)]"
                  : "text-[var(--stone-gray)] hover:text-[var(--ink)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href={`/${locale}/contact`}
            className="ms-2 px-5 py-2 rounded-full bg-[var(--ink)] text-[var(--sand)] font-space text-sm font-semibold transition-all hover:bg-[var(--terracotta)] hover:scale-105"
          >
            {t("getInTouch")}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[var(--ink)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--sand)] border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-space text-lg font-medium transition-colors",
                    pathname === link.href
                      ? "text-[var(--terracotta)]"
                      : "text-[var(--stone-gray)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
