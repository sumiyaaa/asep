export interface EventItem {
  slug: string;
  title: string;
  date: string;
  location: string;
  format: "In-person" | "Virtual" | "Hybrid";
  description: string;
}

export const events: EventItem[] = [
  {
    slug: "annual-meeting-2026",
    title: "ASEP Annual Meeting 2026",
    date: "2026-10-14",
    location: "Minneapolis, MN",
    format: "Hybrid",
    description: "The Society's annual gathering of members, Fellows, and accredited-program faculty.",
  },
  {
    slug: "epc-exam-prep-webinar",
    title: "EPC Exam Preparation Webinar",
    date: "2026-09-02",
    location: "Online",
    format: "Virtual",
    description: "A live session covering exam structure, study resources, and common pitfalls.",
  },
  {
    slug: "accreditation-info-session",
    title: "Program Accreditation Info Session",
    date: "2026-11-05",
    location: "Online",
    format: "Virtual",
    description: "For academic program directors considering ASEP accreditation for the 2027 cycle.",
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug) ?? null;
}
