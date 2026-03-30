"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { GoldButton } from "@/components/shared/gold-button";
import { SITE } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const letterReveal = (delay: number) => ({
  hidden: { opacity: 0, y: 80, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export function Hero() {
  const t = useTranslations("hero");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden paper-texture calligraphy-watermark"
    >
      {/* Multi-layer parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-16 -start-40 w-[500px] h-[500px] bg-[var(--terracotta)]/8 blob-1 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-16 -end-40 w-[400px] h-[400px] bg-[var(--terracotta)]/8 blob-2 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/3 end-1/4 w-[300px] h-[300px] bg-[var(--olive)]/6 blob-1 blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/3 start-1/4 w-[200px] h-[200px] bg-[var(--blue)]/8 blob-2 blur-2xl animate-float-slow"
      />

      {/* Geometric accents — floating with animation */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-24 start-8 w-28 h-28 border-2 border-[var(--blue)]/15 rounded-full animate-float-slow"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-32 end-16 w-20 h-20 border-2 border-[var(--terracotta)]/15 rotate-45 animate-float"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 start-16 w-12 h-12 border-2 border-[var(--olive)]/15 rounded-lg rotate-12"
      />
      <div className="absolute top-1/3 start-1/3 w-3 h-3 rounded-full bg-[var(--terracotta)]/40" />
      <div className="absolute bottom-1/4 end-1/3 w-2 h-2 rounded-full bg-[var(--terracotta)]/30" />
      <div className="absolute top-2/3 end-1/4 w-4 h-4 rounded-full bg-[var(--olive)]/20" />
      {/* بطيخ */}
      <div className="absolute bottom-[18%] start-[12%] w-8 h-4 rounded-t-full bg-gradient-to-b from-[#5B7553] via-[#F4EDE4] to-[#CE2C30] opacity-[0.18] hover:opacity-40 transition-opacity" aria-hidden="true" title="🍉" />

      {/* Dot grid subtle background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Content — no scroll-based opacity, ensures visibility on all devices */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--limestone)]/80 backdrop-blur-sm font-space text-[var(--terracotta)] text-sm font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--terracotta)] animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Headline — MASSIVE, kinetic staggered reveal */}
        <h1 className="font-serif leading-[0.95] mb-10">
          {[t("headline1"), t("headline2")].map((word, i) => (
            <motion.span
              key={`gold-${i}`}
              variants={letterReveal(0.4 + i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              className="inline-block me-[0.25em] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-gold-gradient drop-shadow-sm"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {[t("headline3"), t("headline4")].map((word, i) => (
            <motion.span
              key={`ink-${i}`}
              variants={letterReveal(0.7 + i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              className="inline-block me-[0.25em] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[var(--ink)]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-lg md:text-xl text-[var(--stone-gray)] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("subline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton href={SITE.whatsapp} external variant="terracotta" size="lg">
              {t("cta1")}
            </GoldButton>
            <GoldButton href="/insights" variant="outline" size="lg">
              {t("cta2")}
            </GoldButton>
          </div>
          {/* Microcopy — reduces friction, boosts conversion */}
          <span className="font-space text-xs text-[var(--text-muted)] tracking-wide">
            {t("cta1micro")}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 font-space text-xs text-[var(--text-muted)] tracking-[0.25em] uppercase"
        >
          {t("tagline")}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[var(--mist)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
