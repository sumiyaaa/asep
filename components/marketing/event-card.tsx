import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EventItem } from "@/lib/content/events";

export function EventCard({ event }: { event: EventItem }) {
  const date = new Date(event.date);
  return (
    <Link href={`/events/${event.slug}`} className="block h-full">
      <Card className="flex h-full gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-md bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
          <span className="text-xs font-medium uppercase">{date.toLocaleDateString("en-US", { month: "short" })}</span>
          <span className="font-display text-2xl font-semibold">{date.getDate()}</span>
        </div>
        <div className="flex-1">
          <Badge variant="neutral">{event.format}</Badge>
          <h3 className="mt-2 font-display text-lg font-medium text-balance">{event.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {event.location}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
        </div>
      </Card>
    </Link>
  );
}
