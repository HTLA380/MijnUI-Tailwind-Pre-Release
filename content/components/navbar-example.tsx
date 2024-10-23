import React from "react"

export const DefaultNavbar = () => {
  return (
    <div className="not-prose relative h-[450px] w-full overflow-y-auto overflow-x-hidden rounded-lg border sm:h-[650px]">
      <header className="sticky left-0 top-0 z-10 flex w-full items-center justify-center border-b bg-surface">
        <nav className="flex w-full items-center justify-between px-3 py-2">
          <div className="flex items-center gap-4">
            <button className="inline-flex h-8 w-8 items-center justify-center gap-1 rounded-md border text-sm hover:bg-accent hover:text-accent-foreground disabled:bg-muted disabled:text-muted-foreground sm:h-10 sm:w-10">
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
                <path d="m14 9 3 3-3 3"></path>
              </svg>
            </button>
            <h3 className="text-sm font-semibold text-foreground sm:text-base">
              MijnUI
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden w-80 xl:block">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <input
                className="peer flex h-9 w-full rounded-md border bg-transparent px-3 py-2 pl-8 pr-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-foreground-fill-color:hsl(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
                id="nav-input"
                placeholder="Username..."
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 transform">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>

            <div className="flex items-center">
              <button className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                  <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                </svg>
              </button>

              <button className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full text-sm transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 0 1-128 0v-16"></path>
                </svg>
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xs transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
                <p>EN</p>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>

            <button>
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-sm md:h-10 md:w-10">
                <img
                  alt="avatar"
                  src="/avatar/avatar-3.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

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
