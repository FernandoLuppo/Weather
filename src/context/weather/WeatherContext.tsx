"use client"
import { createContext } from "react"
import type { IWeatherInfos } from "@/types"

interface IWeatherProvider {
  getWeatherInfos: (city: string) => Promise<IWeatherInfos | unknown>
  data: IWeatherInfos | null
}

export const WeatherContext = createContext<IWeatherProvider>({
  async getWeatherInfos(city) {
    return await new Promise(() => null)
  },
  data: null
})
