import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/hooks"
import { forgotPasswordNewPasswordSchema } from "@/utils"
import type {
  INewPasswordFormValues,
  ISubmitData,
  IUseNewPasswordForm
} from "@/types"

interface INewPasswordBody extends ISubmitData {
  body: INewPasswordFormValues
}

export const handleForm = (): IUseNewPasswordForm => {
  const { register, handleSubmit, formState, reset, watch, setValue } = useForm(
    {
      mode: "all",
      resolver: yupResolver(forgotPasswordNewPasswordSchema),
      defaultValues: {
        code: "",
        password: "",
        confirmPassword: ""
      }
    }
  )
  const { errors, isSubmitting } = formState

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    watch,
    setValue
  }
}

export const submitData = async ({
  reset,
  route,
  body
}: INewPasswordBody): Promise<void> => {
  try {
    const { error, isError } = await useAuth({
      url: "/recover-password/new-password",
      method: "PATCH",
      body
    })

    if (isError) {
      alert(error)
      return
    }

    route.push("/login")
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
