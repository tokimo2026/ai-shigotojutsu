import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AI仕事術へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-zinc-900 mb-3">
        お問い合わせ
      </h1>
      <p className="text-zinc-600 mb-10">
        記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などはこちらからお気軽にご連絡ください。
      </p>

      <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
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
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              件名 <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
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
              className="block text-sm font-medium text-zinc-900 mb-2"
            >
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <div className="text-xs text-zinc-500">
            送信いただいた個人情報は
            <a href="/privacy" className="text-indigo-600 hover:underline">
              プライバシーポリシー
            </a>
            に従って適切に管理いたします。
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all"
          >
            送信する
          </button>
        </form>
      </div>

      <div className="mt-8 text-sm text-zinc-500 text-center">
        ※ お返事までに数日いただく場合がございます。あらかじめご了承ください。
      </div>
    </div>
  );
}
