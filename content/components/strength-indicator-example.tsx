import React from "react"

export const DefaultStrengthIndicator = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="flex h-1 w-full min-w-40 max-w-xs items-center gap-1">
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
      </div>
    </div>
  )
}

export const StrengthIndicatorWeak = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="flex h-1 w-full min-w-40 max-w-xs items-center gap-1">
        <div className="size-full rounded-full bg-danger"></div>
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
      </div>
    </div>
  )
}

export const StrengthIndicatorWarning = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="flex h-1 w-full min-w-40 max-w-xs items-center gap-1">
        <div className="size-full rounded-full bg-warning"></div>
        <div className="size-full rounded-full bg-warning"></div>
        <div className="size-full rounded-full bg-muted"></div>
        <div className="size-full rounded-full bg-muted"></div>
      </div>
    </div>
  )
}

export const StrengthIndicatorSuccess = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="flex h-1 w-full min-w-40 max-w-xs items-center gap-1">
        <div className="size-full rounded-full bg-success"></div>
        <div className="size-full rounded-full bg-success"></div>
        <div className="size-full rounded-full bg-success"></div>
        <div className="size-full rounded-full bg-muted"></div>
      </div>
    </div>
  )
}
