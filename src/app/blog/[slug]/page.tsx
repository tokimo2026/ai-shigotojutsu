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
    <div className="min-h-screen">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-5">
            {meta.category}
          </p>
          <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight mb-6">
            {meta.title}
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed mb-8">
            {meta.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-[#6b6459] pb-8 border-b border-[#1a1a1a]">
            <time>{meta.date}</time>
            <span>·</span>
            <span>読了 {meta.readTime}</span>
          </div>
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className="mt-24 pt-10 border-t border-[#e8e2d6]">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#da7756] transition-colors"
          >
            ← 記事一覧に戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}
