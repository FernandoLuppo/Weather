export const justNumbers = (inputData: string): string => {
  let value = inputData
  value = value.replace(/\D/g, "")

  inputData = value

  return inputData
}
