import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { newsPosts, getNewsPost } from "@/lib/content/news";

export function generateStaticParams() {
  return newsPosts.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  return { title: post ? post.title : "News" };
}

export default async function NewsDetailPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        crumbs={[{ label: "News", href: "/news" }, { label: post.title }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-pretty text-lg leading-relaxed text-foreground">{post.excerpt}</p>
      </section>
    </>
  );
}
