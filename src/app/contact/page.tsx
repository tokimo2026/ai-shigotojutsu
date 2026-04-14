import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AI仕事術へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-14 pb-10 border-b border-black">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            お問い合わせ
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight tracking-tight mb-5">
            ご連絡フォーム
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などはこちらからお気軽にご連絡ください。
          </p>
        </header>

        <form
          action="https://formsubmit.co/tomakikomatsu1109@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="AI仕事術 お問い合わせ" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-black mb-2"
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black mb-2"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-black mb-2"
            >
              件名
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black bg-white"
            >
              <option value="">選択してください</option>
              <option value="記事に関する質問">記事に関する質問</option>
              <option value="レビュー依頼">レビュー依頼</option>
              <option value="広告掲載のご相談">広告掲載のご相談</option>
              <option value="取材・執筆依頼">取材・執筆依頼</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-black mb-2"
            >
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black resize-none"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <p className="text-xs text-gray-500">
            送信いただいた個人情報は
            <Link href="/privacy" className="text-black underline underline-offset-2">
              プライバシーポリシー
            </Link>
            に従って適切に管理いたします。
          </p>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
          >
            送信する
          </button>
        </form>

        <p className="mt-10 text-sm text-gray-500">
          お返事までに数日いただく場合がございます。あらかじめご了承ください。
        </p>

        <footer className="mt-20 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-sm font-semibold text-black hover:underline underline-offset-4"
          >
            ← トップに戻る
          </Link>
        </footer>
      </div>
    </div>
  );
}
