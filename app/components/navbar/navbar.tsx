"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/mijnui-react/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/mijnui-react/ui/select"
import { useSearchContext } from "fumadocs-ui/provider"
import { LuGithub, LuSearch } from "react-icons/lu"

const Navbar = () => {
  const { setOpenSearch } = useSearchContext()

  return (
    <header className="fixed inset-x-0 top-0 bg-transparent z-30 flex justify-between items-center h-16 w-full backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-center gap-3">
          <Link href={"/"} className="font-bold  flex items-center gap-2">
            <Logo className="fill-fd-foreground size-5 items-center" />
            MijnUI
          </Link>
          <Select>
            <SelectTrigger className="h-auto w-24 py-1.5 shadow-none">
              v0.0.1
            </SelectTrigger>
            <SelectContent className="p-1.5 w-28 bg-fd-popover border-fd-border">
              <SelectItem value="v0.0.1">
                <Link href={"/docs"}>v0.0.1</Link>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setOpenSearch(true)}
            variant={"surface"}
            size={"sm"}
            className="text-muted-foreground gap-2"
          >
            <LuSearch />
            <span>Search...</span>
            <div className="inline-flex border rounded-full ml-4 gap-1 h-5 px-2 py-px">
              <kbd className="text-[0.625rem]">Ctrl+</kbd>
              <kbd className="text-[0.625rem]">K</kbd>
            </div>
          </Button>
          <Button variant={"surface"} className="border px-2" asChild>
            <Link href={"/"}>
              <LuGithub size={18} />
            </Link>
          </Button>
        </div>
      </nav>

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 100% at 100% 10%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
        }}
      ></div>
    </header>
  )
}

const Logo = ({ ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 65 69"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.5909 5.97315C29.5909 7.51623 28.9779 8.9961 27.8868 10.0872L22.9207 15.0534C21.0881 16.886 17.9545 15.588 17.9545 12.9963V10.7931C17.9545 9.25001 18.5675 7.77013 19.6586 6.67901L24.6248 1.71288C26.4574 -0.119741 29.5909 1.1782 29.5909 3.76992V5.97315Z"
        fill="currentColor"
      />
      <path
        d="M0.5 28.2476C0.5 26.7046 1.11298 25.2247 2.2041 24.1336L7.17023 19.1674C9.00286 17.3348 12.1364 18.6327 12.1364 21.2245V28.1443C12.1364 29.4401 13.7031 30.0891 14.6194 29.1728L24.6248 19.1674C26.4574 17.3348 29.5909 18.6327 29.5909 21.2245V38.3261C29.5909 39.0852 30.5087 39.4653 31.0455 38.9286C31.5822 38.3918 32.5 38.772 32.5 39.5311V39.6399C32.5 40.1158 32.311 40.5722 31.9745 40.9087L22.9207 49.9625C21.088 51.7951 17.9545 50.4971 17.9545 47.9054V32.2583C17.9545 30.9625 16.3878 30.3135 15.4715 31.2298L12.9884 33.7129C12.4429 34.2584 12.1364 34.9984 12.1364 35.7699V40.8822C12.1364 42.4253 11.5234 43.9052 10.4323 44.9963L5.46613 49.9624C3.63351 51.7951 0.5 50.4971 0.5 47.9054V28.2476Z"
        fill="currentColor"
      />
      <path
        d="M64.5 21.2245C64.5 18.6327 61.3665 17.3348 59.5339 19.1674L49.5285 29.1728C48.6122 30.0891 47.0455 29.4401 47.0455 28.1443V21.2245C47.0455 18.6327 43.912 17.3348 42.0793 19.1674L33.0255 28.2212C32.689 28.5577 32.5 29.0141 32.5 29.49V29.5988C32.5 30.3579 33.4178 30.7381 33.9545 30.2013C34.4913 29.6645 35.4091 30.0447 35.4091 30.8038V52.0195L31.6479 55.7806C30.8888 56.5397 29.5909 56.0021 29.5909 54.9286C29.5909 52.7815 26.995 51.7063 25.4768 53.2245L19.6586 59.0427C18.5675 60.1338 17.9545 61.6137 17.9545 63.1567V65.36C17.9545 67.9517 21.088 69.2496 22.9207 67.417L45.3414 44.9963C46.4325 43.9052 47.0455 42.4253 47.0455 40.8822V35.7699C47.0455 34.9984 47.3519 34.2584 47.8975 33.7129L50.3806 31.2298C51.2969 30.3135 52.8636 30.9625 52.8636 32.2583V47.9054C52.8636 50.4971 55.9971 51.7951 57.8298 49.9625L62.7959 44.9963C63.887 43.9052 64.5 42.4253 64.5 40.8822V21.2245Z"
        fill="currentColor"
      />
      <path
        d="M35.4091 12.9963C35.4091 15.588 38.5426 16.886 40.3752 15.0534L45.3414 10.0872C46.4325 8.9961 47.0455 7.51623 47.0455 5.97315V3.76992C47.0455 1.1782 43.912 -0.119745 42.0793 1.71288L37.1132 6.67901C36.0221 7.77013 35.4091 9.25001 35.4091 10.7931V12.9963Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Navbar