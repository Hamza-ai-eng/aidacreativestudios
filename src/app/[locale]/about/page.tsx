import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "مين إحنا · About",
  description:
    "AIDA is a Palestinian critical institute and design studio based in Jerusalem. Advocacy reports, policy analysis, and design work for Palestinian and Arab institutions.",
};

export default function AboutPage() {
  return <AboutContent />;
}
