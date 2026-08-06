"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { RegistryEntry } from "@/lib/content/registry";

export function RegistrySearch({ entries }: { entries: RegistryEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.state.toLowerCase().includes(q) ||
        String(e.certificateNumber).includes(q),
    );
  }, [entries, query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search by name, city, state, or certificate #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search the EPC Registry"
          className="pl-10"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-muted text-xs uppercase tracking-[0.04em] text-muted-foreground">
            <tr>
              <th scope="col" className="px-5 py-3 font-medium">
                Name
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Location
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Certificate #
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Date attained
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {results.map((entry) => (
              <tr key={entry.certificateNumber} className="bg-surface">
                <td className="px-5 py-3.5 font-medium text-foreground">{entry.name}</td>
                <td className="px-5 py-3.5 text-muted-foreground">
                  {entry.city}, {entry.state}
                </td>
                <td className="px-5 py-3.5">
                  <Badge variant="neutral">#{entry.certificateNumber}</Badge>
                </td>
                <td className="px-5 py-3.5 tabular-nums text-muted-foreground">
                  {new Date(entry.dateAttained).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))}
            {results.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-5 py-8 text-center text-muted-foreground">
                  No certified professionals match &ldquo;{query}&rdquo;.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
