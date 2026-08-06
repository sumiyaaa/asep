"use client";

import { useRef } from "react";
import { GsapScrollSection } from "@/components/motion/gsap-scroll-section";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

/** Scroll-triggered count-up grid, driven by GSAP ScrollTrigger via GsapScrollSection. */
export function StatCounterGrid({ stats }: { stats: Stat[] }) {
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <GsapScrollSection
      className="grid grid-cols-2 gap-8 sm:grid-cols-4"
      animation={({ gsap, container }) => {
        stats.forEach((stat, i) => {
          const el = valueRefs.current[i];
          if (!el) return;
          const counter = { value: 0 };
          gsap.to(counter, {
            value: stat.value,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: container, start: "top 80%", once: true },
            onUpdate: () => {
              el.textContent = `${stat.prefix ?? ""}${Math.round(counter.value).toLocaleString()}${stat.suffix ?? ""}`;
            },
          });
        });
      }}
      deps={[stats]}
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col">
          <span
            ref={(el) => {
              valueRefs.current[i] = el;
            }}
            className="font-display text-4xl font-semibold tabular-nums text-primary-800 dark:text-primary-300 sm:text-5xl"
          >
            {stat.prefix ?? ""}0{stat.suffix ?? ""}
          </span>
          <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </GsapScrollSection>
  );
}
