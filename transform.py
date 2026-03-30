"""
AIDA Website v3 Master Transform Script
Modifies ALL source files in one execution.
Run: python transform.py
"""
import os
import re
import json

SRC = "C:/AIDA_System/aida-website/src"

def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✓ {path.replace(SRC, 'src')}")

def replace_in_file(path, replacements):
    """Apply multiple string replacements to a file."""
    content = read(path)
    for old, new in replacements:
        content = content.replace(old, new)
    write(path, content)

# ══════════════════════════════════════
# A. GLOBALS.CSS — Full color system overhaul
# ══════════════════════════════════════
print("═══ A. Color System ═══")

css = read(f"{SRC}/app/globals.css")

# Promote blue to primary, kill terracotta as primary accent
css_replacements = [
    # Core vars
    ("--terracotta: #B85C38;", "--accent: #4A7C8A;"),
    ("--terracotta-light: #D4845E;", "--accent-light: #6BA3B3;"),
    ("--terracotta-dim: rgba(184, 92, 56, 0.1);", "--accent-dim: rgba(74, 124, 138, 0.1);"),
    ("--terracotta-text: #8E4428;", "--accent-text: #2E5A66;"),
    # Border
    ("--border: rgba(184, 92, 56, 0.15);", "--border: rgba(74, 124, 138, 0.15);"),
    # Shadow
    ("--shadow-terracotta: 0 4px 24px rgba(184, 92, 56, 0.2);", "--shadow-accent: 0 4px 24px rgba(74, 124, 138, 0.2);"),
    # Tailwind theme vars
    ("--color-terracotta: var(--terracotta);", "--color-accent: var(--accent);"),
    ("--color-terracotta-light: var(--terracotta-light);", "--color-accent-light: var(--accent-light);"),
    ("--color-terracotta-dim: var(--terracotta-dim);", "--color-accent-dim: var(--accent-dim);"),
    # Gradient classes
    (".text-terracotta-gradient {", ".text-accent-gradient {"),
    ("background: linear-gradient(135deg, #B85C38, #D4845E, #B85C38);", "background: linear-gradient(135deg, #4A7C8A, #6BA3B3, #4A7C8A);"),
    # Legacy gold-gradient alias → also blue now
    (".text-gold-gradient {", ".text-accent-gradient-alt {"),
    # Dividers
    (".terracotta-divider {", ".accent-divider {"),
    ("background: linear-gradient(90deg, transparent, var(--terracotta), transparent);", "background: linear-gradient(90deg, transparent, var(--accent), transparent);"),
    (".gold-divider {", ".accent-divider-alt {"),
    # Warm panel hover
    ("border-color: rgba(184, 92, 56, 0.25);", "border-color: rgba(74, 124, 138, 0.25);"),
    # Dark section gradient
    ("background: linear-gradient(135deg, #D4845E, #F5E6C0, #D4845E);", "background: linear-gradient(135deg, #6BA3B3, #E8DFD0, #6BA3B3);"),
    # Gold border start → accent border
    (".gold-border-start {", ".accent-border-start {"),
    ("border-inline-start: 3px solid var(--terracotta);", "border-inline-start: 3px solid var(--accent);"),
    # Terracotta underline → accent
    (".terracotta-underline", ".accent-underline"),
    ("background: var(--terracotta);", "background: var(--accent);"),
    # Calligraphy watermark
    ("color: var(--terracotta);", "color: var(--accent);"),
    # Blue border (already existed, keep)
    # Selection stays watermelon red (intentional)
]
for old, new in css_replacements:
    css = css.replace(old, new)

# Fix the duplicate accent-divider issue
css = css.replace(".accent-divider-alt {", ".gold-divider {")

write(f"{SRC}/app/globals.css", css)

# ══════════════════════════════════════
# B. ALL COMPONENTS — terracotta → accent
# ══════════════════════════════════════
print("═══ B. Component Color Swap ═══")

component_files = [
    "components/layout/navbar.tsx",
    "components/layout/footer.tsx",
    "components/layout/language-switcher.tsx",
    "components/home/hero.tsx",
    "components/home/services-preview.tsx",
    "components/home/cta-banner.tsx",
    "components/home/featured-work.tsx",
    "components/home/client-logos.tsx",
    "components/about/about-content.tsx",
    "components/contact/contact-content.tsx",
    "components/services/services-grid.tsx",
    "components/insights/insights-content.tsx",
    "components/insights/article-content.tsx",
    "components/work/case-study-content.tsx",
    "components/shared/action-button.tsx",
    "components/shared/glass-panel.tsx",
    "components/shared/section-heading.tsx",
    "components/shared/whatsapp-fab.tsx",
    "app/[locale]/services/page.tsx",
    "app/[locale]/not-found.tsx",
    "app/not-found.tsx",
]

