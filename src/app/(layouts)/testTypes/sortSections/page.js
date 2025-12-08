import SortSections1 from "@/app/_components/games/Sort-sections-motion";

const inputInfo = {
    author1: {
      name: "Казимир Малевич",
      answers: [
        { src: "/testImgs/trueTest1/black-square.jpg"},
      ]
    },
    author2: {
      name: "Ван Гог",
      answers: [
        { src: "/testImgs/trueTest1/vangogh.jpg"},
        { src: "/testImgs/trueTest1/vangogh1.jpg"},
      ]
    },
    // unite to spawn origin — const images = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
}

export default function SortSectionsPage1() {
  return (
    <div className="relative px-5 w-full h-full flex flex-col justify-center items-center gap-5">
      <div className="font-bold text-2xl">Разнесите картинки по областям</div>
      <SortSections1 inputInfo={inputInfo} />
    </div> 
  )
}

// const inputInfo2 = {
//     images:[
//         { 
//           key: 1,
//           src: "/testImgs/trueTest1/black-square.jpg"
//         },
//         { 
//           key: 2,
//           src: "/testImgs/trueTest1/vangogh.jpg"
//         },
//         {
//           key: 3, 
//           src: "/testImgs/trueTest1/vangogh1.jpg"
//         },
//     ],
//     author1: {
//       name: "Казимир Малевич",
//       answers: [
//         images[0].src,
//       ]
//     },
//     author2: {
//       name: "Ван Гог",
//       answers: [
//         images[1].src,
//         images[2].src
//       ]
//     },
// }