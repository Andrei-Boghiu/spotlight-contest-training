import Image from "next/image"

import logo from "@/public/logo.svg"
import spotlight from "@/public/spotlight.svg"
import iasi from "@/public/iasi.svg"

// spotlight.svg and iasi.svg are white wordmarks (colorized via SVG filter), meant
// to sit on the brand's dark blue band — never on a light background.
export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <div
      role="img"
      aria-label="Toastmasters Spotlight Iași"
      className="flex min-w-0 shrink-0 items-center gap-1.5 md:gap-2"
    >
      <Image
        src={logo}
        alt=""
        priority={priority}
        className="h-6 w-auto md:h-8"
      />
      <Image
        src={spotlight}
        alt=""
        priority={priority}
        className="h-4 w-auto md:h-6"
      />
      <Image
        src={iasi}
        alt=""
        priority={priority}
        className="h-4 w-auto md:h-6"
      />
    </div>
  )
}
