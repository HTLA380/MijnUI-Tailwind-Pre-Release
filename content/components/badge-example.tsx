import React from "react"

export const BadgeVariants = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <span className="inline-flex justify-center items-center rounded-full text-xs bg-primary text-primary-foreground hover:bg-primary/90 py-0.5 px-2.5">
        Badge
      </span>
      <span className="inline-flex justify-center items-center rounded-full text-xs bg-secondary text-secondary-foreground hover:bg-secondary/90 py-0.5 px-2.5">
        Badge
      </span>
      <span className="inline-flex justify-center items-center rounded-full text-xs bg-danger text-danger-filled-foreground hover:bg-danger/90 py-0.5 px-2.5">
        Badge
      </span>
      <span className="inline-flex justify-center items-center rounded-full text-xs bg-surface text-surface-foreground hover:bg-surface/90 py-0.5 px-2.5">
        Badge
      </span>
      <span className="inline-flex justify-center items-center rounded-full text-xs text-foreground hover:bg-accent border py-0.5 px-2.5">
        Badge
      </span>
      <span className="inline-flex justify-center items-center rounded-full text-xs text-foreground hover:bg-accent py-0.5 px-2.5">
        Badge
      </span>
    </div>
  )
}
