# AIDA Creative Studios -- "Jaffa Poster" Design System
## Research Report & Recommendations | March 28, 2026

---

## 1. EXECUTIVE SUMMARY

This document proposes evolving the AIDA website's current "Jerusalem Sandstone" aesthetic into a **"Jaffa Poster"** design system -- warmer, bolder, and rooted in the visual language of Palestinian poster art and Mediterranean identity. The shift replaces the institutional serif tone (Amiri + Playfair) with the geometric confidence of Kufi typography, and introduces a richer, more saturated color palette that evokes Jaffa oranges, olive groves, terracotta architecture, and the Mediterranean sea.

---

## 2. FONT RESEARCH

### 2.1 Reem Kufi (RECOMMENDED FOR ARABIC HEADLINES)

**Source:** github.com/aliftype/reem-kufi | Google Fonts
**License:** OFL-1.1
**Designer:** Khaled Hosny, named after his daughter ("Reem" = a white deer in Arabic)

- **Style:** Modern Kufic typeface inspired by early Kufic (Mushafi) models and Fatimid Kufic designs. Draws from 20th-century calligrapher Mohammad Abdul Qadir who revived and formalized Kufic rules.
- **Character support:** Full Arabic script with multiple OpenType alternate glyphs (cv01, cv02, etc.). Latin glyphs derived from Josefin Sans by Santiago Orozco.
- **Weights:** Variable font (continuous weight axis). Static instances: Regular through Bold.
- **RTL quality:** Excellent. Built from the ground up as an Arabic-first typeface.
- **Visual feel:** Angular, geometric, historical yet modern. Gives "a feeling of something old, historical, or Islamic." Particularly suitable for display/headline use.
- **Recommended pairings:** Inter (Latin body), Cairo (Arabic body), Josefin Sans (Latin display complement).
- **Hebrew support:** None. Requires a separate Hebrew typeface.

### 2.2 Reem Kufi Fun

**Source:** Google Fonts (variant of Reem Kufi)
**License:** OFL-1.1

- **Style:** Playful variant of Reem Kufi with decorative, informal touches on the letterforms.
- **Use case:** NOT recommended for AIDA's primary brand. Too informal for a studio-grade agency identity. Could work for social media graphics or casual client-facing content.
- **Weights:** Variable font, similar range to Reem Kufi.
- **Verdict:** Skip for the design system. Reserve as a specialty accent font only.

### 2.3 Noto Kufi Arabic

**Source:** notofonts.github.io/arabic | Google Fonts
**License:** OFL-1.1 (SIL Open Font License)

- **Style:** Kufi-style Arabic from Google's Noto family. Clean, systematic, designed for comprehensive language coverage.
- **Weights:** 9 weights -- Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black. Exceptional weight range.
- **Character support:** Comprehensive Arabic script including Classical Arabic, Urdu, Pashto, Kurdish, Uyghur, Punjabi, Sindhi, Indonesian Arabic variants.
- **RTL quality:** Excellent. Google-quality hinting and shaping.
- **Visual feel:** More neutral and systematic than Reem Kufi. Lacks the calligraphic warmth but compensates with unmatched weight flexibility.
- **Recommended pairings:** Noto Sans (Latin), Noto Sans Hebrew (Hebrew) -- unified Noto ecosystem.

### 2.4 Changa

**Source:** Google Fonts
**License:** OFL-1.1

- **Style:** Hybrid Arabic-Latin typeface. More rounded and contemporary than Kufi styles. Has a tech/startup feel.
- **Weights:** 5 weights -- ExtraLight, Light, Regular, Medium, SemiBold, Bold.
- **Character support:** Arabic and Latin. No Hebrew.
- **RTL quality:** Good. Designed as a bilingual typeface from the start.
- **Visual feel:** Modern, slightly rounded, friendly. Less historically rooted than Kufi styles.
- **Verdict:** Better suited for tech/startup brands. Does not align with the "Jaffa Poster" historical/cultural aesthetic.

