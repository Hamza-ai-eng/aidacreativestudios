import type { Metadata } from "next";
import { OfflineByDesignReport } from "@/components/insights/offline-by-design";

export const metadata: Metadata = {
  title: "إقصاء مبرمَج · Offline by Design",
  description:
    "Palestinian refugees are not excluded from AI by accident. They are excluded by the same architecture of dispossession the AI industry is contracted to sustain. A policy and advocacy report — AIDA, April 2026.",
};

export default function OfflineByDesignPage() {
  return <OfflineByDesignReport />;
}
