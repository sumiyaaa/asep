"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NavGroup } from "@/lib/navigation";
import { EASE_OUT } from "@/lib/animation/variants";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: EASE_OUT } },
};

interface MegaMenuPanelProps {
  group: NavGroup;
  onNavigate?: () => void;
}

export function MegaMenuPanel({ group, onNavigate }: MegaMenuPanelProps) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="absolute left-1/2 top-full z-40 w-[min(46rem,92vw)] -translate-x-1/2 pt-3"
    >
      <div className="rounded-lg border border-border bg-surface p-2 shadow-[0_20px_50px_-12px_rgba(20,15,10,0.18)]">
        <div className="grid grid-cols-2 gap-1 p-2">
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="group flex flex-col gap-0.5 rounded-md px-4 py-3 transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <span className="flex items-center gap-1.5 font-display text-[0.95rem] font-medium text-foreground">
                {link.label}
                <ArrowRight
                  className="size-3.5 -translate-x-1 text-primary-600 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
              {link.description ? (
                <span className="text-sm text-muted-foreground">{link.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
        <div className="mt-1 border-t border-border px-4 py-3">
          <Link
            href={group.href}
            onClick={onNavigate}
            className="text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
          >
            {group.description} →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
