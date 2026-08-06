import { type HTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Native <details>/<summary>-based accordion: keyboard and screen-reader
 * accessible with zero JS, and animates via a CSS rotation on [open] —
 * no client component needed for the common case (e.g. the FAQ page).
 */
export const AccordionItem = forwardRef<HTMLDetailsElement, HTMLAttributes<HTMLDetailsElement>>(
  ({ className, ...props }, ref) => (
    <details
      ref={ref}
      className={cn("group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden", className)}
      {...props}
    />
  ),
);
AccordionItem.displayName = "AccordionItem";

export function AccordionTrigger({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-sm",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        aria-hidden="true"
      />
    </summary>
  );
}

export function AccordionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-3 text-sm leading-relaxed text-muted-foreground", className)} {...props} />;
}
