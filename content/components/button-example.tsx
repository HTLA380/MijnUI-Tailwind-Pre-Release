import React from "react"
import { Button } from "@/mijnui-react/ui/button"

export const ButtonVariants = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <Button variant={"primary"}>Button</Button>
      <Button variant={"secondary"}>Button</Button>
      <Button variant={"surface"}>Button</Button>
      <Button variant={"ghost"}>Button</Button>
      <Button variant={"outline"}>Button</Button>
      <Button variant={"danger"}>Button</Button>
    </div>
  )
}

export const ButtonSizes = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <Button size={"sm"}>Button</Button>
      <Button size={"md"}>Button</Button>
      <Button size={"lg"}>Button</Button>
      <Button size={"icon"}>B</Button>
    </div>
  )
}

export const ButtonRadius = () => {
  return (
    <div className="not-prose flex min-h-80 w-full flex-col items-center justify-center gap-5 rounded-lg border p-5 sm:flex-row">
      <Button radius={"sm"}>Button</Button>
      <Button radius={"md"}>Button</Button>
      <Button radius={"lg"}>Button</Button>
      <Button radius={"full"}>Button</Button>
    </div>
  )
}
