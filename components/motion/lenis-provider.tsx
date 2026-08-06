"use client";

import { type ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { bindLenisToGsap } from "@/lib/animation/gsap";

function GsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    return bindLenisToGsap(lenis);
  }, [lenis]);

  return null;
}

/**
 * Global smooth-scroll provider. Mounted once in the root layout.
 * Drives GSAP's ticker itself (autoRaf: false) so ScrollTrigger stays in sync —
 * see lib/animation/gsap.ts for the sync logic. This is the only place a Lenis
 * instance should be created; nested components read it via `useLenis()`.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: reduceMotion ? 1 : 0.1,
        duration: reduceMotion ? 0 : 1.2,
        wheelMultiplier: 1,
      }}
    >
      <GsapSync />
      {children}
    </ReactLenis>
  );
}