color_swaps = [
    ("var(--terracotta)", "var(--accent)"),
    ("var(--terracotta-dim)", "var(--accent-dim)"),
    ("var(--terracotta-light)", "var(--accent-light)"),
    ("shadow-terracotta", "shadow-accent"),
    ("text-terracotta-gradient", "text-accent-gradient"),
    ("text-gold-gradient", "text-accent-gradient"),
    ("gold-divider", "accent-divider"),
    ("gold-border-start", "accent-border-start"),
    ("terracotta-underline", "accent-underline"),
    ("bg-green-100", "bg-green-100"),  # WhatsApp stays green
]

for f in component_files:
    path = f"{SRC}/{f}"
    if os.path.exists(path):
        content = read(path)
        for old, new in color_swaps:
            content = content.replace(old, new)
        write(path, content)

# ══════════════════════════════════════
# C. NAVBAR — Remove audit banner
# ══════════════════════════════════════
print("═══ C. Remove Audit Banner ═══")

navbar = read(f"{SRC}/components/layout/navbar.tsx")

# Remove SITE import (used by banner)
navbar = navbar.replace('import { SITE } from "@/lib/constants";\n', '')
# Remove bannerDismissed state
navbar = navbar.replace("  const [bannerDismissed, setBannerDismissed] = useState(false);\n", "")
# Remove th translations
navbar = navbar.replace('  const th = useTranslations("hero");\n', "")

# Replace the entire return with a clean version (no banner)
# Find and replace the banner + header wrapper
navbar = navbar.replace("    <>\n    {/* Free Audit Banner */}\n", "    ")

# Remove the banner block entirely — replace the complex return
# Simplify: remove <> wrapper, banner div, and bannerDismissed logic
navbar = re.sub(
    r'\s*\{/\* Free Audit Banner \*/\}.*?</div>\s*\)\}\s*',
    '',
    navbar,
    flags=re.DOTALL
)

# Fix the header top position
navbar = navbar.replace(
    'bannerDismissed ? "top-0" : "top-[32px]"',
    '"top-0"'
)

# Remove the closing </> fragment if we still have it
navbar = navbar.replace("    </>\n  );\n}", "    </header>\n  );\n}")
# Clean up any remaining <> at the start
navbar = navbar.replace("    <>\n    <header", "    <header")

write(f"{SRC}/components/layout/navbar.tsx", navbar)

# ══════════════════════════════════════
# D. REMOVE PRICES
# ══════════════════════════════════════
print("═══ D. Remove Prices ═══")

# Services grid — remove price field and display
sg = read(f"{SRC}/components/services/services-grid.tsx")
# Remove price from SERVICE_KEYS entries
sg = re.sub(r',\s*price:\s*"[^"]*"', '', sg)
# Remove the price display span
sg = re.sub(r'\s*<span className="[^"]*font-space[^"]*">\s*\{service\.price\}\s*</span>', '', sg)
write(f"{SRC}/components/services/services-grid.tsx", sg)

# Services page — remove pricing table section
sp = read(f"{SRC}/app/[locale]/services/page.tsx")
# Remove the entire pricing section (from <section className="py-24 bg to its closing </section>)
sp = re.sub(
    r'\s*<section className="py-24 bg-\[var\(--limestone\)\]">.*?</section>',
    '',
    sp,
    flags=re.DOTALL
)
write(f"{SRC}/app/[locale]/services/page.tsx", sp)

# ══════════════════════════════════════
# E. REMOVE "we respond within the hour" + price text from hero
# ══════════════════════════════════════
print("═══ E. Remove microcopy ═══")

# Will be handled in JSON rewrites below

# ══════════════════════════════════════
# F. UPDATE CONSTANTS — social links
# ══════════════════════════════════════
print("═══ F. Update Constants ═══")

write(f"{SRC}/lib/constants.ts", '''export const SITE = {
  name: "AIDA Creative Studios",
  tagline: "Creative Consulting for Palestinian Businesses",
  description:
    "Brand identity, social media management, and digital strategy for Palestinian businesses in East Jerusalem. Trilingual creative agency serving Shu\\'fat, Jerusalem, and beyond.",
  url: "https://aidacreativestudios.com",
  whatsapp: "https://wa.me/972524635937",
  email: "info@aidacreativestudios.com",
  location: "Shu\\'fat, East Jerusalem",
  locationAr: "شعفاط، القدس",
  locationHe: "שועפאט, מזרח ירושלים",
  instagram: "https://www.instagram.com/aida.creative.consultancy/",
  facebook: "https://www.facebook.com/profile.php?id=61587116201810",
  tiktok: "https://www.tiktok.com/@aida.creative",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/services", label: "services" },
  { href: "/insights", label: "voice" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
] as const;
''')

