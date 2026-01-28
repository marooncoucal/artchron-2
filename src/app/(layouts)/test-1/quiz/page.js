import Podbor from "@/app/_components/games/Podbor";
import Quiz from "@/app/_components/games/Quiz";
import QuizAC from "@/app/_components/games/quizAC";

const quizInfo = [
  {
    slug: "question1",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz1/cover1.png", // или задник или основная к вопросу (по типу)
    question: "В каких годах зародился Импрессионизм?",
    choiceBoxStyle: "grid",
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
    src: "/testImgs/quiz1/test_1.jpg", // или задник или основная к вопросу (по типу)
    question: "Картина «Голубые танцовщицы» принадлежит...",
    choiceBoxStyle: "",
    choices: [
      { text: "Камилю Писсарро", isCorrect: false},
      { text: "Эдгару Дега", isCorrect: true}, // правильный true, остальные false
      { text: "Огюсту Ренуару", isCorrect: false},
      { text: "Эдуарду Мане", isCorrect: false},
    ],
  },
  {
    slug: "question3",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz1/cover2.jpg", // или задник или основная к вопросу (по типу)
    question: "Как называлась выставка, параллельная официальной, на которой были представлены полотна и скульптуры импрессионистов?",
    choiceBoxStyle: "",
    choices: [
      { text: "«Утвердители нового искусства»", isCorrect: false},
      { text: "«Четыре искусства»", isCorrect: false},
      { text: "«Салон отверженных»", isCorrect: true}, // правильный true, остальные false
      { text: "«Мамонтовский художественный кружок»", isCorrect: false}, 
    ],
  },
  {
    slug: "question4",
    type: "paintings", // где вопрос "чья картина"
    src: "/testImgs/quiz1/test_2.jpg", // или задник или основная к вопросу (по типу)
    question: "Картина «Вокзал Сен-Лазар» принадлежит...",
    choiceBoxStyle: "",
    choices: [
      { text: "Поль Сезанн", isCorrect: false},
      { text: "Огюст Ренуар", isCorrect: false}, 
      { text: "Клоду Моне", isCorrect: true}, // правильный true, остальные false
      { text: "Эдуард Мане", isCorrect: false},
    ],
  },
  {
    slug: "question5",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz1/cover3.jpg", // или задник или основная к вопросу (по типу)
    question: "Какой главный элемент изображения импрессионистов?",
    choiceBoxStyle: "",
    choices: [
      { text: "Световоздушная среда", isCorrect: true}, // правильный true, остальные false
      { text: "Композиция", isCorrect: false},
      { text: "Объемность фигур", isCorrect: false},
      { text: "Светотени и перспектива", isCorrect: false}, 
    ],
  },
  {
    slug: "question6",
    type: "paintings", // где вопрос "чья картина"
    src: "/testImgs/quiz1/test_3.png", // или задник или основная к вопросу (по типу)
    question: "Как называется эта картина",
    choiceBoxStyle: "",
    choices: [
      { text: "«Завтрак всадников»", isCorrect: false},
      { text: "«Обед всадников»", isCorrect: false}, 
      { text: "«Завтрак гребцов»", isCorrect: true}, // правильный true, остальные false
      { text: "«Завтрак»", isCorrect: false},
    ],
  },
  {
    slug: "question7",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz1/cover4.jpg", // или задник или основная к вопросу (по типу)
    question: "Кто из данных художников является импрессионистом?",
    choiceBoxStyle: "grid",
    choices: [
      { text: "Анри Матисс", isCorrect: false},
      { text: "Иероним Босх", isCorrect: false},
      { text: "Огюст Ренуар", isCorrect: true}, // правильный true, остальные false
      { text: "Густав Климт", isCorrect: false}, 
    ],
  },
  {
    slug: "question8",
    type: "paintings", // где вопрос "чья картина"
    src: "/testImgs/quiz1/test_4.jpg", // или задник или основная к вопросу (по типу)
    question: "Кто является автором картины «Завтрак на траве»",
    choiceBoxStyle: "grid",
    choices: [
      { text: "Эдуард Мане", isCorrect: true}, // правильный true, остальные false
      { text: "Клод Моне", isCorrect: false}, 
      { text: "Винсент Ван Гог", isCorrect: false},
      { text: "Поль Гоген", isCorrect: false},
    ],
  },
  {
    slug: "question9",
    type: "textField", // где вопрос текстовый
    src: "/testImgs/quiz1/cover5.jpg", // или задник или основная к вопросу (по типу)
    question: "У Эдгара Дега были две любимые темы. Это...",
    choiceBoxStyle: "",
    choices: [
      { text: "Натюрморт и интерьер", isCorrect: false},
      { text: "Фехтование и солдаты", isCorrect: false},
      { text: "Скачки и балет", isCorrect: true}, // правильный true, остальные false
      { text: "Дуэли и танцовщицы", isCorrect: false}, 
    ],
  }
]

export default function QuizPage() {
  return(
    <>    
      <QuizAC questions={quizInfo} 
        link={"/test-1/swipeSelect"}
      />
      {/* <Quiz /> */}
      {/* <Podbor /> */}
    </>

  ) 
}