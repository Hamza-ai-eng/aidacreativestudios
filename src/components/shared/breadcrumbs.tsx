"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const locale = useLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://aidacreativestudios.com/${locale}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-space mb-6">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} className="opacity-40" />}
            {item.href ? (
              <Link href={`/${locale}${item.href}`} className="hover:text-[var(--accent)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--ink)]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
