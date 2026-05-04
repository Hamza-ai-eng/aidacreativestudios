/**
 * KarimehStamp — the bilingual studio mark
 *
 * After Karimeh Abbud (1896–1940), Bethlehem's "Lady Photographer," who signed
 * every print bilingually:
 *   كريمة عبود: مصوّرة شمس / Karimeh Abbud — Lady Photographer
 *
 * This is our analogous mark for Bait Aida:
 *   عايدة — بيت / Aida — A House
 *
 * Used in the footer, in 404 / not-found, and as a closing seal on long pages.
 * Styled in CSS via .karimeh-stamp (see globals.css).
 */

interface KarimehStampProps {
  ar?: string;
  en?: string;
  className?: string;
  inverse?: boolean; /* light text on dark — for footer */
}

export function KarimehStamp({
  ar = "عايدة — بيت",
  en = "Aida — A House",
  className,
  inverse = false,
}: KarimehStampProps) {
  return (
    <div
      className={`karimeh-stamp ${className ?? ""}`}
      style={{
        color: inverse ? "var(--ground)" : "var(--ink)",
      }}
      aria-label={`${ar} · ${en}`}
    >
      <div className="stamp-ar">{ar}</div>
      <div className="stamp-en">{en}</div>
    </div>
  );
}
