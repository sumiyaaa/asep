export interface Journal {
  slug: string;
  abbreviation: string;
  name: string;
  issn?: string;
  cadence: string;
  badge: string;
  description: string;
  scope: string[];
}

export const journals: Journal[] = [
  {
    slug: "jep-online",
    abbreviation: "JEP Online",
    name: "Journal of Exercise Physiology Online",
    issn: "1097-9751",
    cadence: "Bi-monthly",
    badge: "Scopus-indexed",
    description:
      "ASEP's flagship research journal, publishing original, peer-reviewed research on human performance and applied physiology since 1998.",
    scope: [
      "Applied exercise physiology and human performance",
      "Cardiorespiratory and metabolic responses to exercise",
      "Strength, conditioning, and neuromuscular research",
    ],
  },
  {
    slug: "jem-online",
    abbreviation: "JEM Online",
    name: "Journal of Exercise Medicine Online",
    issn: "2378-4083",
    cadence: "Quarterly",
    badge: "Open access",
    description:
      "Research at the intersection of exercise physiology and clinical medicine — exercise as prevention, treatment, and rehabilitation.",
    scope: [
      "Clinical exercise physiology and rehabilitation",
      "Exercise medicine and chronic disease management",
      "Case studies from clinical exercise settings",
    ],
  },
  {
    slug: "pep-online",
    abbreviation: "PEP Online",
    name: "Professionalization of Exercise Physiology Online",
    cadence: "Quarterly",
    badge: "Since 1998",
    description:
      "Scholarship on the professionalization, standards, and credentialing of exercise physiology as a licensed healthcare profession.",
    scope: [
      "Professional standards, licensure, and scope of practice",
      "History and development of the exercise physiology profession",
      "Credentialing and accreditation research",
    ],
  },
  {
    slug: "jpep",
    abbreviation: "JPEP",
    name: "Journal of Professional Exercise Physiology",
    cadence: "Quarterly",
    badge: "Open access",
    description:
      "Applied research for practicing exercise physiologists, program directors, and educators translating research into practice.",
    scope: ["Applied practice research", "Program and curriculum development", "Professional case studies"],
  },
];

export function getJournal(slug: string) {
  return journals.find((j) => j.slug === slug) ?? null;
}
