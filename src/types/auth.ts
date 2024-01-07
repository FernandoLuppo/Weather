import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export interface IUseAuth {
  data?: any
  url: string
  method: string
  router?: AppRouterInstance
  pageToRedirect?: string
  redirectIfFails?: string
  returnData?: boolean
}

export interface IAuthValidation {
  returnDataValidation: boolean
  pageToRedirectValidation: boolean
  redirectIfFailsValidation: boolean
}
