import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "terracotta" | "blue" | "none";
}

export function GlassPanel({
  children,
  className,
  hover = false,
  accent = "none",
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "warm-panel p-6",
        hover && "tilt-card cursor-default",
        accent === "terracotta" && "gold-border-start",
        accent === "blue" && "blue-border-start",
        className
      )}
    >
      {children}
    </div>
  );
}
