/**
 * Grain — concrete texture fixed overlay
 * Position: fixed, z-index 50, 5% opacity, mix-blend-mode overlay
 * Animates in 8-step cycles to simulate aged concrete surface grain.
 * Render once in the root layout.
 */
export function Grain() {
  return (
    <div className="grain" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="grainNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainNoise)" />
      </svg>
    </div>
  );
}
