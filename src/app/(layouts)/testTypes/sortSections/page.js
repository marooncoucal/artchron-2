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
  // {
  //   src: "/testImgs/sortSections0/malevich-blackSquare.jpg",
  //   section: inputInfo.sortSections.author1,
  // },
  {
    src: "/testImgs/sortSections0/malevich-cowViolin.jpg",
    section: inputInfo.sortSections.author1,
  },
  {
    src: "/testImgs/sortSections0/malevich-kosar.jpg",
    section: inputInfo.sortSections.author1,
  },
  // {
  //   src: "/testImgs/sortSections0/malevich-portrait.jpg",
  //   section: inputInfo.sortSections.author1,
  // },
  // {
  //   src: "/testImgs/sortSections0/vangogh-portrait.jpg",
  //   section: inputInfo.sortSections.author2,
  // },
  // {
  //   src: "/testImgs/sortSections0/vangogh-starryNight.jpg",
  //   section: inputInfo.sortSections.author2,
  // },
  {
    src: "/testImgs/sortSections0/vangogh-terrace.jpg",
    section: inputInfo.sortSections.author2,
  },
]

export default function SortSectionsPage1() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-5 overflow-hidden">
      <SortSections1 inputInfo={inputInfo} 
        // link={"/testTypes/sortSections"}
      />
      {/* <SortSections2/> */}
    </div> 
  )
}

