import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { StatCounterGrid, type Stat } from "@/components/marketing/stat-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { MembershipTierCard } from "@/components/marketing/membership-tier-card";
import { JournalCard } from "@/components/marketing/journal-card";
import { TestimonialCarousel, type Testimonial } from "@/components/marketing/testimonial-carousel";
import { CtaSection } from "@/components/marketing/cta-section";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { membershipTiers } from "@/lib/content/membership";
import { journals } from "@/lib/content/journals";
import { faqs } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "American Society of Exercise Physiologists",
};

const stats: Stat[] = [
  { value: 29, suffix: "+", label: "Years setting the standard" },
  { value: 460, suffix: "+", label: "EPC-certified professionals" },
  { value: 4, label: "Peer-reviewed, open-access journals" },
  { value: 6, label: "Membership pathways" },
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

// One representative question per category keeps the homepage teaser short;
// the full list lives on /faq.
const homeFaqs = ["Certification", "Membership", "Journals", "Accreditation"].map(
  (category) => faqs.find((f) => f.category === category)!,
);

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
            <StaggerItem key={tier.slug}>
              <MembershipTierCard
                tier={{
                  icon: tier.icon,
                  name: tier.name,
                  description: tier.tagline,
                  href: `/membership/${tier.slug}`,
                }}
              />
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
            <StaggerItem key={journal.slug}>
              <JournalCard
                journal={{
                  abbreviation: journal.abbreviation,
                  name: journal.name,
                  description: journal.description,
                  badge: journal.badge,
                  href: `/journals/${journal.slug}`,
                }}
              />
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
            {homeFaqs.map((item) => (
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
