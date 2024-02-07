"use client"

import { useState } from "react"
import { WeatherContext } from "./WeatherContext"
import { useAuth } from "@/hooks"
import { useRouter } from "next/navigation"
import type { IWeatherInfos } from "@/types"

export const WeatherProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [data, setData] = useState<IWeatherInfos | null>(null)
  const route = useRouter()

  const getWeatherInfos = async (
    city = "São Paulo"
  ): Promise<IWeatherInfos | unknown> => {
    if (city.length < 3) return

    try {
      const { content, error, isError } = await useAuth({
        method: "POST",
        url: "/weather/location",
        body: { city }
      })

      if (isError) {
        alert(error)
        return
      }
      console.log("ola: ", content)
      setData(content as IWeatherInfos)
    } catch (error) {
      console.log(error)
      route.push("/login")
    }
  }

  return (
    <WeatherContext.Provider value={{ getWeatherInfos, data }}>
      {children}
    </WeatherContext.Provider>
  )
}
