import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs, faqCategories } from "@/lib/content/faq";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Frequently Asked Questions" crumbs={[{ label: "FAQ" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {faqCategories.map((category) => (
          <div key={category} className="mb-10 last:mb-0">
            <h2 className="font-display text-xl font-medium">{category}</h2>
            <Reveal className="mt-2">
              <div>
                {faqs
                  .filter((f) => f.category === category)
                  .map((item) => (
                    <AccordionItem key={item.q}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
              </div>
            </Reveal>
          </div>
        ))}
      </section>
    </>
  );
}
