import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface IForgotPasswordFormValues {
  email: string
}

export interface IUseForgotPasswordForm {
  register: UseFormRegister<IForgotPasswordFormValues>
  handleSubmit: UseFormHandleSubmit<IForgotPasswordFormValues, undefined>
  errors: FieldErrors<IForgotPasswordFormValues>
  isSubmitting: boolean
  reset: () => void
}
