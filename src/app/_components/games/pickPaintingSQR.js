"use client";

import { useState } from "react";
import Button1 from "../buttons1";
import Image from "next/image";
import TaskDescription from "../taskDescription";
import { useRouter } from "next/navigation";

export default function PickPainting1({ questions, link }) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)

  // choose to result
  const [step, setStep] = useState("choose"); // "choose" | "result"

  // overlay
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [overlaySrc, setOverlaySrc] = useState(null)

  const current = questions[currentIndex]

  const selectedChoice = selectedIndex !== null ? current.choices[selectedIndex] : null

  const isCorrect = !!selectedChoice?.isCorrect
  // !! force falsey on null and undefined

  // --- overlay handlers ---
  const openOverlay = (src) => {
    if (!src) return
    setOverlaySrc(src)
    setOverlayOpen(true)
  };

  const closeOverlay = () => {
    setOverlayOpen(false)
    setOverlaySrc(null)
  };

  // --- handlers ---
  const handleSelect = (index) => {
    if (step !== "choose") return
    setSelectedIndex(index)
  };

  // "ГОТОВО" открывает оверлей с выбранной картинкой
  const handleReady = () => {
    if (!selectedChoice) return
    openOverlay(selectedChoice.src)
  }

  // "ПРОВЕРИТЬ" только в оверлее
  const handleCheck = () => {
    if (selectedIndex === null) return
    closeOverlay()
    setStep("result")
  }

  const router = useRouter()
  const handleNext = () => {
    if (currentIndex !== questions.length - 1) {
      setCurrentIndex((prev) => (prev + 1))
      setSelectedIndex(null)
      setStep("choose")
    } else {
      router.push(link ?? "#")
      setSelectedIndex(null)
      setStep("choose")
    }
  }

  return (
    <div className="relative w-full h-full">

      <div className="w-full h-full flex items-center flex-col">
        <TaskDescription
            header={current.question ?? "text not found"}
            desc={"выбери картину и нажми проверить"}
        />
        {step === "choose" && (
          <div className="px-4 max-w-[460px] w-full h-full pt-4 pb-18 flex-center flex-col">
            <div className="w-full aspect-square grid grid-cols-2 gap-1">
              {current.choices.map((choice, index) => {
                // const picked = selectedIndex === index
                // const dim = selectedIndex !== null && !picked
                return (
                  <div
                    key={index}
                    className="w-full h-full cursor-pointer"
                    onClick={() => handleSelect(index)}
                  >
                    <Image
                      src={choice.src}
                      alt={`choice-${index}`}
                      width={600}
                      height={600}
                      className={`h-full aspect-square object-cover object-center transition-all duration-200`}
                      // ${picked ? "opacity-100" : ""}
                      // ${dim ? "opacity-20" : "opacity-100"}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedIndex(index)
                        openOverlay(choice.src)
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {overlayOpen && (
          <div className="absolute bottom-0 top-15 left-0 right-0 z-1000 flex-center">
            <Image
              src={overlaySrc}
              alt="preview"
              width={600}
              height={600}
              className={`object-contain h-full z-1 pb-26 pt-4 px-6`}
              onClick={closeOverlay}
            />
            <div className="absolute inset-0 h-full w-full bg-linear-to-t from-white from-18% via-white/90 via-24% to-white/80 to-100%" onClick={closeOverlay}></div>
            <div className="absolute bottom-19 left-5 right-5 mt-3 text-center text-[12px] text-ac-gray-light">
              Нажми ещё раз, чтобы закрыть
            </div>
            {step === "choose" && (
              <div className="absolute bottom-5 left-5 right-5 z-5">
                <Button1 onClick={handleCheck}>ПРОВЕРИТЬ</Button1>
              </div>
            )}
          </div>
        )}

        {step === "result" && (
          // <div className="w-full h-full flex items-center flex-col pb-35 pt-5 overflow-hidden">
          <div className={
            current.choices[selectedIndex].typeSrc === "vertical" 
              ? "w-full h-full overflow-hidden px-4 pb-35 pt-5 flex flex-col items-center" 
              : "w-full h-full overflow-hidden px-4 pb-18 pt-8 flex flex-col items-center justify-center"
            }>
            <Image
              src={current.choices[selectedIndex].src || ""}
              alt="result"
              width={600}
              height={600}
              className={current.choices[selectedIndex].typeSrc === "vertical" ? "object-contain z-1 h-full" : "object-contain z-1 w-full h-[88%]"}
            />
            <div className="flex-center flex-col pt-4 pb-6 gap-1">
              {/* <div className={`mb-1 text-center font-button ${isCorrect ? "text-ac-lime-300" : "text-ac-orange-600"}`}>
                {isCorrect ? "ПРАВИЛЬНЫЙ ОТВЕТ" : "НЕВЕРНО"}
              </div> */}
              <div className={`text-center font-button text-ac-gray ${isCorrect ? "text-ac-lime-300" : "text-ac-orange-600"}`}>
                {current.choices[selectedIndex].name + ", " + current.choices[selectedIndex].author ?? "«НАЗВАНИЕ ПРОИЗВЕДЕНИЯ», АВТОР, ГОД"}
              </div>
              <div className="font-main-text text-center text-ac-gray-light">
                {current.choices[selectedIndex].description ?? "текст о произведении"}
              </div>
            </div>
          </div>
        )}
      </div>

      {!overlayOpen && (
        <div className="absolute bottom-5 left-5 right-5 z-50">
          {/* {step === "choose" && (
            <Button1
              onClick={selectedIndex === null ? undefined : handleReady}
              className={
                selectedIndex === null ? "opacity-0 pointer-events-none" : ""
              }
            >
              {selectedIndex === null ? "ВЫБЕРИ КАРТИНУ" : "ГОТОВО"}
            </Button1>
          )} */}
          {step === "result" && <Button1 onClick={handleNext}>ДАЛЕЕ</Button1>}
        </div>
      )}
    </div>
  )
}
