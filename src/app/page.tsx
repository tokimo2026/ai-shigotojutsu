import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  { name: "AIツール比較", slug: "ai-tools" },
  { name: "業務効率化", slug: "productivity" },
  { name: "自動化", slug: "automation" },
  { name: "プロンプト術", slug: "prompts" },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-20 md:mb-28">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            実機検証ベースのAI活用ガイド
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tight mb-6">
            AIを使い倒す人の、
            <br />
            実践ガイド
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
            AIツールを業務で実際に動かしている編集部が、本当に役立つ活用法・比較・設定手順を
            実例ベースでお届けします。
          </p>
        </section>

        {/* Articles list */}
        <section className="mb-24">
          <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-black">
            <h2 className="text-2xl font-bold text-black">記事一覧</h2>
            <span className="text-sm text-gray-500">{posts.length}本</span>
          </div>
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-7"
                >
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span className="font-semibold text-black">
                      {post.category}
                    </span>
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
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 pb-4 border-b border-black">
            カテゴリ
          </h2>
          <ul className="grid gap-1 md:grid-cols-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="block py-4 text-base font-semibold text-black hover:underline underline-offset-4"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
