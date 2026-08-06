import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { EventCard } from "@/components/marketing/event-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { events } from "@/lib/content/events";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Events"
        description="Conferences, webinars, and meetings hosted by ASEP."
        crumbs={[{ label: "Events" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="space-y-4">
          {events.map((event) => (
            <StaggerItem key={event.slug}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
