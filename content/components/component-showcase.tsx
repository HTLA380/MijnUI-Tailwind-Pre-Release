import React from "react"
import { Button } from "@/mijnui-react/ui/button"

const ComponentShowcase = () => {
  return (
    <div className="w-full p-5 flex border rounded-lg items-center gap-5">
      <Button radius={"sm"}>Button</Button>
      <Button radius={"md"}>Button</Button>
      <Button radius={"lg"}>Button</Button>
      <Button radius={"full"}>Button</Button>
    </div>
  )
}

export default ComponentShowcase
