import React from "react"

export const CustomerTable = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="custom_scroll_bar relative h-96 w-full max-w-6xl overflow-auto rounded-2xl border border-border bg-accent sm:h-[475px]">
        <table className="relative text-sm">
          <thead className="sticky left-0 top-0 z-10 h-11 border-b bg-accent">
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 font-semibold">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="check-all"
                    className="relative flex items-center">
                    <input
                      id="check-all"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </th>
              <th className="min-w-44 cursor-pointer px-4 py-3 font-semibold">
                <div className="flex items-center gap-2">
                  <p>Customer</p>{" "}
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
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </div>
              </th>
              <th className="min-w-32 px-4 py-3 font-semibold">Date/Time</th>
              <th className="hidden w-full min-w-44 px-4 py-3 font-semibold sm:table-cell">
                Location
              </th>
              <th className="min-w-24 px-4 py-3 font-semibold">Status</th>
              <th className="min-w-14 px-4 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-1"
                    className="relative flex items-center">
                    <input
                      id="checkbox-1"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaliyah"
                      src="/avatar/avatar-1.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p>Aaliyah Hanson</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      aaliyah.hanson@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">790 Eighth Street Philadelphia</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-2"
                    className="relative flex items-center">
                    <input
                      id="checkbox-2"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaliyah"
                      src="/avatar/avatar-2.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Aaliyah Martinez</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      aaliyah.martinez@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">935 Fifth Street New York</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-red-500 ring-2 ring-red-200"></span>
                  <p>Returned</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-3"
                    className="relative flex items-center">
                    <input
                      id="checkbox-3"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Aaron"
                      src="/avatar/avatar-3.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Aaron Cook</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      aaron.cook@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">169 First Street Phoenix</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-4"
                    className="relative flex items-center">
                    <input
                      id="checkbox-4"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Abigail"
                      src="/avatar/avatar-4.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Abigail Rivera</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      abigail.rivera@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">996 Oak Street Chicago</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-5"
                    className="relative flex items-center">
                    <input
                      id="checkbox-5"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Addison"
                      src="/avatar/avatar-5.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Addison Wright</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      addison.wright@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">568 Tenth Street San Francisco</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-6"
                    className="relative flex items-center">
                    <input
                      id="checkbox-6"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Addison"
                      src="/avatar/avatar-6.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Addison Ward</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      addison.ward@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">1320 Fifth Street San Francisco</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-7"
                    className="relative flex items-center">
                    <input
                      id="checkbox-7"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Adrian"
                      src="/avatar/avatar-7.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Adrian Flores</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      adrian.flores@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">1395 Madison Street New York</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-yellow-500 ring-2 ring-yellow-200"></span>
                  <p>Pending</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-8"
                    className="relative flex items-center">
                    <input
                      id="checkbox-8"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>
              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Alexander"
                      src="/avatar/avatar-8.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Alexander Jones</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      alexander.jones@gamil.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">664 Maple Street Indianapolis</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-red-500 ring-2 ring-red-200"></span>
                  <p>Returned</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
            <tr className="border-b border-border bg-surface text-left">
              <td className="px-4 py-2 align-middle">
                <div className="inline-flex items-center gap-2">
                  <label
                    htmlFor="checkbox-9"
                    className="relative flex items-center">
                    <input
                      id="checkbox-9"
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-foreground transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-muted disabled:checked:bg-muted [&+span>svg]:text-primary-foreground"
                    />
                    <span className="peer-muted:[&>svg]:text-muted-foreground pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
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
              </td>

              <td className="min-w-40 px-4 py-2 align-middle">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-xs">
                    <img
                      alt="Alexander"
                      src="/avatar/avatar-9.png"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <p>Alexander Hernandez</p>
                    <p className="w-40 truncate text-xs text-muted-foreground">
                      alexander.hernandez@gamil.com
                    </p>
                  </div>
                </div>
              </td>

              <td className="min-w-32 px-4 py-2 align-middle">
                <div className="text-sm">
                  <p>Feb 17, 2024</p>
                  <p className="text-xs text-muted-foreground">08:48 AM</p>
                </div>
              </td>

              <td className="hidden w-full min-w-44 px-4 py-2 align-middle sm:table-cell">
                <p className="w-40 truncate">329 Second Street Dallas</p>
              </td>

              <td className="min-w-24 px-4 py-2 align-middle">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-200"></span>
                  <p>Paid</p>
                </div>
              </td>
              <td className="min-w-14 px-4 py-2 align-middle">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const DefaultTable = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="relative w-full max-w-xl overflow-auto rounded-2xl border border-border bg-accent">
        <table className="w-full text-left text-sm text-foreground rtl:text-right">
          <thead className="bg-accent text-xs uppercase text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3">
                Customer name
              </th>
              <th scope="col" className="px-4 py-3">
                Date/Time
              </th>
              <th scope="col" className="px-4 py-3">
                Location
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-surface text-foreground">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Aaliyah Martinez
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">123 Main Street, Anytown, USA</p>
              </td>
              <td className="px-4 py-3">$2999</td>
            </tr>
            <tr className="border-b bg-surface text-foreground">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Cameron Williamson
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">456 Elm Avenue, Smallville, CA</p>
              </td>
              <td className="px-4 py-3">$1999</td>
            </tr>
            <tr className="bg-surface text-foreground">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Lindsay Walton
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">
                  789 Maple Lane, Pleasantville, NY
                </p>
              </td>
              <td className="px-4 py-3">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const StrippedTable = () => {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="bg- relative w-full max-w-xl overflow-auto rounded-2xl border border-border bg-accent">
        <table className="w-full text-left text-sm text-foreground rtl:text-right">
          <thead className="bg-accent text-xs uppercase text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3">
                Customer name
              </th>
              <th scope="col" className="px-4 py-3">
                Date/Time
              </th>
              <th scope="col" className="px-4 py-3">
                Location
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-background-gray-700 border-b bg-surface text-foreground odd:bg-surface">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Aaliyah Martinez
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">123 Main Street, Anytown, USA</p>
              </td>
              <td className="px-4 py-3">$2999</td>
            </tr>
            <tr className="border-b bg-surface text-foreground odd:bg-surface even:bg-background">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Cameron Williamson
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">456 Elm Avenue, Smallville, CA</p>
              </td>
              <td className="px-4 py-3">$1999</td>
            </tr>
            <tr className="border-b bg-surface text-foreground odd:bg-surface even:bg-background">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Lindsay Walton
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">
                  789 Maple Lane, Pleasantville, NY
                </p>
              </td>
              <td className="px-4 py-3">$99</td>
            </tr>
            <tr className="border-b bg-surface text-foreground odd:bg-surface even:bg-background">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Leonard Krasner
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">
                  890 Birch Boulevard, Riverside, WA
                </p>
              </td>
              <td className="px-4 py-3">$799</td>
            </tr>
            <tr className="bg-surface text-foreground odd:bg-surface even:bg-background">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium">
                Alexander Hernandez
              </th>
              <td className="px-4 py-3">Feb 17, 2024</td>
              <td className="px-4 py-3">
                <p className="w-28 truncate">329 Second Street Dallas</p>
              </td>
              <td className="px-4 py-3">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
