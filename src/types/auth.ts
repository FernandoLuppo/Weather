export interface IUseAuth {
  data: any
  url: string
  method: string
  pageToRedirect?: string | null
  returnData?: boolean
}

export interface IAuthValidation {
  returnDataValidation: boolean
  pageToRedirectValidation: boolean
}
