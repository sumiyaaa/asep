import { type HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.06em]",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200",
        accent: "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200",
        neutral: "bg-surface-muted text-muted-foreground",
        outline: "border border-border-strong text-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
));
Badge.displayName = "Badge";
