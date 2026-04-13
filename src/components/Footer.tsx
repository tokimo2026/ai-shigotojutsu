import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🤖</span>
              <span className="text-lg font-bold text-white">AI仕事術</span>
            </div>
            <p className="text-sm leading-relaxed">
              AIツールを使い倒した実体験から、本当に役立つ活用法をお届けします。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">カテゴリ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/ai-tools" className="hover:text-white transition-colors">AIツール比較</Link></li>
              <li><Link href="/category/productivity" className="hover:text-white transition-colors">業務効率化</Link></li>
              <li><Link href="/category/automation" className="hover:text-white transition-colors">自動化</Link></li>
              <li><Link href="/category/prompts" className="hover:text-white transition-colors">プロンプト術</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">このサイトについて</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">免責事項</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} AI仕事術. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
