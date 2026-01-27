"use client"

import { useRef, useState, useLayoutEffect, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, animate } from "motion/react"
import { useMeasure } from "react-use"
import { useRouter } from "next/navigation"

import Button1 from "../buttons1"
import TaskDescription from "../taskDescription"

const GAP = 12

export default function SwipeSelect1({ inputInfo, link }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    const current = inputInfo[currentIndex]
    const choices = current.choices

    const [showNextButton, setShowNextButton] = useState(false)
    function handleCheck(idx) {
        setShowNextButton(true)
    }
    const router = useRouter()
    const handleNext = () => {
        setShowNextButton(false)
        setActiveIndex(0)
        itemRefs.current = []
        x.set(0)
        if (currentIndex !== inputInfo.length - 1) {
            setCurrentIndex((prev) => (prev + 1))
        } else {
            setCurrentIndex(0)
            router.push(link ?? "#")
        }
    }

    const x = useMotionValue(0)
    const itemRefs = useRef([])

    const [viewportRef, { width: viewportWidth }] = useMeasure()

    const [sidePadding, setSidePadding] = useState({
        left: 0,
        right: 0,
    })

    useLayoutEffect(() => {
        if (!viewportWidth) return
        if (!itemRefs.current.length) return

        const first = itemRefs.current[0]
        const last = itemRefs.current[itemRefs.current.length - 1]

        if (!first || !last) return

        const firstWidth = first.offsetWidth
        const lastWidth = last.offsetWidth

        setSidePadding({
            left: viewportWidth / 2 - firstWidth / 2,
            right: viewportWidth / 2 - lastWidth / 2,
        })
    }, [viewportWidth, choices.length])


    function snapToNearestIndex() {
        if (!viewportWidth || !itemRefs.current.length) return

        let offset = sidePadding.left
        const centers = []

        // measure centers INCLUDING padding
        itemRefs.current.forEach(el => {
            const width = el.offsetWidth
            const center = offset + width / 2
            centers.push(center)
            offset += width + GAP
        })

        // snap positions
        const snapPoints = centers.map(
            center => -(center - viewportWidth / 2)
        )

        const currentX = x.get()
        let nearest = 0
        let minDist = Infinity

        snapPoints.forEach((point, i) => {
            const d = Math.abs(currentX - point)
            if (d < minDist) {
                minDist = d
                nearest = i
            }
        })

        setActiveIndex(nearest)
        animate(x, snapPoints[nearest], {
            type: "spring",
            stiffness: 250,
            damping: 30,
        })
    }

    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <TaskDescription
                header={current.question}
                desc="выбери верный вариант ответа и нажми «готово»"
            />

            <div
                ref={viewportRef}
                className="relative flex-1 flex w-full overflow-hidde pb-24"
            >
                <motion.div
                    className="flex items-center w-max"
                    style={{
                        x,
                        gap: `${GAP}px`,
                        paddingLeft: sidePadding.left,
                        paddingRight: sidePadding.right,
                    }}
                    drag="x"
                    dragElastic={0.2}
                    dragConstraints={{ left: -900, right: 900 }}
                    whileTap={{ cursor: "grabbing" }} whileHover={{ cursor: "grab" }}
                    onDragEnd={snapToNearestIndex}
                >
                    {choices.map((choice, i) => (
                        <div
                            key={i}
                            ref={el => (itemRefs.current[i] = el)}
                            className="shrink-0 flex justify-center bg-green-200"
                        >
                            <ImageContainer choice={choice} />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* <AnswerContainer inputInfo={inputInfo} current={current} activeIndex={activeIndex} onClick={handleNext}/> */}
            <div className="absolute bottom-[2vh] left-5 right-5 flex flex-col gap-[3vh]">
                <div className="text-center px-6">
                    {!showNextButton && <h2 className={`font-button text-ac-gray`}>
                        {choices[activeIndex].name}
                    </h2>}
                    {showNextButton && <h2 className={`font-button ${current.choices[activeIndex].isCorrect ? "text-ac-lime-300" : "text-ac-orange-600"} `}>
                        {choices[activeIndex].name}
                    </h2>}
                    {showNextButton && !current.choices[activeIndex].isCorrect && <p className="text-[12px] leading-[14px] text-ac-orange-600 mt-1">
                        {choices[activeIndex].description}
                    </p>}
                </div>
                {!showNextButton && <Button1 onClick={() => handleCheck(activeIndex)}>проверить</Button1>}
                {showNextButton && <Button1 onClick={() => handleNext()}>дальше</Button1>}
            </div>
        </div>
    )
}

function ImageContainer({ choice }) {
    const isVertical = choice.typeSrc === "vertical"
    return (
        <div className={`${isVertical ? "aspect-[220/370] h-[44vh]" : "aspect-[320/260] h-[30vh]"} drop-shadow-lg drop-shadow-ac-gray-light/60`}>
            <Image
                src={choice.src}
                alt={choice.name}
                fill
                className="object-cover"
                draggable={false}
            />
        </div>
    )
}

// function AnswerContainer({inputInfo, current, activeIndex, onClick}){
//     const choices = current.choices

//     const [showNextButton, setShowNextButton] = useState(false)
//     function handleCheck(idx) {
//         setShowNextButton(true)
//         const isRight = current.choices[idx].isCorrect
//     }

//     const router = useRouter()
//     const handleNext = () => {
//         // setShowNextButton(true)
//         if (currentIndex !== inputInfo.length - 1) {
//             setCurrentIndex((prev) => (prev + 1))
//         } else {
//             setCurrentIndex(0)
//             router.push(link ?? "#")
//         }
//     }

//     return(
//     <div className="absolute bottom-[2vh] left-5 right-5 flex flex-col gap-[3vh]">
//         <div className="text-center px-6">
//             <h2 className="font-button text-ac-gray">
//                 {choices[activeIndex].name}
//             </h2>
//             {showNextButton && <p className="text-[12px] leading-[14px] text-ac-gray-light mt-1">
//                 {choices[activeIndex].description}
//             </p>}
//         </div>
//         {!showNextButton && <Button1 onClick={() => handleCheck(activeIndex)}>проверить</Button1>}
//         {showNextButton && <Button1 onClick={handleNext}>дальше</Button1>}
//     </div>
//     )
// }