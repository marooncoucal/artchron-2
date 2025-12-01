import Link from "next/link"

export default function BlackButtonTest1({children, link, color}) {
  return (
    <Link href={link} className="w-full flex items-center justify-center p-4 text-white" style={{backgroundColor: color ?? "black"}}>{children}</Link>
  )
}