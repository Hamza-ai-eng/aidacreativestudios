import { notFound } from "next/navigation";
import { clients } from "@/data/clients";
import { ClientDetailContent } from "@/components/clients/client-detail-content";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const client = clients.find((c) => c.slug === slug);
  if (!client) return {};

  return {
    title: `${client.nameEn} — ${client.nameAr} | AIDA Client`,
    description: client.descEn,
  };
}

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const client = clients.find((c) => c.slug === slug);
  if (!client) notFound();

  return <ClientDetailContent client={client} />;
}
