import SortSections2 from "@/app/_components/games/Sort-sect-2";
import SortSections1 from "@/app/_components/games/Sort-sections-motion";

const inputInfo = {
  sortSections: { 
    author1: "Казимир Малевич", 
    author2: "Ван Гог" 
  },
  questions: [],
}

inputInfo.questions = [
  {
    src: "/testImgs/sortSections1/malevich-blackSquare.jpg",
    section: inputInfo.sortSections.author1,
  },
  {
    src: "/testImgs/sortSections1/malevich-cowViolin.jpg",
    section: inputInfo.sortSections.author1,
  },
  {
    src: "/testImgs/sortSections1/malevich-kosar.jpg",
    section: inputInfo.sortSections.author1,
  },
  {
    src: "/testImgs/sortSections1/malevich-portrait.jpg",
    section: inputInfo.sortSections.author1,
  },
  {
    src: "/testImgs/sortSections1/vangogh-portrait.jpg",
    section: inputInfo.sortSections.author2,
  },
  {
    src: "/testImgs/sortSections1/vangogh-starryNight.jpg",
    section: inputInfo.sortSections.author2,
  },
  {
    src: "/testImgs/sortSections1/vangogh-terrace.jpg",
    section: inputInfo.sortSections.author2,
  },
]

export default function SortSectionsPage1() {
  return (
    <div className="px-5 w-full h-full flex flex-col justify-center items-center gap-5">
      <SortSections1 inputInfo={inputInfo} />
      {/* <SortSections2/> */}
    </div> 
  )
}

