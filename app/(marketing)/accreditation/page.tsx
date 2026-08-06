import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { accreditationSteps } from "@/lib/content/accreditation";

export const metadata: Metadata = { title: "Accreditation" };

export default function AccreditationPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation"
        title="Academic program accreditation"
        description="ASEP accreditation recognizes exercise physiology programs that meet the Society's academic and curricular standards."
        crumbs={[{ label: "Accreditation" }]}
        actions={
          <LinkButton href="/accreditation/programs" variant="accent" size="lg">
            View Accredited Programs
          </LinkButton>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Process" title="How a program becomes accredited" />
        <StaggerGroup as="ol" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {accreditationSteps.map((step, i) => (
            <StaggerItem key={step.title} as="li">
              <Card className="h-full">
                <Badge variant="primary">{String(i + 1).padStart(2, "0")}</Badge>
                <h3 className="mt-3 font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
