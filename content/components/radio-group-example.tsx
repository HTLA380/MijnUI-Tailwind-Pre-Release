import React from "react"

export const DefaultRadioGroup = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center rounded-lg border p-5">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-0"
              htmlFor="radio-button-example">
              <input
                type="radio"
                className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground text-primary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-0"
                id="radio-button-example"
                name="example"
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
          <label className="text-sm" htmlFor="radio-button-example">
            Option
          </label>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-0"
              htmlFor="vertical-list-react">
              <input
                type="radio"
                className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground text-primary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-0"
                id="radio-button-example-2"
                name="example"
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
          <label className="text-sm" htmlFor="radio-button-example-2">
            Option
          </label>
        </div>
      </div>
    </div>
  )
}
