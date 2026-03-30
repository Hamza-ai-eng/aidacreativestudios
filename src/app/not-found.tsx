import { GoldButton } from "@/components/shared/gold-button";

export default function NotFound() {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-serif text-8xl text-accent-gradient mb-4">404</h1>
        <p className="text-[var(--text-secondary)] text-lg mb-8">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <GoldButton href="/">Back to Home</GoldButton>
      </div>
    </section>
  );
}
