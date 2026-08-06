import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NewsPost } from "@/lib/content/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link href={`/news/${post.slug}`} className="block h-full">
      <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="flex items-center justify-between">
          <Badge variant="neutral">{post.category}</Badge>
          <time dateTime={post.publishedAt} className="text-xs text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </time>
        </div>
        <h3 className="mt-3 font-display text-lg font-medium text-balance">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </Card>
    </Link>
  );
}
