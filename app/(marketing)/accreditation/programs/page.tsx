import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/marketing/cta-section";
import { accreditedPrograms } from "@/lib/content/accreditation";

export const metadata: Metadata = { title: "Accredited Programs" };

export default function AccreditedProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation"
        title="Accredited Programs"
        description="Academic institutions currently holding ASEP program accreditation."
        crumbs={[{ label: "Accreditation", href: "/accreditation" }, { label: "Accredited Programs" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="space-y-4">
          {accreditedPrograms.map((program) => (
            <Reveal key={program.institution}>
              <Card className="flex items-center gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  <GraduationCap className="size-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-lg font-medium">{program.institution}</h2>
                  <p className="text-sm text-muted-foreground">{program.location}</p>
                </div>
                <div className="flex gap-2">
                  {program.levels.map((level) => (
                    <Badge key={level} variant="outline">
                      {level}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Is your program interested in ASEP accreditation?"
        description="The 2027 accreditation cycle is open — start with a faculty membership to begin the process."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Accreditation Process", href: "/accreditation" }}
      />
    </>
  );
}
