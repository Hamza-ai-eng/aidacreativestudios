import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InsightsContent } from "@/components/insights/insights-content";

export const metadata: Metadata = {
  title: "حريّة · Freedom",
  description:
    "تقارير المناصرة والسلاسل التحريرية من AIDA Critical Institute — القدس. Advocacy reports and editorial series from AIDA, Jerusalem.",
};

export default async function InsightsPage() {
  const t = await getTranslations("insights");

  return <InsightsContent />;
}
