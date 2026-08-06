import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { primaryNav, utilityNav, legalNav } from "@/lib/navigation";

/**
 * A real, populated footer — the direct fix for the live site's biggest
 * defect (three empty <nav> shells with no links, contact info, or social
 * presence). Every column here renders from the same `primaryNav` data the
 * header mega-menu uses, so the two can never drift out of sync again.
 */
export function SiteFooter() {
  const columns = primaryNav.slice(0, 4);

  return (
    <footer className="border-t border-border bg-surface-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Setting the standard for the exercise physiology profession since 1997 — membership,
              EPC certification, program accreditation, and peer-reviewed research.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                <a href="mailto:info@asep.org" className="hover:text-foreground">
                  info@asep.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
                <span>Minnesota, USA</span>
              </li>
            </ul>
          </div>

          {columns.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <h3 className="font-display text-sm font-semibold text-foreground">{group.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-sm">
            <h3 className="font-display text-sm font-semibold text-foreground">Stay informed</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Journal releases, certification deadlines, and organizational news — a few times a year.
            </p>
          </div>
          <NewsletterForm compact />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} American Society of Exercise Physiologists. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[...utilityNav, ...legalNav].map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
