import React from "react"

export const DefaultInput = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex items-center justify-center">
        <div className="relative w-80">
          <input
            className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
            placeholder="Placeholder..."
            id="example-1"
          />
        </div>
      </div>
    </div>
  )
}

export const InputWithLeftIcon = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
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
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pl-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-2"
          placeholder="Username..."
        />
      </div>
    </div>
  )
}

export const InputWithRightIcon = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
        <input
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pr-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-3"
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
    </div>
  )
}

export const InputWithBothIcons = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
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
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pl-8 pr-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-4"
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
    </div>
  )
}

export const InputWithFloatingLabel = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="flex items-center justify-center">
        <div className="relative w-80">
          <input
            className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_rgb(hsl(--surface))] autofill:[-webkit-text-fill-color:rgb(hsl(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
            id="example-5"
            placeholder=""
          />
          <label
            className="absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-transparent px-2 text-sm font-medium text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:start-2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-background peer-focus:px-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            htmlFor="example-5">
            Username
          </label>
        </div>
      </div>
    </div>
  )
}

export const InputLeftIconWithFloatingLabel = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
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
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pl-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(var(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-6"
          placeholder=" "
        />
        <label
          className="rtl:left absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-background px-2 text-sm font-medium text-muted-foreground duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rtl:translate-x-1/4"
          htmlFor="example-6">
          Username
        </label>
      </div>
    </div>
  )
}

export const InputRightIconWithFloatingLabel = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
        <input
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pr-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(var(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-7"
          placeholder=" "
        />
        <label
          className="rtl:left absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-background px-2 text-sm font-medium text-muted-foreground duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rtl:translate-x-1/4"
          htmlFor="example-7">
          Username
        </label>

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
    </div>
  )
}
export const InputBothIconWithFloatingLabel = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-80">
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
          className="peer flex h-10 w-full rounded-md border bg-transparent px-3 py-2 pl-8 pr-8 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--surface))] autofill:[-webkit-text-fill-color:hsl(var(--foreground))_!important] focus-visible:border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed"
          id="example-8"
          placeholder=" "
        />
        <label
          className="rtl:left absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-background px-2 text-sm font-medium text-muted-foreground duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rtl:translate-x-1/4"
          htmlFor="example-8">
          Username
        </label>

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
    </div>
  )
}
