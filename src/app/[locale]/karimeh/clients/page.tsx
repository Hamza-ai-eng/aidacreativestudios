import type { Metadata } from "next";
import ClientsPageV1 from "../../clients/page";
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
    title: isAr ? "العملاء · Clients" : "Clients · العملاء",
    description: isAr
      ? "العملاء اللي اشتغلنا معهم — من المطاعم لمحلات الجوّال."
      : "Clients we've worked with — from restaurants to mobile shops.",
    alternates: localeAlternates(locale, "/karimeh/clients"),
  };
}

export default ClientsPageV1;
