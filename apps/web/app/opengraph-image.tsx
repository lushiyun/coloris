import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "coloris.js";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const generalSans = fetch(
    new URL("./fonts/GeneralSans.woff2", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 88,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 100 }}>🎨</span>
          <span>coloris.js</span>
        </div>
        <div style={{ fontSize: 24, color: "#82827c" }}>
          programmatic color generator for multi-theme platform apps
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "GeneralSans",
          data: await generalSans,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
