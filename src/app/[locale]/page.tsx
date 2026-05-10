import { AidaThreshold } from "@/components/home/aida-threshold";
import { FatimaKeeper } from "@/components/home/fatima-keeper";
import { KhadijaWitness } from "@/components/home/khadija-witness";
import { KarimehMaker } from "@/components/home/karimeh-maker";
import { HayatDoor } from "@/components/home/hayat-door";

export const revalidate = 300; // ISR — 300s


/**
 * Homepage — Bait Aida
 *
 * Five rooms in order. Each is a Palestinian woman.
 *   I  — عايدة         (the threshold, hero)
 *   II — فاطمة         (the keeper · about)
 *   III — حجّة خديجة    (the witness · editorial)
 *   IV — ستّ كريمة     (the maker · studio)
 *   V  — حياة          (the open door · contact)
 *
 * Each room links to its full page at /[locale]/<name>.
 */
export default function HomePage() {
  return (
    <>
      <AidaThreshold />
      <FatimaKeeper />
      <KhadijaWitness />
      <KarimehMaker />
      <HayatDoor />
    </>
  );
}
