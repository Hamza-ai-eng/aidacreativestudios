import type { Metadata } from "next";
import ClientSlugV1 from "../../../clients/[slug]/page";
import { localeAlternates } from "@/lib/seo";

export const revalidate = 86400;

export async function generateStaticParams() {
  return [{ slug: "al-daya" }, { slug: "golden-line-mobile" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return {
    alternates: localeAlternates(locale, `/karimeh/clients/${slug}`),
  };
}

export default ClientSlugV1;
