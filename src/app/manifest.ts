import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI仕事術",
    short_name: "AI仕事術",
    description:
      "AIツールを使い倒した実践ガイド。ChatGPT、Claude、自動化ツールの比較・活用法・設定手順。",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#faf7f2",
    lang: "ja",
    icons: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
