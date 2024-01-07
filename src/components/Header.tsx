import Image from "next/image"
import Link from "next/link"

export default function Header(): JSX.Element {
  return (
    <header className=" px-0 sm:justify-start sm:px-12 md:px-24 py-5">
      <Link href={"/"} className="flex items-center gap-5 w-fit">
        <Image src={"/icons/sun.svg"} alt="Sun icon" width={70} height={70} />
        <h1 className="text-4xl text-textWhite">LuppoTW</h1>
      </Link>
    </header>
  )
}
