import React from "react"

export const AvatarSizes = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-6 w-6 text-xs">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-8 w-8 text-xs">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-10 w-10 text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-12 w-12 text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-14 w-14 text-sm">
        <img
          src={"/avatar/avatar-3.png"}
          alt="anthony"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-16 w-16 text-sm">
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
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-6 w-6 text-xs">
        <span>A</span>
      </div>
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-8 w-8 text-xs">
        <span>A</span>
      </div>
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-10 w-10 text-sm">
        <span>A</span>
      </div>
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-12 w-12 text-sm">
        <span>A</span>
      </div>
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-14 w-14 text-sm">
        <span>A</span>
      </div>
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden bg-muted rounded-full h-16 w-16 text-sm">
        <span>A</span>
      </div>
    </div>
  )
}

export const AvatarGroup = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <div className="-space-x-2 flex items-center justify-center">
        <div className="relative flex items-center justify-center shrink-0 overflow-hidden ring-muted-foreground bg-muted rounded-full ring-1 h-8 w-8 text-xs">
          <img
            alt="avatar"
            src="/avatar/avatar-1.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex items-center justify-center shrink-0 overflow-hidden ring-muted-foreground bg-muted rounded-full ring-1 h-8 w-8 text-xs">
          <img
            alt="avatar"
            src="/avatar/avatar-2.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex items-center justify-center shrink-0 overflow-hidden ring-muted-foreground bg-muted rounded-full ring-1 h-8 w-8 text-xs">
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
