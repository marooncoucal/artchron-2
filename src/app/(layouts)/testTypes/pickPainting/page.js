import PickPainting1 from "@/app/_components/games/pickPaintingSQR"

const variantsInfo = [
  {
    slug: "question1",
    question: "Какая из картин принадлежит Камиля Писсарро?",
    choices: [
      { 
        src: "/testImgs/pickPainting0/zhatva-fuko.jpg", 
        typeSrc: "horizontal",
        name: "Жатва в Монфуко",
        author: "Камиля Писсарро",
        description: "текст о произведении",
        isCorrect: true
      }, // правильный true, остальные false
      { 
        src: "/testImgs/pickPainting0/malevich-kosar.jpg", 
        typeSrc: "vertical",
        name: "Косарь",
        author: "Казимир Малевич",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting0/malevich-portrait.jpg",
        typeSrc: "vertical",
        name: "Автопортрет",
        author: "Казимир Малевич",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting0/vangogh-starryNight.jpg", 
        typeSrc: "horizontal",
        name: "Звездная ночь",
        author: "Ван Гог",
        description: "текст о произведении",
        isCorrect: false 
      }, 
    ],
  },
  {
    slug: "question2",
    question: "Где ночная терасса?",
    choices: [
      { 
        src: "/testImgs/pickPainting0/vangogh-portrait.jpg", 
        typeSrc: "horizontal",
        name: "Автопортрет",
        author: "Ван Гог",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting0/vangogh-terrace.jpg", 
        typeSrc: "vertical",
        name: "Ночная Терасса",
        author: "Ван Гог",
        description: "текст о произведении",
        isCorrect: true 
      }, // правильный true, остальные false
      { 
        src: "/testImgs/pickPainting0/malevich-cowViolin.jpg", 
        typeSrc: "vertical",
        name: "Корова и скрипка",
        author: "Казимир Малевич",
        description: "текст о произведении",
        isCorrect: false 
      },
      { 
        src: "/testImgs/pickPainting0/malevich-blackSquare.jpg",
        typeSrc: "horizontal",
        name: "Черный квадрат",
        author: "Казимир Малевич",
        description: "текст о произведении",
        isCorrect: false 
      },
    ],
  },
]

export default function PickPaintingrPage() {
  return <PickPainting1 questions={variantsInfo} 
    link={"/testTypes/quiz"} 
    // link={"/resultScreen"}
  />
}