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
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        {/* Article card */}
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <header className="px-6 md:px-12 pt-10 md:pt-14 pb-8">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeClass[meta.categorySlug] || "badge-ai-tools"}`}
              >
                {meta.category}
              </span>
              <time className="text-sm text-gray-500">{meta.date}</time>
              <span className="text-sm text-gray-500">読了目安 {meta.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {meta.title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {meta.description}
            </p>
          </header>

          {/* Divider */}
          <div className="mx-6 md:mx-12 border-t border-gray-100" />

          {/* Body */}
          <div className="px-6 md:px-12 py-10 md:py-12">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          {/* Footer */}
          <footer className="px-6 md:px-12 py-8 bg-gray-50 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
            >
              トップに戻る
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
