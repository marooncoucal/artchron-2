import Podbor from "@/app/_components/games/Podbor";
import Quiz from "@/app/_components/games/Quiz";
import QuizAC from "@/app/_components/games/quizAC";

const quizInfo = [
  // {
  //   slug: "question0",
  //   type: "paintings", // где вопрос "чья картина"
  //   src: "/testImgs/quiz2/src0.jpg", // или задник или основная к вопросу (по типу)
  //   question: "?????",
  //   choices: [
  //     { text: "1", isCorrect: false},
  //     { text: "2", isCorrect: false},
  //     { text: "3", isCorrect: true}, // правильный true, остальные false
  //     { text: "4", isCorrect: false}, 
  //   ],
  // },
  {
    slug: "question1",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz0/src1.jpg", // или задник или основная к вопросу (по типу)
    question: "В каких годах зародился Импрессионизм?",
    choices: [
      { text: "1790", isCorrect: false},
      { text: "1840", isCorrect: false},
      { text: "1880", isCorrect: false},
      { text: "1860", isCorrect: true}, // правильный true, остальные false
    ],
  },
  {
    slug: "question2",
    type: "paintings", // где вопрос "чья картина"
    src: "/testImgs/quiz0/src2.jpg", // или задник или основная к вопросу (по типу)
    question: "Картина «Синие танцовщицы» принадлежит...",
    choices: [
      { text: "Камилю Писсарро", isCorrect: false},
      { text: "Эдгару Дега", isCorrect: true}, // правильный true, остальные false
      { text: "Ренуару", isCorrect: false},
      { text: "Эдуарду Мане", isCorrect: false},
    ],
  }
]

export default function QuizPage() {
  return(
    <>    
      <QuizAC questions={quizInfo} 
        link={"/testTypes/swipeSelect"}
      />
    </>
  ) 
}