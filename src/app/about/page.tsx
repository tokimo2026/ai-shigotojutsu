import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "AI仕事術は、AIツールを毎日使い倒している筆者が実体験ベースで書く実践ガイドです。",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <header className="px-6 md:px-12 pt-10 md:pt-14 pb-8">
            <p className="text-sm font-semibold text-indigo-600 mb-3">
              このサイトについて
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              AI仕事術の運営方針
            </h1>
          </header>

          <div className="mx-6 md:mx-12 border-t border-gray-100" />

          <div className="px-6 md:px-12 py-10 md:py-12 article-body">
            <h2>AI仕事術とは</h2>
            <p>
              AI仕事術は、AIツールを毎日業務で使い倒している筆者が、本当に役立つ活用法を実体験ベースでお届けするサイトです。
            </p>
            <p>
              ChatGPT、Claude、Zapier、Makeなど、数十のAIツール・自動化ツールを実際の業務で使用し、何時間削減できたか、いくら節約できたかといった定量的な成果とともに紹介しています。
            </p>

            <h2>なぜこのサイトを作ったか</h2>
            <p>
              AIツールのレビュー記事は山ほどあります。しかしその多くは、機能一覧をコピペしただけの薄い内容。実際に業務で使い倒した人間にしか書けない「本当に使えるかどうか」の情報が足りないと感じていました。
            </p>
            <p>
              このサイトでは、すべてのツールを実際の業務で使用し、数字で示せる成果とともに紹介します。良い点だけでなく、ダメなところも正直に書きます。
            </p>

            <h2>発信ポリシー</h2>
            <p>
              4つの軸を守って発信しています。ひとつめは、必ず実際に使用したツールのみを紹介すること。ふたつめは、定量的な成果（時間削減やコスト等）を必ず明示すること。みっつめは、デメリットや向かない用途も正直に書くこと。よっつめは、読者がその日から実践できる、再現性ある情報を提供することです。
            </p>

            <h2>運営者</h2>
            <p>
              <strong>Tokimo2026</strong>（運営者 / ライター）。AIを活用した業務効率化・自動化を日常的に実践しています。Claude Code、ChatGPT、各種自動化ツールのヘビーユーザーで、本サイトでは実際に使い倒したツールのみを紹介しています。
            </p>
            <p>
              X（旧Twitter）でも情報発信中：
              <a
                href="https://x.com/tokimo2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tokimo2026
              </a>
            </p>

            <h2>お問い合わせ</h2>
            <p>
              記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などは、
              <Link href="/contact">お問い合わせフォーム</Link>
              よりお気軽にご連絡ください。
            </p>

            <h2>関連情報</h2>
            <p>
              サイトの利用にあたっては、
              <Link href="/privacy">プライバシーポリシー</Link>
              および
              <Link href="/disclaimer">免責事項</Link>
              もご確認ください。
            </p>
          </div>

          <footer className="px-6 md:px-12 py-8 bg-gray-50 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
            >
              トップに戻る
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
