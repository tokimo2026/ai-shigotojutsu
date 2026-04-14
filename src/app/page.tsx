import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  { name: "AIツール比較", slug: "ai-tools", desc: "ChatGPT・Claudeなど主要ツールの実機レビュー" },
  { name: "業務効率化", slug: "productivity", desc: "仕事を速くする具体的な方法と実例" },
  { name: "自動化", slug: "automation", desc: "Zapier・Makeで業務を自動化する手順" },
  { name: "プロンプト術", slug: "prompts", desc: "成果を出すプロンプトの書き方" },
];

export default function Home() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-20 md:mb-28 max-w-3xl">
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-5">
            Editorial · Hands-on Review
          </p>
          <h1 className="font-serif-jp text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight mb-7">
            AIを使い倒す人の、
            <br />
            <span className="text-[#da7756]">実践ガイド</span>
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed mb-8">
            AIツールを実際の業務で動かしている編集部が、本当に役立つ活用法・比較・設定手順を実例ベースでお届けします。
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#faf7f2] text-sm font-semibold hover:bg-[#da7756] transition-colors"
            >
              記事を読む
            </a>
            <Link
              href="/about"
              className="text-sm font-semibold text-[#1a1a1a] hover:text-[#da7756] transition-colors"
            >
              サイトについて →
            </Link>
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="mb-20">
            <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-4">
              Featured
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-white border border-[#e8e2d6] p-8 md:p-12 hover:border-[#1a1a1a] transition-colors">
                <div className="flex items-center gap-3 mb-4 text-xs text-[#6b6459]">
                  <span className="font-semibold text-[#da7756]">
                    {featured.category}
                  </span>
                  <span>·</span>
                  <time>{featured.date}</time>
                  <span>·</span>
                  <span>読了 {featured.readTime}</span>
                </div>
                <h2 className="font-serif-jp text-2xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4 group-hover:text-[#c5532e] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm md:text-base text-[#3a3530] leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </Link>
          </section>
        )}

        {/* Articles list */}
        <section id="articles" className="mb-24">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-2">
                All Articles
              </p>
              <h2 className="font-serif-jp text-2xl font-bold text-[#1a1a1a]">
                記事一覧
              </h2>
            </div>
            <span className="text-xs text-[#6b6459]">{posts.length}本</span>
          </div>
          <div className="border-t border-[#1a1a1a]" />
          <ul>
            {rest.map((post) => (
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
        </section>

        {/* Categories */}
        <section>
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-2">
            Topics
          </p>
          <h2 className="font-serif-jp text-2xl font-bold text-[#1a1a1a] mb-8">
            カテゴリから探す
          </h2>
          <div className="grid gap-px bg-[#e8e2d6] border border-[#e8e2d6] md:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block bg-white px-6 py-6 hover:bg-[#f5f0e5] transition-colors group"
              >
                <div className="font-serif-jp text-lg font-bold text-[#1a1a1a] group-hover:text-[#c5532e] transition-colors mb-1">
                  {cat.name}
                </div>
                <div className="text-sm text-[#6b6459]">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
