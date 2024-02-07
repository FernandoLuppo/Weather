import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getUserInfos, logout } from "../../functions"
import { WeatherContext } from "@/context"
import type { NextPage } from "next"
import type { IUserInfos } from "@/types"

export const HomeHeader: NextPage = () => {
  const [city, setCity] = useState("")
  const [showMenu, setShowMenu] = useState(false)
  const [user, setUser] = useState<IUserInfos | null>(null)
  const route = useRouter()
  const { getWeatherInfos } = useContext(WeatherContext)
  useEffect(() => {
    setUser(getUserInfos())
  }, [])

  return (
    <header className="relative z-10 bg-primary px-8 py-5 flex justify-between items-center max-h-32 h-32 md:hidden ">
      <nav className="flex items-center">
        <button
          className="bg-none flex flex-col justify-center items-center"
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <div className="bg-slate-100 p-3 w-fit rounded-full mb-2">
            <img
              src="/icons/user-icon.svg"
              alt="User icon"
              className="w-7 h-7"
            />
          </div>

          <h3 className="text-textWhite text-base overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs leading-none">
            {user?.name}
          </h3>
        </button>

        {showMenu && (
          // <div className="absolute left-0 top-0">
          <div className="flex flex-col absolute top-32 left-0 bg-primary shadow-md rounded-br-lg py-5 w-48 gap-5 z-20">
            <button className="bg-secondary py-2 px-3 rounded-lg hover:bg-secondaryHover w-fit m-auto">
              <Link
                href={`/user/${user?._id}`}
                className="text-textWhite text-lg"
              >
                User Menu
              </Link>
            </button>

            <button
              onClick={async () => {
                await logout(route)
              }}
              className="bg-none text-textWhite text-lg underline hover:text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={e => {
            setCity(e.target.value)
          }}
          className="rounded-lg px-2 py-1 pr-11 w-40"
        />
        <button
          onClick={async () => {
            setCity("")
            await getWeatherInfos(city)
          }}
          className="absolute top-0 right-0 p-[6px] rounded-e-lg bg-secondary hover:bg-secondaryHover"
        >
          <Image
            src="/icons/search.svg"
            alt="Search icon"
            height={20}
            width={20}
          />
        </button>
      </div>
    </header>
  )
}
