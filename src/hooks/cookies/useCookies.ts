import cookies from "js-cookie"

interface IProps {
  access: string | undefined
  refresh: string | undefined
}

export const useCookies = (): IProps => {
  const access = cookies.get("accessToken")
  const refresh = cookies.get("refreshToken")

  return { access, refresh }
}
