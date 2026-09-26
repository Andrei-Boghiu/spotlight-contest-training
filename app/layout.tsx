import type { Metadata } from "next"
import { Montserrat, Source_Sans_3 } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Contestant Training | Spotlight Iași",
  description:
    "Club speech contest training for Humorous Speech and Table Topics contestants.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        fontHeading.variable,
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
