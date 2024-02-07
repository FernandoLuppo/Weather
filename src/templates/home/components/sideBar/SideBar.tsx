import type { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getUserInfos, logout } from "../../functions"
import { WeatherContext } from "@/context"
import type { IUserInfos } from "@/types"

export const SideBar: NextPage = () => {
  const [city, setCity] = useState("")
  const [user, setUser] = useState<IUserInfos | null>(null)
  const route = useRouter()

  const { getWeatherInfos } = useContext(WeatherContext)
  useEffect(() => {
    setUser(getUserInfos())
  }, [])

  return (
    <section className="bg-primary border-r border-[#262626] shadow-md px-7 py-14 min-h-screen md:flex flex-col items-center justify-between max-w-xs justify-self-start z-10 hidden">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="bg-slate-100 p-6 w-fit rounded-full mb-5">
            <img
              src="/icons/user-icon.svg"
              alt="User icon"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-textWhite text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs px-7">
            {user?.name}
          </h3>
        </div>

        <div className="relative mt-24">
          <input
            type="text"
            onChange={e => {
              setCity(e.target.value)
            }}
            className=" rounded-lg px-2 py-1 pr-11 w-full"
          />
          <button
            onClick={async () => {
              await getWeatherInfos(city)
            }}
            className="absolute top-0 right-0 h-full px-2 rounded-e-lg bg-secondary hover:bg-secondaryHover"
          >
            <Image
              src="/icons/search.svg"
              alt="Search icon"
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-4">
        <button className="bg-secondary w-full py-3 rounded-lg hover:bg-secondaryHover">
          <Link href={`/user/${user?._id}`} className="text-textWhite text-2xl">
            User Menu
          </Link>
        </button>

        <button
          onClick={async () => {
            await logout(route)
          }}
          className="bg-none w-full text-textWhite text-2xl underline hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </section>
  )
}
