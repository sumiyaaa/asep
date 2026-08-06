import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { membershipTiers, getMembershipTier } from "@/lib/content/membership";

export function generateStaticParams() {
  return membershipTiers.map((tier) => ({ tier: tier.slug }));
}

export async function generateMetadata({ params }: PageProps<"/membership/[tier]">): Promise<Metadata> {
  const { tier: slug } = await params;
  const tier = getMembershipTier(slug);
  return { title: tier ? `${tier.name} Membership` : "Membership" };
}

export default async function MembershipTierPage({ params }: PageProps<"/membership/[tier]">) {
  const { tier: slug } = await params;
  const tier = getMembershipTier(slug);
  if (!tier) notFound();

  const Icon = tier.icon;

  return (
    <>
      <PageHero
        eyebrow={tier.tagline}
        title={`${tier.name} Membership`}
        description={tier.description}
        crumbs={[{ label: "Membership", href: "/membership" }, { label: tier.name }]}
        actions={
          <LinkButton href="/membership/join" variant="accent" size="lg">
            Apply for {tier.name}
          </LinkButton>
        }
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <div className="flex size-11 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-medium">Eligibility</h2>
              <ul className="mt-3 space-y-2.5">
                {tier.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <h2 className="font-display text-lg font-medium">Member benefits</h2>
              <ul className="mt-3 space-y-2.5">
                {tier.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
