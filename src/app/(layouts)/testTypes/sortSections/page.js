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
      <div className="font-bold text-2xl">Разнесите картинки по областям</div>
      <SortSections1 inputInfo={inputInfo} />
    </div> 
  )
}

// const inputInfo = {
//     author1: {
//       name: "Казимир Малевич",
//       answers: [
//         { src: "/testImgs/sortSections1/malevich-blackSquare.jpg"},
//         { src: "/testImgs/sortSections1/malevich-cowViolin.jpg"},
//         { src: "/testImgs/sortSections1/malevich-kosar.jpg"},
//         { src: "/testImgs/sortSections1/malevich-portrait.jpg"},
//       ]
//     },
//     author2: {
//       name: "Ван Гог",
//       answers: [
//         { src: "/testImgs/sortSections1/vangogh-portrait.jpg"},
//         { src: "/testImgs/sortSections1/vangogh-starryNight.jpg"},
//         { src: "/testImgs/sortSections1/vangogh-terrace.jpg"},
//       ]
//     },
//     // unite to spawn origin — const images = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
// }