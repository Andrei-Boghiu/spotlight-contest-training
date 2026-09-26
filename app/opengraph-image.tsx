import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { SITE_NAME, SITE_TITLE } from "@/lib/site"

export const alt = SITE_TITLE
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/icons/icon-512.png"),
    "base64"
  )
  const logoSrc = `data:image/png;base64,${logoData}`

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 64,
          width: "100%",
          height: "100%",
          padding: "0 96px",
          background: "linear-gradient(135deg, #004165 0%, #0d6a9e 100%)",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={220}
          height={220}
          style={{ borderRadius: 24 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 60, fontWeight: 700, color: "#ffffff" }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.9)" }}>
            Contestant Training
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
            Humorous Speech &amp; Table Topics
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
