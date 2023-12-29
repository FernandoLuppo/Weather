"use client"

import Link from "next/link"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useCallback } from "react"
import Header from "@/components/Header"
import { useAuth } from "@/hooks"
import { loginSchema } from "@/utils"

interface IHandleSubmit {
  email: string
  password: string
}

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const { errors, isSubmitting } = formState

  const handleSubmitData: SubmitHandler<IHandleSubmit> = useCallback(
    async data => {
      await useAuth({
        data,
        method: "post",
        pageToRedirect: "/",
        url: "/user/login"
      })
      reset()
    },
    []
  )

  return (
    <>
      <Header />
      <main className="flex mt-10 md:mt-0 items-center justify-center flex-col flex-1 py-10 md:py-0">
        <div className="flex flex-col items-center mb-12 gap-4">
          <h1 className="text-white text-3xl md:text-5xl">Login</h1>
          <div className="h-[2px] w-[200%] bg-white"></div>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="max-md:w-full flex flex-col gap-10 px-10 md:px-0"
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
              E-mail:
            </label>
            <input
              {...register("email")}
              type="email"
              autoFocus
              placeholder="E-mail: your_email@gmail.com"
              className="h-12 w-full md:w-[600px] rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
            />
            {errors.email !== undefined && (
              <p className="text-red-500 w-full md:w-[600px] mt-1 text-xs md:text-base">
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
              className="h-12 w-full md:w-[600px] rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
            />
            {errors.password !== undefined && (
              <p className="text-red-500 w-full md:w-[600px] mt-1 text-xs md:text-base">
                {errors?.password?.message}
              </p>
            )}
          </div>

          <Link
            href={"/password/forgot-password"}
            className="text-textWhite underline text-base w-fit md:text-lg hover:text-gray-300 transition-all"
          >
            Forget my password
          </Link>

          <div className="flex flex-col justify-center items-center gap-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-14 w-full rounded-md text-3xl bg-secondary text-textWhite shadow-md hover:bg-secondaryHover transition-all"
            >
              Login
            </button>
            <Link
              href={"/register"}
              className="text-xl md:text-2xl underline w-fit text-textWhite hover:text-gray-300 transition-all"
            >
              Register
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}
