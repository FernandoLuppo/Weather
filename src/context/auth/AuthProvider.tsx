"use client"

import { useCallback, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useCookies } from "@/hooks"
import { redirect } from "next/navigation"

export const AuthProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  const checkUserCredentials = useCallback((): void => {
    const { access, refresh } = useCookies()

    if (access === undefined || refresh === undefined) return redirect("/login")

    setAccessToken(access)
    setRefreshToken(refresh)
  }, [accessToken, refreshToken])

  return (
    <AuthContext.Provider value={{ checkUserCredentials }}>
      {children}
    </AuthContext.Provider>
  )
}
