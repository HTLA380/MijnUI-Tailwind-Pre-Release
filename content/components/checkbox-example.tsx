import React from "react"

export const CheckboxDefault = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <label htmlFor="checkbox" className="relative flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                defaultChecked
                className="before:content[''] disabled:border-disabled peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100 peer-indeterminate:opacity-100 peer-disabled:[&>svg]:text-muted-foreground">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </label>
          </div>
          <label
            htmlFor="checkbox"
            className="font-sans text-sm font-medium leading-none sm:text-base">
            Candidates
          </label>
        </div>
        <p className="pl-7 text-xs text-muted-foreground sm:text-sm">
          Get notified when a candidate applies for a job.
        </p>
      </div>
    </div>
  )
}

export const CheckboxIndeterminate = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <label
              htmlFor="checkbox-with-indeterminate"
              className="relative flex items-center">
              <input
                type="checkbox"
                defaultChecked
                id="checkbox-with-indeterminate"
                className="before:content[''] disabled:border-disabled peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100 peer-indeterminate:opacity-100 peer-disabled:[&>svg]:text-muted-foreground">
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
                  <path d="M5 12h14"></path>
                </svg>
              </span>
            </label>
          </div>
          <label
            htmlFor="checkbox-with-indeterminate"
            className="font-sans text-sm font-medium leading-none sm:text-base">
            Candidates
          </label>
        </div>
        <p className="pl-7 text-xs text-muted-foreground sm:text-sm">
          This checkbox can have an indeterminate state.
        </p>
      </div>
    </div>
  )
}