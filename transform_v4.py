"""
AIDA Website v4 — Phase 1-4 Master Transform
Phases: Foundation fixes + SEO infrastructure + Backlinks prep + Visual placeholders
"""
import os, json, re

SRC = "C:/AIDA_System/aida-website/src"

def read(p):
    with open(p, "r", encoding="utf-8") as f: return f.read()
def write(p, c):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f: f.write(c)
    print(f"  ✓ {p.replace(SRC, 'src')}")

# ═══════════════════════════════════════
# PHASE 1: FOUNDATION FIXES
# ═══════════════════════════════════════
print("━━━ PHASE 1: FOUNDATION ━━━")

# 1A. Hide Hebrew from language switcher (keep routes + SEO)
print("  → Hide Hebrew from switcher")
ls = read(f"{SRC}/components/layout/language-switcher.tsx")
ls = ls.replace(
    '''const LOCALES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ar", label: "العربية", flag: "ع" },
  { code: "he", label: "עברית", flag: "ע" },
] as const;''',
    '''// Hebrew kept for SEO (routes + hreflang work) but hidden from UI
const ALL_LOCALES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ar", label: "العربية", flag: "ع" },
  { code: "he", label: "עברית", flag: "ע" },
] as const;
const LOCALES = ALL_LOCALES.filter(l => l.code !== "he");'''
)
# Fix the current locale lookup to use ALL_LOCALES
ls = ls.replace(
    "const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];",
    "const current = ALL_LOCALES.find((l) => l.code === locale) ?? ALL_LOCALES[0];"
)
write(f"{SRC}/components/layout/language-switcher.tsx", ls)

# 1B. Fix robots.txt to include sitemap
print("  → Fix robots.txt")
robots = read(f"{SRC}/app/robots.ts")
write(f"{SRC}/app/robots.ts", '''import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://aidacreativestudios.com/sitemap.xml",
  };
}
''')

# 1C. Add alt text to watermelon SVG
print("  → Add alt text to watermelon")
wm = read(f"{SRC}/components/shared/watermelon.tsx")
wm = wm.replace('aria-hidden="true"', 'role="img" aria-label="Watermelon slice — Palestinian symbol"')
write(f"{SRC}/components/shared/watermelon.tsx", wm)

# ═══════════════════════════════════════
# PHASE 2: SEO INFRASTRUCTURE
# ═══════════════════════════════════════
print()
print("━━━ PHASE 2: SEO INFRASTRUCTURE ━━━")

# 2A. FAQ Schema on services page
print("  → FAQ schema on services")
sp = read(f"{SRC}/app/[locale]/services/page.tsx")

faq_schema = '''{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does branding cost in East Jerusalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand identity packages for Palestinian businesses in East Jerusalem typically range from entry-level logo design to complete brand systems. AIDA Creative Studios offers full brand identity including logo variants, color palette, typography, and guidelines. Contact us for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create content in Arabic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All our social media content, captions, and brand copy is written in authentic Palestinian Jerusalemite dialect — not formal MSA or Gulf Arabic. We also work in English and Hebrew."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage our Google Business Profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We set up and optimize Google Business Profiles for Palestinian businesses in East Jerusalem — including photos, hours, categories, posts, and review strategy — so customers find you on Google Maps before your competitors."
          }
        },
        {
          "@type": "Question",
          "name": "What social media platforms do you manage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manage Instagram, Facebook, and TikTok accounts with content creation, scheduling, and engagement — all in authentic Palestinian dialect that drives real customers through your door."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Restaurant branding is one of our specialties. We design print-ready Arabic menus with RTL support, food photography, and social media content. Our menu designs are strategically built to maximize average order value."
          }
        }
      ]
    }'''

# Add FAQ schema script before the closing fragment
if "FAQPage" not in sp:
    sp = sp.replace(
        "      <CTABanner />\n    </>",
        f'''      <CTABanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify({faq_schema}) }}}}
      />
    </>'''
    )
    write(f"{SRC}/app/[locale]/services/page.tsx", sp)

# 2B. Breadcrumbs component
print("  → Breadcrumbs component")
write(f"{SRC}/components/shared/breadcrumbs.tsx", '''"use client";

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
''')

# 2C. Add internal links between pages
print("  → Internal linking in services descriptions")
# Add "Learn more in Our Voice" links to service descriptions in en.json
# We'll do this via the content agent to avoid massive JSON manipulation here

# 2D. Add OG image meta tag placeholder
print("  → OG image placeholder")
layout = read(f"{SRC}/app/[locale]/layout.tsx")
if "og-image" not in layout or "ogImage" not in layout:
    layout = layout.replace(
        '"https://aidacreativestudios.com/brand/og-image.jpg"',
        '"https://aidacreativestudios.com/og-image.png"'
    )
    write(f"{SRC}/app/[locale]/layout.tsx", layout)

# ═══════════════════════════════════════
# PHASE 3: BACKLINK INFRASTRUCTURE
# ═══════════════════════════════════════
print()
print("━━━ PHASE 3: BACKLINK PREP ━━━")

