import { defineConfig, defineCollection, s } from "velite";

/**
 * Velite content layer for AIDA.
 *
 * Run `npx velite build` to generate `.velite/` (and the `#site/content` alias).
 * Routes import collections via:
 *   import { reports, series, notes, caseStudies, clients } from "#site/content"
 *
 * Bilingual model: each piece exists as paired files
 *   <slug>.en.mdx + <slug>.ar.mdx
 * with shared frontmatter keys + locale-specific body.
 *
 * Voice rules: see /sessions/.../shared/AIDA_WRITING_VOICE.md and ARABIC_VOICE.md
 * Identity rules: see memory/HAMZAH_WEBSITE.md (NEVER East Jerusalem / Shu'fat in copy)
 */

const baseFrontmatter = {
  title: s.string().max(160),
  slug: s.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: s.string().max(300),
  datePublished: s.isodate(),
  dateModified: s.isodate().optional(),
  author: s.string().default("Hamzah Barhameyeh — AIDA Creative Studios"),
  tags: s.array(s.string()).default([]),
  lang: s.enum(["en", "ar"]),
  status: s.enum(["draft", "published"]).default("draft"),
  cover: s.image().optional(),
};

/** Reports — long-form advocacy with PDF download. ~25–50 pages. */
const reports = defineCollection({
  name: "Report",
  pattern: "reports/**/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      reportNumber: s.number(),
      executiveSummary: s.markdown().optional(),
      pdfUrl: s.string().optional(),
      pullQuotes: s.array(s.string()).default([]),
      methodology: s.string().optional(),
      headlineStat: s
        .object({
          value: s.string(),
          label: s.string(),
        })
        .optional(),
      content: s.markdown(),
      excerpt: s.excerpt(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/khadija/reports/${data.slug}`,
    })),
});

/** Series — narrative essay sets. Each essay is one file. */
const series = defineCollection({
  name: "SeriesEssay",
  pattern: "series/**/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      series: s.string(),
      seriesIndex: s.number(),
      seriesTitle: s.string().optional(),
      content: s.markdown(),
      excerpt: s.excerpt(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/khadija/series/${data.series}/${data.slug}`,
    })),
});

/** Notes — accessible 1,200–2,500 word essays, bi-weekly cadence. */
const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      readingTime: s.number().optional(),
      content: s.markdown(),
      excerpt: s.excerpt(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/khadija/notes/${data.slug}`,
    })),
});

/** Case studies — studio work with measurable outcomes. */
const caseStudies = defineCollection({
  name: "CaseStudy",
  pattern: "case-studies/**/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      client: s.string(),
      industry: s.string(),
      brief: s.string(),
      constraint: s.string().optional(),
      deliverables: s.array(s.string()).default([]),
      outcomes: s
        .array(
          s.object({
            metric: s.string(),
            value: s.string(),
            note: s.string().optional(),
          })
        )
        .default([]),
      content: s.markdown(),
      excerpt: s.excerpt(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/karimeh/work/${data.slug}`,
    })),
});

/** Clients — directory entries (lighter than case studies). */
const clients = defineCollection({
  name: "Client",
  pattern: "clients/**/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      industry: s.string(),
      logoUrl: s.string().optional(),
      websiteUrl: s.string().optional(),
      featured: s.boolean().default(false),
      content: s.markdown(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/karimeh/clients/${data.slug}`,
    })),
});

/** About — manifesto + press kit + team profiles. */
const about = defineCollection({
  name: "AboutPage",
  pattern: "about/*.mdx",
  schema: s
    .object({
      ...baseFrontmatter,
      kind: s.enum(["manifesto", "team", "press", "lineage"]).default("manifesto"),
      content: s.markdown(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/fatima/${data.kind === "manifesto" ? "" : data.kind}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    reports,
    series,
    notes,
    caseStudies,
    clients,
    about,
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
