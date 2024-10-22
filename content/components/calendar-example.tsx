"use client"

import * as React from "react"

export function CalendarDefault() {
  return (
    <div className="not-prose flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5">
      <div className="rounded-lg border border-border bg-surface p-3">
        <div className="relative flex flex-col space-y-4 sm:flex-row sm:space-y-0">
          <nav>
            <button
              type="button"
              className="absolute left-1 top-0 z-10 inline-flex h-7 w-7 items-center justify-center gap-1 rounded-md border border-border bg-transparent p-0 text-sm opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground hover:opacity-100 active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
              aria-label="Go to the Previous Month">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-1 top-0 z-10 inline-flex h-7 w-7 items-center justify-center gap-1 rounded-md border border-border bg-transparent p-0 text-sm opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground hover:opacity-100 active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
              aria-label="Go to the Next Month">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </nav>
          <div>
            <div className="relative flex items-center justify-center py-2">
              <span className="text-sm font-medium" role="status">
                October 2024
              </span>
            </div>
            <table
              role="grid"
              aria-multiselectable="false"
              aria-label="October 2024"
              className="w-full border-collapse space-y-1">
              <thead>
                <tr className="flex">
                  <th
                    aria-label="Sunday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Su
                  </th>
                  <th
                    aria-label="Monday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Mo
                  </th>
                  <th
                    aria-label="Tuesday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Tu
                  </th>
                  <th
                    aria-label="Wednesday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    We
                  </th>
                  <th
                    aria-label="Thursday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Th
                  </th>
                  <th
                    aria-label="Friday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Fr
                  </th>
                  <th
                    aria-label="Saturday"
                    className="flex h-9 w-9 items-center justify-center text-[0.8rem] font-normal text-muted-foreground"
                    scope="col">
                    Sa
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="mt-0.5 flex w-full">
                  <td className="day-outside inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Sunday, September 29th, 2024">
                      29
                    </button>
                  </td>
                  <td
                    className="day-outside inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-09-30"
                    data-month="2024-09"
                    data-outside="true">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Monday, September 30th, 2024">
                      30
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-01">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Tuesday, October 1st, 2024">
                      1
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-02">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Wednesday, October 2nd, 2024">
                      2
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-03">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Thursday, October 3rd, 2024">
                      3
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-04">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Friday, October 4th, 2024">
                      4
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-05">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Saturday, October 5th, 2024">
                      5
                    </button>
                  </td>
                </tr>
                <tr className="mt-0.5 flex w-full">
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-06">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Sunday, October 6th, 2024">
                      6
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-07">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Monday, October 7th, 2024">
                      7
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-08">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Tuesday, October 8th, 2024">
                      8
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-09">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Wednesday, October 9th, 2024">
                      9
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-10">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Thursday, October 10th, 2024">
                      10
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-11">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Friday, October 11th, 2024">
                      11
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-12">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Saturday, October 12th, 2024">
                      12
                    </button>
                  </td>
                </tr>
                <tr className="mt-0.5 flex w-full">
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-13">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Sunday, October 13th, 2024">
                      13
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-14">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Monday, October 14th, 2024">
                      14
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-15">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Tuesday, October 15th, 2024">
                      15
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-16">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Wednesday, October 16th, 2024">
                      16
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-17">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Thursday, October 17th, 2024">
                      17
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-18">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Friday, October 18th, 2024">
                      18
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-19">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Saturday, October 19th, 2024">
                      19
                    </button>
                  </td>
                </tr>
                <tr className="mt-0.5 flex w-full">
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-20">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Sunday, October 20th, 2024">
                      20
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md bg-primary p-0 text-sm font-normal text-primary-foreground transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-21"
                    data-today="true"
                    aria-selected="true"
                    data-selected="true">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      tabIndex={0}
                      aria-label="Today, Monday, October 21st, 2024, selected">
                      21
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-22">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Tuesday, October 22nd, 2024">
                      22
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-23">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Wednesday, October 23rd, 2024">
                      23
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-24">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Thursday, October 24th, 2024">
                      24
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-25">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Friday, October 25th, 2024">
                      25
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-26">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Saturday, October 26th, 2024">
                      26
                    </button>
                  </td>
                </tr>
                <tr className="mt-0.5 flex w-full">
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-27">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Sunday, October 27th, 2024">
                      27
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-28">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Monday, October 28th, 2024">
                      28
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-29">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Tuesday, October 29th, 2024">
                      29
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-30">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Wednesday, October 30th, 2024">
                      30
                    </button>
                  </td>
                  <td
                    className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-10-31">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Thursday, October 31st, 2024">
                      31
                    </button>
                  </td>
                  <td
                    className="day-outside inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-11-01"
                    data-month="2024-11"
                    data-outside="true">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Friday, November 1st, 2024">
                      1
                    </button>
                  </td>
                  <td
                    className="day-outside inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md p-0 text-sm font-normal text-muted-foreground opacity-50 transition-colors duration-150 hover:bg-accent hover:text-accent-foreground active:brightness-95 disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
                    data-day="2024-11-02"
                    data-month="2024-11"
                    data-outside="true">
                    <button
                      className="relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20"
                      type="button"
                      aria-label="Saturday, November 2nd, 2024">
                      2
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}