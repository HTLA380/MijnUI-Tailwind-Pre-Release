import React from "react"

export const PaginationDefault = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <nav className="flex items-center gap-2">
        <button className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 py-2 pl-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground/80 disabled:pointer-events-none disabled:opacity-50 sm:h-10">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </span>

        <ul className="flex flex-row items-center gap-1">
          <li>
            <button className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md text-sm hover:bg-accent hover:text-accent-foreground/80 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:w-10">
              6
            </button>
          </li>
          <li>
            <button className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md border bg-surface text-sm hover:bg-accent hover:text-accent-foreground/80 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:w-10">
              7
            </button>
          </li>
          <li>
            <button className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md text-sm hover:bg-accent hover:text-accent-foreground/80 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:w-10">
              8
            </button>
          </li>
        </ul>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </span>

        <button className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 py-2 pl-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground/80 disabled:pointer-events-none disabled:opacity-50 sm:h-10">
          <span className="hidden sm:inline">Next</span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}
