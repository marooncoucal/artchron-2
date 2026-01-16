"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { ArrowTestLeft, ArrowTestRight } from "../icons";
import TaskDescription from "../taskDescription";
import { useRouter } from "next/navigation";

// const questions = [
//   {
//     title: "Картину «Чёрный квадрат» Казимир Малевич впервые представил на выставке в Париже в 1915 году.",
//     image: "/testImgs/trueTest1/black-square.jpg",
//     isTrue: false,
//     explanation: "Картина была представлена в 1915 году, но не в Париже, а в Петрограде.",
//   },
//   {
//     title: "Винсент Ван Гог отрезал себе ухо.",
//     image: "/testImgs/trueTest1/vangogh.jpg",
//     isTrue: true,
//     explanation: "Это правда — Ван Гог отрезал себе часть уха в 1888 году во Франции.",
//   },
//   {
//     title: "Звёздную ночь написал Микеланджело.",
//     image: "/testImgs/trueTest1/vangogh1.jpg",
//     isTrue: false,
//     explanation: "Это ложь — «Звёздная ночь» была написана Винсентом Ван Гогом в 1889 году.",
//   },
// ];

export default function TrueMotion({inputInfo, link}) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [newCardAnimating, setNewCardAnimating] = useState(false)

  const leftOption = inputInfo.choiceVariants.leftText
  const rightOption = inputInfo.choiceVariants.rightText
  const questions = inputInfo.questions
  const current = questions[currentIndex]

  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)
  const greenOverlayOpacity = useTransform(motionX, [0, 100], [0, 0.7])
  const redOverlayOpacity = useTransform(motionX, [-100, 0], [0.7, 0])

  const handleAnswer = (answer) => {
    setSelected(answer)
    setShowExplanation(true)
  }

  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x // track drag distance
    const threshold = 200 // trigger answer px
    // answer unchangable + isn't scrollung next q
    if (!showExplanation && !isAnimating) { 
      if (dragDistance > threshold) {
        handleAnswer(true)
      } else if (dragDistance < -threshold) {
        handleAnswer(false)
      }
    }
    animate(motionX, 0, { type: "spring", stiffness: 300, damping: 30 }) // div snap back X
    animate(motionY, 0, { type: "spring", stiffness: 300, damping: 30 }) // div snap back Y
  }

  const handleNext = () => {
    if (currentIndex !== questions.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setSelected(null)
        setShowExplanation(false)
        setIsAnimating(false)
      }, 410)
    }
    setTimeout(() => {
      if (currentIndex !== questions.length - 1) {
        setCurrentIndex((prev) => (prev + 1))
      }
      setNewCardAnimating(true)
      setTimeout(() => {
        setNewCardAnimating(false)
      }, 400)
    }, 410)
    setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        router.push(link ?? "#")
      }
    }, 410)
  };

  const isCorrect = selected === current.isTrue;

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <TaskDescription
          header={"Распредели произведения по направлениям"}
          desc={"перетаскивая их влево/вправо"}
      />

      <div
        key={currentIndex}
        className={`relative w-full h-full transition-all ease-in-out 
          ${ isAnimating ? "-translate-y-15 opacity-0 duration-400" : ""}
          ${ newCardAnimating ? "translate-y-15 opacity-0 duration-400" : "opacity-100"}
          `}
      >
        <div className="w-full h-full pb-50 pt-16 flex flex-col gap-5">
          {/* <p className="text-[18px] text-black leading-snug text-center">
            {current.title}
          </p> */}
          <motion.div
            drag
            dragConstraints={{ left: -270, right: 270, top: -20, bottom: 100 }}
            dragElastic={0.1}
            style={{ x: motionX, y: motionY }}
            onDragEnd={handleDragEnd}
            className="h-full w-[80%] mx-auto drop-shadow-lg drop-shadow-gray-500 cursor-grab active:cursor-grabbing "
          >
            <Image
              // src={current.image}
              src={current.src}
              alt="question visual"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
            {/* overlays */}
            <motion.div
              style={{ opacity: greenOverlayOpacity }}
              className={`absolute top-0 left-0 right-0 w-full h-full pointer-events-none flex items-center justify-center bg-black/70`}
            >
              <p className="font-button text-[26px] text-white">{leftOption}</p>
            </motion.div>
            <motion.div
              style={{ opacity: redOverlayOpacity }}
              className={`absolute top-0 left-0 right-0 w-full h-full pointer-events-none flex items-center justify-center bg-black/70`}
            >
              <p className="font-button text-[26px] text-white">{rightOption}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {!showExplanation ? (
        <div className={`absolute bottom-5 left-5 right-5 flex-center flex-col gap-0`}>
          {/* <Button onClick={() => handleAnswer(false)}>ложь</Button> */}
          {/* <Button onClick={() => handleAnswer(true)}>правда</Button> */}
          <SwipeButton onClick={() => handleAnswer(false)} left={true}>{leftOption}</SwipeButton>
          <SwipeButton onClick={() => handleAnswer(true)} right={true}>{rightOption}</SwipeButton>
        </div>
      ) : (
        <div>
          <div className={`absolute bottom-5 left-5 right-5 flex-center flex-col gap-0`}>
            <SwipeButton left={true}>{leftOption}</SwipeButton>
            <SwipeButton right={true}>{rightOption}</SwipeButton>
          </div>
          <AnswerBox
            isCorrect={isCorrect}
            isAnimating={isAnimating}
            newCardAnimating={newCardAnimating}
            answer={current.explanation}
            onClick={() => handleNext()}
          />
        </div>
      )}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`min-w-[152px] w-full h-[45px] flex items-center justify-center
      text-lg text-black capitalize 
      border border-black bg-white 
      shadow-md inset-shadow-none
      hover:shadow-none hover:inset-shadow-sm hover:inset-shadow-gray-300 `}
    >
      {children}
    </div>
  )
}

