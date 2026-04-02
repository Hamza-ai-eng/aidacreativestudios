import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
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
    ];
  },
};

export default withNextIntl(nextConfig);
