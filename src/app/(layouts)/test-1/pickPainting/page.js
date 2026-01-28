import PickPainting1 from "@/app/_components/games/pickPaintingSQR"

const variantsInfo = [
  {
    slug: "question1",
    question: "Какое из произведений принадлежит Огюсту Ренуару?",
    choices: [
      {
        src: "/testImgs/pickPainting1/pick1.jpeg",
        typeSrc: "horizontal",
        name: "«Церковь в Море, Вечер»",
        author: "Альфред Сислей",
        description: "1894 год. В 1870-х годах художник переехал во Францию и поселился в местечке Море-сюр-Луэн, где среди прочего написал серию картин, на которых изображена городская церковь в разное время суток",
        isCorrect: false
      },
      {
        src: "/testImgs/pickPainting1/pick2.png",
        typeSrc: "horizontal",
        name: "«Массажистка»",
        author: "Эдгар Дега",
        description: "1896–1911 год. Институт искусства Курто, Лондон",
        isCorrect: false
      },
      {
        src: "/testImgs/pickPainting1/pick3.jpg",
        typeSrc: "vertical",
        name: "«Ночная Терраса Кафе»",
        author: "Винсент Ван Гог",
        description: "1888 год. Произведение постимпрессионизма, находится в Музее Крёллер-Мюллера (Оттерло, Нидерланды)",
        isCorrect: false
      },
      {
        src: "/testImgs/pickPainting1/pick4.jpg",
        typeSrc: "horizontal",
        name: "«Бал в Мулен де ла Галетт»",
        author: "Огюст Ренуар",
        description: "1876 год. В конце XIX века Монмартр был бедным районом Парижа, но Ренуар запечатлел атмосферу веселья на танцевальном вечере",
        isCorrect: true
      }, // правильный true, остальные false
    ],
  },
  {
    slug: "question2",
    question: "Выберите картину «Бульвар Монмартр зимним утром»",
    choices: [
      {
        src: "/testImgs/pickPainting1/pick5.jpg",
        typeSrc: "vertical",
        name: "«Дорога в Версаль в Лувесьенне»",
        author: "Камиль Писсаро",
        description: "1870 год. Известна как пример раннего импрессионизма, изображающий сельскую дорогу и фокусирующийся на передаче световых и атмосферных эффектов в разное время года.",
        isCorrect: false
      },
      {
        src: "/testImgs/pickPainting1/pick6.jpg",
        typeSrc: "horizontal",
        name: "«Бульвар Монмартр зимним утром»",
        author: "Камиль Писсаро",
        description: "1897 год. Художник создал целую серию из тринадцати полотен с видом на Большие бульвары Парижа из окна отеля, фиксируя различные погодные условия и время суток, и эта картина является частью того цикла.",
        isCorrect: true
      }, // правильный true, остальные false
      {
        src: "/testImgs/pickPainting1/pick7.jpg",
        typeSrc: "vertical",
        name: "«Стог сена около Живерни»",
        author: "Клод Моне",
        description: "Картина из собрания Государственного Эрмитажа",
        isCorrect: false
      },
      {
        src: "/testImgs/pickPainting1/pick8.jpg",
        typeSrc: "horizontal",
        name: "«Пляж в Трувиле»",
        author: "Клод Моне",
        description: "1870 год. Местечко Трувиль-сюр-Мер в Нормандии было фешенебельным курортом. Здесь Клод Моне написал несколько картин, изобразив отдыхающих на пляже",
        isCorrect: false
      },
    ],
  },
]

export default function PickPaintingrPage() {
  return <PickPainting1 questions={variantsInfo} 
    link={"/test-1/quiz"} 
    // link={"/resultScreen"}
  />
}