import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { justNumbers } from "@/utils"
import {
  handleForm,
  submitData,
  useNewPasswordValidateToken
} from "./functions"
import type { NextPage } from "next"
import type { INewPasswordEmailToken } from "@/types/tokens"
import type { INewPasswordFormValues } from "@/types"

const NewPasswordTemplate: NextPage<INewPasswordEmailToken> = ({ params }) => {
  const route = useRouter()
  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    reset,
    watch,
    setValue
  } = handleForm()
  const codeValue = watch("code")

  const handleSubmitData = async (
    body: INewPasswordFormValues
  ): Promise<void> => {
    await submitData({ reset, route, body })
  }

  useEffect(() => {
    setValue("code", justNumbers(codeValue))
  }, [codeValue])

  useEffect(() => {
    void useNewPasswordValidateToken({ params })
  }, [])

  return (
    <main className="flex mt-10 md:mt-0 items-center justify-center flex-col flex-1 my-5 py-10 md:py-0">
      <div className="flex flex-col items-center mb-12 gap-4">
        <h1 className="text-white text-3xl md:text-5xl">Code</h1>
        <div className="h-[2px] w-full md:w-[120%] bg-white"></div>
      </div>

      <section className="bg-textWhite rounded-2xl shadow-md py-5 px-7 md:max-w-xl md:py-11 md:px-14">
        <p className="text-xl mb-16 text-center">
          Enter the code below that we sent to your email, and fill your new
          password.
        </p>

        <form onSubmit={handleSubmit(handleSubmitData)} className="">
          <div className="mb-14">
            <label htmlFor="" className="text-2xl md:text-3xl">
              Code:
            </label>
            <input
              autoComplete="off"
              autoFocus
              maxLength={6}
              type="text"
              placeholder="Code: 000000"
              className="h-12 w-full rounded-md px-3 text-base md:text-xl shadow-md"
              {...register("code")}
            />
            {errors.code !== undefined && (
              <p className="text-red-500 w-full md:w-auto mt-1 text-xs md:text-base">
                {errors?.code?.message}
              </p>
            )}
          </div>

          <div className="mb-14">
            <label htmlFor="" className="text-2xl md:text-3xl">
              Password:
            </label>
            <input
              placeholder="Password: ********"
              type="password"
              autoComplete="off"
              className="h-12 w-full rounded-md px-3 text-base md:text-xl shadow-md"
              {...register("password")}
            />
            {errors.password !== undefined && (
              <p className="text-red-500 w-full mt-1 text-xs md:text-base">
                {errors?.password?.message}
              </p>
            )}
          </div>

          <div className="mb-14">
            <label htmlFor="" className="text-2xl md:text-3xl">
              Confirm Password:
            </label>
            <input
              autoComplete="off"
              type="password"
              placeholder="Password: ********"
              className="h-12 w-full rounded-md px-3 text-base md:text-xl shadow-md"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword !== undefined && (
              <p className="text-red-500 w-full mt-1 text-xs md:text-base">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-md text-3xl bg-secondary text-textWhite shadow-md hover:bg-secondaryHover transition-all"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  )
}

export default NewPasswordTemplate
