import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        className,
      )}
      aria-label="ASEP — American Society of Exercise Physiologists, home"
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-md font-display text-base font-semibold",
          mono ? "border border-current" : "bg-primary-700 text-white",
        )}
        aria-hidden="true"
      >
        A
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight">ASEP</span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
          Exercise Physiologists
        </span>
      </span>
    </Link>
  );
}
