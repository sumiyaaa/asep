import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="Privacy Policy"
        description="How ASEP collects, uses, and protects your information."
        crumbs={[{ label: "About", href: "/about" }, { label: "Privacy Policy" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
          <p>
            ASEP collects information you provide directly — through membership applications, certification exams,
            donations, job postings, and contact forms — to operate the Society&apos;s core functions. We do not sell
            member information to third parties.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Information we collect</h2>
          <p>
            Account and profile details, academic and employment information submitted for membership or
            certification, payment information (processed by our payment provider, not stored on our servers), and
            standard website usage analytics.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Public information</h2>
          <p>
            The EPC Registry is a public, searchable directory by design — certified professionals&apos; name, general
            location, certificate number, and certification date are shown so employers and the public can verify
            standing.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Your choices</h2>
          <p>
            You can update your profile information at any time from your member dashboard, unsubscribe from
            newsletter communications via the link in any email, and request account deletion by contacting ASEP
            directly.
          </p>
        </div>
      </section>
    </>
  );
}
