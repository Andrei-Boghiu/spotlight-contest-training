export const SITE_NAME = "Spotlight Iași"

export const SITE_TITLE = "Contestant Training | Spotlight Iași Toastmasters Club"

export const SITE_APP_NAME = "Spotlight Iași — Contestant Training"

export const SITE_SHORT_NAME = "Contestant Training"

export const SITE_DESCRIPTION =
  "Contestant training for Spotlight Iași's club speech contest — everything Humorous Speech and Table Topics contestants need to know, from eligibility to contest day."

const PRODUCTION_URL = "https://training.spotlightiasi.club"

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.NODE_ENV === "production") return PRODUCTION_URL
  return "http://localhost:3000"
}

export const SITE_URL = resolveSiteUrl()

export const BRAND_HEADER_GRADIENT =
  "linear-gradient(135deg, #004165 0%, #0d6a9e 100%)"
