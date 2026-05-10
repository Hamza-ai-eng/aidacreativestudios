import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InsightsContent } from "@/components/insights/insights-content";

export const revalidate = 3600; // ISR — 3600s


export const metadata: Metadata = {
  title: "حريّة · Freedom",
  description:
    "تقارير المناصرة والسلاسل التحريرية من عايدة كرييتف ستوديوز — القدس. Advocacy reports and editorial series from AIDA Creative Studios, Jerusalem.",
};

export default async function InsightsPage() {
  const t = await getTranslations("insights");

  return <InsightsContent />;
}
