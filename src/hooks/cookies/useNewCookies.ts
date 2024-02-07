import { useAuth } from ".."
import type { IResult } from "@/types"

export const useNewCookies = async (
  data: string
): Promise<IResult | unknown> => {
  if (data === "jwt expired") {
    try {
      return await useAuth({ url: "/token/new-tokens", method: "GET" })
    } catch (error) {
      console.log("Cookie Error: ", error)
    }
  }
}
