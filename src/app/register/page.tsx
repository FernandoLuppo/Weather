"use client"

import Link from "next/link"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useCallback } from "react"
import Header from "@/components/Header"
import { useAuth } from "@/hooks"
import { registerSchema } from "@/utils"

interface IHandleSubmit {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Login(): JSX.Element {
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

  const handleSubmitData: SubmitHandler<IHandleSubmit> = useCallback(
    async data => {
      await useAuth({
        data,
        method: "post",
        pageToRedirect: "/",
        url: "/user/register"
      })
      reset()
    },
    []
  )

  return (
    <>
      <Header />
      <main className="flex items-center justify-center flex-col flex-1 py-10 md:py-0 md:mt-0">
        <div className="flex flex-col items-center mb-12 gap-4">
          <h1 className="text-white text-3xl md:text-5xl">Register</h1>
          <div className="h-[2px] w-[200%] bg-white"></div>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="max-md:w-full flex flex-col gap-10 px-10 md:px-0 "
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
              className="h-12 w-full md:w-[600px] rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
            />
            {errors.name !== undefined && (
              <p className="text-red-500 w-full md:w-[600px] mt-1 text-xs md:text-base">
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

          <div className="flex flex-col">
            <label htmlFor="" className="text-textWhite text-2xl md:text-3xl">
              Confirm Password:
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Password: ********"
              className="h-12 w-full md:w-[600px] rounded-md px-3 text-base md:text-xl bg-gray-100 shadow-md"
            />
            {errors.confirmPassword !== undefined && (
              <p className="text-red-500 w-full md:w-[600px] mt-1 text-xs md:text-base">
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
    </>
  )
}
