import type { IAuthValidation, IResult, IUseAuth } from "@/types"

const authValidation = ({
  method,
  pageToRedirect,
  redirectIfFails,
  returnData
}: Omit<IUseAuth, "data" | "url">): IAuthValidation => {
  const pageToRedirectValidation =
    pageToRedirect !== undefined && method !== "GET"

  const redirectIfFailsValidation = redirectIfFails !== undefined

  const returnDataValidation = returnData === true && returnData !== undefined

  return {
    pageToRedirectValidation,
    redirectIfFailsValidation,
    returnDataValidation
  }
}

export const useAuth = async ({
  data,
  method,
  url,
  router,
  pageToRedirect,
  redirectIfFails,
  returnData
}: IUseAuth): Promise<IResult | undefined> => {
  const {
    pageToRedirectValidation,
    redirectIfFailsValidation,
    returnDataValidation
  } = authValidation({
    pageToRedirect,
    redirectIfFails,
    returnData,
    method
  })

  try {
    console.log(process.env.NEXT_PUBLIC_API_URL + url)

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    })
    const { content, error, isError }: IResult = await response.json()

    if (isError) {
      alert(error)
      console.log(error)

      if (router !== undefined && redirectIfFailsValidation)
        router.push((redirectIfFails ?? "").toLowerCase())
      return
    }

    if (router !== undefined && pageToRedirectValidation)
      router.push((pageToRedirect ?? "").toLowerCase())

    if (returnDataValidation) return content
  } catch (error) {
    console.log(error)

    if (router !== undefined && redirectIfFailsValidation)
      router.push((redirectIfFails ?? "").toLowerCase())
  }
}
