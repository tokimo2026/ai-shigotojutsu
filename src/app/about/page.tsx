import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "AI仕事術は、AIツールを毎日使い倒している筆者が実体験ベースで書く実践ガイドです。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">
        このサイトについて
      </h1>

      <div className="prose prose-zinc max-w-none">
        <p>
          <strong>AI仕事術</strong>
          は、AIツールを毎日業務で使い倒している筆者が、本当に役立つ活用法を実体験ベースでお届けするサイトです。
        </p>

        <h2>なぜこのサイトを作ったか</h2>
        <p>
          AIツールのレビュー記事は山ほどあります。しかしその多くは、機能一覧をコピペしただけの薄い内容。
          実際に業務で使い倒した人間にしか書けない「本当に使えるかどうか」の情報が足りないと感じていました。
        </p>
        <p>
          このサイトでは、すべてのツールを実際の業務で使用し、
          「何時間削減できたか」「いくら節約できたか」を数字で示します。
          ダメなところも正直に書きます。
        </p>

        <h2>運営者</h2>
        <p>
          株式会社フジヒロ設計 代表。
          建築設計をベースに、AIを活用した業務効率化・自動化を日常的に実践。
          Claude Code、ChatGPT、各種自動化ツールのヘビーユーザー。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          記事に関するご質問・ご指摘、レビュー依頼などは以下までご連絡ください。
        </p>
        <p>
          <strong>メール:</strong> contact@ai-shigotojutsu.com
        </p>
      </div>
    </div>
  );
}
