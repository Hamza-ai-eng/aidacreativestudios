import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className={cn(
          "font-space text-sm font-semibold uppercase tracking-[0.25em] mb-3 block",
          dark ? "text-[var(--accent-light)]" : "text-[var(--accent)]"
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        "font-serif text-4xl md:text-5xl lg:text-6xl leading-tight",
        dark ? "text-[var(--sand)]" : "text-[var(--ink)]"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl leading-relaxed",
          align === "center" && "mx-auto",
          dark ? "text-[var(--mist)]" : "text-[var(--stone-gray)]"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "accent-divider max-w-20 mt-8",
        align === "center" && "mx-auto"
      )} />
    </div>
  );
}
