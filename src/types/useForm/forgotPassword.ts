import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface IHandleSubmitForgotPassword {
  email: string
}

interface IForgotPasswordFormValues {
  email: string
}

export interface IUseForgotPasswordForm {
  register: UseFormRegister<IForgotPasswordFormValues>
  handleSubmit: UseFormHandleSubmit<IForgotPasswordFormValues, undefined>
  errors: FieldErrors<IForgotPasswordFormValues>
  isSubmitting: boolean
  handleSubmitData: SubmitHandler<IForgotPasswordFormValues>
}
