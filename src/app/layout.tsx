import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI仕事術 | AIツールの実践ガイド",
    template: "%s | AI仕事術",
  },
  description:
    "AIツールを使い倒した実体験から、本当に役立つ活用法・比較・設定手順をお届け。ChatGPT、Claude、自動化ツールの実践ガイド。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
