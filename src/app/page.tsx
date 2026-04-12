import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    name: "AIツール比較",
    slug: "ai-tools",
    desc: "ChatGPT、Claude、Gemini等のガチ比較",
    emoji: "🔍",
    bgColor: "bg-indigo-50",
  },
  {
    name: "業務効率化",
    slug: "productivity",
    desc: "AIで仕事を速くする具体的な方法",
    emoji: "🚀",
    bgColor: "bg-emerald-50",
  },
  {
    name: "自動化",
    slug: "automation",
    desc: "Zapier、Make、n8nで業務を自動化",
    emoji: "⚙️",
    bgColor: "bg-orange-50",
  },
  {
    name: "プロンプト術",
    slug: "prompts",
    desc: "成果を出すプロンプトの書き方",
    emoji: "✍️",
    bgColor: "bg-purple-50",
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

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
            🔥 実体験ベースのAI活用ガイド
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            AIを使い倒す人の、
            <br />
            実践ガイド
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            毎日AIツールを業務で使っている筆者が、本当に役立つ活用法・比較・設定手順を
            <strong className="text-white">数字と実例</strong>でお届けします。
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#articles"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:shadow-xl transition-all"
            >
              記事を読む
            </a>
            <Link
              href="/about"
              className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              サイトについて
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-extrabold text-zinc-900">70%</div>
            <div className="text-xs text-zinc-500 mt-0.5">開発時間の削減</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900">30h/月</div>
            <div className="text-xs text-zinc-500 mt-0.5">自動化で節約</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-zinc-900">10+</div>
            <div className="text-xs text-zinc-500 mt-0.5">検証済みツール</div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-zinc-900">
            最新の記事
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            実際に使って検証した、おすすめの記事
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-hover group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm"
            >
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{post.emoji}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass[post.categorySlug] || "badge-ai-tools"}`}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <time>{post.date}</time>
                  <span>📖 {post.readTime}で読める</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-zinc-900">
              カテゴリから探す
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              目的に合わせて記事を見つけよう
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="card-hover group bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center text-2xl mb-4`}
                >
                  {cat.emoji}
                </div>
                <h3 className="font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-14 text-center shadow-xl shadow-indigo-200/50">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            AIで仕事を変えよう
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            最新のAIツール活用法や自動化テクニックを、実体験ベースでお届けします。
          </p>
          <a
            href="#articles"
            className="inline-block px-8 py-3.5 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl transition-all"
          >
            記事を読み始める
          </a>
        </div>
      </section>
    </>
  );
}
