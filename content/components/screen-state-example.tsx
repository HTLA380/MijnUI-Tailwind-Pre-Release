import React from "react"

export const DefaultScreenState = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex w-full max-w-screen-sm flex-col items-center justify-center space-y-3 rounded-2xl bg-surface p-6 text-center sm:space-y-6">
        <span className="text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none">
            <path
              d="M5.83301 28C5.83301 17.5505 5.83301 12.3258 9.07924 9.07956C12.3255 5.83333 17.5502 5.83333 27.9997 5.83333C38.4491 5.83333 43.6739 5.83333 46.9201 9.07956C50.1663 12.3258 50.1663 17.5505 50.1663 28C50.1663 38.4495 50.1663 43.6742 46.9201 46.9204C43.6739 50.1667 38.4491 50.1667 27.9997 50.1667C17.5502 50.1667 12.3255 50.1667 9.07924 46.9204C5.83301 43.6742 5.83301 38.4495 5.83301 28Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50.1663 31.5H38.6731C36.7082 31.5 35.1644 33.1417 34.2984 34.8769C33.3576 36.7619 31.4737 38.5 27.9997 38.5C24.5256 38.5 22.6417 36.7619 21.7009 34.8769C20.835 33.1417 19.2911 31.5 17.3262 31.5H5.83301"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="space-y-1">
          <h3 className="text-main-text text-lg font-medium sm:text-xl">
            No files found
          </h3>
          <p className="text-muted-text text-sm">
            Your search “design system” did not match any projects. Please try
            again.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
          <button className="mt-2 inline-flex h-9 items-center justify-center gap-1 rounded-md border border-border px-3 text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75 sm:mt-0 sm:h-10">
            Cancel
          </button>

          <button className="inline-flex h-9 items-center justify-center gap-1 rounded-md bg-primary px-3 text-sm text-primary-foreground transition-colors duration-150 hover:bg-primary/90 active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75 sm:h-10">
            Create New File
          </button>
        </div>
      </div>
    </div>
  )
}
