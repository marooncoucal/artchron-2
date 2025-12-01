import Link from "next/link";

export default function Header1(){
    return(
        <div className='fixed top-0 left-0 right-0 h-[50px] bg-gray-100 flex items-center justify-center' style={{ borderBottom: '1px solid #ccc', zIndex: '1000' }}>
          <div className='max-w-[440px] flex gap-3 items-center justify-between relative'>
            <Link href="/" className='font-bold'>AC</Link>
            <div>|</div>
            <Link href="/testTypes/puzzle">Puzzle</Link>
            <Link href="/testTypes/quiz">Quiz</Link>
            <Link href="/testTypes/true">True</Link>
            <Link href="/testTypes/podbor">Podbor</Link>
            <div>|</div>
            <Link href="/welcomeLogin" className='font-semibold'>Вход</Link>
          </div>
        </div>
    )
}