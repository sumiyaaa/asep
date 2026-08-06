import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { LinkButton } from "@/components/ui/button";
import { JobCard } from "@/components/marketing/job-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { jobPostings } from "@/lib/content/jobs";

export const metadata: Metadata = { title: "Job Board" };

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Job Board"
        description="Open positions for exercise physiologists, from clinical roles to academic faculty."
        crumbs={[{ label: "Job Board" }]}
        actions={
          <LinkButton href="/jobs/post" variant="accent" size="lg">
            Post a Job
          </LinkButton>
        }
      />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="space-y-4">
          {jobPostings.map((job) => (
            <StaggerItem key={job.slug}>
              <JobCard job={job} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
