"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/mijnui-react/utils"
import HTMLReactParser from "html-react-parser"

type CodePreviewerProps = {
  src: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<"div">

const CodePreviewer = ({
  src,
  className,
  children,
  ...props
}: CodePreviewerProps) => {
  const [reactElement, setReactElement] = useState<React.ReactNode>(null)

  useEffect(() => {
    const fetchHtml = async () => {
      const response = await fetch(`${src}`, { cache: "no-cache" })
      let html = await response.text()

      const parsedHTML = HTMLReactParser(html)
      setReactElement(parsedHTML)
    }

    fetchHtml()
  }, [])

  return (
    <div
      className={cn(
        "not-prose preview relative flex min-h-80 w-full items-center justify-center gap-5 rounded-lg border p-5",
        className,
      )}
      {...props}>
      {reactElement}
      {children}
    </div>
  )
}

export default CodePreviewer
