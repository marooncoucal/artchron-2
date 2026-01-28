import SwipeSelect2 from "@/app/_components/games/Swipe-select-2"
import SwipeSelect1 from "@/app/_components/games/Swipe-select-motion"

const inputInfo = [
  {
    slug: "question1",
    question: "Какая из этих картин выполнена в стиле импрессионизма?",
    choices: [
      { 
        src: "/testImgs/swipeHor0/zhatva-fuko.jpg", 
        typeSrc: "horizontal",
        name: "«Жатва в Монфуко», 1876",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/swipeHor0/vangogh-starryNight.jpg",
        typeSrc: "horizontal",
        name: "звездная ночь",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/swipeHor0/malevich-kosar.jpg",
        typeSrc: "vertical",
        name: "косарь",
        description: "текст о произведении",
        isCorrect: true 
      }, // правильный true, остальные false
    ],
  },
  // {
  //   slug: "question2",
  //   question: "второй вопрос",
  //   choices: [
  //     { 
  //       src: "/testImgs/swipeHor0/malevich-cowViolin.jpg", 
  //       typeSrc: "vertical",
  //       name: "первая картина",
  //       description: "текст о произведении",
  //       isCorrect: false 
  //     },
  //     { 
  //       src: "/testImgs/swipeHor0/malevich-portrait.jpg",
  //       typeSrc: "vertical",
  //       name: "вторая картина",
  //       description: "текст о произведении",
  //       isCorrect: true 
  //     }, // правильный true, остальные false
  //   ],
  // },
]

export default function SwipeSelectPage1() {
  return (
    <div className="SwipeSelectPage1 h-full w-full overflow-hidden">
        {/* <SwipeSelect1 inputInfo={inputInfo} /> */}
        <SwipeSelect2 inputInfo={inputInfo} 
          // link={"/testTypes/sortSections"} 
          link={"/testTypes/true"} 
          // link={"/resultScreen"} 
        />
    </div>
  )
}