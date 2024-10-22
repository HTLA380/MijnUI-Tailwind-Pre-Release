import React from "react"

export const DefaultTabBar = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex flex-col items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-accent p-1 sm:flex-row">
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-surface px-3 py-2 text-sm text-foreground drop-shadow-sm hover:bg-surface hover:text-foreground disabled:bg-muted disabled:text-muted-foreground">
          Tab One
        </button>
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground disabled:bg-muted disabled:text-muted-foreground">
          Tab Two
        </button>
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground disabled:bg-muted disabled:text-muted-foreground">
          Tab Three
        </button>
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground disabled:bg-muted disabled:text-muted-foreground">
          Tab Four
        </button>
        <button className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground disabled:bg-muted disabled:text-muted-foreground">
          Tab Five
        </button>
      </div>
    </div>
  )
}
