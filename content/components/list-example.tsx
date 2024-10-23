import React from "react"
import { FaUserCircle } from "react-icons/fa"
import { LuDownload, LuMessageCircle, LuSettings } from "react-icons/lu"

export const DefaultList = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <ul className="w-48 rounded-lg border border-border bg-surface p-1">
        <li className="w-full px-3 py-2 text-sm">Profile</li>
        <li className="w-full px-3 py-2 text-sm">Settings</li>
        <li className="w-full px-3 py-2 text-sm">Messages</li>
        <li className="w-full px-3 py-2 text-sm">Download</li>
      </ul>
    </div>
  )
}

export const ButtonList = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="w-48 rounded-lg border bg-surface p-1 text-sm text-foreground">
        <button
          aria-current="true"
          type="button"
          className="w-full cursor-pointer rounded-md bg-primary px-4 py-2 text-left text-sm text-primary-foreground focus:outline-none rtl:text-right">
          Profile
        </button>
        <button
          type="button"
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:opacity-50">
          Settings
        </button>
        <button
          type="button"
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:opacity-50">
          Messages
        </button>
        <button
          type="button"
          disabled
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:bg-surface disabled:opacity-50">
          Download
        </button>
      </div>
    </div>
  )
}

export const ButtonListWithIcon = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="w-48 rounded-lg border bg-surface p-1 text-sm text-foreground">
        <button
          aria-current="true"
          type="button"
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md bg-primary px-4 py-2 text-left text-sm text-primary-foreground focus:outline-none rtl:text-right">
          <FaUserCircle />
          Profile
        </button>
        <button
          type="button"
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:opacity-50">
          <LuSettings />
          Settings
        </button>
        <button
          type="button"
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:opacity-50">
          <LuMessageCircle />
          Messages
        </button>
        <button
          type="button"
          disabled
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:bg-surface disabled:opacity-50">
          <LuDownload />
          Download
        </button>
      </div>
    </div>
  )
}

export const ListItem = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <li className="flex w-full max-w-lg flex-wrap items-center gap-2 bg-surface px-4 py-2 text-sm">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted text-sm text-foreground sm:h-10 sm:w-10 [&>svg]:h-5 [&>svg]:w-5">
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
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </div>
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm sm:h-10 sm:w-10">
          <img
            alt="avatar"
            src="/avatar/avatar-3.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 text-left">
          <h5 className="flex-1 text-sm font-medium sm:text-base">
            {" "}
            List Item
          </h5>
          <p className="flex-1 text-xs text-muted-foreground">
            Supporting Text
          </p>
        </div>
        <span className="text-xs text-muted-foreground">Label</span>
        <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
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
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </span>
      </li>
    </div>
  )
}
