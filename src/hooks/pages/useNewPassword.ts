import { useAuth } from ".."

interface IProps {
  params: {
    emailToken: string
  }
}

export const useNewPasswordValidateToken = async ({
  params
}: IProps): Promise<void> => {
  await useAuth({
    data: params,
    url: "/recover-password/validate-email-token",
    method: "POST"
  })
}
