import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/hooks"
import { forgotPasswordCheckEmailSchema } from "@/utils"
import type {
  IForgotPasswordFormValues,
  ISubmitData,
  IUseForgotPasswordForm
} from "@/types"

interface IForgotPasswordBody extends ISubmitData {
  body: IForgotPasswordFormValues
}

export const handleForm = (): IUseForgotPasswordForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(forgotPasswordCheckEmailSchema),
    defaultValues: {
      email: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset }
}

export const submitData = async ({
  reset,
  route,
  body
}: IForgotPasswordBody): Promise<void> => {
  try {
    const { content, error, isError } = await useAuth({
      url: "/recover-password/check-email",
      method: "POST",
      body
    })

    if (isError) {
      alert(error)
      return
    }

    route.push(`/password/new-password/${content.emailToken}`)
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
