import React from "react"

export const BreadCrumbsDefault = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <nav
        className="flex flex-wrap items-center justify-start gap-1 text-muted-text flex-col sm:flex-row"
        aria-label="breadcrumb">
        <span className="flex items-center text-xs">
          <a
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
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
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
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
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
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
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
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
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
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
            className="flex items-center text-muted-text hover:text-main-text hover:underline"
            href="/">
            Destination
          </a>
        </span>
      </nav>
    </div>
  )
}
