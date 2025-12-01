import PuzzleBoard from "@/app/_components/games/Puzzle"



const images = [
  { src: "/01.jpg"},
  { src: "/02.jpg"},
  { src: "/03.jpg"},
  { src: "/04.jpg"},
  { src: "/05.jpg"},
  { src: "/06.jpg"},
  { src: "/07.jpg"},
  { src: "/08.jpg"},
  { src: "/09.jpg"},
  { src: "/10.jpg"},
  { src: "/11.jpg"},
  { src: "/12.jpg"}
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
