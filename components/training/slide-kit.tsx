import { cn } from "@/lib/utils"

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-maroon text-sm font-semibold tracking-wide uppercase md:text-base">
      {children}
    </p>
  )
}

export function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-heading text-primary mt-2 text-3xl font-bold text-balance md:text-5xl">
      {children}
    </h1>
  )
}

export function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground mt-4 text-lg md:text-xl">{children}</p>
  )
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-6 space-y-3 md:space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg leading-snug md:text-xl">
          <span
            aria-hidden
            className="bg-secondary mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full md:mt-3"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Callout({
  children,
  tone = "yellow",
}: {
  children: React.ReactNode
  tone?: "yellow" | "blue"
}) {
  return (
    <div
      className={cn(
        "mt-6 rounded-md border-l-4 px-4 py-3 text-base md:text-lg",
        tone === "yellow"
          ? "bg-brand-yellow/25 border-brand-yellow"
          : "bg-primary/5 border-primary"
      )}
    >
      {children}
    </div>
  )
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: React.ReactNode[][]
}) {
  return (
    <div className="border-border mt-6 overflow-x-auto rounded-md border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            {columns.map((col) => (
              <th
                key={col}
                className="px-3 py-2 text-sm font-semibold md:text-base"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-border border-t",
                i % 2 === 1 && "bg-muted/60"
              )}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 align-top text-sm md:text-base"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
