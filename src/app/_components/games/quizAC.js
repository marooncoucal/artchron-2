"use client"

import Image from "next/image";
import { useState } from "react"
import Button1 from "../buttons1";
import TaskDescription from "../taskDescription";
import { useRouter } from "next/navigation";

export default function QuizAC({ questions }) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const current = questions[currentIndex]

    const qType = current.type
    let textQ = false
    let imgQ = false
    if (qType === "textField") textQ = true
    if (qType === "paintings") imgQ = true

    // const renderContent = () => {
    //     switch(qType){
    //         case "textFiled": return <TextQuestion current={current} currentIndex={currentIndex} />
    //         case "paintings": return <PaintingQuestion current={current} currentIndex={currentIndex} />
    //     }
    // }
    // return <>{renderContent()}</> 

    return <TextQuestion current={current} currentIndex={currentIndex} />
    // return <PaintingQuestion current={current} currentIndex={currentIndex} />
}

function TextQuestion({current, currentIndex}){
    return(
        <div className="relative w-full h-full flex flex-col items-center">
            {/* img desc */}
            <div

                className={`relative w-full h-full transition-all duration-300 ease-in-out `}
            >
                <div className="w-full h-full pb-36 flex flex-col gap-5 pointer-events-none drop-shadow-lg drop-shadow-gray-500">
                    <div className="relative h-full w-[90%] mx-auto">
                        <Image
                            src={current.src}
                            alt="question visual"
                            width={600}
                            height={600}
                            className="absolute inset-0 opacity-20 w-full h-full object-cover object-center rounded-2xl"
                        />
                        {/* question text */}
                        <div className="absolute inset-0 flex-center font-benzin text-white uppercase ">
                            <p className="px-2 text-center overflow-hidden text-[22px] leading-[25px] wrap-break-word">{current.question}</p>
                        </div>
                        <div className="absolute bottom-3 left-0 right-0 flex-center opacity-80">
                            <p className="font-light text-[12px] leading-[14px] text-center text-white">выбери верный вариант ответа</p>
                        </div>
                        <div className="w-full h-full rounded-2xl flex items-center justify-center text-6xl text-white bg-ac-gray-light"
                        ></div>
                    </div>
                </div>
            </div>
            {/* buttons */}
            <AnswerButtons current={current} variant={"grid"}/>
        </div>
    )
}

function PaintingQuestion({current, currentIndex}){
    return(
        <div className="relative w-full h-full flex flex-col items-center">
            <TaskDescription 
                header={current.question ?? "text not found"}
                desc={"выбери верный вариант ответа"}
            />
            {/* img */}
            <div
                key={currentIndex}
                className={`relative w-full h-full transition-all duration-300 ease-in-out `}
            >
                <div className="w-full h-full pb-64 pt-6 flex flex-col gap-5 pointer-events-none drop-shadow-lg drop-shadow-gray-500">
                    <div className="relative h-full w-[80%] mx-auto ">
                        <Image
                            src={current.src}
                            alt="question visual"
                            width={600}
                            height={600}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="w-full h-full rounded-2xl flex items-center justify-center text-6xl text-white bg-ac-gray-light"
                        ></div>
                    </div>
                </div>
            </div>
            {/* buttons */}
            <AnswerButtons current={current} />
        </div>
    )
}

function AnswerButtons({current, variant}){
    let stl = ""
    switch (variant){
        case "grid": 
            stl = "grid grid-cols-2 gap-2"
            break;
        default:
            stl = "flex-center flex-col gap-2"
            break;
    }

    const router = useRouter()

    const [disabled, setDisabled] = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(null)
    const [correctIdx, setCorrectIdx] = useState(null)

    const handleSelect = (idx) => {
        if (disabled) return
        setDisabled(true)

        setSelectedIdx(idx)

        const correctIndex = current.choices.findIndex(c => c.isCorrect)
        setCorrectIdx(correctIndex)
        
        const isRight = current.choices[idx].isCorrect

        setTimeout(() => {
            if (isRight) {
                // console.log("answer right")
                router.push("/testTypes/swipeSelect")
            } else {
                // console.log("answer wrong")
                setTimeout(() => {
                    setSelectedIdx(null)
                    setCorrectIdx(null)
                    setDisabled(false)
                    // push if both buttons
                    router.push("/testTypes/swipeSelect")
                }, 1100)
            }
        }, isRight ? 400 : 1100)
    }

    return(
        <div className={`absolute bottom-5 left-5 right-5 ${stl}`}>
            {current.choices.map( (choice, index) => {
                const isSelected = selectedIdx === index
                const isCorrectButton = correctIdx === index
                let buttonVariant = "default"

                // both buttons
                if (isCorrectButton) {
                    buttonVariant = "right"
                } else if (isSelected) {
                    buttonVariant = choice.isCorrect ? "right" : "wrong"
                }

                // one button
                // if (isSelected) {
                //     buttonVariant = choice.isCorrect ? "right" : "wrong"
                // }
                return (
                    <Button1 
                        key={index} 
                        variant={buttonVariant}
                        onClick={() => handleSelect(index)}
                        disabled={disabled}
                    >
                        {choice.text}
                    </Button1> 
                );
            })}
        </div>
    )
}