interface WavyDividerProps {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}

export function WavyDivider({
  flip = false,
  fromColor = "var(--sand)",
  toColor = "var(--olive-dark)",
}: WavyDividerProps) {
  return (
    <div
      className="wavy-divider"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
        <path
          d="M0,50 C320,70 640,20 960,50 C1200,70 1360,30 1440,50 L1440,80 L0,80 Z"
          fill={toColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
