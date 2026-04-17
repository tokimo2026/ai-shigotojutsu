import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const categoryMap: Record<string, { name: string; desc: string; tagline: string }> = {
  "ai-tools": {
    name: "AIツール比較",
    desc: "ChatGPT・Claude・Claude Codeなど主要AIツールを機能・料金・得意分野で比較。用途別の最適解を整理したレビュー集です。",
    tagline: "Which AI, for which job",
  },
  productivity: {
    name: "業務効率化",
    desc: "AIを使って仕事を速くする具体的な方法と実例。個人事業主・会計・経費精算・副業まで、実務で回すための手順を解説。",
    tagline: "Speed up the boring work",
  },
  automation: {
    name: "自動化",
    desc: "Zapier・Make・n8nなどで業務を自動化するノウハウ。月数十時間を取り戻すためのワークフロー設計と実装パターン。",
    tagline: "Automate the repeat",
  },
  prompts: {
    name: "プロンプト術",
    desc: "成果を出すプロンプトの書き方とテンプレート集。コピペで即使えるパターンを業務シーン別に整理。",
    tagline: "Write prompts that ship",
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) return { title: "カテゴリが見つかりません" };
  const url = `https://ai-shigotojutsu.com/category/${slug}`;
  return {
    title: cat.name,
    description: cat.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${cat.name} | AI仕事術`,
      description: cat.desc,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) notFound();

  const posts = getAllPosts().filter((p) => p.categorySlug === slug);
  const siblings = Object.entries(categoryMap).filter(([s]) => s !== slug);

  const siteUrl = "https://ai-shigotojutsu.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.name,
        item: `${siteUrl}/category/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-xs text-[#6b6459] tracking-wider"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#a84420] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1a1a1a] font-medium">{cat.name}</li>
          </ol>
        </nav>

        {/* Category header */}
        <section className="mb-20 max-w-3xl">
          <p className="text-[10px] font-bold text-[#9c3d1d] tracking-[0.25em] uppercase mb-5">
            Category · {cat.tagline}
          </p>
          <h1 className="font-serif-jp text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-[1.2] tracking-tight mb-6">
            {cat.name}
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed mb-6">
            {cat.desc}
          </p>
          <div className="flex items-center gap-3 text-xs text-[#6b6459] pb-6 border-b border-[#1a1a1a]">
            <span className="font-semibold">{posts.length} 本の記事</span>
            <span>·</span>
            <span>実機検証ベース</span>
          </div>
        </section>

        {/* Article list */}
        <section className="mb-24">
          {posts.length === 0 ? (
            <p className="text-[#6b6459] py-8">
              このカテゴリの記事はまだありません。
            </p>
          ) : (
            <ul>
              {posts.map((post, idx) => (
                <li key={post.slug} className="border-b border-[#e8e2d6]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 md:py-10"
                  >
                    <div className="text-sm font-mono text-[#9c958a] pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#6b6459]">
                        <time>{post.date}</time>
                        <span>·</span>
                        <span>読了 {post.readTime}</span>
                      </div>
                      <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#a84420] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#3a3530] leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Sibling categories */}
        <section className="mb-16 pt-10 border-t border-[#1a1a1a]">
          <p className="text-[10px] font-bold text-[#9c3d1d] tracking-[0.25em] uppercase mb-6">
            Browse other categories
          </p>
          <ul className="grid gap-4 md:grid-cols-3">
            {siblings.map(([s, c]) => (
              <li key={s}>
                <Link
                  href={`/category/${s}`}
                  className="group block border border-[#e8e2d6] p-5 hover:border-[#1a1a1a] transition-colors"
                >
                  <p className="font-serif-jp text-lg font-bold text-[#1a1a1a] group-hover:text-[#a84420] transition-colors mb-1">
                    {c.name}
                  </p>
                  <p className="text-xs text-[#6b6459] line-clamp-2">{c.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Link
          href="/"
          className="text-sm font-semibold text-[#1a1a1a] hover:text-[#a84420] transition-colors"
        >
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
