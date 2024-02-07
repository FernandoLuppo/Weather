import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface IUserInfosFormValues {
  name: string
  email: string
}

export interface IUserInfosForm {
  register: UseFormRegister<IUserInfosFormValues>
  handleSubmit: UseFormHandleSubmit<IUserInfosFormValues, undefined>
  errors: FieldErrors<IUserInfosFormValues>
  isSubmitting: boolean
  reset: () => void
}
