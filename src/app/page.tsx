import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    name: "AIツール比較",
    slug: "ai-tools",
    desc: "ChatGPT、Claudeなどの実体験比較",
  },
  {
    name: "業務効率化",
    slug: "productivity",
    desc: "AIで仕事を速くする具体的な方法",
  },
  {
    name: "自動化",
    slug: "automation",
    desc: "Zapier・Makeで業務を自動化",
  },
  {
    name: "プロンプト術",
    slug: "prompts",
    desc: "成果を出すプロンプトの書き方",
  },
];

const badgeClass: Record<string, string> = {
  "ai-tools": "badge-ai-tools",
  productivity: "badge-productivity",
  automation: "badge-automation",
  prompts: "badge-prompts",
};

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);
  const rest = posts.slice(3);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        {/* Hero card */}
        <section className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-14 mb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-600 mb-3">
              実体験ベースのAI活用ガイド
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              AIを使い倒す人の、
              <br />
              実践ガイド
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              AIツールを毎日業務で使っている筆者が、本当に役立つ活用法・比較・設定手順を実例ベースでお届けします。
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#articles"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
              >
                記事を読む
              </a>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                サイトについて
              </Link>
            </div>
          </div>
        </section>

        {/* Featured posts card */}
        <section
          id="articles"
          className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-12 mb-10"
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              注目の記事
            </h2>
            <p className="text-sm text-gray-500">
              実際に使って検証した、おすすめの記事
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((post) => (
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
        </section>

        {/* All posts list */}
        {rest.length > 0 && (
          <section className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-12 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
              すべての記事
            </h2>
            <div className="divide-y divide-gray-100">
              {rest.map((post) => (
                <article key={post.slug} className="py-5 first:pt-0 last:pb-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass[post.categorySlug] || "badge-ai-tools"}`}
                      >
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-400">{post.date}</time>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Categories card */}
        <section className="bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 md:py-12">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              カテゴリから探す
            </h2>
            <p className="text-sm text-gray-500">
              目的に合わせて記事を見つけよう
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block px-5 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                  {cat.name}
                </div>
                <div className="text-sm text-gray-500">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
