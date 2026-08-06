"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { fadeUp, staggerContainer, prefersReducedMotion, reducedMotionFallback } from "@/lib/animation/variants";

interface StaggerGroupProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  amount?: number;
}

/**
 * Parent wrapper for staggered entrance animations. Children should be
 * `motion.div`/`motion.li` elements with `variants={fadeUp}` (or another
 * preset) and no `initial`/`animate` props of their own — they inherit
 * "hidden"/"show" from this parent's viewport trigger.
 */
export function StaggerGroup({ children, as = "div", className, amount = 0.2 }: StaggerGroupProps) {
  const MotionTag = motion[as as "div"];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={prefersReducedMotion() ? reducedMotionFallback : staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variants?: Variants;
}

/**
 * A single animated child of `StaggerGroup`. Framer Motion's `motion.*`
 * components are client-only, so this exists as a small client leaf that
 * Server Component pages (e.g. the homepage) can render inside a `.map()`
 * without themselves becoming client components.
 */
export function StaggerItem({ children, as = "li", className, variants }: StaggerItemProps) {
  const MotionTag = motion[as as "li"];
  return (
    <MotionTag className={className} variants={variants ?? fadeUp}>
      {children}
    </MotionTag>
  );
}
