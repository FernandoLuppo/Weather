import Image from "next/image"
import Link from "next/link"

export default function Header(): JSX.Element {
  return (
    <header className="flex items-center gap-5 justify-center px-0 sm:justify-start sm:px-12 md:px-24 py-5">
      <Link href={"/"}>
        <Image src={"/icons/sun.svg"} alt="Sun icon" width={70} height={70} />
      </Link>
      <h1 className="text-4xl text-textWhite">LuppoTW</h1>
    </header>
  )
}
