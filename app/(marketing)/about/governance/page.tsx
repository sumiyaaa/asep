import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { codeOfEthics, standardsOfPractice, bylawsHighlights } from "@/lib/content/governance";

export const metadata: Metadata = { title: "Governance" };

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="Governance"
        description="The bylaws, ethical principles, and standards of practice that every ASEP member and certified professional practices under."
        crumbs={[{ label: "About", href: "/about" }, { label: "Governance" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Bylaws" title="How the Society is organized" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bylawsHighlights.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Code of Ethics" title="Ten principles every member upholds" />
          <Reveal className="mt-8">
            <ol className="space-y-4">
              {codeOfEthics.map((item, i) => (
                <li key={item} className="flex gap-4 rounded-lg border border-border bg-surface p-4">
                  <Badge variant="primary" className="h-fit shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </Badge>
                  <p className="text-sm leading-relaxed text-foreground">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Standards of Practice" title="What certified practice requires" />
          <Reveal className="mt-8">
            <ol className="space-y-4">
              {standardsOfPractice.map((item, i) => (
                <li key={item} className="flex gap-4 rounded-lg border border-border bg-surface p-4">
                  <Badge variant="accent" className="h-fit shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </Badge>
                  <p className="text-sm leading-relaxed text-foreground">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
