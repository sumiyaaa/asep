import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { LinkButton } from "@/components/ui/button";
import { journals, getJournal } from "@/lib/content/journals";

export function generateStaticParams() {
  return journals.map((j) => ({ journal: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journals/[journal]">): Promise<Metadata> {
  const { journal: slug } = await params;
  const journal = getJournal(slug);
  return { title: journal ? journal.abbreviation : "Journals" };
}

export default async function JournalDetailPage({ params }: PageProps<"/journals/[journal]">) {
  const { journal: slug } = await params;
  const journal = getJournal(slug);
  if (!journal) notFound();

  return (
    <>
      <PageHero
        eyebrow={journal.cadence}
        title={journal.name}
        description={journal.description}
        crumbs={[{ label: "Journals", href: "/journals" }, { label: journal.abbreviation }]}
        actions={
          <LinkButton href={`/journals/${journal.slug}/submit`} variant="accent" size="lg">
            Submission Guidelines
          </LinkButton>
        }
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal className="sm:col-span-1">
            <Card className="h-full">
              <BookOpen className="size-6 text-accent-500" aria-hidden="true" />
              <dl className="mt-4 space-y-3 text-sm">
                {journal.issn ? (
                  <div>
                    <dt className="text-muted-foreground">ISSN</dt>
                    <dd className="font-medium text-foreground">{journal.issn}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-muted-foreground">Frequency</dt>
                  <dd className="font-medium text-foreground">{journal.cadence}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Access</dt>
                  <dd>
                    <Badge variant="accent">{journal.badge}</Badge>
                  </dd>
                </div>
              </dl>
            </Card>
          </Reveal>
          <Reveal delay={0.08} className="sm:col-span-2">
            <Card className="h-full">
              <h2 className="font-display text-lg font-medium">Scope</h2>
              <ul className="mt-3 space-y-2">
                {journal.scope.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    — {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
