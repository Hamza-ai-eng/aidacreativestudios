import type { Metadata } from "next";
import { KhadijaWitness } from "@/components/home/khadija-witness";
import { EditorialIndex } from "@/components/editorial/editorial-index";

export const revalidate = 300; // ISR — 300s


export const metadata: Metadata = {
  title: "حجّة خديجة · Hajjeh Khadija — the witness",
  description:
    "غرفة حجّة خديجة. ثلاث منشورات: تقرير Offline by Design، سلسلة Human in the Loop، سلسلة Offline by Design — السلسلة. The editorial room of Bait Aida — three published works on AI, exclusion, and Palestinian futures.",
  openGraph: {
    title: "حجّة خديجة · Hajjeh Khadija — the witness",
    description:
      "Hajjeh Khadija's room. The long writing — three published works.",
  },
};

/**
 * Khadija's full room page — the witness · editorial
 *
 * Three published works:
 *   - Report 01: Offline by Design — the advocacy report (April 2026)
 *   - Series 01: Human in the Loop — seven long-form essays
 *   - Series 02: Offline by Design — The Series — six bilingual essays (May 2026)
 */
export default function KhadijaPage() {
  return (
    <main style={{ paddingTop: "120px", background: "var(--ground)" }}>
      <KhadijaWitness />
      <EditorialIndex />
    </main>
  );
}