### 2.5 Kufi Script Style Context

Kufic is the oldest calligraphic form of Arabic script, originating in 7th-century Kufa. Key characteristics:
- **Angular, rectilinear letterforms** with strong horizontal orientation
- **Geometric precision** -- straight lines, measured angles, verticals and horizontals
- Historically used for Quran transcription (7th-11th centuries)
- Square Kufic variant uses "bricks and tiles as pixels" -- maps perfectly to modern grid-based design
- Inherently ornamental, translating well to display/headline contexts

---

## 3. FONT RECOMMENDATION

### Primary Recommendation: Reem Kufi

| Role | Font | Fallback | Reasoning |
|------|------|----------|-----------|
| **Arabic Headlines** | **Reem Kufi** (700) | Noto Kufi Arabic, sans-serif | Historical Kufic warmth, calligraphic character, display-optimized |
| **Arabic Body** | Cairo (400, 600) | Noto Sans Arabic, sans-serif | Remains from current system; proven readability |
| **English Headlines** | Space Grotesk (700) | system-ui, sans-serif | Geometric complement to Kufi angularity |
| **English Body** | Inter (400, 500, 600) | system-ui, sans-serif | Remains from current system; world-class readability |
| **Hebrew Headlines** | Heebo (700, 800) | system-ui, sans-serif | Geometric sans-serif, matches Kufi's angular energy |
| **Hebrew Body** | Heebo (400, 500) | system-ui, sans-serif | Consistent Hebrew stack |
| **Monospace/Data** | Space Mono | Menlo, monospace | Technical contrast |

### Why Reem Kufi over Noto Kufi Arabic:
1. **Cultural authenticity** -- Reem Kufi draws directly from Fatimid and Mushafi calligraphic traditions, rooted in the same visual heritage as Palestinian poster art
2. **Display character** -- its angular, geometric forms have more visual personality at headline sizes
3. **Named story** -- "Reem" (a white deer) gives the typeface a poetic origin story that resonates with AIDA's creative identity
4. **Poster aesthetic** -- the bold, declarative forms align with the confrontational visual language of Palestinian political posters

### Why NOT Amiri anymore:
The current system uses Amiri (Naskh-style calligraphic serif) for Arabic headlines. Amiri is beautiful but signals *tradition/classical literature*. Reem Kufi signals *cultural pride + modern design* -- closer to the Jaffa Poster identity target.

---

## 4. COLOR PALETTE

### 4.1 Proposed "Jaffa Poster" Palette

The palette draws from five source elements: Jaffa orange groves, Mediterranean Sea, Jerusalem limestone, olive trees, and the red-green-black-white of Palestinian identity.

#### Core Palette

| Token | Hex | RGB | Role | Source Inspiration |
|-------|-----|-----|------|--------------------|
| `--sandstone` | `#F4EDE4` | 244, 237, 228 | Primary background | Jerusalem limestone walls |
| `--parchment` | `#E8DFD0` | 232, 223, 208 | Secondary surface | Aged paper, warm panels |
| `--terracotta` | `#B85C38` | 184, 92, 56 | Primary accent, CTAs | Jaffa clay rooftops |
| `--olive` | `#5B7553` | 91, 117, 83 | Secondary accent | Palestinian olive groves |
| `--mediterranean` | `#4A7C8A` | 74, 124, 138 | Tertiary accent | Jaffa port, Mediterranean Sea |

#### Extended Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--ink` | `#1A1A1A` | 26, 26, 26 | Primary text |
| `--charcoal` | `#2C2C2C` | 44, 44, 44 | Secondary text on light bg |
| `--white` | `#FFFFFF` | 255, 255, 255 | Text on dark/accent bg |
| `--terracotta-dark` | `#8E4428` | 142, 68, 40 | Terracotta text on light bg |
| `--olive-dark` | `#3D5038` | 61, 80, 56 | Olive text on light bg |
| `--blue-dark` | `#2E5A66` | 46, 90, 102 | Mediterranean text on light bg |
| `--terracotta-dim` | `#B85C3815` | -- | Terracotta tint bg |
| `--olive-dim` | `#5B755315` | -- | Olive tint bg |
| `--blue-dim` | `#4A7C8A15` | -- | Mediterranean tint bg |
| `--red` | `#CE2C30` | 206, 44, 48 | Watermelon red (retained) |
| `--gold` | `#C5A059` | 197, 160, 89 | Gold accent (retained, demoted) |

