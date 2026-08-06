import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { JournalCard } from "@/components/marketing/journal-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { journals } from "@/lib/content/journals";

export const metadata: Metadata = { title: "Journals" };

export default function JournalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Four peer-reviewed journals, open to everyone"
        description="Original research in exercise physiology, exercise medicine, and the professionalization of the field — free to read, free to cite."
        crumbs={[{ label: "Journals" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journals.map((journal) => (
            <StaggerItem key={journal.slug}>
              <JournalCard
                journal={{
                  abbreviation: journal.abbreviation,
                  name: journal.name,
                  description: journal.description,
                  badge: journal.badge,
                  href: `/journals/${journal.slug}`,
                }}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
