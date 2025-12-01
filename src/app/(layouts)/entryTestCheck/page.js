import HeaderNav from "@/app/_components/headerNav"
import Link from "next/link"
import True from "@/app/_components/games/True"

export default function EntryTest1() {
  return (
    <div className="entryTest-js w-full h-full flex flex-col gap-5 items-center">
      <HeaderNav />
      <div className="innerCon-entryTest-js w-full h-full pt-10 flex gap-5 items-center justify-center bg-gray-100">
          user flow in dev
      </div>
    </div>
  )
}