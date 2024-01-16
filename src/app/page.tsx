"use client"

import { AuthContext } from "@/context"
import { useAuth } from "@/hooks"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

interface IProps {
  email: string
  id: string
  name: string
  userProfile: string
}

export default function Home(): JSX.Element {
  const { checkUserCredentials } = useContext(AuthContext)

  const [userInfos, setUserInfos] = useState<IProps>()
  const [city, setCity] = useState<string>("São Paulo")
  const [data, setData] = useState(null)

  useEffect(() => checkUserCredentials, [])
  useEffect(() => {
    const getUserInfos = async (): Promise<void> => {
      const response = await useAuth({
        url: "/user/get-infos",
        method: "GET",
        returnData: true
      })
      if (response !== undefined) {
        setUserInfos(response)
      }
    }

    void getUserInfos()
  }, [])

  useEffect(() => {
    const getWeather = async () => {
      const response = await useAuth({
        method: "POST",
        url: "/weather/location",
        data: { city },
        returnData: true
      })
      setData(response)
    }

    void getWeather()
  }, [])
  console.log(data)

  // useEffect(() => {
  //   const icon = [
  //     {"01n": "/icons/sun-weather.svg"},
  //     {"01d": "/icons/sun-weather.svg"},
  //     {"02n": "/icons/sun-cloud.svg"},
  //     {"02d": "/icons/sun-cloud.svg"},
  //     {"03n": "/icons/cloud.svg"},
  //     {"03d": "/icons/cloud.svg"},
  //     {"04n": "/icons/clouds.svg"},
  //     {"04d": "/icons/clouds.svg"},
  //     {"09n": "/icons/rain.svg"},
  //     {"09d": "/icons/rain.svg"},
  //     {"10n": "/icons/rain-sun.svg"},
  //     {"10d": "/icons/rain-sun.svg"},
  //     {"11n": "/icons/thunder.svg"},
  //     {"11d": "/icons/thunder.svg"},
  //     {"13n": "/icons/snow.svg"},
  //     {"13d": "/icons/snow.svg"},
  //     {"50n": "/icons/fog.svg"},
  //     {"50d": "/icons/fog.svg"},
  //   ]

  //   const weatherIcon = icon[data?.weather[0].icon]
  //   console.log(weatherIcon)

  // }, [data])

  return (
    <>
      {data !== null && (
        <>
          <img
            src={data.unsplash.results[0].links.download}
            alt=""
            className="absolute top-0 z-0 h-full w-full object-cover"
          />
          <main className="flex items-center relative z-10">
            {/* <SideMenu /> */}
            <section className="bg-primary border-r border-[#262626] shadow-md px-7 py-14 min-h-screen flex flex-col items-center justify-between max-w-xs justify-self-start">
              <div>
                <div className="flex flex-col items-center">
                  <div className="bg-slate-100 p-6 w-fit rounded-full mb-5">
                    <img
                      src="/icons/user-icon.svg"
                      alt="User icon"
                      className="w-20 h-20"
                    />
                  </div>
                  <h3 className="text-textWhite text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs px-7">
                    {userInfos?.name}
                  </h3>
                </div>

                <div className="relative mt-24">
                  <input type="text" className="rounded-lg px-2 py-1 pr-7" />
                  <img
                    src="/icons/search.svg"
                    alt="Search icon"
                    className="absolute right-1 top-2"
                  />
                </div>
              </div>

              <div className="justify-self-end w-full">
                <button className="bg-secondary w-full py-3 rounded-lg hover:bg-secondaryHover">
                  <Link href={""} className="text-textWhite text-2xl">
                    User Menu
                  </Link>
                </button>
              </div>
            </section>

            {/* <Card /> */}
            <section className="bg-primary border-r border-[#262626] shadow-md max-w-2xl m-auto px-16 py-14 rounded-2xl text-center">
              <div className="mb-10">
                <div className="flex items-center justify-center mb-2 gap-2">
                  <img
                    src="/icons/sun-weather.svg"
                    alt="Weather icon"
                    className="h-7 w-auto"
                  />
                  <p className="text-textWhite text-xl">
                    {data.weather.weather[0].description}
                  </p>
                </div>
                <h1 className="text-white text-8xl mb-7">
                  {data.weather.main.temp}ºC
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <h2 className="text-white text-4xl">
                    {data.weather.name}, {data.weather.sys.country}
                  </h2>
                  <img src={data.flags} alt="" className="w-12 h-12" />
                </div>
              </div>

              <p className="text-textWhite text-lg mb-5">
                04:28pm - Friday September 22
              </p>

              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center gap-2">
                  <img
                    src="/icons/humidity.svg"
                    alt="Humidity icon"
                    className="h-6 w-auto"
                  />
                  <p className="text-textWhite text-lg">
                    Humidity: {data.weather.main.humidity}%
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/icons/feels-like.svg"
                    alt="Feels like icon"
                    className="h-6 w-auto"
                  />
                  <p className="text-textWhite text-lg">
                    Feels like: {data.weather.main.feels_like}°C
                  </p>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  )
}