function SwipeButton({children, onClick, left = false, right = false}){
  return(
    <div onClick={onClick} className="select-none w-full flex-center py-2">
      <div className="cursor-pointer w-full flex justify-between max-w-[320px]">
        {left && <ArrowTestLeft color={"#7B7B7B"}/>}
        <div className="font-button text-ac-gray-light">{children}</div>
        {right && <ArrowTestRight color={"#7B7B7B"}/>}
      </div>
    </div>
  )
}

function AnswerBox({ isCorrect, answer, onClick, isAnimating, newCardAnimating }) {
  return (
    <div
      className={`absolute inset-0 bottom-28 top-24 z-10 flex justify-center
        ${ isAnimating ? "-translate-y-15 duration-400 bg-white" : "bg-white/80"}
      `}
    >
      <div onClick={onClick}
        className={`w-full flex-center flex-col gap-1 pt-4 px-4 text-left
          ${ isAnimating ? "opacity-0 duration-400" : "opacity-100"}
          ${ newCardAnimating ? "opacity-0" : "opacity-0"}
        `}
      >
          <div className={`text-[26px] font-h3 uppercase text-shadow-[0px_0px_6px_rgba(255,255,255,1)] ${ isCorrect ? "text-[#4CAF50]" : "text-[#E46F2B]"}`}>
            {isCorrect ? "Верно!" : "Не верно"}
          </div>
        {!isCorrect && <p className="text-[14px] text-ac-gray-light mb-4">{answer}</p>}
        {isCorrect && <p className="mb-4 mt-1 text-[26px] font-h3 uppercase text-shadow-[0px_0px_6px_rgba(255,255,255,1)] text-[#4CAF50]">идем дальше</p>}
      </div>
    </div>
  )
}

function AnswerBoxBottom1({ isCorrect, answer, onClick }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-10 flex justify-center`}
    >
      <div
        className="w-full rounded-t-[10px] bg-white pt-4 px-4 text-left drop-shadow-[0px_-10px_10px_rgba(0,0,0,0.15)]"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[18px] font-semibold ${ isCorrect ? "text-[#4CAF50]" : "text-[#E46F2B]"}`}>
            {isCorrect ? "✓ Верно" : "× Неверно"}
          </span>
        </div>
        <p className="text-base mb-4">
          <span className="font-bold">Правильный ответ:</span> {answer}
        </p>
        <button
          onClick={onClick}
          className={`w-full h-[45px] ${ isCorrect ? "bg-[#4CAF50]" : "bg-[#E46F2B]"} text-white font-bold mb-4`}
        >
          ПОНЯТНО
        </button>
      </div>
    </div>
  )
}
