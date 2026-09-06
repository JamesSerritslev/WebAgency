import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

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

async function loadFraunces() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Fraunces:wght@500&text=Create.Optimize.Rank",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((response) => response.text());

  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match?.[1]) return undefined;

  const data = await fetch(match[1]).then((response) => response.arrayBuffer());
  return {
    name: "Fraunces",
    data,
    style: "normal" as const,
    weight: 500 as const,
  };
}

export async function createOgImage(_input: OgInput) {
  const [logoData, font] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/cor-logo.png")),
    loadFraunces().catch(() => undefined),
  ]);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F5F2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={480}
            height={213}
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginTop: 28,
              color: "#0F172A",
              fontFamily: font ? "Fraunces" : "serif",
              fontSize: 36,
              letterSpacing: 0.5,
            }}
          >
            <span style={{ display: "flex" }}>Create</span>
            <span style={{ display: "flex", color: "#EA580C" }}>.</span>
            <span style={{ display: "flex", marginLeft: 16 }}>Optimize</span>
            <span style={{ display: "flex", color: "#EA580C" }}>.</span>
            <span style={{ display: "flex", marginLeft: 16 }}>Rank</span>
            <span style={{ display: "flex", color: "#EA580C" }}>.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: font ? [font] : [],
    },
  );
}
