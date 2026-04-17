import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI仕事術 | AIツールの実践ガイド";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 90px",
          }}
        >
          {/* Top: eyebrow */}
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
              Editorial · Hands-on Review
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

          {/* Hero */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 104,
                fontWeight: 900,
                color: "#1a1a1a",
                lineHeight: 1.1,
                letterSpacing: 2,
              }}
            >
              AI仕事術
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                color: "#3a3530",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              AIツールを使い倒した実践ガイド
            </div>
          </div>

          {/* Footer */}
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
                fontSize: 22,
                fontWeight: 700,
                color: "#6b6459",
                letterSpacing: 2,
              }}
            >
              Next.js · Claude · Tailwind
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
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
