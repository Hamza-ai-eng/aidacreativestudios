import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ClientsContent } from "@/components/clients/clients-content";

export const metadata: Metadata = {
  title: "Our Clients — Palestinian Businesses We've Transformed",
  description:
    "Meet the Palestinian businesses in East Jerusalem that trust AIDA Creative Studios for brand identity, social media, and digital strategy. Golden Line Mobile, Al-Day'a Shu'afat, and more.",
};

export default function ClientsPage() {
  return (
    <>
      <div className="pt-28 mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Home", href: "" }, { label: "Clients" }]} />
      </div>
      <ClientsContent />
    </>
  );
}
