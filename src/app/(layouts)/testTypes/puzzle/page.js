import PuzzleBoard from "@/app/_components/games/Puzzle-rev"

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
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-5">
      <div className="font-bold text-2xl">Соберите картину из фрагментов</div>
      <PuzzleBoard images={images} imageWidth={119} imageHeight={64} width={3} height={4} />

    </div> 
)
}
