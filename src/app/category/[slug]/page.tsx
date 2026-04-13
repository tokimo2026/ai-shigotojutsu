import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const categoryMap: Record<string, { name: string; desc: string }> = {
  "ai-tools": {
    name: "AIツール比較",
    desc: "ChatGPT・Claudeなど主要AIツールの実体験レビューと比較",
  },
  productivity: {
    name: "業務効率化",
    desc: "AIを使って仕事を速くする具体的な方法と実例",
  },
  automation: {
    name: "自動化",
    desc: "Zapier・Makeなどで業務を自動化するノウハウ",
  },
  prompts: {
    name: "プロンプト術",
    desc: "成果を出すプロンプトの書き方とテンプレート集",
  },
};

const badgeClass: Record<string, string> = {
  "ai-tools": "badge-ai-tools",
  productivity: "badge-productivity",
  automation: "badge-automation",
  prompts: "badge-prompts",
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) return { title: "カテゴリが見つかりません" };
  return { title: cat.name, description: cat.desc };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) notFound();

  const posts = getAllPosts().filter((p) => p.categorySlug === slug);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <section className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-14 mb-8">
          <p className="text-sm font-semibold text-indigo-600 mb-3">
            カテゴリ
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {cat.name}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">{cat.desc}</p>
          <p className="text-sm text-gray-400 mt-4">{posts.length}件の記事</p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-12">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              このカテゴリの記事はまだありません。
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="mb-3">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass[post.categorySlug] || "badge-ai-tools"}`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <time>{post.date}</time>
                      <span>読了 {post.readTime}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
