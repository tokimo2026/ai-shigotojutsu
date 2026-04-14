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
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <section className="mb-16 max-w-3xl">
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-5">
            Category
          </p>
          <h1 className="font-serif-jp text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-5">
            {cat.name}
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed">
            {cat.desc}
          </p>
          <p className="text-xs text-[#6b6459] mt-5">{posts.length}本の記事</p>
        </section>

        <section className="mb-16">
          <div className="border-t border-[#1a1a1a]" />
          {posts.length === 0 ? (
            <p className="text-[#6b6459] py-8">
              このカテゴリの記事はまだありません。
            </p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-[#e8e2d6]">
                  <Link href={`/blog/${post.slug}`} className="group block py-7">
                    <div className="flex items-center gap-3 mb-2 text-xs text-[#6b6459]">
                      <span className="font-semibold text-[#da7756]">{post.category}</span>
                      <span>·</span>
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>読了 {post.readTime}</span>
                    </div>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#c5532e] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#3a3530] leading-relaxed line-clamp-2">
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
          className="text-sm font-semibold text-[#1a1a1a] hover:text-[#da7756] transition-colors"
        >
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
