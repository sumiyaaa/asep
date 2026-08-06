import type { Metadata } from "next";
import {
  Award,
  Briefcase,
  BadgeCheck,
  GraduationCap,
  Globe2,
  Users,
} from "lucide-react";
import { Hero } from "@/components/marketing/hero";
import { StatCounterGrid, type Stat } from "@/components/marketing/stat-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { MembershipTierCard, type MembershipTier } from "@/components/marketing/membership-tier-card";
import { JournalCard, type JournalTeaser } from "@/components/marketing/journal-card";
import { TestimonialCarousel, type Testimonial } from "@/components/marketing/testimonial-carousel";
import { CtaSection } from "@/components/marketing/cta-section";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "American Society of Exercise Physiologists",
};

const stats: Stat[] = [
  { value: 29, suffix: "+", label: "Years setting the standard" },
  { value: 460, suffix: "+", label: "EPC-certified professionals" },
  { value: 4, label: "Peer-reviewed, open-access journals" },
  { value: 6, label: "Membership pathways" },
];

const membershipTiers: MembershipTier[] = [
  {
    icon: Briefcase,
    name: "Professional",
    description: "For practicing exercise physiologists building their career under a recognized standard.",
    href: "/membership/professional",
  },
  {
    icon: BadgeCheck,
    name: "EPC Certified",
    description: "For members who hold the EPC credential and want full standing within the Society.",
    href: "/membership/epc-certified",
  },
  {
    icon: GraduationCap,
    name: "Student",
    description: "For students currently enrolled in an academic exercise physiology program.",
    href: "/membership/student",
  },
  {
    icon: Award,
    name: "Fellow",
    description: "The Society's highest membership honor, awarded on annual application by Nov 1.",
    href: "/membership/fellow",
  },
  {
    icon: Globe2,
    name: "International",
    description: "For exercise physiology professionals and academics practicing outside the U.S.",
    href: "/membership/international",
  },
  {
    icon: Users,
    name: "Affiliate",
    description: "For allied professionals who support the exercise physiology field.",
    href: "/membership/affiliate",
  },
];

const journals: JournalTeaser[] = [
  {
    abbreviation: "JEP Online",
    name: "Journal of Exercise Physiology Online",
    description: "Scopus-indexed, bi-monthly research on human performance and applied physiology.",
    badge: "Scopus-indexed",
    href: "/journals/jep-online",
  },
  {
    abbreviation: "JEM Online",
    name: "Journal of Exercise Medicine Online",
    description: "Research at the intersection of exercise physiology and clinical medicine.",
    badge: "Open access",
    href: "/journals/jem-online",
  },
  {
    abbreviation: "PEP Online",
    name: "Professionalization of Exercise Physiology Online",
    description: "The profession's development, standards, and credentialing scholarship since 1998.",
    badge: "Since 1998",
    href: "/journals/pep-online",
  },
  {
    abbreviation: "JPEP",
    name: "Journal of Professional Exercise Physiology",
    description: "Applied research for practicing exercise physiologists and program directors.",
    badge: "Open access",
    href: "/journals/jpep",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Earning the EPC credential gave my clinical work a standard to point to — patients and referring physicians both recognize what it means.",
    name: "Sarah M.",
    role: "EPC Certified Professional",
  },
  {
    quote:
      "ASEP accreditation shaped how we structure our curriculum. It's the benchmark our faculty designs toward every year.",
    name: "David R.",
    role: "Program Director, Accredited University",
  },
  {
    quote:
      "The journals are genuinely useful — open access, relevant research, and a fast path from submission to publication.",
    name: "Priya K.",
    role: "Fellow, ASEP",
  },
];

const faqs = [
  {
    q: "What does EPC certification require?",
    a: "Current ASEP membership, an approved academic transcript, and a passing score (70% or higher) on a 200-question, 4-hour online exam. The standard exam fee is $300; students in an ASEP-accredited program pay a discounted $50 for their first attempt.",
  },
  {
    q: "Which membership type is right for me?",
    a: "Professional and EPC Certified cover most practicing exercise physiologists; Student is for those currently enrolled in a program; Fellow is an annually-applied-for honor; International and Affiliate cover practitioners and allied professionals outside those categories.",
  },
  {
    q: "Are the journals free to read?",
    a: "Yes — all four ASEP journals (JEP Online, JEM Online, PEP Online, and the Journal of Professional Exercise Physiology) are open access.",
  },
  {
    q: "How does academic program accreditation work?",
    a: "Institutions submit a candidate application and their accreditation manual materials for Board review, with a faculty member holding ASEP membership as part of the process, followed by an annual accreditation fee.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StatCounterGrid stats={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="A pathway for every stage of your career"
          description="Six membership types — from students entering the field to Fellows recognized for career-long contribution."
        />
        <StaggerGroup as="ul" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <MembershipTierCard tier={tier} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CtaSection
        eyebrow="EPC Certification"
        title="Become an EPC Certified Professional"
        description="A 200-question, 4-hour online exam and a searchable public registry — the credential that verifies your standing in the field."
        primaryCta={{ label: "Start Certification", href: "/certification" }}
        secondaryCta={{ label: "Search the Registry", href: "/certification/registry" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Four peer-reviewed journals, open to everyone"
          description="Original research in exercise physiology, exercise medicine, and the professionalization of the field — free to read, free to cite."
        />
        <StaggerGroup as="ul" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journals.map((journal) => (
            <StaggerItem key={journal.abbreviation}>
              <JournalCard journal={journal} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-border bg-surface-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <TestimonialCarousel testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" className="mx-auto" />
        <Reveal className="mt-10">
          <div>
            {faqs.map((item) => (
              <AccordionItem key={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface p-8 sm:flex-row sm:items-center lg:p-10">
            <div>
              <h3 className="font-display text-xl font-medium">Journal releases and certification deadlines</h3>
              <p className="mt-1 text-sm text-muted-foreground">A few emails a year — no more than that.</p>
            </div>
            <NewsletterForm compact />
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Ready to join the Society?"
        description="Start your membership today and take the first step toward EPC certification."
        primaryCta={{ label: "Become a Member", href: "/membership/join" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
