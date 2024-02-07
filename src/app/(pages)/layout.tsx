import React from "react"
import "../globals.css"
import Header from "@/components/Header"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "LuppoTw | Weather",
  description: `
    Explore real-time weather updates, including temperature,
    humidity, and more on our site for accurate and timely weather information.
  `
}

export default function DefaultLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1 justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
