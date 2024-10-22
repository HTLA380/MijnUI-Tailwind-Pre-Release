import React from "react"

export const DefaultSwitch = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="peer relative h-6 w-11 rounded-full bg-muted shadow-sm after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-primary-foreground after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 peer-disabled:after:opacity-80 rtl:peer-checked:after:-translate-x-full"></div>
      </label>
    </div>
  )
}
