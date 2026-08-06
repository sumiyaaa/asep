import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export interface MembershipTier {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

export function MembershipTierCard({ tier }: { tier: MembershipTier }) {
  const Icon = tier.icon;
  return (
    <Link href={tier.href} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="flex size-11 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription className="flex-1">{tier.description}</CardDescription>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-400">
          Learn more
          <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  );
}
