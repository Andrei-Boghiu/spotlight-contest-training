export const SITE_NAME = "Spotlight Iași"

export const SITE_TITLE = "Contestant Training | Spotlight Iași Toastmasters Club"

export const SITE_DESCRIPTION =
  "Contestant training for Spotlight Iași's club speech contest — everything Humorous Speech and Table Topics contestants need to know, from eligibility to contest day."

const PRODUCTION_URL = "https://training.spotlightiasi.club"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000")

export const PARENT_SITE_URL = "https://spotlightiasi.club"

export function getAbsoluteUrl(pathname: string) {
  const url = new URL(pathname, SITE_URL).toString()

  return url.endsWith("/") ? url.slice(0, -1) : url
}
