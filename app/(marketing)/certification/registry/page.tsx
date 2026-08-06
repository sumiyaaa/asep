import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { RegistrySearch } from "@/components/marketing/registry-search";
import { registryEntries } from "@/lib/content/registry";

export const metadata: Metadata = { title: "EPC Registry" };

export default function RegistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="EPC Registry"
        description="A public, searchable directory of EPC-certified professionals — verify a colleague, employee, or provider's standing."
        crumbs={[{ label: "Certification", href: "/certification" }, { label: "EPC Registry" }]}
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <RegistrySearch entries={registryEntries} />
      </section>
    </>
  );
}
