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
          background: "#faf7f2",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left coral accent bar */}
        <div
          style={{
            display: "flex",
            width: 20,
            height: "100%",
            background: "#da7756",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "70px 80px 60px 80px",
          }}
        >
          {/* Top: category label */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 800,
                color: "#9c3d1d",
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              {meta.category}
            </div>
            <div
              style={{
                display: "flex",
                width: 60,
                height: 4,
                background: "#1a1a1a",
              }}
            />
          </div>

          {/* Middle: title */}
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.3,
              color: "#1a1a1a",
              maxWidth: 980,
            }}
          >
            {meta.title}
          </div>

          {/* Bottom: brand + meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 30,
              borderTop: "2px solid #1a1a1a",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 900,
                color: "#1a1a1a",
                letterSpacing: 2,
              }}
            >
              AI仕事術
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 600,
                color: "#6b6459",
                letterSpacing: 2,
              }}
            >
              ai-shigotojutsu.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
