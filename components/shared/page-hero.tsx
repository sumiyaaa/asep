import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/shared/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
}

/**
 * Consistent interior-page header — smaller and quieter than the homepage
 * Hero (no GSAP parallax; these pages are informational, not the landing
 * moment), but sharing the same decorative field-mark motif for continuity.
 */
export function PageHero({ eyebrow, title, description, crumbs, actions }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-primary-100/60 blur-3xl dark:bg-primary-900/20"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        {crumbs ? <Breadcrumbs crumbs={crumbs} className="mb-6" /> : null}
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent-600 dark:text-accent-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div> : null}
        </div>
      </div>
    </div>
  );
}
