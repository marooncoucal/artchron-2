import Podbor from "@/app/_components/games/Podbor";

const quizInfo = [
  {
    slug: "question1",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz2/src1.jpg", // или задник или основная к вопросу (по типу)
    question: "В каких годах зародился Импрессионизм?",
    choices: [
      { text: "1790х", isCorrect: false},
      { text: "1840х", isCorrect: false},
      { text: "1880х", isCorrect: false},
      { text: "1860х", isCorrect: true}, // правильный true, остальные false
    ],
  },
  {
    slug: "question2",
    type: "paintings", // где вопрос "чья картина"
    src: "/testImgs/quiz2/src2.jpg", // или задник или основная к вопросу (по типу)
    question: "Картина «Синие танцовщицы» принадлежит...",
    choices: [
      { text: "Камилю Писсарро", isCorrect: false},
      { text: "Эдгару Дега", isCorrect: true}, // правильный true, остальные false
      { text: "Ренуару", isCorrect: false},
      { text: "Эдуарду Мане", isCorrect: false},
    ],
  },
]

export default function PodborPage() {
  return <Podbor />;
}
