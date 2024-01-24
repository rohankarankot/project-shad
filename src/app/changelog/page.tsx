import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog",
  description: "All the latest updates, improvements, and fixes.",
}

export default function Changelog() {
  return (
    <div className="container min-h-screen py-8">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Changelog</h1>
      <p className="mb-10 mt-2.5 text-xl text-muted-foreground">All the latest updates, improvements, and fixes.</p>
      <div className="space-y-10">sdfg</div>
    </div>
  )
}
