"use client"

import NewPasswordTemplate from "@/templates/password/newPassword/NewPasswordTemplate"
import type { INewPasswordEmailToken } from "@/types/tokens"
import type { NextPage } from "next"

const NewPassword: NextPage<INewPasswordEmailToken> = ({ params }) => {
  return <NewPasswordTemplate params={params} />
}

export default NewPassword
