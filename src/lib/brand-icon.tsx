import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const LOGO_WIDTH = 671;
const LOGO_HEIGHT = 298;

export async function createBrandIcon(size: { width: number; height: number }) {
  const logoData = await readFile(join(process.cwd(), "public/brand/cor-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  const pad = Math.max(2, Math.round(size.width * 0.1));
  const imgWidth = size.width - pad * 2;
  const imgHeight = Math.round(imgWidth * (LOGO_HEIGHT / LOGO_WIDTH));

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
        <img
          src={logoSrc}
          alt=""
          width={imgWidth}
          height={imgHeight}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
