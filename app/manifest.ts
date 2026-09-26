import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spotlight Iași — Contestant Training",
    short_name: "Contestant Training",
    description:
      "Club speech contest training for Humorous Speech and Table Topics contestants.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#004165",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
