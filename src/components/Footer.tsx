import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#e8e2d6] mt-28">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          <div>
            <p className="font-serif-jp text-xl font-bold text-white mb-3">
              AI仕事術
            </p>
            <p className="text-sm leading-relaxed text-[#b8b2a8] mb-4">
              AIツールを実機検証する編集部が運営する実践ガイド。
              本音のレビューと、再現可能な手順をお届けします。
            </p>
            <a
              href="https://note.com/tokimo1109"
              target="_blank"
              rel="noopener"
              className="inline-block text-xs font-semibold text-[#f4a488] hover:text-white transition-colors tracking-wider"
            >
              note @tokimo1109 →
            </a>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#f4a488] tracking-[0.2em] uppercase mb-4">
              Category
            </p>
            <ul className="space-y-2.5 text-sm text-[#b8b2a8]">
              <li><Link href="/category/ai-tools" className="hover:text-white transition-colors">AIツール比較</Link></li>
              <li><Link href="/category/productivity" className="hover:text-white transition-colors">業務効率化</Link></li>
              <li><Link href="/category/automation" className="hover:text-white transition-colors">自動化</Link></li>
              <li><Link href="/category/prompts" className="hover:text-white transition-colors">プロンプト術</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#f4a488] tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <ul className="space-y-2.5 text-sm text-[#b8b2a8]">
              <li><Link href="/about" className="hover:text-white transition-colors">このサイトについて</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">免責事項</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#3a3530] pt-6 text-center text-xs text-[#9c958a]">
          &copy; {new Date().getFullYear()} AI仕事術. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
