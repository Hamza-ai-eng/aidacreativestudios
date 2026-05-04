/**
 * Tatreez · Bethlehem
 *
 * Built from the Bethlehem-region motif vocabulary documented at the V&A
 * (vam.ac.uk/articles/tatreez) and the Met (metmuseum.org/perspectives/tatreez-in-time):
 *   - couched silver/gold thread bands
 *   - eight-pointed star (نجمة)
 *   - cypress-edge accent
 *
 * NOT a copy of any specific historical thobe. Composed fresh in the regional
 * palette (silk/silver/gold over couched-work). Used as a horizontal strip
 * accent — small, dignified, never decorative-only.
 */

interface TatreezProps {
  width?: number | string;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TatreezBethlehem({
  width = "100%",
  height = 18,
  color = "currentColor",
  opacity = 0.9,
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
        <pattern id="tat-bethlehem" x="0" y="0" width="24" height="18" patternUnits="userSpaceOnUse">
          {/* eight-pointed star */}
          <g fill="currentColor">
            <path d="M12 4 L13 8 L17 9 L13 10 L12 14 L11 10 L7 9 L11 8 Z" />
            <path d="M12 5.5 L12.7 8.5 L15.7 9 L12.7 9.5 L12 12.5 L11.3 9.5 L8.3 9 L11.3 8.5 Z" opacity="0.45" />
          </g>
          {/* couched-thread top + bottom rails */}
          <line x1="0" y1="2"  x2="24" y2="2"  stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <line x1="0" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          {/* cypress notches */}
          <g fill="currentColor" opacity="0.55">
            <rect x="0"  y="8" width="1" height="2" />
            <rect x="23" y="8" width="1" height="2" />
          </g>
        </pattern>
      </defs>
      <rect width="96" height="18" fill="url(#tat-bethlehem)" />
    </svg>
  );
}
