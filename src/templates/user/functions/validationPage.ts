import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface IValidationPage {
  urlId: string
  route: AppRouterInstance
}

export const validationPage = ({ route, urlId }: IValidationPage): void => {
  const localStorageId = JSON.parse(localStorage.getItem("userInfos") ?? "{}")

  if (urlId !== localStorageId._id) route.push("/login")
}
