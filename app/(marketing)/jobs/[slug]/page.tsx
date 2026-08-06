import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, CalendarDays, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { jobPostings, getJobPosting } from "@/lib/content/jobs";

export function generateStaticParams() {
  return jobPostings.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/jobs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobPosting(slug);
  return { title: job ? job.title : "Job Board" };
}

export default async function JobDetailPage({ params }: PageProps<"/jobs/[slug]">) {
  const { slug } = await params;
  const job = getJobPosting(slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        eyebrow={job.organization}
        title={job.title}
        description={job.summary}
        crumbs={[{ label: "Job Board", href: "/jobs" }, { label: job.title }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Reveal>
          <Card>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden="true" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden="true" />
                Posted{" "}
                {new Date(job.postedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </span>
              {job.epcEligible ? <Badge variant="primary">EPC-eligible</Badge> : null}
            </div>
            <p className="mt-6 text-pretty leading-relaxed text-foreground">{job.summary}</p>
            <a
              href={`mailto:info@asep.org?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
            >
              <Mail className="size-4" aria-hidden="true" />
              Apply via info@asep.org
            </a>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
