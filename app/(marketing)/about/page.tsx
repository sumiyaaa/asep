import type { Metadata } from "next";
import Link from "next/link";
import { ScrollText, ShieldCheck, Users2, Award } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaSection } from "@/components/marketing/cta-section";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { foundingYear } from "@/lib/content/officers";

export const metadata: Metadata = { title: "About ASEP" };

const links = [
  {
    icon: ScrollText,
    title: "Governance",
    description: "Bylaws, Code of Ethics, and Standards of Practice.",
    href: "/about/governance",
  },
  {
    icon: Users2,
    title: "Officers & Board",
    description: "The Society's leadership and governance structure.",
    href: "/about/officers",
  },
  {
    icon: Award,
    title: "FASEP & Fellows",
    description: "Requirements for the Society's highest membership honor.",
    href: "/about/fasep",
  },
  {
    icon: ShieldCheck,
    title: "Terms & Conditions",
    description: "The terms governing use of ASEP's site and services.",
    href: "/about/terms",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="Setting the standard for exercise physiology since 1997"
        description={`Founded in Minnesota in ${foundingYear} as a 501(c)(3) nonprofit, ASEP defines and advances exercise physiology as a recognized healthcare profession — through credentialing, accreditation, ethical standards, and peer-reviewed research.`}
        crumbs={[{ label: "About" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Our mission" title="Why ASEP exists" />
        <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Exercise physiology sits at the intersection of science and practice — and for decades, the field lacked
            a unified professional standard. ASEP was formed to change that: to give exercise physiologists a
            credential that means something, an ethical framework to practice under, and a body of peer-reviewed
            research to build on.
          </p>
          <p>
            Today, that work continues through the EPC certification exam, academic program accreditation, four
            open-access journals, and a public registry that lets employers, patients, and referring physicians
            verify a professional&apos;s standing at a glance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading eyebrow="Learn more" title="Governance and leadership" />
        <StaggerGroup as="ul" className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <StaggerItem key={link.href}>
              <Link href={link.href} className="group block h-full">
                <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
                  <div className="flex size-11 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    <link.icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CtaSection
        title="Become part of the Society"
        description="Membership is the foundation of everything ASEP does — join today."
        primaryCta={{ label: "Become a Member", href: "/membership/join" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
