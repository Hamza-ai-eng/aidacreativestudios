/**
 * WatermelonSeal — the AIDA Critical Institute mark
 *
 * A semicircle — the cross-section of a watermelon, abstracted:
 *   Red flesh fills the upper arc (#C41A2A)
 *   Thin aged-linen rind separates flesh from skin (#F0EAE0)
 *   Deep green skin runs along the bottom (~15% height) (#2A5C3A)
 *   Three to five seeds pressed, not placed (#1A1410)
 *   Concrete grain overlay at 12% opacity
 *   Cut edge is irregular via SVG displacement filter
 *
 * Motion: static by default. On hover, pulse 1.0→1.02→1.0,
 * 1.5s ease-in-out, single cycle. Applied via CSS `.seal` / `.seal-svg`.
 *
 * Usage:
 *   <WatermelonSeal size={30} /> — nav
 *   <WatermelonSeal size={48} /> — footer
 *   <WatermelonSeal size={96} /> — section break
 *   <WatermelonSeal size={160} hoverable /> — stamp / hero
 */

interface WatermelonSealProps {
  /** Fixed pixel size. Ignored when fill=true */
  size?: number;
  className?: string;
  hoverable?: boolean;
  /** Makes the SVG fill its parent container (width/height 100%) */
  fill?: boolean;
  "aria-label"?: string;
}

export function WatermelonSeal({
  size = 48,
  className = "",
  hoverable = false,
  fill = false,
  "aria-label": ariaLabel = "AIDA Critical Institute seal",
}: WatermelonSealProps) {
  const Wrapper = hoverable ? "a" : "span";
  const wrapperStyle = fill
    ? { display: "block", width: "100%", height: "100%" }
    : { display: "inline-block", width: size, height: size };

  return (
    <Wrapper
      className={hoverable ? `seal ${className}` : className}
      aria-label={hoverable ? ariaLabel : undefined}
      style={wrapperStyle}
    >
      <svg
        className={hoverable ? "seal-svg" : undefined}
        width={fill ? "100%" : size}
        height={fill ? "100%" : size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={!hoverable ? ariaLabel : undefined}
        role="img"
      >
        {/* Filters — defined inline per instance to avoid ID collision */}
        <defs>
          <filter id={`sealGrain-${size}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.6"
              numOctaves="2"
              stitchTiles="stitch"
              seed="3"
            />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
          <filter id={`cutEdge-${size}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
        </defs>

        {/* 1. Flesh — top arc, watermelon red, slightly irregular bottom edge */}
        <path
          d="M 14 100 A 86 86 0 0 1 186 100 L 184 156 Q 145 152 100 154 Q 55 152 16 156 Z"
          fill="#C41A2A"
          filter={`url(#cutEdge-${size})`}
        />

        {/* 2. Thin rind line (aged linen) between flesh and skin */}
        <path
          d="M 14 156 Q 55 150 100 152 Q 145 150 186 156 L 184 162 Q 145 158 100 160 Q 55 158 16 162 Z"
          fill="#F0EAE0"
        />

        {/* 3. Skin — bottom band, deep green, ~15% of height */}
        <path
          d="M 16 162 Q 55 158 100 160 Q 145 158 184 162 L 184 186 A 86 86 0 0 1 14 186 Z"
          fill="#2A5C3A"
        />

        {/* 4. Seeds — irregular ovals pressed into the flesh */}
        <g fill="#1A1410">
          <ellipse cx="62" cy="92" rx="5.5" ry="9" transform="rotate(-18 62 92)" />
          <ellipse cx="100" cy="78" rx="6" ry="9.5" transform="rotate(8 100 78)" />
          <ellipse cx="138" cy="96" rx="5.5" ry="9" transform="rotate(22 138 96)" />
          <ellipse cx="82" cy="120" rx="5" ry="8.5" transform="rotate(-6 82 120)" />
          <ellipse cx="124" cy="124" rx="5" ry="8" transform="rotate(15 124 124)" />
        </g>

        {/* 5. Concrete grain overlay — 12% opacity, colors read through */}
        <rect
          x="14"
          y="14"
          width="172"
          height="172"
          fill="black"
          opacity="0.12"
          filter={`url(#sealGrain-${size})`}
        />

        {/* 6. Subtle weathered highlight on flesh */}
        <path
          d="M 30 80 Q 80 50 120 60"
          stroke="rgba(240,234,224,0.06)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  );
}

/**
 * WatermelonSealMini — simplified favicon-scale version
 * Rind/flesh only, no seeds, no filters. Use at 32px only.
 */
export function WatermelonSealMini({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AIDA"
      role="img"
    >
      <path d="M 2 16 A 14 14 0 0 1 30 16 L 30 25 L 2 25 Z" fill="#C41A2A" />
      <rect x="2" y="25" width="28" height="1.5" fill="#F0EAE0" />
      <path d="M 2 26.5 L 30 26.5 L 30 28 A 14 14 0 0 1 2 28 Z" fill="#2A5C3A" />
    </svg>
  );
}
