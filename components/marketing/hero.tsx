"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { GsapScrollSection } from "@/components/motion/gsap-scroll-section";
import { staggerContainer, fadeUp } from "@/lib/animation/variants";

export function Hero() {
  return (
    <GsapScrollSection
      className="relative overflow-hidden border-b border-border"
      animation={({ gsap, container }) => {
        gsap.to(container.querySelectorAll("[data-parallax]"), {
          yPercent: (i) => (i % 2 === 0 ? 14 : -10),
          ease: "none",
          scrollTrigger: { trigger: container, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }}
    >
      {/* Decorative field marks — a nod to gait-analysis / movement-tracking charts, kept subtle */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          data-parallax
          className="absolute -left-24 top-16 size-[26rem] rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/30"
        />
        <div
          data-parallax
          className="absolute -right-32 top-40 size-[22rem] rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-900/20"
        />
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full text-border"
          preserveAspectRatio="none"
          viewBox="0 0 1200 80"
        >
          <path
            d="M0 60 L100 60 L120 20 L140 70 L160 40 L180 60 L1200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-primary-700 dark:text-primary-400"
          >
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Founded 1997 · 501(c)(3) nonprofit
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            The professional standard for{" "}
            <span className="text-primary-700 dark:text-primary-400">exercise physiology.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            ASEP sets the credentialing, ethical, and academic standards for the exercise
            physiology profession — through EPC certification, accredited academic programs, and
            peer-reviewed research.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <LinkButton href="/membership/join" variant="accent" size="lg">
              Become a Member
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton href="/certification" variant="outline" size="lg">
              Explore EPC Certification
            </LinkButton>
          </motion.div>
        </motion.div>
      </div>
    </GsapScrollSection>
  );
}