#### Semantic Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#F4EDE4` | Page background |
| `--surface` | `#E8DFD0` | Card/panel background |
| `--border` | `#B85C3820` | Default border |
| `--text-primary` | `#1A1A1A` | Primary text |
| `--text-secondary` | `#5A5550` | Secondary text |
| `--text-muted` | `#9A9490` | Muted text |
| `--accent-primary` | `#B85C38` | Terracotta -- CTAs, active states |
| `--accent-secondary` | `#5B7553` | Olive -- success, nature |
| `--accent-tertiary` | `#4A7C8A` | Mediterranean -- links, info |
| `--success` | `#5B7553` | Approved (olive) |
| `--warning` | `#B85C38` | Attention (terracotta) |
| `--danger` | `#CE2C30` | Error, rejected |

### 4.2 Contrast Ratios (WCAG 2.1)

#### Text on White (#FFFFFF) Background

| Foreground | Ratio | AA Normal | AA Large | AAA Normal | AAA Large |
|-----------|-------|-----------|----------|------------|-----------|
| Terracotta `#B85C38` | 4.54:1 | PASS | PASS | FAIL | PASS |
| Olive `#5B7553` | 5.10:1 | PASS | PASS | FAIL | PASS |
| Mediterranean `#4A7C8A` | 4.62:1 | PASS | PASS | FAIL | PASS |
| Ink `#1A1A1A` | 17.40:1 | PASS | PASS | PASS | PASS |
| Charcoal `#2C2C2C` | 13.97:1 | PASS | PASS | PASS | PASS |

#### Text on Sandstone (#F4EDE4) Background

| Foreground | Ratio | AA Normal | AA Large | AAA Normal | AAA Large |
|-----------|-------|-----------|----------|------------|-----------|
| Terracotta `#B85C38` | 3.91:1 | FAIL | PASS | FAIL | FAIL |
| Olive `#5B7553` | 4.39:1 | FAIL | PASS | FAIL | FAIL |
| Mediterranean `#4A7C8A` | 3.98:1 | FAIL | PASS | FAIL | FAIL |
| Terracotta Dark `#8E4428` | 6.01:1 | PASS | PASS | FAIL | PASS |
| Olive Dark `#3D5038` | 7.52:1 | PASS | PASS | PASS | PASS |
| Blue Dark `#2E5A66` | 6.53:1 | PASS | PASS | FAIL | PASS |
| Ink `#1A1A1A` | 14.98:1 | PASS | PASS | PASS | PASS |
| Charcoal `#2C2C2C` | 12.02:1 | PASS | PASS | PASS | PASS |

#### White (#FFFFFF) Text on Accent Backgrounds

| Background | Ratio | AA Normal | AA Large |
|-----------|-------|-----------|----------|
| Terracotta `#B85C38` | 4.54:1 | PASS | PASS |
| Olive `#5B7553` | 5.10:1 | PASS | PASS |
| Mediterranean `#4A7C8A` | 4.62:1 | PASS | PASS |

#### Accessibility Rules

