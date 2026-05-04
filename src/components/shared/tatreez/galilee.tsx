/**
 * Tatreez · Galilee
 *
 * Galilee-region vocabulary (V&A · Met · Tatreez Institute):
 *   - bold red + green geometric blocks
 *   - eight-pointed-star with broader proportions
 *   - mill-wheel motif (طاحونة) — the wheel of work
 *
 * NOT a copy of any specific historical thobe. The bold weight matches
 * Fatima's room (the keeper) — endurance, working life, generations.
 */

interface TatreezProps {
  width?: number | string;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TatreezGalilee({
  width = "100%",
  height = 18,
  color = "currentColor",
  opacity = 0.92,
  className,
  style,
}: TatreezProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 18"
      preserveAspectRatio="xMidYMid"
      className={className}
      style={{ color, opacity, display: "block", ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="tat-galilee" x="0" y="0" width="24" height="18" patternUnits="userSpaceOnUse">
          {/* mill-wheel — circle with 8 spokes */}
          <g fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="12" cy="9" r="4" />
            <line x1="12" y1="5" x2="12" y2="13" />
            <line x1="8"  y1="9" x2="16" y2="9" />
            <line x1="9.2"  y1="6.2" x2="14.8" y2="11.8" />
            <line x1="14.8" y1="6.2" x2="9.2"  y2="11.8" />
          </g>
          {/* corner blocks */}
          <g fill="currentColor">
            <rect x="0"  y="0"  width="2" height="2" />
            <rect x="22" y="0"  width="2" height="2" />
            <rect x="0"  y="16" width="2" height="2" />
            <rect x="22" y="16" width="2" height="2" />
          </g>
        </pattern>
      </defs>
      <rect width="96" height="18" fill="url(#tat-galilee)" />
    </svg>
  );
}
