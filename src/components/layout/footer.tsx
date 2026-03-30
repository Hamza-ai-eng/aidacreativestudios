import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SITE } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { href: `/${locale}`, label: tn("home") },
    { href: `/${locale}/services`, label: tn("services") },
    { href: `/${locale}/insights`, label: tn("insights") },
    { href: `/${locale}/about`, label: tn("about") },
    { href: `/${locale}/contact`, label: tn("contact") },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--limestone)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--ink)] flex items-center justify-center text-[var(--sand)] font-serif font-bold text-lg">
                A
              </div>
              <span className="font-serif text-xl text-[var(--ink)]">
                AIDA Creative Studios
              </span>
            </div>
            <p className="text-[var(--stone-gray)] text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[var(--terracotta)] font-space font-semibold text-sm uppercase tracking-wider mb-4">
              {t("navigation")}
            </h4>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--stone-gray)] text-sm hover:text-[var(--ink)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--terracotta)] font-space font-semibold text-sm uppercase tracking-wider mb-4">
              {t("getInTouch")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[var(--stone-gray)]">
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--terracotta)] transition-colors"
              >
                WhatsApp
              </Link>
              <span>{SITE.email}</span>
              <span>{SITE.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("madeWith")} <span className="inline-block w-[14px] h-[7px] rounded-t-full bg-gradient-to-b from-[#5B7553] via-white to-[#CE2C30] opacity-60 hover:opacity-100 transition-opacity cursor-default" aria-hidden="true" title="🍉" /></span>
        </div>
      </div>
    </footer>
  );
}
