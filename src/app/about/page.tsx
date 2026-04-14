import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "AI仕事術は、AIツールを実機検証する編集部が運営する実践ガイドです。",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-14 pb-10 border-b border-black">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            このサイトについて
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
            AI仕事術の運営方針
          </h1>
        </header>

        <div className="article-body">
          <h2>AI仕事術とは</h2>
          <p>
            AI仕事術は、AIツールを実際の業務で動かしている編集部が、本当に役立つ活用法を実機検証ベースでお届けするサイトです。
          </p>
          <p>
            ChatGPT、Claude、Zapier、Makeなど、主要なAIツール・自動化ツールを実際に動かした上で、機能の良し悪しを本音で評価しています。
          </p>

          <h2>なぜこのサイトを作ったか</h2>
          <p>
            AIツールのレビュー記事は山ほどありますが、その多くは機能一覧をコピペしただけの薄い内容です。実際に業務で使い倒した経験がないと書けない「本当に使えるかどうか」の情報が、まだ足りないと感じています。
          </p>
          <p>
            このサイトでは、良い点だけでなく、向いていない用途や注意点も率直に書きます。広告リンクを貼る記事でも、ツールの弱点は隠しません。
          </p>

          <h2>発信ポリシー</h2>
          <p>
            4つの軸を守って発信しています。ひとつめは、実際に動かして検証したツールのみを紹介すること。ふたつめは、料金・使用感・前提条件を具体的に書くこと。みっつめは、向いていない人・向いていないユースケースも正直に書くこと。よっつめは、読者がその日から試せる具体的な手順を含めることです。
          </p>

          <h2>運営者</h2>
          <p>
            AI仕事術 編集部。AIツール・自動化・業務効率化に関する情報を、実機検証ベースで発信するメディアです。中の人は本業でWeb制作・コンサルティングに携わっており、日常業務でAIツールを実際に運用しています。
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

        <footer className="mt-20 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-sm font-semibold text-black hover:underline underline-offset-4"
          >
            ← トップに戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}
