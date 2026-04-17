import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/posts";
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
    const url = `https://ai-shigotojutsu.com/blog/${slug}`;
    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: meta.title,
        description: meta.description,
        publishedTime: meta.date,
        authors: ["AI仕事術 編集部"],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
      },
    };
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

  const { meta, contentHtml, faq } = post;

  const allPosts = getAllPosts();
  const related = [
    ...allPosts.filter((p) => p.slug !== slug && p.categorySlug === meta.categorySlug),
    ...allPosts.filter((p) => p.slug !== slug && p.categorySlug !== meta.categorySlug),
  ].slice(0, 3);

  const siteUrl = "https://ai-shigotojutsu.com";
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const graph: object[] = [];
  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...graph,
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.updated ?? meta.date,
        inLanguage: "ja",
        mainEntityOfPage: articleUrl,
        image: `${articleUrl}/opengraph-image`,
        author: { "@type": "Organization", name: "AI仕事術 編集部", url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: "AI仕事術",
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/opengraph-image` },
        },
        articleSection: meta.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: meta.category,
            item: `${siteUrl}/category/${meta.categorySlug}`,
          },
          { "@type": "ListItem", position: 3, name: meta.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-xs text-[#6b6459] tracking-wider"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#da7756] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/category/${meta.categorySlug}`}
                className="hover:text-[#da7756] transition-colors"
              >
                {meta.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1a1a1a] font-medium truncate max-w-[16ch] md:max-w-[32ch]">
              {meta.title}
            </li>
          </ol>
        </nav>
        <header className="mb-16">
          <p className="text-[10px] font-bold text-[#9c3d1d] tracking-[0.25em] uppercase mb-5">
            {meta.category}
          </p>
          <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight mb-6">
            {meta.title}
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed mb-8">
            {meta.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#6b6459] pb-8 border-b border-[#1a1a1a]">
            <time dateTime={meta.date}>公開 {meta.date}</time>
            {meta.updated && meta.updated !== meta.date && (
              <>
                <span>·</span>
                <time dateTime={meta.updated}>更新 {meta.updated}</time>
              </>
            )}
            <span>·</span>
            <span>読了 {meta.readTime}</span>
          </div>
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <section className="mt-24 pt-10 border-t border-[#1a1a1a]">
          <p className="text-[10px] font-bold text-[#9c3d1d] tracking-[0.25em] uppercase mb-6">
            Related Reading
          </p>
          <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
            あわせて読みたい
          </h2>
          <ul className="space-y-6">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block border-b border-[#e8e2d6] pb-6"
                >
                  <p className="text-[10px] font-bold text-[#6b6459] tracking-[0.2em] uppercase mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#da7756] transition-colors leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#3a3530] leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 pt-10 border-t border-[#e8e2d6]">
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
