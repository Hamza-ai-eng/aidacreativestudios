interface WatermelonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: 14, md: 22, lg: 34 };

export function Watermelon({ size = "md", className = "" }: WatermelonProps) {
  const s = sizes[size];
  return (
    <svg
      width={s}
      height={s * 0.6}
      viewBox="0 0 34 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img" aria-label="Watermelon slice — Palestinian symbol"
    >
      {/* Green rind */}
      <path d="M2 20 C2 9 9 2 17 2 C25 2 32 9 32 20 Z" fill="#3D5038" />
      {/* White inner rind */}
      <path d="M4 20 C4 11 10 5 17 5 C24 5 30 11 30 20 Z" fill="#E8DFD0" />
      {/* Red flesh */}
      <path d="M5 20 C5 12 10 7 17 7 C24 7 29 12 29 20 Z" fill="#CE2C30" />
      {/* Seeds */}
      <ellipse cx="12" cy="15" rx="1.2" ry="1.8" fill="#2A3328" transform="rotate(-15 12 15)" />
      <ellipse cx="17" cy="13" rx="1.2" ry="1.8" fill="#2A3328" />
      <ellipse cx="22" cy="15" rx="1.2" ry="1.8" fill="#2A3328" transform="rotate(15 22 15)" />
    </svg>
  );
}
