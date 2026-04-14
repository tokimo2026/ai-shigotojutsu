import Link from "next/link";

const categories = [
  { name: "AIツール比較", slug: "ai-tools" },
  { name: "業務効率化", slug: "productivity" },
  { name: "自動化", slug: "automation" },
  { name: "プロンプト術", slug: "prompts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold text-black tracking-tight"
        >
          AI仕事術
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm font-medium text-gray-700 hover:text-black hover:underline underline-offset-4"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-black hover:underline underline-offset-4"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
