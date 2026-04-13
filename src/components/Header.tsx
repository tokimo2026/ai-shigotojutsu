import Link from "next/link";

const categories = [
  { name: "AIツール比較", slug: "ai-tools" },
  { name: "業務効率化", slug: "productivity" },
  { name: "自動化", slug: "automation" },
  { name: "プロンプト術", slug: "prompts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-gray-900">
          AI仕事術
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="px-3 py-2 text-sm font-medium text-zinc-600 rounded-lg hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
