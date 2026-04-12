import Link from "next/link";

const categories = [
  { name: "AIツール比較", slug: "ai-tools" },
  { name: "業務効率化", slug: "productivity" },
  { name: "自動化", slug: "automation" },
  { name: "プロンプト術", slug: "prompts" },
];

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          AI仕事術
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="hover:text-zinc-900 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="hover:text-zinc-900 transition-colors"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
