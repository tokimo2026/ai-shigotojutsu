import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getPostBySlug(slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

const badgeClass: Record<string, string> = {
  "ai-tools": "badge-ai-tools",
  productivity: "badge-productivity",
  automation: "badge-automation",
  prompts: "badge-prompts",
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, contentHtml } = post;

  return (
    <>
      {/* Hero */}
      <div className="hero-gradient py-14 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white`}
            >
              {meta.emoji} {meta.category}
            </span>
            <span className="text-sm text-white/70">{meta.date}</span>
            <span className="text-sm text-white/70">・📖 {meta.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {meta.title}
          </h1>
          <p className="mt-3 text-white/80 leading-relaxed">
            {meta.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div
          className="prose prose-zinc prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:text-zinc-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-200
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:text-zinc-700
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-zinc-900
            prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-pre:rounded-xl
            prose-li:text-zinc-700
            prose-table:text-sm
            prose-th:bg-zinc-100 prose-th:px-4 prose-th:py-2
            prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-zinc-100"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <Link
            href="/"
            className="text-indigo-600 font-medium hover:underline"
          >
            ← トップに戻る
          </Link>
        </div>
      </article>
    </>
  );
}