1. **Body text on sandstone:** Use `--ink` (#1A1A1A) or `--charcoal` (#2C2C2C) ONLY. Never use raw accent colors for body text on sandstone.
2. **Accent-colored text on sandstone:** Use darkened variants (`--terracotta-dark`, `--olive-dark`, `--blue-dark`) for links, labels, and small text. Raw accent colors are ONLY acceptable at 24px+ (large text).
3. **White text on accent backgrounds:** All three accent colors pass AA for both normal and large text. Safe for buttons, banners, and hero sections.
4. **Focus indicators:** Use `--ink` (#1A1A1A) 3px outline on sandstone backgrounds for maximum visibility.

---

## 5. TYPOGRAPHY SCALE

### 5.1 Modular Scale (1.250 -- Major Third)

| Level | Size (rem) | Size (px) | Weight | Line Height | Usage |
|-------|-----------|-----------|--------|-------------|-------|
| Display | 3.815 | 61 | 700 | 1.1 | Hero headlines |
| H1 | 3.052 | 49 | 700 | 1.15 | Page titles |
| H2 | 2.441 | 39 | 700 | 1.2 | Section headers |
| H3 | 1.953 | 31 | 600 | 1.25 | Subsection headers |
| H4 | 1.563 | 25 | 600 | 1.3 | Card titles |
| H5 | 1.25 | 20 | 600 | 1.35 | Labels, small headings |
| Body Large | 1.125 | 18 | 400 | 1.65 | Lead paragraphs |
| Body | 1.0 | 16 | 400 | 1.65 | Default text |
| Body Small | 0.875 | 14 | 400 | 1.6 | Captions, metadata |
| Caption | 0.75 | 12 | 500 | 1.5 | Fine print, timestamps |

### 5.2 Language-Specific Adjustments

#### Arabic (Reem Kufi headlines / Cairo body)

- **Headlines:** Increase size by 5-8% relative to Latin equivalents (Arabic glyphs render optically smaller at the same point size)
- **Line height:** Add +0.1 to Latin values (Arabic diacritics need vertical breathing room)
- **Letter spacing:** 0.01em for headlines (Kufi benefits from slight spacing)
- **Body text:** Cairo at same scale as Inter, but line-height 1.75 minimum

#### Hebrew (Heebo)

- **Headlines:** Same size as Latin equivalents (Hebrew x-height is comparable)
- **Line height:** Same as Latin values
- **Letter spacing:** Default (0em) -- Heebo is designed for natural spacing
- **Body text:** Heebo at same scale, line-height 1.65

### 5.3 CSS Custom Properties

```css
:root {
  /* Jaffa Poster Type Scale */
  --text-display: 3.815rem;
  --text-h1: 3.052rem;
  --text-h2: 2.441rem;
  --text-h3: 1.953rem;
  --text-h4: 1.563rem;
  --text-h5: 1.25rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
}
```

---

## 6. VISUAL MOTIF RECOMMENDATIONS

### 6.1 Palestinian Poster Art -- Key Visual Language

Based on research into Palestinian poster art traditions and the Palestine Poster Project archive:

**Dominant Motifs:**
- **Jaffa oranges** -- symbol of lost agricultural heritage and Palestinian national identity. Central to the "Jaffa Poster" concept.
- **Olive trees/branches** -- rootedness, ancestral connection to land, resilience
- **Keys** -- right of return for displaced refugees
- **Cactus (sabra)** -- resilience, endurance, "prickly outside, sweet inside"
- **Doves** -- peace and freedom
- **Anemone Coronaria** (red flower) -- martyrdom, spring, renewal
- **Keffiyeh pattern** -- woven diagonal checks, Palestinian identity
- **Sun/citrus motifs** -- warmth, Mediterranean light

**Artistic Styles from the Poster Tradition:**
- **Screen print aesthetic** -- limited color palette, bold flat fills, visible texture
- **Woodcut/linocut influence** -- strong black outlines, high contrast
- **Geometric abstraction** -- Square Kufic patterns, tessellation, tilework-inspired grids
- **Liberation Art symbolism** -- horses (revolution), flutes (ongoing resistance), wedding imagery (the cause itself)

### 6.2 Recommended Motifs for AIDA Website

| Motif | Implementation | Where |
|-------|---------------|-------|
| **Orange grove pattern** | Stylized circular orange forms as dot-grid background | Hero sections, dividers |
| **Olive branch** | SVG illustration, single-color, screen-print style | Footer, section breaks |
| **Keffiyeh weave** | Diagonal crosshatch pattern at 5% opacity | Background texture variant |
| **Square Kufi grid** | Geometric tile pattern from Kufic calligraphy | Loading states, empty states |
| **Mediterranean wave** | Stylized wave divider (already exists as `wavy-divider`) | Section transitions |
| **Watermelon slice** | Retained from current system (`.bateekh-slice`) | Easter egg, selection state |
| **Paper/print texture** | Grain overlay simulating screen-print paper | Global overlay (retained) |
| **Citrus cross-section** | Radial gradient circle motifs | Decorative accents |

### 6.3 Pattern Library (New CSS Classes)

```css
/* Keffiyeh-inspired diagonal weave */
.keffiyeh-pattern {
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 8px, var(--olive) 8px, var(--olive) 9px),
    repeating-linear-gradient(-45deg, transparent, transparent 8px, var(--olive) 8px, var(--olive) 9px);
  opacity: 0.04;
}

/* Orange grove dot pattern (replacing dot-grid) */
.orange-grove {
  background-image: radial-gradient(circle 6px, var(--terracotta-dim) 100%, transparent 100%);
  background-size: 32px 32px;
}

/* Square Kufi tile border */
.kufi-border {
  border-image: repeating-linear-gradient(
    90deg,
    var(--terracotta) 0px,
    var(--terracotta) 8px,
    transparent 8px,
    transparent 12px
  ) 4;
}
```

---

## 7. MIGRATION FROM "JERUSALEM SANDSTONE" TO "JAFFA POSTER"

### What Changes

| Element | Jerusalem Sandstone (Current) | Jaffa Poster (Proposed) |
|---------|-------------------------------|------------------------|
| Arabic headlines | Amiri (Naskh calligraphic) | **Reem Kufi** (Kufic geometric) |
| English headlines | Playfair Display (serif) | **Space Grotesk** (geometric sans) |
| Primary accent | Gold `#C5A059` | **Terracotta** `#B85C38` |
| Background | Sand `#F5F0E6` | **Sandstone** `#F4EDE4` (slightly cooler) |
| Surface | Limestone `#EDE7D9` | **Parchment** `#E8DFD0` (warmer) |
| Secondary accent | Olive `#6B7F5E` | **Olive** `#5B7553` (slightly deeper) |
| New accent | -- | **Mediterranean** `#4A7C8A` |
| Visual tone | Institutional, calligraphic | **Bold, poster-art, geometric** |
| Gold role | Primary accent | Demoted to occasional decorative accent |
| Dividers | Gold gradient | **Terracotta underline** |
| Shadows | Gold-tinted | **Neutral warm** |

### What Stays

- Inter for Latin body text
- Cairo for Arabic body text
- Heebo for Hebrew
- Watermelon motifs (`.bateekh-slice`, `.watermelon-seed`)
- Paper grain texture overlay
- Warm panel system (`.warm-panel`)
- Core animation keyframes
- RTL font-switching logic
- `prefers-reduced-motion` handling

### CSS Variable Mapping

```css
/* globals.css -- Jaffa Poster update */
:root {
  --sandstone: #F4EDE4;
  --parchment: #E8DFD0;
  --terracotta: #B85C38;
  --terracotta-dark: #8E4428;
  --terracotta-dim: rgba(184, 92, 56, 0.08);
  --olive: #5B7553;
  --olive-dark: #3D5038;
  --olive-dim: rgba(91, 117, 83, 0.08);
  --mediterranean: #4A7C8A;
  --blue-dark: #2E5A66;
  --blue-dim: rgba(74, 124, 138, 0.08);
  --ink: #1A1A1A;
  --charcoal: #2C2C2C;
  --stone-gray: #5A5550;
  --mist: #C8C0B4;
  --red: #CE2C30;
  --gold: #C5A059; /* retained, demoted */

  --bg: var(--sandstone);
  --surface: var(--parchment);
  --border: rgba(184, 92, 56, 0.15);
  --text-primary: var(--ink);
  --text-secondary: var(--stone-gray);
  --text-muted: #9A9490;
  --accent-primary: var(--terracotta);
  --accent-secondary: var(--olive);
  --accent-tertiary: var(--mediterranean);
}
```

---

## 8. GOOGLE FONTS IMPORT

```html
<!-- Jaffa Poster font stack -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&family=Cairo:wght@400;500;600;700&family=Heebo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### Next.js Font Optimization (app/layout.tsx)

```tsx
import { Reem_Kufi, Cairo, Heebo, Inter, Space_Grotesk, Space_Mono } from 'next/font/google';

const reemKufi = Reem_Kufi({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-reem-kufi' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '500', '600', '700'], variable: '--font-cairo' });
const heebo = Heebo({ subsets: ['hebrew', 'latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-heebo' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });
```

### Updated RTL Headline Rules

```css
/* Jaffa Poster -- Arabic display headlines */
[dir="rtl"][lang="ar"] h1,
[dir="rtl"][lang="ar"] h2,
[dir="rtl"][lang="ar"] h3 {
  font-family: var(--font-reem-kufi), var(--font-cairo), sans-serif;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.2;
}

/* Hebrew headlines */
[dir="rtl"][lang="he"] h1,
[dir="rtl"][lang="he"] h2,
[dir="rtl"][lang="he"] h3 {
  font-family: var(--font-heebo), system-ui, sans-serif;
  font-weight: 700;
  line-height: 1.15;
}

/* English headlines */
:root:not([dir="rtl"]) h1,
:root:not([dir="rtl"]) h2,
:root:not([dir="rtl"]) h3 {
  font-family: var(--font-space), system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

---

## 9. DESIGN PRINCIPLES

1. **Print-first thinking** -- Every section should look like it could be a poster. Bold type, clear hierarchy, limited colors per composition.
2. **Warm over cool** -- Terracotta and olive lead. Mediterranean blue is the cool relief, used sparingly.
3. **Geometric confidence** -- Kufi angularity in typography, grid-based layouts, square Kufi decorative patterns.
4. **Texture is character** -- Paper grain, print halftone dots, and screen-print imperfections add authenticity.
5. **Three-color rule** -- Any single section uses at most 3 colors from the palette (background + 2 accents).
6. **RTL-native** -- Every layout decision tested in Arabic first, then adapted to Latin/Hebrew. Not the other way around.
7. **Accessibility is non-negotiable** -- Darkened accent variants for body text. Full WCAG AA minimum, AAA for body text on backgrounds.

---

## 10. COMPARISON TABLE: FONTS

| Criterion | Reem Kufi | Noto Kufi Arabic | Changa | Amiri (current) |
|-----------|-----------|------------------|--------|-----------------|
| Kufic character | Strong | Moderate | None | None (Naskh) |
| Cultural resonance | High (Fatimid) | Medium (neutral) | Low | High (classical) |
| Display impact | Excellent | Good | Good | Good |
| Weight range | Variable (4+) | 9 weights | 6 weights | 4 weights |
| Hebrew support | No | No | No | No |
| Latin companion | Josefin Sans-derived | Noto Sans | Built-in | Needs pairing |
| Poster aesthetic fit | Excellent | Good | Poor | Poor |
| Open source | Yes (OFL) | Yes (OFL) | Yes (OFL) | Yes (OFL) |
| **VERDICT** | **RECOMMENDED** | Fallback | Skip | Replace |

---

*Research compiled from: Google Fonts, GitHub (aliftype/reem-kufi), notofonts.github.io, Wikipedia (Palestinian art, Kufic script), WCAG contrast calculations. Color palette based on coolors.co/f4ede4-e8dfd0-b85c38-5b7553-4a7c8a with accessibility-adjusted dark variants.*
