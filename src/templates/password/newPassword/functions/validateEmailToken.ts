import { useAuth } from "@/hooks"

interface IProps {
  params: {
    emailToken: string
  }
}

export const useNewPasswordValidateToken = async ({
  params
}: IProps): Promise<void> => {
  await useAuth({
    method: "POST",
    url: "/recover-password/validate-email-token",
    body: params
  })
}
