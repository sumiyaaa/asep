import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        className,
      )}
      aria-label="ASEP — American Society of Exercise Physiologists, home"
    >
      {/* The logo's wordmark is dark text with no dark-mode variant, so it
          gets a light backing chip whenever the page is dark — everywhere
          else it sits directly on the page background. */}
      <span className="inline-flex items-center rounded-md px-0 py-0 dark:bg-white dark:px-2.5 dark:py-1.5">
        <Image
          src="/images/logo.webp"
          alt=""
          width={435}
          height={61}
          priority
          className="h-8 w-auto sm:h-9"
        />
      </span>
    </Link>
  );
}
