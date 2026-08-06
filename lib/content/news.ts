export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "jep-online-august-issue",
    title: "JEP Online publishes its August 2026 issue",
    excerpt: "The latest issue features new research on cardiorespiratory adaptation in endurance athletes.",
    publishedAt: "2026-08-01",
    category: "Journals",
  },
  {
    slug: "epc-registry-milestone",
    title: "EPC Registry surpasses 460 certified professionals",
    excerpt: "The public registry continues to grow as more members complete certification nationwide.",
    publishedAt: "2026-07-14",
    category: "Certification",
  },
  {
    slug: "accreditation-cycle-open",
    title: "2027 academic accreditation cycle now open",
    excerpt: "Institutions interested in ASEP program accreditation can begin the candidate application process.",
    publishedAt: "2026-06-20",
    category: "Accreditation",
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((n) => n.slug === slug) ?? null;
}
