import type { Metadata, Viewport } from "next";
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ai-shigotojutsu.com/#website",
        url: "https://ai-shigotojutsu.com",
        name: "AI仕事術",
        description:
          "AIツールを使い倒した実践ガイド。ChatGPT、Claude、自動化ツールの比較・活用法・設定手順。",
        inLanguage: "ja",
        publisher: { "@id": "https://ai-shigotojutsu.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://ai-shigotojutsu.com/#organization",
        name: "AI仕事術 編集部",
        url: "https://ai-shigotojutsu.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ai-shigotojutsu.com/opengraph-image",
        },
        sameAs: ["https://note.com/tokimo1109"],
      },
    ],
  };

  return (
    <html lang="ja" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#1a1a1a]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
