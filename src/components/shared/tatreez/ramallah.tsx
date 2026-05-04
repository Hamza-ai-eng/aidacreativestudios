/**
 * Tatreez · Ramallah
 *
 * Ramallah-region vocabulary (V&A · Met):
 *   - geometric chevrons + small floral nodes
 *   - white-linen base (lighter visual weight than Hebron/Galilee)
 *   - alternating red and black thread on white
 *
 * NOT a copy of any specific historical thobe. Lighter, more open
 * composition — Hayat's room (the open door, light pouring through).
 */

interface TatreezProps {
  width?: number | string;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TatreezRamallah({
  width = "100%",
  height = 16,
  color = "currentColor",
  opacity = 0.85,
  className,
  style,
}: TatreezProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 16"
      preserveAspectRatio="xMidYMid"
      className={className}
      style={{ color, opacity, display: "block", ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="tat-ramallah" x="0" y="0" width="20" height="16" patternUnits="userSpaceOnUse">
          {/* chevron arrow */}
          <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 11 L10 4 L18 11" />
          </g>
          {/* floral node */}
          <g fill="currentColor">
            <circle cx="10" cy="13" r="0.9" />
            <circle cx="3"  cy="2"  r="0.6" opacity="0.5" />
            <circle cx="17" cy="2"  r="0.6" opacity="0.5" />
          </g>
        </pattern>
      </defs>
      <rect width="96" height="16" fill="url(#tat-ramallah)" />
    </svg>
  );
}
