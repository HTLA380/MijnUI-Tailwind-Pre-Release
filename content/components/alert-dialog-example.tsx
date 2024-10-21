import React from "react"

export const AlertDialogExample = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div
        role="alertdialog"
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        className="flex w-full max-w-lg flex-col gap-2 rounded-xl border bg-surface p-6 shadow-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h2 id="alert-dialog-title" className="text-lg font-semibold">
            Confirm Account Deletion
          </h2>
          <p
            id="alert-dialog-description"
            className="text-sm text-muted-foreground">
            Deleting your account is irreversible. All your account information,
            including data and settings, will be permanently erased. Are you
            absolutely sure?
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-1 rounded-md px-3 text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-90 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-primary px-3 text-sm text-primary-foreground transition-colors duration-150 hover:bg-primary/90 active:brightness-90 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