# 3A. Add canonical links and rel="me" to client pages for mutual SEO
print("  → Client pages with rel=me links for backlink value")
# The client detail pages already link to their social media
# We need to add rel="me" to those links for maximum SEO value
cd = read(f"{SRC}/components/clients/client-detail-content.tsx")
cd = cd.replace(
    'rel="noopener noreferrer"',
    'rel="noopener noreferrer me"'
)
write(f"{SRC}/components/clients/client-detail-content.tsx", cd)

# 3B. Add organization schema with client mentions
print("  → Organization schema with client mentions")
# Already in layout.tsx via JSON-LD, but let's add knowsAbout
layout = read(f"{SRC}/app/[locale]/layout.tsx")
if '"knowsAbout"' not in layout:
    layout = layout.replace(
        '"knowsLanguage": ["en", "ar", "he"]',
        '''"knowsLanguage": ["en", "ar", "he"],
              "knowsAbout": [
                "Palestinian business branding",
                "Arabic social media marketing",
                "Restaurant menu design",
                "East Jerusalem digital marketing",
                "Trilingual web design"
              ]'''
    )
    write(f"{SRC}/app/[locale]/layout.tsx", layout)

# ═══════════════════════════════════════
# PHASE 4: VISUAL INFRASTRUCTURE
# ═══════════════════════════════════════
print()
print("━━━ PHASE 4: VISUAL INFRASTRUCTURE ━━━")

# 4A. Create article image component
print("  → Article image component")
write(f"{SRC}/components/shared/article-cover.tsx", '''"use client";

interface ArticleCoverProps {
  title: string;
  collection: string;
  color: string;
  className?: string;
}

/**
 * Generates a branded article cover using CSS.
 * Replace with Cloudinary/Canva-generated images when available.
 */
export function ArticleCover({ title, collection, color, className = "" }: ArticleCoverProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[var(--limestone)] ${className}`}
      style={{ aspectRatio: "1200/630" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Color accent */}
      <div
        className="absolute top-0 start-0 w-full h-1.5"
        style={{ backgroundColor: color }}
      />

      {/* Decorative circle */}
      <div
        className="absolute -end-16 -bottom-16 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <span
          className="font-space text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color }}
        >
          {collection}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug max-w-[80%]">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[var(--ink)] flex items-center justify-center text-[var(--sand)] font-serif text-xs font-bold">
            A
          </div>
          <span className="font-space text-xs text-[var(--text-muted)]">AIDA Creative Studios</span>
        </div>
      </div>
    </div>
  );
}
''')

# 4B. Add cover images to the insights listing
print("  → Add cover images to article cards")
ic = read(f"{SRC}/components/insights/insights-content.tsx")
# Add ArticleCover import
if "ArticleCover" not in ic:
    ic = ic.replace(
        'import { ScrollReveal }',
        'import { ArticleCover } from "@/components/shared/article-cover";\nimport { ScrollReveal }'
    )
    # Add cover image inside each article card
    ic = ic.replace(
        '''                      {/* Collection badge */}''',
        '''                      {/* Cover image */}
                      <ArticleCover
                        title={t(\`articles.\${article.titleKey}\`)}
                        collection={t(\`collections.\${article.collection}\`)}
                        color={col?.color || "#4A7C8A"}
                        className="mb-4 -mx-6 -mt-6 rounded-b-none"
                      />

                      {/* Collection badge */}'''
    )
    write(f"{SRC}/components/insights/insights-content.tsx", ic)

# 4C. Add cover to article detail pages
print("  → Add cover to article detail pages")
ac = read(f"{SRC}/components/insights/article-content.tsx")
if "ArticleCover" not in ac:
    ac = ac.replace(
        'import { ScrollReveal }',
        'import { ArticleCover } from "@/components/shared/article-cover";\nimport { ScrollReveal }'
    )
    # Add cover after the header
    ac = ac.replace(
        '''      {/* Article body */}''',
        '''      {/* Cover image */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <ArticleCover
            title={t(\`articles.\${article.titleKey}\`)}
            collection={t(\`collections.\${article.collection}\`)}
            color={col?.color || "#4A7C8A"}
          />
        </div>
      </section>

      {/* Article body */}'''
    )
    write(f"{SRC}/components/insights/article-content.tsx", ac)

# 4D. Create OG image generation component (CSS-based for now)
print("  → OG image meta setup")
# The actual OG image will be generated via Cloudinary later
# For now, ensure the meta tags are in place

print()
print("═══════════════════════════════════")
print("✅ v4 TRANSFORM COMPLETE")
print("   Phase 1: Hebrew hidden, robots.txt, alt text")
print("   Phase 2: FAQ schema, breadcrumbs, OG meta")
print("   Phase 3: Backlink rel=me, knowsAbout schema")
print("   Phase 4: Article covers, visual infrastructure")
print("═══════════════════════════════════")
