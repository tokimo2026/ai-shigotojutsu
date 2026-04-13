import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

export const runtime = "nodejs";
export const alt = "AI仕事術";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "70px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 50 }}>{meta.emoji}</div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              background: "rgba(255,255,255,0.2)",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            {meta.category}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.2,
          }}
        >
          {meta.title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>🤖 AI仕事術</div>
          <div style={{ display: "flex" }}>📖 {meta.readTime}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
