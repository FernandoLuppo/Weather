import { useAuth } from "@/hooks"
import type { IUserInfos } from "@/types"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const getUserInfos = (): IUserInfos => {
  return JSON.parse(localStorage.getItem("userInfos") ?? "{}")
}

export const logout = async (route: AppRouterInstance): Promise<void> => {
  try {
    await useAuth({
      url: "/user/logout",
      method: "GET"
    })

    route.push("/login")
  } catch (error) {
    console.log(error)
  }
}
