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
    src: "/testImgs/ChoiceLR1/src1.jpg",
    choiceD: ChoiceLR.choiceVariants.leftText,
    isTrue: false, // left - lie
    explanation: "текст почему неверно 1",
  },
  {
    slug: "question2",
    src: "/testImgs/ChoiceLR1/src2.jpg",
    choiceD: ChoiceLR.choiceVariants.rightText,
    isTrue: true, // right - true
    explanation: "текст почему неверно 2",
  },
  {
    slug: "question3",
    src: "/testImgs/ChoiceLR1/src3.jpg",
    choiceD: ChoiceLR.choiceVariants.rightText,
    isTrue: true, // right - true
    explanation: "текст почему неверно 3",
  },
  {
    slug: "question4",
    src: "/testImgs/ChoiceLR1/src4.jpg",
    choiceD: ChoiceLR.choiceVariants.leftText,
    isTrue: false, // left - lie
    explanation: "текст почему неверно 4",
  },
]

export default function TruePage() {
  return (
    <div className="truePage h-full w-full">
      <TrueMotion />
    </div>
  )
}
