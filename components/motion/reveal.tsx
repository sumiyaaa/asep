"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType, type ReactNode } from "react";
import { fadeUp, reducedMotionFallback, prefersReducedMotion } from "@/lib/animation/variants";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variants?: Variants;
  /** Delay in seconds before this element's entrance starts. */
  delay?: number;
  /** Fraction of the element that must enter the viewport before it animates. */
  amount?: number;
}

/**
 * Viewport-triggered entrance wrapper. Default motion is a soft fade-up;
 * pass `variants` to use a different preset from lib/animation/variants.ts.
 * Falls back to a plain opacity fade when the user prefers reduced motion.
 */
export function Reveal({
  children,
  as = "div",
  className,
  variants,
  delay = 0,
  amount = 0.3,
}: RevealProps) {
  const MotionTag = motion[as as "div"];
  const activeVariants = prefersReducedMotion() ? reducedMotionFallback : (variants ?? fadeUp);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={activeVariants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
