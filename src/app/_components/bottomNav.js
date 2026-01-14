import Link from "next/link";
import { IconLogin, IconMain, IconWhat } from "./icons";

export default function BottomNav1(){
    return(
        <div className='fixed bottom-4 py-4 px-6 rounded-full bg-white drop-shadow-lg flex-center gap-9 z-1000'>

            <Link href="#" className="w-[28px] h-[28px]">
                <IconWhat color={"#ccc"} />
            </Link>
            <Link href="/" className="w-[28px] h-[28px]">
                <IconMain color={"#5b5b5b"} />
            </Link>
            {/* <div className="flex gap-1">
                <Link href="/testTypes/puzzle">Puzzle</Link>
                <Link href="/testTypes/quiz">Quiz</Link>
                <Link href="/testTypes/true">Swipe</Link>
                <Link href="/testTypes/swipeSelect">HorScroll</Link>
                <Link href="/resultScreen">Result</Link>
            </div> */}
            <Link href="/welcomeLogin" className='w-[28px] h-[28px]'>
                <IconLogin color={"#ccc"} />
            </Link>
        </div>
    )
}