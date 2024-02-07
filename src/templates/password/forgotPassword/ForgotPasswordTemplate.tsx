import { useRouter } from "next/navigation"
import { handleForm, submitData } from "./functions"
import type { NextPage } from "next"
import type { IForgotPasswordFormValues } from "@/types"

const ForgotPasswordTemplate: NextPage = () => {
  const route = useRouter()
  const { errors, handleSubmit, isSubmitting, register, reset } = handleForm()
  const handleSubmitData = async (
    body: IForgotPasswordFormValues
  ): Promise<void> => {
    await submitData({ reset, route, body })
  }

  return (
    <main className="flex mt-10 md:mt-0 items-center justify-center flex-col flex-1 py-10 md:py-0 px-10 md:px-0">
      <div className="flex flex-col items-center mb-12 gap-4">
        <h1 className="text-white text-3xl md:text-5xl">Forgot Password</h1>
        <div className="h-[2px] w-full md:w-[120%] bg-white"></div>
      </div>

      <section className="bg-textWhite rounded-2xl shadow-md py-5 px-7 md:max-w-xl md:py-11 md:px-14">
        <p className="text-xl mb-16 text-center">
          Enter your registered email and we will send you a token so you can
          reset your password.
        </p>

        <form onSubmit={handleSubmit(handleSubmitData)} className="">
          <div className="mb-14">
            <label htmlFor="" className="text-2xl md:text-3xl">
              E-mail:
            </label>
            <input
              autoFocus
              type="email"
              placeholder="E-mail: your_email@gmail.com"
              className="h-12 w-full rounded-md px-3 text-base md:text-xl shadow-md"
              {...register("email")}
            />
            {errors.email !== undefined && (
              <p className="text-red-500 w-full md:w-full mt-1 text-xs md:text-base">
                {errors?.email?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-md text-3xl bg-secondary text-textWhite shadow-md hover:bg-secondaryHover transition-all"
          >
            Send E-mail
          </button>
        </form>
      </section>
    </main>
  )
}

export default ForgotPasswordTemplate
