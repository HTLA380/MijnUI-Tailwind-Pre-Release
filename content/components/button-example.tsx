import React from "react"
import { Button } from "@/mijnui-react/ui/button"

export const ButtonVariants = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
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
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <Button size={"sm"}>Button</Button>
      <Button size={"md"}>Button</Button>
      <Button size={"lg"}>Button</Button>
      <Button size={"icon"}>B</Button>
    </div>
  )
}

export const ButtonRadius = () => {
  return (
    <div className="w-full not-prose min-h-80 p-5 flex justify-center border rounded-lg items-center gap-5">
      <Button radius={"sm"}>Button</Button>
      <Button radius={"md"}>Button</Button>
      <Button radius={"lg"}>Button</Button>
      <Button radius={"full"}>Button</Button>
    </div>
  )
}