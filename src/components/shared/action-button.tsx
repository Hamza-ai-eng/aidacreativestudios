import Link from "next/link";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  variant?: "solid" | "outline" | "terracotta";
  size?: "default" | "lg";
  className?: string;
}

export function ActionButton({
  children,
  href,
  external = false,
  variant = "solid",
  size = "default",
  className,
}: ActionButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-space font-semibold transition-all duration-300",
    variant === "solid" &&
      "bg-[var(--ink)] text-[var(--sand)] hover:bg-[var(--olive-dark)] hover:shadow-[var(--shadow-hover)]",
    variant === "outline" &&
      "border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--sand)]",
    variant === "terracotta" &&
      "bg-[var(--accent)] text-white hover:shadow-[var(--shadow-accent)] hover:scale-105",
    size === "default" && "px-6 py-3 text-sm",
    size === "lg" && "px-8 py-4 text-base",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

// Backward compat alias
export { ActionButton as GoldButton };
