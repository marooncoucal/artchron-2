import HeaderNav from "@/app/_components/headerNav"
import Link from "next/link"
import PodborPage from "./podbor/page"
import PuzzlePage from "./puzzle/page"
import QuizPage from "./quiz/page"
import TruePage from "./true/page"
import True from "@/app/_components/games/True"

export default function TestTypesContainer() {
  return (
    <div className="entryTest-js w-full h-full flex flex-col gap-5 items-center">
      <HeaderNav />
      <div className="innerCon-entryTest-js w-full h-full pt-10 flex gap-5 items-center justify-center">
          <TruePage/>
      </div>
    </div>
  )
}