import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { JobPosting } from "@/lib/content/jobs";

export function JobCard({ job }: { job: JobPosting }) {
  return (
    <Link href={`/jobs/${job.slug}`} className="block">
      <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-medium">{job.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{job.organization}</p>
          </div>
          {job.epcEligible ? <Badge variant="primary">EPC-eligible</Badge> : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {job.type}
          </span>
        </div>
      </Card>
    </Link>
  );
}
