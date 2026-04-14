import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const categoryMap: Record<string, { name: string; desc: string }> = {
  "ai-tools": {
    name: "AIツール比較",
    desc: "ChatGPT・Claudeなど主要AIツールの実機検証レビューと比較",
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
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <section className="mb-16">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            カテゴリ
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight mb-4">
            {cat.name}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
            {cat.desc}
          </p>
          <p className="text-sm text-gray-500 mt-5">{posts.length}本の記事</p>
        </section>

        <section className="mb-16">
          <div className="border-b border-black mb-6" />
          {posts.length === 0 ? (
            <p className="text-gray-500 py-8">
              このカテゴリの記事はまだありません。
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block py-7">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <span className="font-semibold text-black">{post.category}</span>
                      <span>·</span>
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>読了 {post.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black leading-snug mb-2 group-hover:underline underline-offset-4 decoration-2">
                      {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <Link
          href="/"
          className="text-sm font-semibold text-black hover:underline underline-offset-4"
        >
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
