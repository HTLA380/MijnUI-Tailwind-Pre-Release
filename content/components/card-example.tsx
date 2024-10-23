import React from "react"

export const CardDefault = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="relative w-full max-w-60 space-y-2 rounded-lg bg-surface p-4 shadow-sm">
        <span className="disabled:text-muted/75-foreground inline-flex h-10 w-10 items-center justify-center gap-1 rounded-lg bg-accent p-0 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75 sm:h-12 sm:w-12">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-6 sm:w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </span>
        <div className="absolute right-4 top-4 text-muted-foreground">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-6 sm:w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold">Users</h3>
          <p className="text-sm font-medium text-muted-foreground">
            Manage user accounts and permissions.
          </p>
        </div>
      </div>
    </div>
  )
}

export const CardStats = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="w-full max-w-44 space-y-3 rounded-xl bg-surface p-5 shadow-sm sm:space-y-4 sm:p-6">
        <span className="disabled:text-muted/75-foreground inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full bg-muted p-0 text-sm hover:bg-muted hover:text-accent-foreground disabled:bg-muted/75 sm:h-12 sm:w-12">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-4 w-4 sm:h-5 sm:w-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path>
          </svg>
        </span>
        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            Total Sales
          </p>
          <h3 className="text-xl font-medium sm:text-2xl">$75,890.75</h3>
          <p className="text-xs font-normal text-muted-foreground">
            <span className="text-success">+128%</span> from June
          </p>
        </div>
      </div>
    </div>
  )
}
