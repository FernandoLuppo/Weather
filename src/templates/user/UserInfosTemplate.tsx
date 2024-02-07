import { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { handleForm, submitData, validationPage } from "./functions"
import { AuthContext } from "@/context"
import type { NextPage } from "next"
import type { IUserInfosFormValues, IUserInfosId } from "@/types"

const UserInfosTemplate: NextPage<IUserInfosId> = ({ params }) => {
  const { checkUserCredentials } = useContext(AuthContext)
  useEffect(() => {
    checkUserCredentials()
  }, [])

  const { errors, handleSubmit, isSubmitting, register, reset } = handleForm()
  const handleSubmitData = async (
    body: IUserInfosFormValues
  ): Promise<void> => {
    await submitData({ reset, body, route })
  }

  const route = useRouter()
  useEffect(() => {
    validationPage({ route, urlId: params.id })
  }, [])

  return (
    <section className="bg-textBlack w-fit px-14 py-12 rounded-2xl flex justify-center items-center shadow-lg">
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="flex flex-col gap-14"
      >
        <div className="flex flex-col gap-10">
          <div>
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
          <div>
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
        </div>
        <button
          onClick={() => {}}
          disabled={isSubmitting}
          className="w-full h-14 rounded-md text-3xl bg-secondary text-textWhite shadow-md hover:bg-secondaryHover transition-all"
        >
          Save Changes
        </button>
      </form>
    </section>
  )
}

export default UserInfosTemplate
