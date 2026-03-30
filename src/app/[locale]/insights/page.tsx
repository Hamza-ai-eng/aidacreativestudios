import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InsightsContent } from "@/components/insights/insights-content";

export const metadata: Metadata = {
  title: "Insights — Branding, Social Media & AI Design for Palestinian Businesses",
  description:
    "Expert articles on brand building, social media strategy, AI-powered design, and local business growth for Palestinian entrepreneurs in East Jerusalem.",
};

export default async function InsightsPage() {
  const t = await getTranslations("insights");

  return <InsightsContent />;
}
