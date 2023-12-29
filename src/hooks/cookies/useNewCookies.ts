export const useNewCookies = async (data: string): Promise<void> => {
  if (data === "jwt expired") {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/token/new-tokens")
    } catch (error) {
      console.log("Cookie Error: ", error)
    }
  }
}
