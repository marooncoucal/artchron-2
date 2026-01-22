import PickPainting1 from "@/app/_components/games/pickPaintingSQR"

const variantsInfo = [
  {
    slug: "question1",
    question: "Какая из картин принадлежит художнику-импрессионисту Клоду Моне?",
    choices: [
      { 
        src: "/testImgs/pickPainting1/src1.jpg", 
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting1/src2.jpg", 
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting1/src2.jpg", 
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting1/src3.jpg", 
        isCorrect: true 
      }, // правильный true, остальные false
    ],
  },
  {
    slug: "question2",
    question: "второй вопрос",
    choices: [
      { 
        src: "/testImgs/pickPainting1/src4.jpg", 
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting1/src5.jpg", 
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting1/src6.jpg", 
        isCorrect: true 
      }, // правильный true, остальные false
      { 
        src: "/testImgs/pickPainting1/src5.jpg", 
        isCorrect: false 
      },
    ],
  },
]

export default function PickPaintingrPage() {
  return <PickPainting1 />
}