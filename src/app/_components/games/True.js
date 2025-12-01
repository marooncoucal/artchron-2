'use client'
import { useState } from "react";
import Image from "next/image";

const questions = [
  {
    title: "Картину «Чёрный квадрат» Казимир Малевич впервые представил на выставке в Париже в 1915 году.",
    image: "/testImgs/trueTest1/black-square.jpg",
    isTrue: false,
    explanation: "Картина была представлена в 1915 году, но не в Париже, а в Петрограде.",
  },
  {
    title: "Винсент Ван Гог отрезал себе ухо.",
    image: "/testImgs/trueTest1/vangogh.jpg",
    isTrue: true,
    explanation: "Это правда — Ван Гог отрезал себе часть уха в 1888 году во Франции.",
  },
  {
    title: "Звёздную ночь написал Микеланджело.",
    image: "/testImgs/trueTest1/vangogh1.jpg",
    isTrue: false,
    explanation: "Это ложь — «Звёздная ночь» была написана Винсентом Ван Гогом в 1889 году.",
  },
];

export default function True() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = questions[currentIndex];

  const handleAnswer = (answer) => {
    setSelected(answer);
    setShowExplanation(true);
  };

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
    <div className="relative w-full h-full flex flex-col items-center pt-5">
      {/* load line */}
      <div className="w-full h-[18px] flex items-center gap-2 mb-7">
        <button className="w-5 h-5 text-[20px] text-gray-400 leading-none">×</button>
        <div className="flex-1 h-full border-2 border-[#e5e5ea] bg-gray-50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-300 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100 - 20}%` }}
          ></div>
        </div>
      </div>
      {/* task desc */}
      <h2 className="text-[24px] font-semibold text-black mb-2">Выберите: правда или ложь</h2>

      <div
        key={currentIndex}
        className={`relative w-full h-full transition-all duration-300 ease-in-out 
          ${isAnimating ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
      >
        <div className="w-full h-full pb-24 flex flex-col gap-5 overflow-hidden">
          <p className="text-[18px] text-black leading-snug text-center">{current.title}</p>
          <div className="h-full w-[80%] mx-auto drop-shadow-lg drop-shadow-gray-500">
            <Image
              src={current.image}
              alt="question visual"
              width={600} height={600}
              // layout="fill"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </div>

        {!showExplanation ? (
          <div className={`absolute bottom-5 left-5 right-5 flex justify-center gap-4`}>
            <Button onClick={() => handleAnswer(true)}>правда</Button>
            <Button onClick={() => handleAnswer(false)}>ложь</Button>
          </div>
        ) : (
          <div className={`absolute bottom-0 left-0 right-0 z-10 flex justify-center`}>
            <div className="w-full rounded-t-[10px] bg-white pt-4 px-4 text-left
            drop-shadow-[0px_-10px_10px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[18px] font-semibold ${isCorrect ? "text-[#4CAF50]" : "text-[#E46F2B]"}`}>
                  {isCorrect ? "✓ Верно" : "× Неверно"}
                </span>
              </div>
              <p className="text-base mb-4"><span className="font-bold">Правильный ответ:</span> {current.explanation}</p>
              <button
                onClick={handleNext}
                className={`w-full h-[45px] ${isCorrect ? "bg-[#4CAF50]" : "bg-[#E46F2B]"
                  } text-white font-bold mb-4`}
              >
                ПОНЯТНО
              </button>
            </div>
          </div>
        )}

    </div>
  );
}

function Button({children, onClick}){
  return(
    <button
      onClick={onClick}
      type="text"
      className="min-w-[152px] w-full h-[45px] text-lg text-black capitalize 
      border border-black bg-white 
      hover:shadow-none hover:inset-shadow-sm hover:inset-shadow-gray-300 
      shadow-md inset-shadow-none"
    >
      {children}
    </button>
  )
}



// import { useState } from "react";

// const questions = [
//   {
//     title: "Ван Гог отрезал себе ухо",
//     description: "Это один из самых известных фактов об артистах конца XIX века.",
//     isTrue: true,
//     explanation: "Да, Винсент ван Гог действительно отрезал себе мочку уха в 1888 году во время психического кризиса."
//   },
//   {
//     title: "Леонардо да Винчи написал более 100 картин",
//     description: "Да Винчи был исключительно плодовитым художником.",
//     isTrue: false,
//     explanation: "На самом деле у Леонардо сохранилось около 15 завершённых картин. Он был перфекционистом и часто не завершал работы."
//   }
// ];

// export default function True() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [showExplanation, setShowExplanation] = useState(false);

//   const current = questions[currentIndex];

//   const handleAnswer = (answer) => {
//     setSelected(answer);
//     setShowExplanation(true);
//   };

//   const handleNext = () => {
//     setSelected(null);
//     setShowExplanation(false);
//     setCurrentIndex((prev) => (prev + 1) % questions.length);
//   };

//   const isCorrect = selected === current.isTrue;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4">
//       <div
//         className={`w-full max-w-md p-6 rounded-xl shadow-md text-center transition-all duration-300 border-2 ${
//           selected === null
//             ? "border-black"
//             : isCorrect
//             ? "border-green-500 bg-green-50"
//             : "border-red-500 bg-red-50"
//         }`}
//       >
//         <h1 className="text-2xl font-bold mb-2 text-black">{current.title}</h1>
//         <p className="text-gray-700 mb-6 text-sm">{current.description}</p>

//         {!showExplanation ? (
//           <div className="flex justify-center gap-6">
//             <button
//               onClick={() => handleAnswer(true)}
//               className="w-12 h-12 rounded-full border border-black text-xl"
//             >
//               ✓
//             </button>
//             <button
//               onClick={() => handleAnswer(false)}
//               className="w-12 h-12 rounded-full border border-black text-xl"
//             >
//               ✕
//             </button>
//           </div>
//         ) : (
//           <>
//             <p className="mt-4 text-sm text-black font-medium">{current.explanation}</p>
//             <button
//               onClick={handleNext}
//               className="mt-6 text-sm px-4 py-2 border border-black rounded-full"
//             >
//               Далее
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

