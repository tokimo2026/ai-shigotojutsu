import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AI仕事術へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <p className="text-[10px] font-bold text-[#9c3d1d] tracking-[0.25em] uppercase mb-5">
            Contact
          </p>
          <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.3] tracking-tight mb-5">
            ご連絡フォーム
          </h1>
          <p className="text-base md:text-lg text-[#3a3530] leading-relaxed">
            記事に関するご質問・ご指摘、レビュー依頼、広告掲載のご相談などはこちらからお気軽にご連絡ください。
          </p>
          <div className="border-b border-[#1a1a1a] mt-8" />
        </header>

        <form
          action="https://formsubmit.co/tomakikomatsu1109@gmail.com"
          method="POST"
          className="space-y-6 bg-white border border-[#e8e2d6] p-8 md:p-10"
        >
          <input type="hidden" name="_subject" value="AI仕事術 お問い合わせ" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-[#e8e2d6] bg-[#faf7f2] focus:outline-none focus:border-[#da7756] transition-colors"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-[#e8e2d6] bg-[#faf7f2] focus:outline-none focus:border-[#da7756] transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              件名
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-[#e8e2d6] bg-[#faf7f2] focus:outline-none focus:border-[#da7756] transition-colors"
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
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-[#e8e2d6] bg-[#faf7f2] focus:outline-none focus:border-[#da7756] transition-colors resize-none"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <p className="text-xs text-[#6b6459]">
            送信いただいた個人情報は
            <Link href="/privacy" className="text-[#c5532e] underline underline-offset-2">
              プライバシーポリシー
            </Link>
            に従って適切に管理いたします。
          </p>

          <button
            type="submit"
            className="w-full py-4 bg-[#1a1a1a] text-[#faf7f2] font-bold hover:bg-[#da7756] transition-colors"
          >
            送信する
          </button>
        </form>

        <p className="mt-10 text-sm text-[#6b6459]">
          お返事までに数日いただく場合がございます。あらかじめご了承ください。
        </p>

        <footer className="mt-24 pt-10 border-t border-[#e8e2d6]">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1a1a1a] hover:text-[#da7756] transition-colors"
          >
            ← トップに戻る
          </Link>
        </footer>
      </div>
    </div>
  );
}
