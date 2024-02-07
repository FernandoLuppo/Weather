import Link from "next/link"
import { useRouter } from "next/navigation"
import { handleForm, submitData } from "./functions"
import type { NextPage } from "next"
import type { IRegisterFormValues } from "@/types"

const RegisterTemplate: NextPage = () => {
  const route = useRouter()
  const { errors, handleSubmit, isSubmitting, register, reset } = handleForm()
  const handleSubmitData = async (body: IRegisterFormValues): Promise<void> => {
    await submitData({ reset, route, body })
  }

  return (
    <main className="flex items-center justify-center flex-col flex-1 py-10 md:py-0 md:mt-0">
      <div className="flex flex-col items-center mb-12 gap-4">
        <h1 className="text-white text-3xl md:text-5xl">Register</h1>
        <div className="h-[2px] w-[200%] bg-white"></div>
      </div>

      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="w-full md:w-[576px] flex flex-col gap-10 px-10 md:px-0 "
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
            Name:
          </label>
          <input
            {...register("name")}
            type="text"
            autoFocus
            placeholder="Name: Your Name"
            className="h-12 w-full rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
          />
          {errors.name !== undefined && (
            <p className="text-red-500 w-full mt-1 text-xs md:text-base">
              {errors?.name?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
            Email:
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="E-mail: your_email@gmail.com"
            className="h-12 w-full rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
          />
          {errors.email !== undefined && (
            <p className="text-red-500 w-full mt-1 text-xs md:text-base">
              {errors?.email?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
            Password:
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password: ********"
            className="h-12 w-full rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
          />
          {errors.password !== undefined && (
            <p className="text-red-500 w-full mt-1 text-xs md:text-base">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
            Confirm Password:
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Password: ********"
            className="h-12 w-full rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
          />
          {errors.confirmPassword !== undefined && (
            <p className="text-red-500 w-full mt-1 text-xs md:text-base">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-md text-3xl bg-secondary text-textWhite shadow-md hover:bg-secondaryHover transition-all"
          >
            Register
          </button>
          <Link
            href={"/login"}
            className="text-xl md:text-2xl underline w-fit text-textWhite hover:text-gray-300 transition-all"
          >
            Login
          </Link>
        </div>
      </form>
    </main>
  )
}

export default RegisterTemplate
