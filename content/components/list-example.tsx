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
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
          Settings
        </button>
        <button
          type="button"
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
          Messages
        </button>
        <button
          type="button"
          disabled
          className="w-full cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:bg-surface disabled:text-muted-foreground/75">
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
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
          <LuSettings />
          Settings
        </button>
        <button
          type="button"
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default">
          <LuMessageCircle />
          Messages
        </button>
        <button
          type="button"
          disabled
          className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:cursor-default disabled:bg-surface disabled:text-muted-foreground/75">
          <LuDownload />
          Download
        </button>
      </div>
    </div>
  )
}
