import { createContext } from "react"

interface IAuthContext {
  checkUserCredentials: () => void
}

export const AuthContext = createContext<IAuthContext>({
  checkUserCredentials: () => {}
})
