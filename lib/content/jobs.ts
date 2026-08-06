export interface JobPosting {
  slug: string;
  title: string;
  organization: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  postedAt: string;
  epcEligible: boolean;
  summary: string;
}

/**
 * Illustrative mock listings — not live postings. Real submissions will
 * flow through /jobs/post once a backend is wired up (see lib/data plan).
 */
export const jobPostings: JobPosting[] = [
  {
    slug: "clinical-exercise-physiologist-regional-medical-center",
    title: "Clinical Exercise Physiologist",
    organization: "Regional Medical Center",
    location: "Columbus, OH",
    type: "Full-time",
    postedAt: "2026-07-18",
    epcEligible: true,
    summary: "Cardiac and pulmonary rehabilitation program seeking an EPC-certified exercise physiologist.",
  },
  {
    slug: "kinesiology-faculty-state-university",
    title: "Assistant Professor, Kinesiology",
    organization: "State University Department of Kinesiology",
    location: "Tempe, AZ",
    type: "Full-time",
    postedAt: "2026-07-10",
    epcEligible: true,
    summary: "Tenure-track faculty position teaching exercise physiology at an ASEP-accredited program.",
  },
  {
    slug: "corporate-wellness-specialist-vitality-partners",
    title: "Corporate Wellness Specialist",
    organization: "Vitality Health Partners",
    location: "Remote (U.S.)",
    type: "Contract",
    postedAt: "2026-06-29",
    epcEligible: false,
    summary: "Design and deliver employer wellness programming for a distributed corporate client base.",
  },
  {
    slug: "sports-performance-coach-summit-athletics",
    title: "Sports Performance Coach",
    organization: "Summit Athletics Institute",
    location: "Denver, CO",
    type: "Full-time",
    postedAt: "2026-06-15",
    epcEligible: true,
    summary: "Work with collegiate and post-collegiate athletes on performance testing and program design.",
  },
];

export function getJobPosting(slug: string) {
  return jobPostings.find((j) => j.slug === slug) ?? null;
}
