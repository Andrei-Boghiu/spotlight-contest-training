"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BrandMark } from "@/components/training/brand-mark"
import { slides } from "@/components/training/slides"

export function TrainingDeck() {
  const [index, setIndex] = React.useState(0)
  const total = slides.length

  const goNext = React.useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1))
  }, [total])

  const goPrev = React.useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return
      if (event.metaKey || event.ctrlKey || event.altKey) return

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
          event.preventDefault()
          goNext()
          break
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault()
          goPrev()
          break
        case "Home":
          event.preventDefault()
          setIndex(0)
          break
        case "End":
          event.preventDefault()
          setIndex(total - 1)
          break
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [goNext, goPrev, total])

  const current = slides[index]
  const progress = ((index + 1) / total) * 100

  return (
    <div className="bg-background flex h-dvh flex-col">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-[linear-gradient(135deg,#004165_0%,#0d6a9e_100%)] px-4 py-3 text-white md:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <BrandMark priority />
          <p className="hidden truncate text-sm text-white/75 md:block">
            Club Speech Contest &middot; Contestant Training
          </p>
        </div>
        <p className="shrink-0 font-mono text-xs tabular-nums text-white/75 md:text-sm">
          {index + 1} / {total}
        </p>
      </header>

      <div className="bg-muted h-1 w-full shrink-0">
        <div
          className="bg-primary h-full transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex flex-1 flex-col overflow-y-auto">
        <div
          key={current.id}
          className="animate-in fade-in mx-auto my-auto w-full max-w-4xl px-4 py-8 duration-200 md:px-10 md:py-10"
        >
          {current.content}
        </div>
      </main>

      <footer className="border-border flex flex-col gap-3 border-t px-4 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-muted-foreground order-2 max-w-2xl text-xs leading-snug md:order-1">
          The information in this presentation is for the sole use of
          Toastmasters&apos; members, for Toastmasters business only. It is
          not to be used for solicitation and distribution of
          non-Toastmasters material or information.
        </p>
        <div className="order-1 flex shrink-0 items-center justify-end gap-2 md:order-2">
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-4 md:h-9 md:px-2.5"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft data-icon="inline-start" />
            Prev
          </Button>
          <Button
            size="lg"
            className="h-11 px-4 md:h-9 md:px-2.5"
            onClick={goNext}
            disabled={index === total - 1}
            aria-label="Next slide"
          >
            Next
            <ChevronRight data-icon="inline-end" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
