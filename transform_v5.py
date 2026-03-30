"""
AIDA v5 — Fix build + add breadcrumbs + internal links
"""
import os, re

SRC = "C:/AIDA_System/aida-website/src"

def read(p):
    with open(p, "r", encoding="utf-8") as f: return f.read()
def write(p, c):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f: f.write(c)
    print(f"  ✓ {os.path.basename(p)}")

print("━━━ BLOCK 1A: Fix escaped backticks ━━━")

for fname in ["insights-content.tsx", "article-content.tsx"]:
    path = f"{SRC}/components/insights/{fname}"
    content = read(path)
    # Fix escaped backticks from Python f-string mangling
    fixed = content.replace("\\`", "`")
    if fixed != content:
        write(path, fixed)
        print(f"    Fixed {content.count(chr(92) + '`')} escaped backticks")
    else:
        print(f"    {fname} — clean")

print()
print("━━━ BLOCK 1B: Add breadcrumbs to pages ━━━")

# Services page
sp = read(f"{SRC}/app/[locale]/services/page.tsx")
if "Breadcrumbs" not in sp:
    sp = sp.replace(
        'import { SectionHeading }',
        'import { Breadcrumbs } from "@/components/shared/breadcrumbs";\nimport { SectionHeading }'
    )
    sp = sp.replace(
        '<SectionHeading label={t("label")}',
        '<Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Services" }]} />\n          <SectionHeading label={t("label")}'
    )
    write(f"{SRC}/app/[locale]/services/page.tsx", sp)

# Clients listing
cp = read(f"{SRC}/app/[locale]/clients/page.tsx")
if "Breadcrumbs" not in cp:
    cp = cp.replace(
        'import { ClientsContent }',
        'import { Breadcrumbs } from "@/components/shared/breadcrumbs";\nimport { ClientsContent }'
    )
    cp = cp.replace(
        'return <ClientsContent />;',
        '''return (
    <>
      <div className="pt-28 mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Clients" }]} />
      </div>
      <ClientsContent />
    </>
  );'''
    )
    write(f"{SRC}/app/[locale]/clients/page.tsx", cp)

# About page
ap = read(f"{SRC}/app/[locale]/about/page.tsx")
if "Breadcrumbs" not in ap:
    # About uses AboutContent component, add breadcrumbs wrapper
    if 'import { AboutContent }' in ap:
        ap = ap.replace(
            'import { AboutContent }',
            'import { Breadcrumbs } from "@/components/shared/breadcrumbs";\nimport { AboutContent }'
        )
        ap = ap.replace(
            'return <AboutContent />;',
            '''return (
    <>
      <div className="pt-28 mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "About" }]} />
      </div>
      <AboutContent />
    </>
  );'''
        )
        write(f"{SRC}/app/[locale]/about/page.tsx", ap)

# Contact page
ctp = read(f"{SRC}/app/[locale]/contact/page.tsx")
if "Breadcrumbs" not in ctp:
    if 'import { ContactContent }' in ctp:
        ctp = ctp.replace(
            'import { ContactContent }',
            'import { Breadcrumbs } from "@/components/shared/breadcrumbs";\nimport { ContactContent }'
        )
        ctp = ctp.replace(
            'return <ContactContent />;',
            '''return (
    <>
      <div className="pt-28 mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Contact" }]} />
      </div>
      <ContactContent />
    </>
  );'''
        )
        write(f"{SRC}/app/[locale]/contact/page.tsx", ctp)

print()
print("━━━ BLOCK 1C: Internal links in footer description ━━━")
# Already has links in nav. Internal linking within article body would require
# modifying the JSON content which is too risky. Better to add "Related articles"
# component at the bottom of each article.

# Add related articles to article detail
ac = read(f"{SRC}/components/insights/article-content.tsx")
if "Related" not in ac:
    # Add articles import
    ac = ac.replace(
        'import { COLLECTIONS, type Article }',
        'import { articles as allArticles, COLLECTIONS, type Article }'
    )
    # Add related articles before CTA
    ac = ac.replace(
        '      <CTABanner />',
        '''      {/* Related articles — internal linking for SEO */}
      <section className="py-16 bg-[var(--limestone)]">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="font-space text-[var(--accent)] text-sm font-semibold uppercase tracking-wider mb-6">
            {t("label")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allArticles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/${locale}/insights/${related.slug}`}
                  className="group block"
                >
                  <div className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                    <h4 className="font-serif text-base text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {t(`articles.${related.titleKey}`)}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)] font-space mt-2 block">
                      {related.readingTime} {t("minRead")}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />'''
    )
    # Add Link import if not already there
    if "import Link" not in ac:
        ac = ac.replace(
            'import { ArrowLeft',
            'import Link from "next/link";\nimport { ArrowLeft'
        )
    write(f"{SRC}/components/insights/article-content.tsx", ac)

print()
print("═══════════════════════════════════")
print("✅ v5 Transform complete")
print("═══════════════════════════════════")
