import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "مين إحنا · About",
  description:
    "AIDA Creative Studios is a Palestinian creative studio based in Jerusalem. Brand identity, content, advocacy reports, and design work for Palestinian and Arab institutions.",
};

export default function AboutPage() {
  return <AboutContent />;
}
