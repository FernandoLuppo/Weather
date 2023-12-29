import type { IAuthValidation, IResult, IUseAuth } from "@/types"
import { redirect } from "next/navigation"

const authValidation = ({
  pageToRedirect,
  returnData,
  method
}: Omit<IUseAuth, "data" | "url">): IAuthValidation => {
  const pageToRedirectValidation =
    pageToRedirect !== null && pageToRedirect !== undefined && method === "GET"
  const returnDataValidation = returnData === true && returnData !== undefined

  return { pageToRedirectValidation, returnDataValidation }
}

export const useAuth = async ({
  data,
  url,
  method,
  pageToRedirect,
  returnData
}: IUseAuth): Promise<IResult | undefined> => {
  console.log("Teste")

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const res: IResult = await response.json()

  if (res.isError) {
    alert(res.error)
    console.log(res.error)
    return
  }

  const { pageToRedirectValidation, returnDataValidation } = authValidation({
    pageToRedirect,
    returnData,
    method
  })

  if (pageToRedirectValidation) redirect((pageToRedirect ?? "").toLowerCase())

  if (returnDataValidation) return res
}
