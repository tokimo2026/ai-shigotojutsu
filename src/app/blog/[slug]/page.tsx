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
    <div className="bg-white min-h-screen">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-14 pb-10 border-b border-black">
          <div className="flex items-center gap-3 mb-6 text-xs text-gray-500">
            <span className="font-semibold text-black">{meta.category}</span>
            <span>·</span>
            <time>{meta.date}</time>
            <span>·</span>
            <span>読了 {meta.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight tracking-tight mb-5">
            {meta.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {meta.description}
          </p>
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className="mt-20 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-sm font-semibold text-black hover:underline underline-offset-4"
          >
            ← 記事一覧に戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}
