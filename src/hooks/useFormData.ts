import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useCallback } from "react"
import { useAuth } from "@/hooks"
import {
  forgotPasswordCheckEmailSchema,
  forgotPasswordNewPasswordSchema,
  loginSchema,
  registerSchema
} from "@/utils"
import type {
  IHandleSubmitLogin,
  IUseLoginForm,
  IHandleSubmitRegister,
  IUseRegisterForm,
  IUseForgotPasswordForm,
  IHandleSubmitForgotPassword,
  IUseNewPasswordForm,
  IHandleSubmitNewPassword
} from "@/types"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface IProps {
  emailToken: string
  router: AppRouterInstance
}

export const useLoginForm = (router: AppRouterInstance): IUseLoginForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const { errors, isSubmitting } = formState

  const handleSubmitData: SubmitHandler<IHandleSubmitLogin> = useCallback(
    async data => {
      await useAuth({
        data,
        method: "post",
        pageToRedirect: "/",
        url: "/user/login",
        router
      })
      reset()
    },
    []
  )

  return { register, handleSubmit, errors, isSubmitting, handleSubmitData }
}

export const useRegisterForm = (
  router: AppRouterInstance
): IUseRegisterForm => {
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

  const handleSubmitData: SubmitHandler<IHandleSubmitRegister> = useCallback(
    async data => {
      await useAuth({
        data,
        method: "post",
        pageToRedirect: "/login",
        url: "/user/register",
        router
      })
      reset()
    },
    []
  )

  return { register, handleSubmit, errors, isSubmitting, handleSubmitData }
}

export const useForgotPassword = (
  router: AppRouterInstance
): IUseForgotPasswordForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(forgotPasswordCheckEmailSchema),
    defaultValues: {
      email: ""
    }
  })
  const { errors, isSubmitting } = formState

  const handleSubmitData: SubmitHandler<IHandleSubmitForgotPassword> =
    useCallback(async data => {
      const response = await useAuth({
        data,
        url: "/recover-password/check-email",
        method: "POST",
        returnData: true
      })
      localStorage.setItem("code", JSON.stringify(response?.content))
      reset()
      router.push(`/password/new-password/${response?.content?.emailToken}`)
    }, [])

  return { register, handleSubmit, errors, isSubmitting, handleSubmitData }
}

export const useNewPassword = ({
  emailToken,
  router
}: IProps): IUseNewPasswordForm => {
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

  const handleSubmitData: SubmitHandler<IHandleSubmitNewPassword> = useCallback(
    async data => {
      await useAuth({
        data: { ...data, emailToken },
        url: "/recover-password/new-password",
        router,
        method: "PATCH",
        returnData: false,
        pageToRedirect: "/login",
        redirectIfFails: "/login"
      })

      reset()
    },
    []
  )

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleSubmitData,
    watch,
    setValue
  }
}
