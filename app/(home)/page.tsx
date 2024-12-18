import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to MijnUI</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="font-semibold text-fd-foreground underline">
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </div>
  )
}
