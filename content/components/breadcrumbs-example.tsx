import React from "react"

export const BreadCrumbsDefault = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <nav
        className="flex flex-col flex-wrap items-center justify-start gap-1 text-muted-foreground sm:flex-row"
        aria-label="breadcrumb">
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Home
          </a>
        </span>
        <span className="h-3 w-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Directory
          </a>
        </span>
        <span className="h-3 w-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Directory
          </a>
        </span>
        <span className="h-3 w-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Directory
          </a>
        </span>
        <span className="h-3 w-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Directory
          </a>
        </span>
        <span className="h-3 w-3">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-foreground hover:text-foreground hover:underline"
            href="/">
            Destination
          </a>
        </span>
      </nav>
    </div>
  )
}
