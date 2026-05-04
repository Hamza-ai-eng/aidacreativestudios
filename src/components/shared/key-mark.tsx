/**
 * KeyMark — the Aida camp key (المفتاح)
 *
 * Sibling to <WatermelonSeal />. Used as a second site-wide motif, evoking the
 * giant key at the entrance of Aida Refugee Camp in Bethlehem — symbol of the
 * Right of Return. Quiet, present in the threshold room, footer, and 404.
 *
 * Stylized, not photo-real. Old iron house key; bow + shaft + bit silhouette.
 */

interface KeyMarkProps {
  size?: number;
  fill?: boolean;
  color?: string;
  className?: string;
  rotation?: number;
  opacity?: number;
}

export function KeyMark({
  size = 48,
  fill = false,
  color = "currentColor",
  className,
  rotation = 0,
  opacity = 1,
}: KeyMarkProps) {
  return (
    <svg
      viewBox="0 0 120 48"
      className={className}
      style={{
        width: fill ? "100%" : size * 2.5,
        height: fill ? "100%" : size,
        color,
        opacity,
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
      aria-label="المفتاح — the key"
      role="img"
    >
      {/* Bow — ornate diamond/cross handle */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="24" r="14" />
        <circle cx="20" cy="24" r="9" />
        <line x1="6" y1="24" x2="34" y2="24" />
        <line x1="20" y1="10" x2="20" y2="38" />
        {/* Shaft */}
        <line x1="34" y1="24" x2="100" y2="24" strokeWidth="3" />
        {/* Bit (the teeth) */}
        <path d="M86 24 L86 34 L92 34 L92 28 L98 28 L98 34 L104 34 L104 24" strokeWidth="3" />
        {/* Tip */}
        <line x1="100" y1="24" x2="108" y2="24" strokeWidth="3" />
      </g>
    </svg>
  );
}
