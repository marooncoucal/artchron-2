"use client"

import { useRef, useState } from "react";
import Button1 from "../buttons1";
import TaskDescription from "../taskDescription";
import Image from "next/image";
import { motion, useMotionValue, useScroll, animate } from "motion/react";
import { useMeasure } from "react-use";

const OPTION_WIDTH_RATIO = 0.80
const GAP = 12

export default function SwipeSelect1({inputInfo}){
    const [questionIndex, setQuestionIndex] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    const current = inputInfo[questionIndex]
    const choices = current.choices

    const x = useMotionValue(0)
    const [viewportRef, { width: viewportWidth }] = useMeasure()

    const optionWidth = viewportWidth * OPTION_WIDTH_RATIO
    const step = optionWidth + GAP

    const maxDrag =  -(viewportWidth * (current.choices.length - 1))

    function snapToIndex(index) {
        const clamped = Math.max( 0,  Math.min(index, current.choices.length - 1))
        setActiveIndex(clamped)
        animate(x, -clamped * step, {
            type: "spring",
            stiffness: 320,
            damping: 34,
        })
    }

    function handleDragEnd(info){
        let next = activeIndex
        if ( info.offset.x < -step / 3 || info.velocity.x < -300) {
            next += 1
        } else if ( info.offset.x > step / 3 || info.velocity.x > 300
        ) { next -= 1 }
        snapToIndex(next)
    }

    return(
        <div className="relative w-full h-full flex flex-col items-center">
            <TaskDescription
                header={"Какая из этих картин выполнена в стиле импрессионизма?"}
                desc={"выбери верный вариант ответа и нажми «готово»"}
            />
            <div ref={viewportRef} className="relative w-full h-full pb-24 pt-4 flex flex-col justify-center gap-4 bg-cyan-300 scrollbar-hide overflow-hidden">

                <motion.div 
                    className=" bg-pink-200 py-10 flex items-center w-max max-h-full overflow-hidden"
                    style={{
                        x,
                        gap: `${GAP}px`,
                        paddingLeft: (viewportWidth - optionWidth) / 2,
                        paddingRight: (viewportWidth - optionWidth) / 2,
                    }}
                    drag="x" 
                    dragConstraints={{ left: maxDrag, right: 0 }}
                    dragElastic={0.1}
                    whileTap={{ cursor: 'grabbing' }} whileHover={{cursor: 'grab'}}
                    onDragEnd={(_, info) => {handleDragEnd(info)}}
                >
                    {choices.map((choice, i) => (
                        <ImageContainer key={i} choice={choice} optionWidth={optionWidth}/>
                    ))}
                </motion.div>

                <div className="flex-center flex-col gap-1">
                    <h2 className="font-button text-ac-gray">{current.choices[activeIndex].name}</h2>
                    <p className="text-[12px] leading-[14px] text-center text-ac-gray-light">{current.choices[activeIndex].description}</p>
                </div>

            </div>
            <div className="absolute bottom-5 left-5 right-5">
                <Button1 link={"/testTypes/sortSections"}>готово</Button1> 
            </div>
        </div>
    )
}

function ImageContainer({choice, optionWidth}){
    const isVertical = choice.typeSrc === "vertical"
    return(
        <div style={{width: optionWidth}}
            className={`${isVertical ? "aspect-220/370" : "aspect-320/260"} bg-green-200 drop-shadow-lg drop-shadow-gray-500`}
        >
            {/* <div className={` ${isVertical ? "aspect-220/370 h-[50vh]" : "aspect-320/260 h-[35vh]"}`}> */}
            <Image
                src={choice.src}
                alt={choice.name}
                fill
                className={`object-cover object-center`}
                draggable={false}
            />   
            {/* </div> */}
        </div>
    )
}