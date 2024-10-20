import React from "react"

export const AccordionActive = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <div className="w-full max-w-80">
        <div className="border-b w-full">
          <h3 className="flex">
            <button
              type="button"
              className="group flex w-full items-center justify-between py-3">
              Is it accessible
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 shrink-0 text-muted-foreground rotate-180"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div className="text-sm">
            <div className="pb-3 pt-0 text-muted-foreground">
              Yes. It adheres to the WAI-ARIA design pattern.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AccordionClosed = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <div className="w-full max-w-80">
        <div className="border-b w-full">
          <h3 className="flex">
            <button
              type="button"
              className="group flex w-full items-center justify-between py-3">
              Is it accessible
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 shrink-0 text-muted-foreground"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
        </div>
      </div>
    </div>
  )
}
