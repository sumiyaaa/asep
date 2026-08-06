import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

let registered = false;

/**
 * Registers GSAP's ScrollTrigger exactly once. Safe to call from every
 * component that needs it. (Deliberately not named `use*` — it's a plain
 * idempotent guard, not a React Hook, and calling it from a non-component
 * function like `bindLenisToGsap` below would otherwise trip
 * `react-hooks/rules-of-hooks`.)
 */
export function ensureGsapRegistered() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Wires Lenis's scroll loop into GSAP's ticker so ScrollTrigger-driven animations
 * (pins, scrubs) stay in sync with Lenis's smoothed scroll position instead of the
 * raw native scroll event. This is the single place this integration happens —
 * components should never register their own `lenis.on("scroll", ...)` listener.
 */
export function bindLenisToGsap(lenis: Lenis) {
  ensureGsapRegistered();

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.off("scroll", ScrollTrigger.update);
  };
}

export { gsap, ScrollTrigger };
