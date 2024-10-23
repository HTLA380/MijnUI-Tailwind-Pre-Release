import React from "react"

export const DefaultStepper = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-surface text-sm">
            1
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            2
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            3
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            4
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
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
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-foreground text-sm text-background">
            1
          </button>
          <div className="h-8 w-px bg-foreground sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-surface text-sm">
            2
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            3
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            4
          </button>
          <div className="h-8 w-px bg-border sm:h-px sm:w-20"></div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border text-sm text-muted-foreground">
            5
          </button>
        </div>
      </div>
    </div>
  )
}
