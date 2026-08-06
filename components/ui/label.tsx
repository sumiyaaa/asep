import { type LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * Every field in this rebuild gets a real, associated <label> — the live
 * site's login and donation forms both shipped inputs with no programmatic
 * label, a genuine WCAG failure flagged in the discovery audit.
 */
export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("mb-1.5 block text-sm font-medium text-foreground", className)} {...props} />
  ),
);
Label.displayName = "Label";
