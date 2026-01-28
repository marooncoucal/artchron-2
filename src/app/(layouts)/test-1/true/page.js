import True from "@/app/_components/games/True";
import TrueMotion from "@/app/_components/games/True-motion";

const ChoiceLR = {
  choiceVariants: {
    leftText: "импрессионизм", // left - lie
    rightText: "постимпрессионизм" // right - true
  },
  questions: [],
}

ChoiceLR.questions = [
  {
    slug: "question1",
    src: "/testImgs/trueTest1/impres_1.png",
    choiceD: ChoiceLR.choiceVariants.leftText,
    isTrue: false, // left - lie
    explanation: "Потому что Клод Моне фиксирует мимолётное состояние света и воздуха, растворяя форму в движении мазка — ключевой принцип импрессионизма.",
  },
  {
    slug: "question2",
    src: "/testImgs/trueTest1/postimpres_1.png",
    choiceD: ChoiceLR.choiceVariants.rightText,
    isTrue: true, // right - true
    explanation: "Потому что цвет и свет здесь работают не как наблюдение, а как выражение внутреннего переживания — признак постимпрессионизма.",
  },
  {
    slug: "question3",
    src: "/testImgs/trueTest1/impres_2.png",
    choiceD: ChoiceLR.choiceVariants.leftText,
    isTrue: false, // left - lie
    explanation: "Потому что сцена построена на передаче световоздушной среды и ритма движений: форма растворяется в цвете и мазке, фиксируя живое состояние природы — принцип импрессионизма.",
  },
  {
    slug: "question4",
    src: "/testImgs/trueTest1/impres_3.png",
    choiceD: ChoiceLR.choiceVariants.leftText,
    isTrue: false, // left - lie
    explanation: "Потому что художник передаёт не предметность, а состояние природы: холодный свет, рассеянный воздух и вибрацию цвета, растворяя форму в живописном впечатлении — принцип импрессионизма.",
  },
  {
    slug: "question5",
    src: "/testImgs/trueTest1/postimpres_2.png",
    choiceD: ChoiceLR.choiceVariants.rightText,
    isTrue: true, // right - true
    explanation: "Потому что Сезанн стремится к устойчивой структуре и объёмной форме, выходя за пределы чистого впечатления — суть постимпрессионизма.",
  }
]

export default function TruePage() {
  return (
    <div className="truePage h-full w-full">
      <TrueMotion inputInfo={ChoiceLR} 
        link={"/resultScreen"} 
        // link={"/test-1/sortSections"}
      />
    </div>
  )
}
