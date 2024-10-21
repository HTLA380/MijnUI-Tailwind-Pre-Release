import React from "react"

export const BadgeVariants = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <span className="inline-flex items-center justify-center rounded-full bg-primary px-2.5 py-0.5 text-xs text-primary-foreground hover:bg-primary/90">
        Badge
      </span>
      <span className="inline-flex items-center justify-center rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground hover:bg-secondary/90">
        Badge
      </span>
      <span className="inline-flex items-center justify-center rounded-full bg-danger px-2.5 py-0.5 text-xs text-danger-filled-foreground hover:bg-danger/90">
        Badge
      </span>
      <span className="inline-flex items-center justify-center rounded-full bg-surface px-2.5 py-0.5 text-xs text-surface-foreground hover:bg-surface/90">
        Badge
      </span>
      <span className="inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs text-foreground hover:bg-accent">
        Badge
      </span>
      <span className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs text-foreground hover:bg-accent">
        Badge
      </span>
    </div>
  )
}
