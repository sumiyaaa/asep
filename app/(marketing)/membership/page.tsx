import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LinkButton } from "@/components/ui/button";
import { MembershipTierCard } from "@/components/marketing/membership-tier-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { membershipTiers } from "@/lib/content/membership";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Six pathways, one professional standard"
        description="Every ASEP membership type carries the same Code of Ethics and Standards of Practice — choose the one that fits where you are in your career."
        crumbs={[{ label: "Membership" }]}
        actions={
          <>
            <LinkButton href="/membership/join" variant="accent" size="lg">
              Become a Member
            </LinkButton>
            <LinkButton href="/membership/renew" variant="outline" size="lg">
              Renew Membership
            </LinkButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <StaggerItem key={tier.slug}>
              <MembershipTierCard
                tier={{
                  icon: tier.icon,
                  name: tier.name,
                  description: tier.tagline,
                  href: `/membership/${tier.slug}`,
                }}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
