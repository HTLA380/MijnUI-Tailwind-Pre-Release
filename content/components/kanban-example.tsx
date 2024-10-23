import React from "react"

export const DefaultKanban = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <div className="relative w-full max-w-[352px] overflow-auto rounded-2xl bg-kanban py-2 dark:bg-kanban/35">
        {/* Kanban Header */}
        <div className="flex w-full items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium sm:text-lg">Todo</h3>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface text-xs font-medium text-muted-foreground">
              3
            </span>
          </div>

          <button className="disabled:text-muted/75-foreground inline-flex h-7 w-7 items-center justify-center gap-1 rounded-full text-sm text-muted-foreground hover:bg-accent hover:text-foreground disabled:bg-muted/75">
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
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>

        {/* Kanban Content */}
        <div className="space-y-4 px-4 py-2">
          {/* Kanban Card */}
          <div className="w-full cursor-pointer space-y-4 rounded-lg bg-surface p-4">
            <h5 className="w-10/12 text-sm font-medium">
              Creating wireframes for iOS application
            </h5>
            <div className="flex flex-wrap">
              <span className="inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs hover:bg-accent">
                Wireframe
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <h5>CheckList</h5>
                <p>3/4</p>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={75}
                  role="progressbar"
                  style={{
                    transform: "scaleX(0.75)",
                    transformOrigin: "left center",
                  }}></div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground sm:gap-4">
              <div className="flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path>
                  <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                </svg>
                <span className="text-xs">3d</span>
              </div>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M6.66634 11.25H13.333M6.66634 7.08333H9.99967"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M5.08218 15.8333C3.99875 15.7268 3.18713 15.4014 2.64281 14.857C1.6665 13.8807 1.6665 12.3094 1.6665 9.16668V8.75001C1.6665 5.60731 1.6665 4.03596 2.64281 3.05965C3.61913 2.08334 5.19047 2.08334 8.33317 2.08334H11.6665C14.8092 2.08334 16.3806 2.08334 17.3569 3.05965C18.3332 4.03596 18.3332 5.60731 18.3332 8.75001V9.16668C18.3332 12.3094 18.3332 13.8807 17.3569 14.857C16.3806 15.8333 14.8092 15.8333 11.6665 15.8333C11.1994 15.8438 10.8275 15.8793 10.462 15.9625C9.46336 16.1924 8.53861 16.7035 7.62473 17.1491C6.32258 17.784 5.6715 18.1015 5.26292 17.8043C4.48125 17.2221 5.24529 15.4182 5.4165 14.5833"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"></path>
                </svg>
                <span className="text-xs">2</span>
              </div>

              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M6.6665 6.66708V5.00042C6.6665 3.15947 8.15889 1.66708 9.99984 1.66708C11.8408 1.66708 13.3332 3.15947 13.3332 5.00042V15.0004C13.3332 16.8414 11.8408 18.3338 9.99984 18.3338C8.15889 18.3338 6.6665 16.8414 6.6665 15.0004V11.2504C6.6665 10.0998 7.59924 9.16708 8.74984 9.16708C9.90043 9.16708 10.8332 10.0998 10.8332 11.2504V13.3338"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>{" "}
                <span className="text-xs">5</span>
              </div>

              <div className="flex w-full items-center justify-end -space-x-2">
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <img
                    alt="avatar"
                    className="h-full w-full object-cover"
                    src="/avatar/avatar-1.png"
                  />
                </div>
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <span>S</span>
                </div>
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <img
                    alt="avatar"
                    className="h-full w-full object-cover"
                    src="/avatar/avatar-2.png"
                  />
                </div>
                <div className="!ml-1.5 flex items-center justify-center text-xs text-muted-foreground">
                  +3
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="relative w-full cursor-pointer space-y-4 rounded-lg bg-surface p-4">
            <h5 className="w-10/12 text-sm font-medium">
              Creating wireframes for iOS application
            </h5>

            <div className="flex w-full items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path>
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                  </svg>
                  <span className="text-xs">3d</span>
                </div>
              </div>

              <div className="flex items-center justify-center -space-x-2">
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <img
                    alt="avatar"
                    className="h-full w-full object-cover"
                    src="/avatar/avatar-3.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full cursor-pointer space-y-4 rounded-lg bg-surface p-4">
            <h5 className="w-10/12 text-sm font-medium">
              Presentation Slide Design
            </h5>
            <div className="flex flex-wrap">
              <span className="inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs hover:bg-accent">
                Design
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <h5>CheckList</h5>
                <p>3/4</p>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={75}
                  role="progressbar"
                  style={{
                    transform: "scaleX(0.75)",
                    transformOrigin: "left center",
                  }}></div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between text-muted-foreground">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path>
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                  </svg>
                  <span className="text-xs">5d</span>
                </div>
              </div>
              <div className="flex items-center justify-center -space-x-2">
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <img
                    alt="avatar"
                    className="h-full w-full object-cover"
                    src="/avatar/avatar-4.png"
                  />
                </div>
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs ring-1 ring-muted-foreground/75">
                  <span>S</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-4 px-4 py-2">
            <button className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </span>
              Add a new Item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}