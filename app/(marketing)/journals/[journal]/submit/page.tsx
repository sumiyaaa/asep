import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { journals, getJournal } from "@/lib/content/journals";

export function generateStaticParams() {
  return journals.map((j) => ({ journal: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journals/[journal]/submit">): Promise<Metadata> {
  const { journal: slug } = await params;
  const journal = getJournal(slug);
  return { title: journal ? `Submit to ${journal.abbreviation}` : "Journals" };
}

export default async function JournalSubmitPage({ params }: PageProps<"/journals/[journal]/submit">) {
  const { journal: slug } = await params;
  const journal = getJournal(slug);
  if (!journal) notFound();

  return (
    <>
      <PageHero
        eyebrow={journal.abbreviation}
        title="Submission Guidelines"
        description={`How to submit original research to ${journal.name}.`}
        crumbs={[
          { label: "Journals", href: "/journals" },
          { label: journal.abbreviation, href: `/journals/${journal.slug}` },
          { label: "Submit" },
        ]}
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 lg:px-8">
        <Reveal>
          <Card>
            <h2 className="font-display text-lg font-medium">Scope</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {journal.abbreviation} accepts original, unpublished research within: {journal.scope.join("; ")}.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={0.06}>
          <Card>
            <h2 className="font-display text-lg font-medium">Format</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Manuscripts should follow standard scientific paper structure (abstract, introduction, methods,
              results, discussion, references) and be submitted as a single PDF or Word document.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={0.12}>
          <Card className="flex items-center gap-4 border-primary-200 bg-primary-50/60 dark:border-primary-800 dark:bg-primary-950/30">
            <Mail className="size-6 shrink-0 text-primary-600" aria-hidden="true" />
            <div>
              <p className="font-medium text-foreground">Ready to submit?</p>
              <a href="mailto:editor@asep.org" className="text-sm text-primary-700 hover:underline dark:text-primary-400">
                editor@asep.org
              </a>
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
