import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch
} from "react-hook-form"

export interface INewPasswordFormValues {
  code: string
  password: string
  confirmPassword: string
}

export interface IUseNewPasswordForm {
  register: UseFormRegister<INewPasswordFormValues>
  handleSubmit: UseFormHandleSubmit<INewPasswordFormValues, undefined>
  errors: FieldErrors<INewPasswordFormValues>
  isSubmitting: boolean
  setValue: UseFormSetValue<INewPasswordFormValues>
  watch: UseFormWatch<INewPasswordFormValues>
  reset: () => void
}
