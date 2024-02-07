import { Card, HomeHeader, SideBar } from "./components"
import type { NextPage } from "next"

const HomeTemplate: NextPage = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row md:items-center relative z-10  bg-black min-h-screen w-full">
        <HomeHeader />
        <SideBar />
        <Card />
      </main>
    </>
  )
}

export default HomeTemplate
