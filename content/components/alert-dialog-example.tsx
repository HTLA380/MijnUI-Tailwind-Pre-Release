import React from "react"

export const AlertDialogExample = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
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
            className="inline-flex items-center justify-center gap-1 transition-colors duration-150 active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80 hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-3">
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1 transition-colors duration-150 active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-3">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}