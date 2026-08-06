import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface JournalTeaser {
  name: string;
  abbreviation: string;
  description: string;
  badge: string;
  href: string;
}

export function JournalCard({ journal }: { journal: JournalTeaser }) {
  return (
    <Link href={journal.href} className="block h-full">
      <Card className="flex h-full flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="flex items-center justify-between">
          <BookOpen className="size-5 text-accent-500" aria-hidden="true" />
          <Badge variant="neutral">{journal.badge}</Badge>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
            {journal.abbreviation}
          </p>
          <h3 className="mt-1 font-display text-lg font-medium text-balance">{journal.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{journal.description}</p>
      </Card>
    </Link>
  );
}
