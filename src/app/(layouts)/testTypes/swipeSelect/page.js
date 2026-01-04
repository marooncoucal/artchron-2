import SwipeSelect1 from "@/app/_components/games/Swipe-select-motion"

const inputInfo = [
  {
    slug: "question1",
    question: "Какая из этих картин выполнена в стиле импрессионизма?",
    choices: [
      { 
        src: "/testImgs/swipeSelect1/src1.jpg", 
        typeSrc: "horizontal",
        name: "«Жатва в Монфуко», 1876",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/swipeSelect1/src2.jpg",
        typeSrc: "vertical",
        name: "вторая картина",
        description: "текст о произведении",
        isCorrect: true 
      }, // правильный true, остальные false
      { 
        src: "/testImgs/swipeSelect1/src3.jpg",
        typeSrc: "horizontal",
        name: "третья картина",
        description: "текст о произведении",
        isCorrect: false 
      },
    ],
  },
  {
    slug: "question2",
    question: "второй вопрос",
    choices: [
      { 
        src: "/testImgs/swipeSelect1/src4.jpg", 
        name: "первая картина",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/swipeSelect1/src5.jpg",
        name: "вторая картина",
        description: "текст о произведении",
        isCorrect: true 
      }, // правильный true, остальные false
    ],
  },
]

export default function SwipeSelectPage1() {
  return (
    <div className="SwipeSelectPage1 h-full w-full">
        <SwipeSelect1 />
    </div>
  )
}