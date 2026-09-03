import { ImageResponse } from "next/og";
import { BRAND_FULL, BRAND_NAME } from "@/lib/brand";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OgInput = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function createOgImage({ title, description, eyebrow }: OgInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 8,
            width: 168,
            background: "#EA580C",
            borderRadius: 99,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#EA580C",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow ?? BRAND_NAME}
          </div>
          <div
            style={{
              color: "#F7F5F2",
              fontSize: title.length > 42 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "#CBD5E1",
                fontSize: 28,
                lineHeight: 1.35,
                maxWidth: 860,
              }}
            >
              {description}
            </div>
          ) : null}
        </div>
        <div style={{ color: "#94A3B8", fontSize: 22 }}>{BRAND_FULL}</div>
      </div>
    ),
    ogSize,
  );
}
