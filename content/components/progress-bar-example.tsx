import React from "react"

export const ProgressDefault = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="w-80 space-y-1">
        <div className="flex items-center justify-between text-sm font-medium text-foreground">
          <h5>Progress Label</h5>
          <p>75%</p>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={75}
            role="progressbar"
            style={{
              transform: "scaleX(0.75)",
              transformOrigin: "left center",
            }}></div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <p>min</p>
          <p>max</p>
        </div>
      </div>
    </div>
  )
}
