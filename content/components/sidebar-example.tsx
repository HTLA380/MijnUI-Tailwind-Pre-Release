import React from "react"
import { MdOutlineLocationOn } from "react-icons/md"

export const DefaultSidebar = () => {
  return (
    <div className="not-prose relative flex h-[450px] w-full gap-5 overflow-y-auto overflow-x-hidden rounded-lg border sm:h-[650px]">
      <aside className="sticky left-0 top-0 h-full w-52 shrink-0 space-y-2 overflow-y-auto border-r border-border bg-surface px-3 pb-4 pt-2 shadow-sm">
        <div className="flex items-center gap-2">
          <button className="disabled:text-muted/75-foreground inline-flex h-10 w-10 items-center justify-center gap-1 rounded-md border text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <path d="M9 3v18"></path>
              <path d="m16 15-3-3 3-3"></path>
            </svg>
          </button>
          <h5 className="flex items-center gap-1 text-base font-extrabold">
            MijnUI
          </h5>
        </div>
        <ul className="w-full list-none space-y-1 p-1">
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary hover:text-primary-foreground disabled:bg-muted/75">
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Dashboard</p>
            </div>
          </a>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Search</p>
            </div>
          </a>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Insights</p>
            </div>
          </a>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M8 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 13h2"></path>
                <path d="M14 17h2"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Documents</p>
            </div>
          </a>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Settings</p>
            </div>
          </a>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Messages</p>
            </div>
          </a>
          <div>
            <button className="group inline-flex h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
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
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </span>
              <div className="flex-1 text-left font-medium">Ecommerce</div>
              <span>
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
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </button>
          </div>
          <a
            href="#"
            className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <MdOutlineLocationOn />
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Location</p>
            </div>
          </a>
        </ul>
      </aside>

      <div className="h-screen w-full p-5">
        <div className="mx-auto max-w-lg">
          {" "}
          <div role="status" className="my-7 animate-pulse">
            {" "}
            <div className="mb-4 h-2.5 w-48 rounded-full bg-muted"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="mb-7 max-w-lg animate-pulse">
            {" "}
            <div className="flex h-48 w-full items-center justify-center rounded bg-muted">
              {" "}
              <svg
                className="h-12 w-12 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512">
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
              </svg>{" "}
            </div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="mb-6 mt-7 animate-pulse">
            {" "}
            <div className="mb-4 h-2.5 w-48 rounded-full bg-muted"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export const SidebarCollapsibleActive = () => {
  return (
    <div className="not-prose relative flex h-[450px] w-full items-center gap-5 overflow-y-auto overflow-x-hidden rounded-lg border sm:h-[650px]">
      <aside className="sticky left-0 top-0 h-full w-52 shrink-0 space-y-2 overflow-y-auto border-r bg-surface px-3 pb-4 pt-2 shadow-sm">
        <div className="flex items-center gap-2">
          <button className="disabled:text-muted/75-foreground inline-flex h-10 w-10 items-center justify-center gap-1 rounded-md border text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <path d="M9 3v18"></path>
              <path d="m16 15-3-3 3-3"></path>
            </svg>
          </button>
          <h5 className="font-extrabold">MijnUI</h5>
        </div>
        <ul className="w-full list-none space-y-1 p-1">
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary hover:text-primary-foreground disabled:bg-muted/75">
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Dashboard</p>
            </div>
          </a>
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Search</p>
            </div>
          </a>
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Insights</p>
            </div>
          </a>
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M8 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 13h2"></path>
                <path d="M14 17h2"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Documents</p>
            </div>
          </a>
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Settings</p>
            </div>
          </a>
          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Messages</p>
            </div>
          </a>
          <div>
            <button className="group inline-flex h-10 w-full items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm text-primary">
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
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </span>
              <div className="flex-1 text-left font-medium">Ecommerce</div>
              <span className="rotate-180">
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
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </button>

            <div>
              <li className="flex items-center gap-2 px-4 py-2 pl-10 text-sm">
                <a
                  href="#"
                  className="cursor-pointer text-primary hover:text-primary">
                  Products
                </a>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 pl-10 text-sm">
                <a
                  href="#"
                  className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Orders
                </a>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 pl-10 text-sm">
                <a
                  href="#"
                  className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Credit card
                </a>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 pl-10 text-sm">
                <a
                  href="#"
                  className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Health
                </a>
              </li>
              <li className="flex items-center gap-2 px-4 py-2 pl-10 text-sm">
                <a
                  href="#"
                  className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Fashion
                </a>
              </li>
            </div>
          </div>

          <a className="disabled:text-muted/75-foreground inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted/75">
            <span className="flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
              <MdOutlineLocationOn />
            </span>
            <div className="flex-1 text-left">
              <p className="flex-1 text-sm font-medium">Location</p>
            </div>
          </a>
        </ul>
      </aside>

      <div className="h-screen w-full p-5">
        <div className="mx-auto max-w-lg">
          {" "}
          <div role="status" className="my-7 animate-pulse">
            {" "}
            <div className="mb-4 h-2.5 w-48 rounded-full bg-muted"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="mb-7 max-w-lg animate-pulse">
            {" "}
            <div className="flex h-48 w-full items-center justify-center rounded bg-muted">
              {" "}
              <svg
                className="h-12 w-12 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512">
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
              </svg>{" "}
            </div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="mb-6 mt-7 animate-pulse">
            {" "}
            <div className="mb-4 h-2.5 w-48 rounded-full bg-muted"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[380px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[500px] rounded-full bg-accent"></div>
            <div className="h-2 max-w-[460px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
          <div role="status" className="my-6 animate-pulse">
            {" "}
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-accent"></div>
            <div className="mb-2.5 h-2 max-w-[450px] rounded-full bg-accent"></div>
            <span className="sr-only">Loading...</span>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
