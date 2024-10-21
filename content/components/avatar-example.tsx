import React from "react"

export const AvatarSizes = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export const AvatarFallbackSizes = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
        <span>A</span>
      </div>
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
        <span>A</span>
      </div>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <span>A</span>
      </div>
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <span>A</span>
      </div>
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <span>A</span>
      </div>
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm">
        <span>A</span>
      </div>
    </div>
  )
}

export const AvatarGroup = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex items-center justify-center -space-x-2">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground">
          <img
            alt="avatar"
            src="/avatar/avatar-1.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground">
          <img
            alt="avatar"
            src="/avatar/avatar-2.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground">
          <img
            alt="avatar"
            src="/avatar/avatar-3.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="!ml-1.5 flex items-center justify-center text-sm text-muted-foreground">
          +3
        </div>
      </div>
    </div>
  )
}
