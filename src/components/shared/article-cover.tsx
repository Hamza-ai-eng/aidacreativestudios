"use client";

interface ArticleCoverProps {
  title: string;
  collection: string;
  color: string;
  className?: string;
}

/**
 * Generates a branded article cover using CSS.
 * Replace with Cloudinary/Canva-generated images when available.
 */
export function ArticleCover({ title, collection, color, className = "" }: ArticleCoverProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[var(--limestone)] ${className}`}
      style={{ aspectRatio: "1200/630" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Color accent */}
      <div
        className="absolute top-0 start-0 w-full h-1.5"
        style={{ backgroundColor: color }}
      />

      {/* Decorative circle */}
      <div
        className="absolute -end-16 -bottom-16 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <span
          className="font-space text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color }}
        >
          {collection}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug max-w-[80%]">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[var(--ink)] flex items-center justify-center text-[var(--sand)] font-serif text-xs font-bold">
            A
          </div>
          <span className="font-space text-xs text-[var(--text-muted)]">AIDA Creative Studios</span>
        </div>
      </div>
    </div>
  );
}
