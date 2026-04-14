import Link from "next/link";

const categories = [
  { name: "AIツール比較", slug: "ai-tools" },
  { name: "業務効率化", slug: "productivity" },
  { name: "自動化", slug: "automation" },
  { name: "プロンプト術", slug: "prompts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif-jp text-2xl font-bold text-[#1a1a1a] tracking-tight">
            AI仕事術
          </span>
          <span className="text-[10px] font-semibold text-[#da7756] tracking-[0.2em] uppercase">
            Craft
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm font-medium text-[#3a3530] hover:text-[#da7756] transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-sm font-medium text-[#3a3530] hover:text-[#da7756] transition-colors"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
