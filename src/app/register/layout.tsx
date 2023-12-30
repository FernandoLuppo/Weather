import React from "react"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import "../globals.css"

interface RegisterLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RegisterLayout({
  children
}: RegisterLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-primary">{children}</body>
    </html>
  )
}
