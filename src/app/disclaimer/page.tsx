import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "免責事項",
  description: "AI仕事術の免責事項です。",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-5">
            Legal
          </p>
          <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight">
            免責事項
          </h1>
          <div className="border-b border-[#1a1a1a] mt-8" />
        </header>

        <div className="article-body">
          <h2>当サイトに掲載されている情報について</h2>
          <p>
            当サイト（AI仕事術）に掲載されている情報の正確性については万全を期しておりますが、利用者が当サイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。掲載情報は公開時点のものであり、最新の情報と異なる可能性があります。ご利用の際は、各サービス提供元の公式サイトで最新情報をご確認ください。
          </p>

          <h2>当サイトからリンクやバナーなどで移動したサイトについて</h2>
          <p>
            当サイトからリンクやバナーなどで移動したサイトで提供される情報・サービス等について、当サイトは一切の責任を負いません。リンク先サイトのご利用は、利用者ご自身の責任において行ってください。
          </p>

          <h2>レビュー・評価について</h2>
          <p>
            当サイトで紹介している各種AIツール・サービスのレビューや評価は、編集部の使用体験に基づく主観的な意見であり、すべての利用者に同じ結果を保証するものではありません。実際の効果・使用感には個人差があります。
          </p>

          <h2>アフィリエイトプログラムについて</h2>
          <p>
            当サイトは、アフィリエイトプログラムを利用しており、記事内のリンクから商品・サービスをご購入いただいた場合、当サイトが報酬を受け取ることがあります。ただし、これによって記事内容や評価が歪められることはなく、編集部の正直な意見を記載しています。
          </p>

          <h2>損害等の責任について</h2>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。また、当サイトは予告なしに内容を変更または削除する場合があります。
          </p>

          <h2>著作権について</h2>
          <p>
            当サイトに掲載されている文章・画像・動画等の著作物の著作権は、当サイト運営者または引用元に帰属します。無断転載・複製を禁じます。引用の際は、引用元として当サイトのURLを明記してください。
          </p>

          <p style={{ marginTop: "48px", fontSize: "13px", color: "#6b6459" }}>
            制定日：2026年4月13日
          </p>
        </div>

        <footer className="mt-24 pt-10 border-t border-[#e8e2d6]">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#da7756] transition-colors"
          >
            ← トップに戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}
