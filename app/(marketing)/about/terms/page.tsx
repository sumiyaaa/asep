import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="About ASEP"
        title="Terms & Conditions"
        description="Last updated August 2026. Governed by the laws of the State of Minnesota."
        crumbs={[{ label: "About", href: "/about" }, { label: "Terms & Conditions" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
          <p>
            These Terms & Conditions govern your use of the ASEP website and services, including membership,
            certification, accreditation, journal access, and the job board. By using this site, you agree to these
            terms.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Professional and medical disclaimer</h2>
          <p>
            Content on this site is provided for informational and professional development purposes and does not
            constitute medical advice. ASEP certification verifies completion of the Society&apos;s credentialing
            requirements; it does not replace applicable state licensure where required.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Membership and certification</h2>
          <p>
            Membership and EPC certification are subject to the eligibility requirements, fees, and Code of Ethics
            described elsewhere on this site. ASEP reserves the right to suspend or revoke membership or
            certification for violations of the Code of Ethics or Standards of Practice.
          </p>
          <h2 className="font-display text-xl font-medium text-foreground">Governing law</h2>
          <p>These terms are governed by the laws of the State of Minnesota, without regard to conflict-of-law principles.</p>
        </div>
      </section>
    </>
  );
}
