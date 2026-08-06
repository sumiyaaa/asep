import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center flex-wrap gap-1.5 text-sm", className)}>
      <Link href="/" className="text-muted-foreground hover:text-foreground">
        Home
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-1.5">
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          {crumb.href && i !== crumbs.length - 1 ? (
            <Link href={crumb.href} className="text-muted-foreground hover:text-foreground">
              {crumb.label}
            </Link>
          ) : (
            <span aria-current="page" className="font-medium text-foreground">
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
