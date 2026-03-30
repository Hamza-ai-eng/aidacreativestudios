import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { AboutContent } from "@/components/about/about-content";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "About AIDA — Creative Agency Founded in Shu'fat, East Jerusalem",
  description:
    "Meet the studio behind AIDA Creative — an AI-powered, one-person creative agency in Shu'fat delivering studio-grade brand design, social media, and print production for Palestinian businesses.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTABanner />
    </>
  );
}
