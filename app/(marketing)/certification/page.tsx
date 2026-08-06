import type { Metadata } from "next";
import { ClipboardCheck, FileCheck2, GraduationCap, Search } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = { title: "EPC Certification" };

const steps = [
  {
    icon: GraduationCap,
    title: "1. Join & submit your transcript",
    description: "Hold active ASEP membership and submit an official transcript for Board review (typically within 48 hours).",
  },
  {
    icon: FileCheck2,
    title: "2. Pay the exam fee",
    description: "$300 standard fee, or $50 for a first attempt if you're a student in an ASEP-accredited program.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Take the exam",
    description: "200 multiple-choice questions, completed online within a 4-hour window. A 70% score is required to pass.",
  },
  {
    icon: Search,
    title: "4. Get listed in the Registry",
    description: "Passing candidates are added to the public EPC Registry and issued their certificate immediately.",
  },
];

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="EPC — Exercise Physiologist Certified"
        description="The credential that verifies a professional's standing in the field, backed by ASEP's Code of Ethics and Standards of Practice."
        crumbs={[{ label: "Certification" }]}
        actions={
          <>
            <LinkButton href="/certification/exam" variant="accent" size="lg">
              Exam Process
            </LinkButton>
            <LinkButton href="/certification/registry" variant="outline" size="lg">
              Search the Registry
            </LinkButton>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="How it works" title="From membership to certification" />
        <StaggerGroup as="ul" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <Card className="h-full">
                <step.icon className="size-6 text-primary-600" aria-hidden="true" />
                <CardTitle className="text-base">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-t border-border bg-surface-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Card>
              <h2 className="font-display text-xl font-medium">Retake policy</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If you don&apos;t pass on your first attempt, you may retake the exam at the standard $300 fee. There are
                no refunds or additional discounts on retakes, regardless of membership or student status.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Start your EPC certification"
        description="Membership is the first step — once approved, your exam and transcript review happen from your member dashboard."
        primaryCta={{ label: "Become a Member", href: "/membership/join" }}
        secondaryCta={{ label: "Read the Exam FAQ", href: "/faq" }}
      />
    </>
  );
}
