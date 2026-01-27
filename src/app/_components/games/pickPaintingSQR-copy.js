"use client";

import { useMemo, useState } from "react";
import Button1 from "../buttons1";

export default function PickPainting2({ variantsInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // choose -> result
  const [step, setStep] = useState("choose"); // "choose" | "result"
  const [selectedIndex, setSelectedIndex] = useState(null);

  // overlay
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySrc, setOverlaySrc] = useState(null);

  const current = variantsInfo[currentIndex];

  const selectedChoice =
    selectedIndex !== null ? current.choices[selectedIndex] : null;

  const correctChoice = useMemo(
    () => current.choices.find((c) => c.isCorrect),
    [current]
  );

  const isCorrect = !!selectedChoice?.isCorrect;

  // result image: if wrong -> show correct image, if correct -> show chosen
  const resultImageSrc = isCorrect ? selectedChoice?.src : correctChoice?.src;

  // --- overlay handlers ---
  const openOverlay = (src) => {
    if (!src) return;
    setOverlaySrc(src);
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    setOverlaySrc(null);
  };

  // --- handlers ---
  const handleSelect = (index) => {
    if (step !== "choose") return;
    setSelectedIndex(index);
  };

  // "ГОТОВО" открывает оверлей с выбранной картинкой
  const handleReady = () => {
    if (!selectedChoice) return;
    openOverlay(selectedChoice.src);
  };

  // "ПРОВЕРИТЬ" только в оверлее
  const handleCheck = () => {
    if (selectedIndex === null) return;
    closeOverlay();
    setStep("result");
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < variantsInfo.length) {
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setStep("choose");
    } else {
      setSelectedIndex(null);
      setStep("choose");
    }
  };

  return ( // <div>pick painting</div>
    <div className="relative w-full h-full">
      {/* OVERLAY */}
      {overlayOpen && (
        <div
          className="fixed inset-0 z-[999] bg-white flex items-center justify-center p-4"
          onClick={closeOverlay}
        >
          <div
            className="relative w-full max-w-[720px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={overlaySrc}
              alt="preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <div className="mt-3 text-center text-[12px] text-[#A8A8A8]">
              Нажми ещё раз, чтобы закрыть
            </div>

            {/* ПРОВЕРИТЬ только ДО ответа */}
            {step === "choose" && (
              <div className="mt-4">
                <Button1 onClick={handleCheck}>ПРОВЕРИТЬ</Button1>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Контент */}
      <div className="">

        <section>
          <div className="text-[#717171] text-center text-[18px]">
            {current.question}
          </div>
          <div className="text-[#A8A8A8] text-center text-[12px]">
            выбери верный вариант ответа и нажми «готово»
          </div>
        </section>

        {step === "choose" && (
          <section className="my-20">
            <div className="mx-auto flex max-w-[520px] flex-wrap justify-center gap-2">
              {current.choices.map((choice, index) => {
                const picked = selectedIndex === index;
                const dim = selectedIndex !== null && !picked;

                return (
                  <div
                    key={index}
                    className="w-[calc(50%-4px)] overflow-hidden cursor-pointer"
                    onClick={() => handleSelect(index)}
                  >
                    <img
                      src={choice.src}
                      alt={`choice-${index}`}
                      className={`h-[220px] w-full object-cover transition-all duration-200
                        ${picked ? "ring-4 ring-black opacity-100" : ""}
                        ${dim ? "opacity-20" : "opacity-100"}
                      `}
                      // можно открыть оверлей кликом по картинке
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(index);
                        openOverlay(choice.src);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {step === "result" && (
          <section className="my-20">
            <div className="mx-auto max-w-[520px]">
              <div className="overflow-hidden">
                <img
                  src={resultImageSrc || ""}
                  alt="result"
                  className="w-full h-[320px] object-cover cursor-pointer"
                  onClick={() => openOverlay(resultImageSrc)}
                />
              </div>

              <div
                className={`mt-4 text-center font-button text-[16px] uppercase tracking-wide
                  ${isCorrect ? "text-[#99DE59]" : "text-[#DE5959]"}
                `}
              >
                {isCorrect ? "ПРАВИЛЬНЫЙ ОТВЕТ" : "НЕВЕРНО"}
              </div>

              <div className="mt-2 text-center font-button text-[16px] uppercase tracking-wide text-[#393939]">
                {current.artworkTitle ?? "«НАЗВАНИЕ ПРОИЗВЕДЕНИЯ», АВТОР, ГОД"}
              </div>

              <div className="mt-2 text-center text-[12px] text-[#A8A8A8]">
                {current.artworkText ?? "текст о произведении"}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* НИЖНЯЯ КНОПКА скрыта, когда открыт оверлей */}
      {!overlayOpen && (
        <div className="fixed bottom-5 left-5 right-5 z-50">
          <div className="mx-auto w-full max-w-[520px]">
            {step === "choose" && (
              <Button1
                onClick={selectedIndex === null ? undefined : handleReady}
                className={
                  selectedIndex === null ? "opacity-40 pointer-events-none" : ""
                }
              >
                {selectedIndex === null ? "ВЫБЕРИ КАРТИНУ" : "ГОТОВО"}
              </Button1>
            )}

            {step === "result" && <Button1 onClick={handleNext}>ДАЛЕЕ</Button1>}
          </div>
        </div>
      )}
    </div>
  );
}