# ══════════════════════════════════════
# G. HOMEPAGE — restructure sections
# ══════════════════════════════════════
print("═══ G. Homepage Restructure ═══")

write(f"{SRC}/app/[locale]/page.tsx", '''import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { OurClients } from "@/components/home/our-clients";
import { CTABanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OurClients />
      <CTABanner />
    </>
  );
}
''')

# ══════════════════════════════════════
# H. WATERMELON SVG COMPONENT
# ══════════════════════════════════════
print("═══ H. Watermelon SVG ═══")

write(f"{SRC}/components/shared/watermelon.tsx", '''interface WatermelonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: 14, md: 22, lg: 34 };

export function Watermelon({ size = "md", className = "" }: WatermelonProps) {
  const s = sizes[size];
  return (
    <svg
      width={s}
      height={s * 0.6}
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Green rind */}
      <path d="M2 20 C2 9 9 2 17 2 C25 2 32 9 32 20 Z" fill="#3D5038" />
      {/* White inner rind */}
      <path d="M4 20 C4 11 10 5 17 5 C24 5 30 11 30 20 Z" fill="#E8DFD0" />
      {/* Red flesh */}
      <path d="M5 20 C5 12 10 7 17 7 C24 7 29 12 29 20 Z" fill="#CE2C30" />
      {/* Seeds */}
      <ellipse cx="12" cy="15" rx="1.2" ry="1.8" fill="#2A3328" transform="rotate(-15 12 15)" />
      <ellipse cx="17" cy="13" rx="1.2" ry="1.8" fill="#2A3328" />
      <ellipse cx="22" cy="15" rx="1.2" ry="1.8" fill="#2A3328" transform="rotate(15 22 15)" />
    </svg>
  );
}
''')

# ══════════════════════════════════════
# I. FIX WATERMELON IN HERO
# ══════════════════════════════════════
print("═══ I. Fix Hero Watermelon ═══")

hero = read(f"{SRC}/components/home/hero.tsx")
# Replace the gradient stripe with the SVG component
hero = hero.replace(
    '      {/* بطيخ */}\n      <div className="absolute bottom-[18%] start-[12%] w-8 h-4 rounded-t-full bg-gradient-to-b from-[#5B7553] via-[#F4EDE4] to-[#CE2C30] opacity-[0.18] hover:opacity-40 transition-opacity" aria-hidden="true" title="🍉" />',
    '      {/* بطيخ */}\n      <div className="absolute bottom-[18%] start-[12%] opacity-20 hover:opacity-50 transition-opacity" title="🍉">\n        <Watermelon size="lg" />\n      </div>'
)
# Add import
if "Watermelon" not in hero:
    hero = hero.replace(
        'import { SITE } from "@/lib/constants";',
        'import { SITE } from "@/lib/constants";\nimport { Watermelon } from "@/components/shared/watermelon";'
    )
write(f"{SRC}/components/home/hero.tsx", hero)

# Fix footer watermelon
footer = read(f"{SRC}/components/layout/footer.tsx")
footer = footer.replace(
    ' <span className="inline-block w-[14px] h-[7px] rounded-t-full bg-gradient-to-b from-[#5B7553] via-white to-[#CE2C30] opacity-60 hover:opacity-100 transition-opacity cursor-default" aria-hidden="true" title="🍉" />',
    ''
)
# Add watermelon import and component
if "Watermelon" not in footer:
    footer = footer.replace(
        'import { SITE } from "@/lib/constants";',
        'import { SITE } from "@/lib/constants";\nimport { Watermelon } from "@/components/shared/watermelon";'
    )
footer = footer.replace(
    '<span>{t("madeWith")} </span>',
    '<span className="flex items-center gap-1.5">{t("madeWith")} <Watermelon size="sm" className="opacity-50 hover:opacity-100 transition-opacity" /></span>'
)
write(f"{SRC}/components/layout/footer.tsx", footer)

# Fix about page watermelon
about = read(f"{SRC}/components/about/about-content.tsx")
about = about.replace(
    '            {/* بطيخ — for those who see */}\n            <div className="flex justify-center gap-2 mt-6" aria-hidden="true" title="🍉">\n              <span className="w-[8px] h-[4px] rounded-t-full bg-[#5B7553] opacity-35" />\n              <span className="w-[8px] h-[4px] rounded-t-full bg-[#CE2C30] opacity-30" />\n              <span className="w-[8px] h-[4px] rounded-t-full bg-[#2A3328] opacity-25" />\n              <span className="w-[3px] h-[4px] bg-[#2A3328] opacity-15 rounded-full" />\n            </div>',
    '            {/* بطيخ */}\n            <div className="flex justify-center mt-6 opacity-25 hover:opacity-60 transition-opacity">\n              <Watermelon size="sm" />\n            </div>'
)
if "Watermelon" not in about:
    about = about.replace(
        'import { GlassPanel }',
        'import { Watermelon } from "@/components/shared/watermelon";\nimport { GlassPanel }'
    )
