import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, BadgeCheck, GraduationCap, Globe2, Users } from "lucide-react";

export interface MembershipTier {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  eligibility: string[];
  benefits: string[];
}

export const membershipTiers: MembershipTier[] = [
  {
    slug: "professional",
    icon: Briefcase,
    name: "Professional",
    tagline: "For practicing exercise physiologists",
    description:
      "The Society's core membership category — for exercise physiologists building a career under a recognized professional standard.",
    eligibility: [
      "A degree in exercise physiology, exercise science, or a closely related field",
      "Currently practicing or seeking to practice as an exercise physiologist",
    ],
    benefits: [
      "Eligibility to sit the EPC certification exam",
      "Full access to all four ASEP journals",
      "Standing under the Society's Code of Ethics and Standards of Practice",
      "Career resources and the ASEP job board",
    ],
  },
  {
    slug: "epc-certified",
    icon: BadgeCheck,
    name: "EPC Certified Professional",
    tagline: "For members holding the EPC credential",
    description:
      "For members who have earned EPC certification and maintain full professional standing within the Society.",
    eligibility: ["Current, passing EPC certification status", "Active ASEP membership in good standing"],
    benefits: [
      "Listing in the public EPC Registry",
      "Priority consideration on the ASEP job board",
      "Eligibility to serve on ASEP committees",
      "Continuing access to certification renewal resources",
    ],
  },
  {
    slug: "student",
    icon: GraduationCap,
    name: "Student",
    tagline: "For students in an academic program",
    description:
      "A discounted membership for students currently enrolled in an exercise physiology or exercise science program, capped at two years.",
    eligibility: [
      "Current full-time enrollment in an academic program",
      "Membership limited to a maximum of two years",
    ],
    benefits: [
      "Discounted EPC exam fee for accredited-program students ($50 first attempt)",
      "Full journal access",
      "Access to the job board and mentorship resources",
    ],
  },
  {
    slug: "fellow",
    icon: Award,
    name: "Fellow",
    tagline: "The Society's highest honor",
    description:
      "Awarded annually on application to members who have made a sustained contribution to the exercise physiology profession.",
    eligibility: [
      "Current ASEP membership in good standing",
      "Annual application due November 1 — see FASEP requirements",
    ],
    benefits: [
      "Use of the FASEP designation",
      "Recognition among the Society's leadership and past Fellows",
      "Priority standing on governance committees",
    ],
  },
  {
    slug: "international",
    icon: Globe2,
    name: "International",
    tagline: "For members practicing outside the U.S.",
    description:
      "For exercise physiology professionals and academics practicing or studying outside the United States.",
    eligibility: ["A degree or active practice in exercise physiology or a related field", "Primary practice outside the U.S."],
    benefits: [
      "Full journal access",
      "Eligibility to pursue EPC certification",
      "Connection to a global network of exercise physiology professionals",
    ],
  },
  {
    slug: "affiliate",
    icon: Users,
    name: "Affiliate",
    tagline: "For allied professionals",
    description:
      "For professionals in allied fields — physical therapy, nutrition, sports medicine, and related disciplines — who support the exercise physiology profession.",
    eligibility: ["A professional background in an allied health or fitness field"],
    benefits: ["Full journal access", "Access to ASEP events and continuing education", "Job board access"],
  },
];

export function getMembershipTier(slug: string) {
  return membershipTiers.find((t) => t.slug === slug) ?? null;
}
