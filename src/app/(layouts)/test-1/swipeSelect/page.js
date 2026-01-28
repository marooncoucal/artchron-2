import SwipeSelect2 from "@/app/_components/games/Swipe-select-2"
import SwipeSelect1 from "@/app/_components/games/Swipe-select-motion"

const inputInfo = [
    {
    slug: "question1",
    question: "Какая из этих картин выполнена в стиле постимпрессионизм?",
    choices: [
      {
        src: "/testImgs/swipeHor1/scroll4.jpg",
        typeSrc: "vertical",
        aspectWidth: "800",
        aspectHeight: "1033",
        name: "«Две сестры (На террасе)», 1881",
        description: "Картина написана французским художником Пьером Огюстом Ренуаром. «Две сестры» — это название, данное картине Ренуаром, а «На террасе» — её первым владельцем Полем Дюран-Рюэлем.",
        isCorrect: false
      },
      {
        src: "/testImgs/swipeHor1/scroll5.jpg",
        typeSrc: "vertical",
        aspectWidth: "1584",
        aspectHeight: "2000",
        name: "«Подсолнухи», 1888",
        description: "Произведение является частью серии из 11 картин Винсента ван Гога с подсолнухами",
        isCorrect: true
      }, // правильный true, остальные false
    ],
  },
  {
    slug: "question2",
    question: "Какую из этих картин написл Альфред Сислей?",
    choices: [
      {
        src: "/testImgs/swipeHor1/scroll6.jpg",
        typeSrc: "vertical",
        aspectWidth: "500",
        aspectHeight: "687",
        name: "«Абсент» («Люди в кафе»), 1876",
        description: "На этом полотне Дега запечатлел сцену из жизни небогатых парижан, изобразив женщину, перед которой стоит не первый бокал с абсентом и мужчину с признаками похмелья.",
        isCorrect: false
      },
      {
        src: "/testImgs/swipeHor1/scroll7.jpg",
        typeSrc: "horizontal",
        aspectWidth: "2217",
        aspectHeight: "1600",
        name: "«Регата в Молези», 1874",
        description: "На этой картине, написанной в Великобритании, Сислей постарался уловить трепетание флагов на ветру и сопутствующую игру света и тени",
        isCorrect: true
      }, // правильный true, остальные false
      {
        src: "/testImgs/swipeHor1/scroll8.jpg",
        typeSrc: "vertical",
        aspectWidth: "3524",
        aspectHeight: "4189",
        name: "«Купальщики», 1869",
        description: "Это работа Жана-Фредерика Базиля в стиле раннего импрессионизма, в которой он запечатлел мужскую наготу в повседневной жизни",
        isCorrect: false
      }, 
    ],
  },
  {
    slug: "question3",
    question: "Какая из этих картин выполнена в стиле импрессионизм?",
    choices: [
      {
        src: "/testImgs/swipeHor1/scroll1.jpg",
        typeSrc: "horizontal",
        aspectWidth: "320",
        aspectHeight: "260",
        name: "«Игроки в Карты», 1895",
        description: "Произведение из серии знаковых картин Поля Сезанна, изображающая сосредоточенных крестьян за игрой. Это шедевр постимпрессионизма, отличающийся монументальностью, геометрической четкостью форм и почти неподвижной атмосферой.",
        isCorrect: false
      },
      {
        src: "/testImgs/swipeHor1/scroll2.jpg",
        typeSrc: "vertical",
        aspectWidth: "500",
        aspectHeight: "560",
        name: "«Автопортрет с перевязанным ухом и трубкой», 1889",
        description: "Драматичное произведение Винсента Ван Гога, написанное после инцидента с самокалечением.",
        isCorrect: false
      },
      {
        src: "/testImgs/swipeHor1/scroll3.jpg",
        typeSrc: "horizontal",
        aspectWidth: "320",
        aspectHeight: "260",
        name: "«Завтрак на траве», 1866",
        description: "Картина французского художника Клода Моне. Оригинальная, частично утраченная картина хранится в Музее Орсе в Париже.",
        isCorrect: true
      }, // правильный true, остальные false
    ],
  },
]

export default function SwipeSelectPage1() {
  return (
    <div className="SwipeSelectPage1 h-full w-full overflow-hidden">
        {/* <SwipeSelect1 inputInfo={inputInfo} /> */}
        <SwipeSelect2 inputInfo={inputInfo} 
          // link={"/testTypes/sortSections"} 
          link={"/test-1/true"} 
          // link={"/resultScreen"} 
        />
    </div>
  )
}