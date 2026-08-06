import type { Metadata } from "next";
import { UserCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { officers, boardSeatCount } from "@/lib/content/officers";

export const metadata: Metadata = { title: "Officers & Board" };

export default function OfficersPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="Officers & Board of Directors"
        description="The Society's elected leadership and governing board."
        crumbs={[{ label: "About", href: "/about" }, { label: "Officers & Board" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Officers" title="Executive leadership" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {officers.map((officer) => (
            <Reveal key={officer.name}>
              <Card className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  <UserCircle2 className="size-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-lg font-medium">{officer.name}</p>
                  <p className="text-sm text-muted-foreground">{officer.title}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Board of Directors" title={`${boardSeatCount} governing board seats`} />
          <Reveal className="mt-6">
            <Card>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Board of Directors provides oversight of the Society&apos;s standards, accreditation decisions, and
                strategic direction, working alongside standing committees covering practitioners, academics,
                publications, and professional relations. Individual board member profiles will be published here
                as part of the admin-managed content rollout.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
