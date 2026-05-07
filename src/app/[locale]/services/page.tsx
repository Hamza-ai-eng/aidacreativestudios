import type { Metadata } from "next";
import { DukkanContent } from "@/components/services/dukkan-content";

export const revalidate = 300; // ISR — 300s


export const metadata: Metadata = {
  title: "الدّكّان · Studio",
  description:
    "Visual identities, design work, and institutional communications for Palestinian and Arab organisations — from Jerusalem. AIDA Creative Studios.",
};

export default function ServicesPage() {
  return <DukkanContent />;
}
