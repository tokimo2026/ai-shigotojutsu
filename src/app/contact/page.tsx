import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AI仕事術へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <header className="px-6 md:px-12 pt-10 md:pt-14 pb-8">
            <p className="text-sm font-semibold text-indigo-600 mb-3">
              お問い合わせ
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              ご連絡フォーム
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などはこちらからお気軽にご連絡ください。
            </p>
          </header>

          <div className="mx-6 md:mx-12 border-t border-gray-100" />

          <div className="px-6 md:px-12 py-10 md:py-12">
            <form
              action="https://formsubmit.co/tomakikomatsu1109@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="AI仕事術 お問い合わせ"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  件名
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
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
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <p className="text-xs text-gray-500">
                送信いただいた個人情報は
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:underline"
                >
                  プライバシーポリシー
                </Link>
                に従って適切に管理いたします。
              </p>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
              >
                送信する
              </button>
            </form>

            <p className="mt-8 text-sm text-gray-500 text-center">
              お返事までに数日いただく場合がございます。あらかじめご了承ください。
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
