import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch
} from "react-hook-form"

export interface IHandleSubmitNewPassword {
  code: string
  password: string
  confirmPassword: string
}

interface INewPasswordFormValues {
  code: string
  password: string
  confirmPassword: string
}

export interface IUseNewPasswordForm {
  register: UseFormRegister<INewPasswordFormValues>
  handleSubmit: UseFormHandleSubmit<INewPasswordFormValues, undefined>
  errors: FieldErrors<INewPasswordFormValues>
  isSubmitting: boolean
  handleSubmitData: SubmitHandler<INewPasswordFormValues>
  setValue: UseFormSetValue<INewPasswordFormValues>
  watch: UseFormWatch<INewPasswordFormValues>
}
