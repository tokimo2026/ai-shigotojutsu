import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-shigotojutsu.com"),
  title: {
    default: "AI仕事術 | AIツールの実践ガイド",
    template: "%s | AI仕事術",
  },
  description:
    "AIツールを使い倒した実体験から、本当に役立つ活用法・比較・設定手順をお届け。ChatGPT、Claude、自動化ツールの実践ガイド。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "AI仕事術",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
