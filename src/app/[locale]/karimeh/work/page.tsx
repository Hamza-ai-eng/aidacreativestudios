import type { Metadata } from "next";
import WorkPageV1 from "../../work/page";
import { localeAlternates } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الأعمال · Work" : "Work · الأعمال",
    description: isAr
      ? "معرض الأعمال — مشاريع هويّة بصريّة، تصميم منيو، وحملات لمشاريع فلسطينيّة وعربيّة."
      : "Selected work — brand identity, menu design, and campaigns for Palestinian and Arab businesses.",
    alternates: localeAlternates(locale, "/karimeh/work"),
  };
}

// Thin wrapper — V1 /work content rendered at the V2 canonical path.
export default WorkPageV1;