write(f"{SRC}/components/about/about-content.tsx", about)

# ══════════════════════════════════════
# J. REMOVE hero microcopy + cta2
# ══════════════════════════════════════
print("═══ J. Clean Hero ═══")

hero = read(f"{SRC}/components/home/hero.tsx")
# Remove the microcopy span
hero = re.sub(
    r'\s*\{/\* Microcopy.*?\*/\}\s*<span[^>]*>\s*\{t\("cta1micro"\)\}\s*</span>',
    '',
    hero,
    flags=re.DOTALL
)
# Remove the outline button (cta2)
hero = re.sub(
    r'\s*<GoldButton href="/insights"[^>]*>\s*\{t\("cta2"\)\}\s*</GoldButton>',
    '',
    hero
)
write(f"{SRC}/components/home/hero.tsx", hero)

# ══════════════════════════════════════
# K. OUR CLIENTS COMPONENT (NEW)
# ══════════════════════════════════════
print("═══ K. Our Clients Component ═══")

write(f"{SRC}/components/home/our-clients.tsx", '''"use client";

import { Instagram, Facebook, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/shared/glass-panel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const clients = [
  {
    nameEn: "Golden Line Mobile",
    nameAr: "جولدن لاين موبايل",
    descEn: "Premium phone accessories & smartphones — wholesale and retail with delivery across East Jerusalem.",
    descAr: "إكسسوارات وموبايلات فخمة — جملة ومفرق مع توصيل عبر القدس الشرقية.",
    location: "Shu\\'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "https://wa.me/972502226559",
    facebook: "https://www.facebook.com/golden.line.mobile.1",
    instagram: "",
    color: "#C5A059",
  },
  {
    nameEn: "Al-Day\\'a Shu\\'afat",
    nameAr: "الدايعة شعفاط",
    descEn: "Authentic Arabic cuisine — shawarma, grills, and family meals with delivery across Shu\\'fat and nearby neighborhoods.",
    descAr: "أكل عربي أصيل — شاورما، مشاوي، ووجبات عائلية مع توصيل بشعفاط والأحياء المجاورة.",
    location: "Shu\\'fat, East Jerusalem",
    locationAr: "شعفاط، القدس",
    whatsapp: "",
    facebook: "",
    instagram: "",
    color: "#5B7553",
  },
];

export function OurClients() {
  const t = useTranslations("clients");

  return (
    <section className="py-32 bg-[var(--limestone)]">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <ScrollReveal key={client.nameEn} delay={i * 0.15}>
              <GlassPanel hover className="h-full">
                {/* Color accent bar */}
                <div
                  className="h-1.5 rounded-full mb-6 w-16"
                  style={{ backgroundColor: client.color }}
                />

                {/* Name */}
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-1">
                  {client.nameEn}
                </h3>
                <p className="font-arabic text-lg text-[var(--accent)] mb-4" dir="rtl">
                  {client.nameAr}
                </p>

                {/* Description */}
                <p className="text-[var(--stone-gray)] text-sm leading-relaxed mb-6">
                  {client.descEn}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                  <MapPin size={14} />
                  <span>{client.location}</span>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                  {client.facebook && (
                    <a
                      href={client.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {client.instagram && (
                    <a
                      href={client.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {client.whatsapp && (
                    <a
                      href={client.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </a>
                  )}
                </div>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
''')

# ══════════════════════════════════════
# L. FOOTER — Add social media icons
# ══════════════════════════════════════
print("═══ L. Footer Social Links ═══")

footer = read(f"{SRC}/components/layout/footer.tsx")
# Add social icons to the contact section
footer = footer.replace(
    """              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                WhatsApp
              </Link>
              <span>{SITE.email}</span>
              <span>{SITE.location}</span>""",
    """              <div className="flex items-center gap-3 mb-3">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors" aria-label="Instagram">Instagram</a>
                <span className="text-[var(--mist)]">·</span>
                <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors" aria-label="TikTok">TikTok</a>
                <span className="text-[var(--mist)]">·</span>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors" aria-label="Facebook">Facebook</a>
              </div>
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                WhatsApp
              </Link>
              <span>{SITE.email}</span>
              <span>{SITE.location}</span>"""
)
write(f"{SRC}/components/layout/footer.tsx", footer)

# ══════════════════════════════════════
# DONE
# ══════════════════════════════════════
print()
print("═══════════════════════════════════")
print("✅ Master transform complete!")
print("   Next: Run content + visual agents")
print("═══════════════════════════════════")
