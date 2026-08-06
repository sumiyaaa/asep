import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { NewsCard } from "@/components/marketing/news-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { newsPosts } from "@/lib/content/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="News"
        description="Announcements and organizational updates from ASEP."
        crumbs={[{ label: "News" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StaggerGroup as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <NewsCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
