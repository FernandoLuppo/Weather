"use client"

import { AuthProvider } from "@/context"
import UserInfosTemplate from "@/templates/user/UserInfosTemplate"
import type { IUserInfosId } from "@/types"
import type { NextPage } from "next"

const UserInfos: NextPage<IUserInfosId> = ({ params }) => {
  console.log(params)
  return (
    <AuthProvider>
      <UserInfosTemplate params={params} />
    </AuthProvider>
  )
}

export default UserInfos
