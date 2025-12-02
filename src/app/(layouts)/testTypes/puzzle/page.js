import PuzzleBoard from "@/app/_components/games/Puzzle"

const images = [
  { src: "/testImgs/puzzle1/01.jpg"},
  { src: "/testImgs/puzzle1//02.jpg"},
  { src: "/testImgs/puzzle1//03.jpg"},
  { src: "/testImgs/puzzle1//04.jpg"},
  { src: "/testImgs/puzzle1//05.jpg"},
  { src: "/testImgs/puzzle1//06.jpg"},
  { src: "/testImgs/puzzle1//07.jpg"},
  { src: "/testImgs/puzzle1//08.jpg"},
  { src: "/testImgs/puzzle1//09.jpg"},
  { src: "/testImgs/puzzle1//10.jpg"},
  { src: "/testImgs/puzzle1//11.jpg"},
  { src: "/testImgs/puzzle1//12.jpg"}
]

export default function PuzzlePage() {
  return (
    <div className="flex justify-center items-center h-screen"> 
      <div className='flex flex-col justify-center items-center gap-2 h-screen w-full max-w-md mx-auto px-4 py-6 border border-black'>
        <div className="font-bold text-2xl">Соберите картину из фрагментов</div>
        <div>
          <PuzzleBoard images={images} imageWidth={119} imageHeight={64} width={3} height={4} />
        </div>
      </div>
    </div>
)
}
