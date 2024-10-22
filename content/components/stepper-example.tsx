import React from "react"

export const DefaultStepper = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-surface text-sm">
            1
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            2
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            3
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            4
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            5
          </button>
        </div>
      </div>
    </div>
  )
}

export const ActiveStepper = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-foreground text-sm text-background">
            1
          </button>
          <div className="h-px w-20 bg-foreground"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-surface text-sm">
            2
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            3
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            4
          </button>
          <div className="h-px w-20 bg-border"></div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            5
          </button>
        </div>
      </div>
    </div>
  )
}
