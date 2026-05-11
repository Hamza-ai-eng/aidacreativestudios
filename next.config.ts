import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ── Static editorial HTML preserved at clean paths ──
      {
        source: "/editorial/human-in-the-loop",
        destination: "/editorial/human-in-the-loop/index.html",
        permanent: false,
      },
      {
        source: "/editorial/human-in-the-loop/",
        destination: "/editorial/human-in-the-loop/index.html",
        permanent: false,
      },
      {
        source: "/editorial/offline-by-design-series",
        destination: "/editorial/offline-by-design-series/index.html",
        permanent: false,
      },
      {
        source: "/editorial/offline-by-design-series/",
        destination: "/editorial/offline-by-design-series/index.html",
        permanent: false,
      },
      // Series 03 — canonical URL is /editorial/the-key-became-a-fingerprint/
      {
        source: "/editorial/the-key-became-a-fingerprint",
        destination: "/editorial/the-key-became-a-fingerprint/index.html",
        permanent: false,
      },
      {
        source: "/editorial/the-key-became-a-fingerprint/",
        destination: "/editorial/the-key-became-a-fingerprint/index.html",
        permanent: false,
      },
      // Legacy slug — preserves links shared from the v2.2.0-knife pre-rename window
      {
        source: "/editorial/when-the-knife-entered",
        destination: "/editorial/the-key-became-a-fingerprint/",
        permanent: true,
      },
      {
        source: "/editorial/when-the-knife-entered/",
        destination: "/editorial/the-key-became-a-fingerprint/",
        permanent: true,
      },
      {
        source: "/editorial/when-the-knife-entered/:path*",
        destination: "/editorial/the-key-became-a-fingerprint/:path*",
        permanent: true,
      },

      // ── V1 → V2 (Bait Aida matriarch lanes) — 301 permanent ──
      // Per Hamzah's approved decision 2026-05-06 (REBUILD_HANDOFF / Plan §3.2)
      {
        source: "/:locale(en|ar|he)/services",
        destination: "/:locale/karimeh/services",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/about",
        destination: "/:locale/fatima",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/contact",
        destination: "/:locale/hayat",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/insights",
        destination: "/:locale/khadija",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/insights/offline-by-design",
        destination: "/:locale/khadija/reports/offline-by-design",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/insights/:slug*",
        destination: "/:locale/khadija/notes/:slug*",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/work",
        destination: "/:locale/karimeh/work",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/work/:slug*",
        destination: "/:locale/karimeh/work/:slug*",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/clients",
        destination: "/:locale/karimeh/clients",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|he)/clients/:slug*",
        destination: "/:locale/karimeh/clients/:slug*",
        permanent: true,
      },
      // Note: /:locale/seo/* kept as-is; those are commercial-intent landing pages
    ];
  },
};

export default withNextIntl(nextConfig);
