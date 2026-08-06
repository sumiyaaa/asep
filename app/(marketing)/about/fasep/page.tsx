import type { Metadata } from "next";
import { CalendarClock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/marketing/cta-section";
import { fasepRequirements } from "@/lib/content/governance";

export const metadata: Metadata = { title: "FASEP & Fellows" };

export default function FasepPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="FASEP: Fellow of ASEP"
        description={fasepRequirements.description}
        crumbs={[{ label: "About", href: "/about" }, { label: "FASEP & Fellows" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Reveal>
          <Card className="flex items-center gap-4 border-accent-200 bg-accent-50 dark:border-accent-900 dark:bg-accent-950/40">
            <CalendarClock className="size-8 shrink-0 text-accent-600" aria-hidden="true" />
            <div>
              <p className="font-display text-lg font-medium">Annual application deadline</p>
              <p className="text-sm text-muted-foreground">{fasepRequirements.deadline}</p>
            </div>
          </Card>
        </Reveal>

        <Reveal className="mt-10">
          <h2 className="font-display text-2xl font-medium">Requirements</h2>
          <ul className="mt-5 space-y-3">
            {fasepRequirements.requirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                <span className="text-pretty leading-relaxed text-foreground">{req}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaSection
        title="Ready to apply for Fellow status?"
        description="Fellow applications are reviewed once a year by the Board of Directors — start early."
        primaryCta={{ label: "Contact the Board", href: "/contact" }}
        secondaryCta={{ label: "Membership Types", href: "/membership" }}
      />
    </>
  );
}
