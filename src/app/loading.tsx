import type { NextPage } from "next"

const Loading: NextPage = () => {
  return (
    <div className="fixed top-0 min-h-screen min-w-full bg-primary bg-opacity-50 flex items-center justify-center">
      <img src="./loading.svg" alt="Loading" />
    </div>
  )
}

export default Loading
