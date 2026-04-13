import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "AI仕事術は、AIツールを毎日使い倒している筆者が実体験ベースで書く実践ガイドです。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-zinc-900 mb-3">
        このサイトについて
      </h1>
      <p className="text-zinc-500 mb-12">
        AI仕事術の運営方針と、運営者についてご紹介します。
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          AI仕事術とは
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>AI仕事術</strong>
          は、AIツールを毎日業務で使い倒している筆者が、本当に役立つ活用法を実体験ベースでお届けするサイトです。
        </p>
        <p className="text-zinc-700 leading-relaxed">
          ChatGPT・Claude・Zapier・Makeなど、数十のAIツール・自動化ツールを実際の業務で使用し、
          「何時間削減できたか」「いくら節約できたか」といった定量的な成果とともに紹介しています。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          なぜこのサイトを作ったか
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          AIツールのレビュー記事は山ほどあります。しかしその多くは、機能一覧をコピペしただけの薄い内容。
          実際に業務で使い倒した人間にしか書けない「本当に使えるかどうか」の情報が足りないと感じていました。
        </p>
        <p className="text-zinc-700 leading-relaxed">
          このサイトでは、すべてのツールを実際の業務で使用し、
          数字で示せる成果とともに紹介します。良い点だけでなく、
          ダメなところも正直に書きます。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          発信ポリシー
        </h2>
        <ul className="space-y-3 text-zinc-700 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-indigo-500 font-bold">✓</span>
            <span>必ず実際に使用したツールのみ紹介する</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-500 font-bold">✓</span>
            <span>定量的な成果（時間削減・コスト等）を明示する</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-500 font-bold">✓</span>
            <span>デメリット・向かない用途も正直に書く</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-500 font-bold">✓</span>
            <span>読者がその日から実践できる、再現性ある情報を提供する</span>
          </li>
        </ul>
      </section>

      <section className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">運営者</h2>
        <div className="flex items-start gap-5">
          <div className="text-5xl">🤖</div>
          <div>
            <div className="text-xl font-bold text-zinc-900">Tokimo2026</div>
            <div className="text-sm text-zinc-500 mt-1">運営者 / ライター</div>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              AIを活用した業務効率化・自動化を日常的に実践。
              Claude Code、ChatGPT、各種自動化ツールのヘビーユーザー。
              本サイトでは、実際に使い倒したツールのみを紹介しています。
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://x.com/tokimo2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors"
              >
                <span>𝕏</span>
                <span>@tokimo2026</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">お問い合わせ</h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などは、
          お問い合わせフォームよりお気軽にご連絡ください。
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all"
        >
          お問い合わせフォームへ →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">関連情報</h2>
        <ul className="space-y-2 text-zinc-700">
          <li>
            <Link href="/privacy" className="text-indigo-600 hover:underline">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className="text-indigo-600 hover:underline">
              免責事項
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
