import { useForm } from "react-hook-form"
import { useAuth } from "@/hooks"
import { userInfosSchema } from "@/utils"
import { yupResolver } from "@hookform/resolvers/yup"
import type { ISubmitData, IUserInfosForm, IUserInfosFormValues } from "@/types"

interface IUserInfosBody extends ISubmitData {
  body: IUserInfosFormValues
}

export const handleForm = (): IUserInfosForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(userInfosSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset }
}

export const submitData = async ({
  reset,
  body,
  route
}: IUserInfosBody): Promise<void> => {
  try {
    const { content, error, isError } = await useAuth({
      url: "/user/update-infos",
      method: "PATCH",
      body
    })

    if (isError) {
      alert(error)
      return
    }

    localStorage.setItem("userInfos", JSON.stringify(content))
    route.push("/")
  } catch (error) {
    console.log(error)
    route.push("/login")
  } finally {
    reset()
  }
}
