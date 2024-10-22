import React from "react"
import { LuCheck, LuChevronsUpDown } from "react-icons/lu"

export const DefaultComboBox = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center rounded-lg border p-5">
      <div className="flex flex-col justify-center gap-1">
        <button
          type="button"
          role="combobox"
          className="flex h-10 w-44 items-center justify-between rounded-md border bg-surface px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
          <span>Select Fruits</span>

          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
          </svg>
        </button>

        <div className="w-44 rounded-lg border bg-surface p-1 text-sm text-foreground">
          <button
            aria-current="true"
            type="button"
            className="inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded-md bg-accent px-4 py-2 text-left text-sm text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
            Apple
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
            Berry
          </button>
          <button
            type="button"
            className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
            Orange
          </button>
          <button
            type="button"
            disabled
            className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:bg-surface disabled:opacity-50">
            Melon
          </button>
        </div>
      </div>
    </div>
  )
}
