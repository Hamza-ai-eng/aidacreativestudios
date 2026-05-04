/**
 * Tatreez · Hebron
 *
 * Hebron-region vocabulary (V&A · Met · Tatreez Institute):
 *   - dense diamond cross-stitch (لوزة)
 *   - block-grid composition
 *   - oxblood / deep-red signature palette
 *
 * NOT a copy of any specific historical thobe. Composed in the regional
 * gravitas register: dense, geometric, weighted. Reads on the page as the
 * deepest of the five tatreez stripes — Khadija's room.
 */

interface TatreezProps {
  width?: number | string;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TatreezHebron({
  width = "100%",
  height = 20,
  color = "currentColor",
  opacity = 0.95,
  className,
  style,
}: TatreezProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 20"
      preserveAspectRatio="xMidYMid"
      className={className}
      style={{ color, opacity, display: "block", ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="tat-hebron" x="0" y="0" width="16" height="20" patternUnits="userSpaceOnUse">
          {/* dense diamond grid — 4 stacked diamonds */}
          <g fill="currentColor">
            <path d="M8 1  L11 4 L8 7  L5 4 Z" />
            <path d="M8 9  L11 12 L8 15 L5 12 Z" />
            <path d="M0 5  L3 8  L0 11 L-3 8 Z" />
            <path d="M16 5 L19 8 L16 11 L13 8 Z" />
          </g>
          {/* inner tick of each diamond */}
          <g fill="currentColor" opacity="0.4">
            <rect x="7.5" y="3.5" width="1" height="1" />
            <rect x="7.5" y="11.5" width="1" height="1" />
          </g>
          {/* block rails */}
          <line x1="0" y1="0"  x2="16" y2="0"  stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <line x1="0" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="96" height="20" fill="url(#tat-hebron)" />
    </svg>
  );
}
