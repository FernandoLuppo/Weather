import type { IResult } from "@/types"

interface IUseAuth {
  url: string
  method: string
  body?: any
}

export const useAuth = async ({
  url,
  method,
  body
}: IUseAuth): Promise<IResult> => {
  console.log("test: ", body)

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: method.toUpperCase(),
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    credentials: "include",
    cache: "no-store"
  })

  const data: IResult = await response.json()
  return data
}
