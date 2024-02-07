import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "@/hooks"
import { registerSchema } from "@/utils"
import type {
  IRegisterFormValues,
  ISubmitData,
  IUseRegisterForm
} from "@/types"

interface IRegisterBody extends ISubmitData {
  body: IRegisterFormValues
}

export const handleForm = (): IUseRegisterForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset }
}

export const submitData = async ({
  reset,
  route,
  body
}: IRegisterBody): Promise<void> => {
  try {
    const { error, isError } = await useAuth({
      url: "/user/register",
      method: "POST",
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
