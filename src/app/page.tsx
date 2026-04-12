import Link from "next/link";

const featuredPosts = [
  {
    slug: "claude-code-guide",
    title: "Claude Code完全ガイド：開発効率を10倍にする使い方",
    description:
      "Claude Codeを半年使い倒した筆者が、セットアップから実践テクニックまで徹底解説。実際のプロジェクトで開発時間を70%削減した方法。",
    category: "AIツール比較",
    date: "2026-04-12",
  },
  {
    slug: "chatgpt-vs-claude-2026",
    title: "【2026年最新】ChatGPT vs Claude 徹底比較：どっちを選ぶべき？",
    description:
      "両方を業務で毎日使っている筆者が、コーディング・文章作成・分析の3軸で本音比較。用途別のおすすめも。",
    category: "AIツール比較",
    date: "2026-04-15",
  },
  {
    slug: "ai-automation-tools-10",
    title: "AI自動化ツール10選：業務を本気で効率化するならこれ",
    description:
      "Zapier、Make、n8nからAI専用ツールまで。実際に導入して月30時間削減した自動化ツールを厳選紹介。",
    category: "自動化",
    date: "2026-04-18",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
          AIを使い倒す人の、実践ガイド
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          毎日AIツールを業務で使っている筆者が、本当に役立つ活用法・比較・設定手順を
          実体験ベースでお届けします。
        </p>
      </section>

      {/* Featured Articles */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">注目の記事</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-zinc-200 p-6 hover:border-zinc-400 transition-colors"
            >
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
                {post.description}
              </p>
              <time className="mt-4 block text-xs text-zinc-400">
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">カテゴリ</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              name: "AIツール比較",
              slug: "ai-tools",
              desc: "ChatGPT、Claude、Gemini等のガチ比較",
            },
            {
              name: "業務効率化",
              slug: "productivity",
              desc: "AIで仕事を速くする具体的な方法",
            },
            {
              name: "自動化",
              slug: "automation",
              desc: "Zapier、Make、n8nで業務を自動化",
            },
            {
              name: "プロンプト術",
              slug: "prompts",
              desc: "成果を出すプロンプトの書き方",
            },
          ].map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-lg bg-zinc-50 p-5 hover:bg-zinc-100 transition-colors"
            >
              <h3 className="font-semibold text-zinc-900">{cat.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
