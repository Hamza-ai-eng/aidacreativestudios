/**
 * Paper Ornaments — layered visual depth pieces
 *
 * Each component is a positioned, pointer-events:none element you stack
 * inside any section to give it the aged-poster register: registration
 * marks, ink splotches, calligraphy ghosts, archive stamps, ruled edges.
 *
 * They all read as warm-paper print artifacts. None of them scroll or
 * animate — they're stationary depth.
 */

interface OrnamentBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

/* ── Corner registration marks ──────────────────────────────────
 * Like the alignment crosses on a poster proof. Four marks, one per corner.
 */
export function RegistrationMarks({ color = "var(--ink-faded)", inset = 24, size = 18, opacity = 0.5 }: {
  color?: string;
  inset?: number;
  size?: number;
  opacity?: number;
}) {
  const Mark = ({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) => {
    const positions: Record<string, React.CSSProperties> = {
      tl: { top: inset, left: inset },
      tr: { top: inset, right: inset },
      bl: { bottom: inset, left: inset },
      br: { bottom: inset, right: inset },
    };
    return (
      <div style={{ position: "absolute", ...positions[corner], width: size, height: size, opacity }}>
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
          <line x1="9" y1="2" x2="9" y2="16" stroke={color} strokeWidth="0.5" />
          <line x1="2" y1="9" x2="16" y2="9" stroke={color} strokeWidth="0.5" />
          <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="0.5" fill="none" />
        </svg>
      </div>
    );
  };
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      <Mark corner="tl" /><Mark corner="tr" /><Mark corner="bl" /><Mark corner="br" />
    </div>
  );
}

/* ── Ink splotch — irregular SVG blob ──────────────────────────
 * Drawn with hand-irregular bezier curves. Renders as a red poster-ink stain.
 */
export function InkSplotch({
  color = "var(--wm-red)",
  opacity = 0.08,
  size = 600,
  top,
  left,
  right,
  bottom,
  rotation = 0,
  seed = 1,
}: {
  color?: string;
  opacity?: number;
  size?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotation?: number;
  seed?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        width: size, height: size,
        pointerEvents: "none",
        transform: `rotate(${rotation}deg)`,
        mixBlendMode: "multiply",
        opacity,
        zIndex: 1,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`splotchEdge-${seed}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed={seed} />
            <feDisplacementMap in="SourceGraphic" scale="14" />
          </filter>
          <radialGradient id={`splotchGrad-${seed}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="60%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="100" cy="100" rx="78" ry="62"
          fill={`url(#splotchGrad-${seed})`}
          filter={`url(#splotchEdge-${seed})`}
        />
        <ellipse
          cx="100" cy="100" rx="34" ry="28"
          fill={color} opacity="0.6"
          filter={`url(#splotchEdge-${seed})`}
        />
      </svg>
    </div>
  );
}

/* ── Calligraphy ghost — massive Arabic word, very faded ────────
 * Sits behind everything, registers as wall-painted graffiti or stencil.
 */
export function CalligraphyGhost({
  text,
  size = "clamp(20rem, 35vw, 50rem)",
  color = "var(--ink)",
  opacity = 0.04,
  top,
  left,
  right,
  bottom,
  rotation = 0,
}: {
  text: string;
  size?: string;
  color?: string;
  opacity?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotation?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        fontFamily: "var(--font-ar)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        color,
        opacity,
        pointerEvents: "none",
        transform: `rotate(${rotation}deg)`,
        whiteSpace: "nowrap",
        userSelect: "none",
        zIndex: 1,
        direction: "rtl",
      }}
    >
      {text}
    </div>
  );
}

/* ── Archive stamp — small mono badge ──────────────────────────
 * Looks like a librarian's ink stamp. File numbers, dates, classifications.
 */
export function ArchiveStamp({
  lines,
  color = "var(--patina-copper)",
  borderColor,
  top,
  left,
  right,
  bottom,
  rotation = -3,
  opacity = 0.85,
}: {
  lines: string[];
  color?: string;
  borderColor?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotation?: number;
  opacity?: number;
}) {
  const border = borderColor ?? color;
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color,
        border: `1px solid ${border}`,
        padding: "8px 12px",
        transform: `rotate(${rotation}deg)`,
        pointerEvents: "none",
        opacity,
        whiteSpace: "nowrap",
        zIndex: 2,
      }}
    >
      {lines.map((l, i) => (
        <div key={i} style={{ lineHeight: 1.6 }}>{l}</div>
      ))}
    </div>
  );
}

