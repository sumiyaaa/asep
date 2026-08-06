import type { Metadata } from "next";
import { Clock, ListChecks, Percent, DollarSign } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";

export const metadata: Metadata = { title: "Exam Process" };

const facts = [
  { icon: ListChecks, label: "Questions", value: "200 multiple-choice" },
  { icon: Clock, label: "Time limit", value: "4 hours, online" },
  { icon: Percent, label: "Passing score", value: "70% or higher" },
  { icon: DollarSign, label: "Standard fee", value: "$300 ($50 first attempt for accredited-program students)" },
];

export default function ExamProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="EPC Exam Process"
        description="Everything you need to know before you sit the exam."
        crumbs={[{ label: "Certification", href: "/certification" }, { label: "Exam Process" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <StaggerItem key={fact.label}>
              <Card className="h-full">
                <fact.icon className="size-6 text-primary-600" aria-hidden="true" />
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-1 font-display text-lg font-medium">{fact.value}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-t border-border bg-surface-muted/40 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-6 lg:px-8">
          <Reveal>
            <Card>
              <h2 className="font-display text-lg font-medium">Before exam day</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your official transcript must be submitted and approved by the Board before you can schedule your
                exam — approvals are typically completed within 48 hours. Once approved, the exam fee is paid
                directly from your member dashboard.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card>
              <h2 className="font-display text-lg font-medium">During the exam</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The exam is taken online within a single 4-hour window. You may skip questions and return to them
                before submitting, as long as you remain within the time limit.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card>
              <h2 className="font-display text-lg font-medium">Results</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Results are available immediately on-screen and by email. A passing score adds you to the public EPC
                Registry and issues your certificate. If you don&apos;t pass, you may retake the exam at the standard
                $300 fee — there are no refunds or additional discounts on retakes.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
