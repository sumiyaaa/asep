"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { MegaMenuPanel } from "@/components/marketing/mega-menu";
import { primaryNav, utilityNav } from "@/lib/navigation";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Body scroll lock while the mobile drawer is open.
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openNow = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenGroup(label);
  };

  const closeSoon = () => {
    closeTimeout.current = setTimeout(() => setOpenGroup(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-surface/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
      onMouseLeave={closeSoon}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenGroup(null);
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((group) => (
              <li key={group.label} className="relative" onMouseEnter={() => openNow(group.label)}>
                <button
                  type="button"
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                >
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 text-muted-foreground transition-transform duration-200",
                      openGroup === group.label && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {openGroup === group.label && (
                    <MegaMenuPanel group={group} onNavigate={() => setOpenGroup(null)} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          {utilityNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle className="mx-1" />
          <LinkButton href="/membership/join" variant="accent" size="sm" className="ml-1">
            Become a Member
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>{mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </header>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden border-t border-border bg-surface lg:hidden"
    >
      <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-6 py-4">
        {primaryNav.map((group) => (
          <details key={group.label} className="group border-b border-border py-3 last:border-0">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-medium [&::-webkit-details-marker]:hidden">
              {group.label}
              <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <ul className="mt-2 flex flex-col gap-1 pl-1">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}

        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
          <Link href="/contact" onClick={onClose} className="px-2 py-2 text-sm font-medium">
            Contact
          </Link>
          <Link href="/login" onClick={onClose} className="px-2 py-2 text-sm font-medium">
            Login
          </Link>
          <LinkButton href="/membership/join" onClick={onClose} variant="accent" className="mt-2 w-full justify-center">
            Become a Member
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
}
