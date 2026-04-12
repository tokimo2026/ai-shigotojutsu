export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} AI仕事術. All rights reserved.</p>
      </div>
    </footer>
  );
}