/* ── Ruler mark — vertical or horizontal scale lines ───────────
 * Editorial proof-style measure. Subtle archive feel.
 */
export function RulerMark({
  orientation = "vertical",
  length = "100%",
  ticks = 12,
  color = "var(--ink-faded)",
  opacity = 0.25,
  top,
  left,
  right,
  bottom,
}: {
  orientation?: "vertical" | "horizontal";
  length?: string | number;
  ticks?: number;
  color?: string;
  opacity?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}) {
  const isVertical = orientation === "vertical";
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        width: isVertical ? "12px" : length,
        height: isVertical ? length : "12px",
        opacity,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <svg
        width="100%" height="100%"
        viewBox={isVertical ? "0 0 12 200" : "0 0 200 12"}
        preserveAspectRatio="none"
      >
        <line
          x1={isVertical ? 11 : 0} y1={isVertical ? 0 : 11}
          x2={isVertical ? 11 : 200} y2={isVertical ? 200 : 11}
          stroke={color} strokeWidth="0.5"
        />
        {Array.from({ length: ticks }).map((_, i) => {
          const pos = (i / (ticks - 1)) * 200;
          const isMajor = i % 5 === 0;
          const len = isMajor ? 8 : 4;
          return (
            <line
              key={i}
              x1={isVertical ? 11 - len : pos}
              y1={isVertical ? pos : 11 - len}
              x2={isVertical ? 11 : pos}
              y2={isVertical ? pos : 11}
              stroke={color}
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ── Tatreez pattern — Palestinian embroidery cross-stitch ──────
 * Small geometric repeating motif. Classic tatreez star/diamond.
 */
export function TatreezPattern({
  color = "var(--wm-red-deep)",
  opacity = 0.18,
  size = 32,
  width = 240,
  height = 80,
  top,
  left,
  right,
  bottom,
}: {
  color?: string;
  opacity?: number;
  size?: number;
  width?: number;
  height?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}) {
  // Single tatreez motif — eight-pointed star approximation
  const motif = (x: number) => (
    <g key={x} transform={`translate(${x}, 0)`}>
      <path
        d={`M${size/2} 0 L${size*0.6} ${size*0.4} L${size} ${size/2} L${size*0.6} ${size*0.6} L${size/2} ${size} L${size*0.4} ${size*0.6} L0 ${size/2} L${size*0.4} ${size*0.4} Z`}
        fill={color}
      />
    </g>
  );

  const count = Math.floor(width / size);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        width, height,
        opacity,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {Array.from({ length: count }).map((_, i) => motif(i * size))}
      </svg>
    </div>
  );
}

/* ── Torn paper edge — irregular SVG horizontal divider ─────────
 * Use as section transition. Renders as an irregular paper tear.
 */
export function TornEdge({
  color = "var(--ground-deep)",
  position = "bottom",
  height = 32,
}: {
  color?: string;
  position?: "top" | "bottom";
  height?: number;
}) {
  // Deterministic irregular zigzag (fixed seed → no hydration mismatch)
  const seedNoise = (i: number) => {
    // Simple deterministic pseudo-random from index
    const x = Math.sin(i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
  const points: string[] = [];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    const noise = seedNoise(i);
    const y = position === "top" ? noise * 60 + 10 : noise * 60 + 30;
    points.push(`${x},${y}`);
  }
  const path = position === "top"
    ? `M0,0 L100,0 L${[...points].reverse().join(" L")} Z`
    : `M0,100 L100,100 L${points.join(" L")} Z`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        [position]: -1,
        height,
        pointerEvents: "none",
        zIndex: 3,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}

/* ── Diagonal hatching — old print register ─────────────────────
 * Repeating diagonal lines, like an etching screen.
 */
export function HatchPattern({
  color = "var(--ink-faded)",
  opacity = 0.08,
  spacing = 6,
  angle = 45,
  top,
  left,
  right,
  bottom,
  width,
  height,
}: {
  color?: string;
  opacity?: number;
  spacing?: number;
  angle?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left, right, bottom,
        width, height,
        opacity,
        pointerEvents: "none",
        backgroundImage: `repeating-linear-gradient(${angle}deg, ${color} 0px, ${color} 0.5px, transparent 0.5px, transparent ${spacing}px)`,
        zIndex: 1,
      }}
    />
  );
}
