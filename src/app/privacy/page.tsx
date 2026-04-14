import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "AI仕事術のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <p className="text-[10px] font-bold text-[#da7756] tracking-[0.25em] uppercase mb-5">
            Legal
          </p>
          <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight">
            プライバシーポリシー
          </h1>
          <div className="border-b border-[#1a1a1a] mt-8" />
        </header>

        <div className="article-body">
          <h2>1. 個人情報の利用目的</h2>
          <p>
            当サイト（AI仕事術、以下「当サイト」）では、お問い合わせの際に、名前・メールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メールでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </p>

          <h2>2. 個人情報の第三者への開示</h2>
          <p>
            当サイトでは、個人情報は適切に管理し、本人のご了解がある場合、または法令等への協力のため開示が必要となる場合を除き、第三者に開示することはありません。
          </p>

          <h2>3. 個人情報の開示・訂正・追加・削除・利用停止</h2>
          <p>
            ご本人からの個人情報の開示・訂正・追加・削除・利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
          </p>

          <h2>4. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。詳しくは
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleアナリティクス利用規約
            </a>
            をご確認ください。
          </p>

          <h2>5. 広告の配信について</h2>
          <p>
            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラム、A8.net、もしもアフィリエイト、バリューコマース等の第三者配信の広告サービスを利用しています。
          </p>
          <p>
            第三者配信による広告サービスは、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。Cookieを無効にする方法やCookieについての詳細は、上記アクセス解析ツールの項目をご参照ください。
          </p>

          <h2>6. 著作権について</h2>
          <p>
            当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
            <Link href="/contact">お問い合わせフォーム</Link>
            よりご連絡ください。
          </p>

          <h2>7. 免責事項</h2>
          <p>
            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また、当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっている場合がございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>

          <h2>8. プライバシーポリシーの変更について</h2>
          <p>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
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
