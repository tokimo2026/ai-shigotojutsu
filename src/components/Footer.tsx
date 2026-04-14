import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black mt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-8 text-sm">
          <div>
            <p className="font-extrabold text-black mb-2">AI仕事術</p>
            <p className="text-gray-600 leading-relaxed">
              AIツールを実機検証する編集部が運営する実践ガイド。
            </p>
          </div>
          <div>
            <p className="font-semibold text-black mb-3">カテゴリ</p>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/category/ai-tools" className="hover:text-black hover:underline underline-offset-4">AIツール比較</Link></li>
              <li><Link href="/category/productivity" className="hover:text-black hover:underline underline-offset-4">業務効率化</Link></li>
              <li><Link href="/category/automation" className="hover:text-black hover:underline underline-offset-4">自動化</Link></li>
              <li><Link href="/category/prompts" className="hover:text-black hover:underline underline-offset-4">プロンプト術</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-black mb-3">サイト情報</p>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/about" className="hover:text-black hover:underline underline-offset-4">このサイトについて</Link></li>
              <li><Link href="/contact" className="hover:text-black hover:underline underline-offset-4">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-black hover:underline underline-offset-4">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="hover:text-black hover:underline underline-offset-4">免責事項</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} AI仕事術. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
