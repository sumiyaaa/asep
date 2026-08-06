import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events, getEvent } from "@/lib/content/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  return { title: event ? event.title : "Events" };
}

export default async function EventDetailPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero
        eyebrow={event.format}
        title={event.title}
        description={event.description}
        crumbs={[{ label: "Events", href: "/events" }, { label: event.title }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Card className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 text-sm text-foreground">
            <CalendarDays className="size-4 text-primary-600" aria-hidden="true" />
            {new Date(event.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="flex items-center gap-2 text-sm text-foreground">
            <MapPin className="size-4 text-primary-600" aria-hidden="true" />
            {event.location}
          </span>
          <Badge variant="primary">{event.format}</Badge>
        </Card>
      </section>
    </>
  );
}
