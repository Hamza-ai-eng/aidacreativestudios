"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none" | "scale" | "rotate";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { opacity: 0, y: 50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    none: { opacity: 0 },
    scale: { opacity: 0, scale: 0.9 },
    rotate: { opacity: 0, y: 40, rotate: -2 },
  };

  const initial = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
          : initial
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
