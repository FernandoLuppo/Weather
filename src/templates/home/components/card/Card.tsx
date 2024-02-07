import { useContext, useEffect, useState } from "react"
import { chosenIcon } from "../../utils"
import { WeatherContext } from "@/context"
import type { NextPage } from "next"
import type { IWeatherInfos } from "@/types"

export const Card: NextPage = () => {
  const { getWeatherInfos, data } = useContext(WeatherContext)

  useEffect(() => {
    const getWeatherData = async (): Promise<void> => {
      ;(await getWeatherInfos("São Paulo")) as IWeatherInfos
    }

    void getWeatherData()
  }, [])

  console.log("search: ", data)

  return (
    <>
      {data?.unsplash !== null && (
        <img
          src={data?.unsplash.imgFull}
          alt="Background-image"
          className="absolute top-0 z-0 h-full w-full object-cover blur-sm"
        />
      )}
      <section className="bg-primary border-r border-[#262626] shadow-2xl max-w-2xl m-auto px-16 py-14 rounded-2xl text-center z-10">
        {data !== null && (
          <>
            <div className="mb-10">
              <div className="flex items-center justify-center mb-2 gap-2">
                <img
                  src={chosenIcon(data?.weatherAPI.weather[0].icon)}
                  alt="Weather icon"
                  className="h-7 w-auto"
                />
                <p className="text-textWhite text-xl">
                  {data?.weatherAPI.weather[0].description}
                </p>
              </div>
              <h1 className="text-white text-8xl mb-7">
                {parseInt(data.weatherAPI.main.temp).toFixed(0)}ºC
              </h1>
              <div className="flex items-center justify-center gap-4">
                <h2 className="text-white text-4xl">
                  {data?.weatherAPI.name}, {data?.weatherAPI.sys.country}
                </h2>
                <img src={data?.flags} alt="" className="w-12 h-12" />
              </div>
            </div>

            <p className="text-textWhite text-lg mb-5">
              {new Date().toString().split(":")[0].slice(0, 15)}
            </p>

            <div className="flex items-center justify-center gap-10">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/humidity.svg"
                  alt="Humidity icon"
                  className="h-6 w-auto"
                />
                <p className="text-textWhite text-lg">
                  Humidity: {data?.weatherAPI.main.humidity}%
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="/icons/feels-like.svg"
                  alt="Feels like icon"
                  className="h-6 w-auto"
                />
                <p className="text-textWhite text-lg">
                  Feels like: {data?.weatherAPI.main.feels_like}°C
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  )
}
