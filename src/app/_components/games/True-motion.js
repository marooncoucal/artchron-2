"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

const questions = [
  {
    title:
      "Картину «Чёрный квадрат» Казимир Малевич впервые представил на выставке в Париже в 1915 году.",
    image: "/testImgs/trueTest1/black-square.jpg",
    isTrue: false,
    explanation:
      "Картина была представлена в 1915 году, но не в Париже, а в Петрограде.",
  },
  {
    title: "Винсент Ван Гог отрезал себе ухо.",
    image: "/testImgs/trueTest1/vangogh.jpg",
    isTrue: true,
    explanation:
      "Это правда — Ван Гог отрезал себе часть уха в 1888 году во Франции.",
  },
  {
    title: "Звёздную ночь написал Микеланджело.",
    image: "/testImgs/trueTest1/vangogh1.jpg",
    isTrue: false,
    explanation:
      "Это ложь — «Звёздная ночь» была написана Винсентом Ван Гогом в 1889 году.",
  },
];

export default function TrueMotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = questions[currentIndex];

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const greenOverlayOpacity = useTransform(motionX, [0, 120], [0, 0.7]);
  const redOverlayOpacity = useTransform(motionX, [-120, 0], [0.7, 0]);

  const handleAnswer = (answer) => {
    setSelected(answer);
    setShowExplanation(true);
  };

  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x // track drag distance
    const threshold = 200 // trigger answer px
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
    setIsAnimating(true);
    setTimeout(() => {
      setSelected(null);
      setShowExplanation(false);
      setCurrentIndex((prev) => (prev + 1) % questions.length);
      setIsAnimating(false);
    }, 300);
  };

  const isCorrect = selected === current.isTrue;

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* load line */}
      <div className="w-full h-[18px] flex items-center gap-2 mb-7 px-5">
        <button className="w-5 h-5 text-[20px] text-gray-400 leading-none">
          ×
        </button>
        <div className="flex-1 h-full border-2 border-[#e5e5ea] bg-gray-50 rounded-full">
          <div
            className="h-full bg-gray-300 transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100 - 20}%`,
            }}
          ></div>
        </div>
      </div>
      {/* task desc */}
      <h2 className="text-[24px] font-semibold text-black mb-2">Выберите: правда или ложь</h2>

      <div
        key={currentIndex}
        className={`relative w-full h-full transition-all duration-300 ease-in-out 
          ${isAnimating? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
      >
        <div className="w-full h-full pb-28 flex flex-col gap-5">
          <p className="text-[18px] text-black leading-snug text-center">
            {current.title}
          </p>
          <motion.div
            drag
            dragConstraints={{ left: -270, right: 270, top: -10, bottom: 100 }}
            dragElastic={0.1}
            style={{ x: motionX, y: motionY }}
            onDragEnd={handleDragEnd}
            className="h-full w-[80%] mx-auto drop-shadow-lg drop-shadow-gray-500 cursor-grab active:cursor-grabbing "
          >
            <Image
              src={current.image}
              alt="question visual"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center rounded-2xl pointer-events-none"
            />
            {/* Overlay layers */}
            <motion.div
              style={{ opacity: greenOverlayOpacity }}
              className="
                absolute top-0 left-0 right-0 w-full h-full pointer-events-none rounded-2xl
                flex items-center justify-center text-6xl text-white bg-black/70
                "
            >Правда</motion.div>
            <motion.div
              style={{ opacity: redOverlayOpacity }}
              className="
                absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none
                flex items-center justify-center text-6xl text-white bg-black/70
              "
            >Ложь</motion.div>
          </motion.div>

          {/* <motion.div
            drag="x"
            className="h-full w-[80%] pb-30 mx-auto drop-shadow-lg drop-shadow-gray-500"
          >
            <div
              className="w-full h-full bg-red-400 rounded-2xl"
            />
          </motion.div> */}
        </div>
      </div>

      {!showExplanation ? (
        <div
          className={`absolute bottom-5 left-5 right-5 flex justify-center gap-4`}
        >
          {/* <Button onClick={() => handleAnswer(false)}>ложь</Button> */}
          {/* <Button onClick={() => handleAnswer(true)}>правда</Button> */}
        </div>
      ) : (
        <AnswerBoxBottom
          isCorrect={isCorrect}
          answer={current.explanation}
          onClick={() => handleNext()}
        />
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
  );
}

function AnswerBoxBottom({ isCorrect, answer, onClick }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-10 flex justify-center`}
    >
      <div
        className="w-full rounded-t-[10px] bg-white pt-4 px-4 text-left
        drop-shadow-[0px_-10px_10px_rgba(0,0,0,0.15)]"
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[18px] font-semibold ${
              isCorrect ? "text-[#4CAF50]" : "text-[#E46F2B]"
            }`}
          >
            {isCorrect ? "✓ Верно" : "× Неверно"}
          </span>
        </div>
        <p className="text-base mb-4">
          <span className="font-bold">Правильный ответ:</span> {answer}
        </p>
        <button
          onClick={onClick}
          className={`w-full h-[45px] ${
            isCorrect ? "bg-[#4CAF50]" : "bg-[#E46F2B]"
          } text-white font-bold mb-4`}
        >
          ПОНЯТНО
        </button>
      </div>
    </div>
  );
}
