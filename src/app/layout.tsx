import React from "react"
import "./globals.css"
import { AuthProvider, WeatherProvider } from "@/context"
import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LuppoTw | Weather",
  description: `
    Explore real-time weather updates, including temperature,
    humidity, and more on our site for accurate and timely weather information.
  `
}

export default function HomeLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <AuthProvider>
        <WeatherProvider>
          <body className="bg-primary min-h-screen w-full flex flex-col flex-1 justify-center items-center">
            {children}
          </body>
        </WeatherProvider>
      </AuthProvider>
    </html>
  )
}
