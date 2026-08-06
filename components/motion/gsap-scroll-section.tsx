"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ensureGsapRegistered } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/variants";

interface GsapScrollSectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Receives the section's container element and the shared `gsap` instance.
   * Set up ScrollTrigger-driven timelines here — scope all selectors to
   * `container` so gsap.context() can clean everything up automatically.
   */
  animation: (ctx: { gsap: typeof gsap; container: HTMLDivElement }) => void;
  deps?: unknown[];
}

/**
 * Generic scoped-GSAP wrapper for scroll-pinned/scrubbed effects (hero
 * parallax, animated counters, timelines) that Framer Motion's viewport
 * triggers don't cover. Animations are skipped entirely when the user
 * prefers reduced motion, and always cleaned up via gsap.context().revert()
 * so nothing leaks across App Router route transitions.
 */
export function GsapScrollSection({ children, className, animation, deps = [] }: GsapScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ensureGsapRegistered();
    if (!containerRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      animation({ gsap, container: containerRef.current! });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
