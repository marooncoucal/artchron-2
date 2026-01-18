"use client"

import { useState } from "react";
import Button1 from "../buttons1";
import TaskDescription from "../taskDescription";
import Image from "next/image";

export default function SwipeSelect1({inputInfo}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const current = inputInfo[currentIndex]

    return(
        <div className="relative w-full h-full flex flex-col items-center">
            <TaskDescription
                header={"Какая из этих картин выполнена в стиле импрессионизма?"}
                desc={"выбери верный вариант ответа и нажми «готово»"}
            />
            <div className="h-full w-full pb-20 flex-center">
                <div className="flex flex-col items-center justify-end gap-4 max-h-[460px]">
                    <ImageContainer current={current} variant={"vertical"} />
                    <div className="flex-center flex-col gap-2">
                        <h2 className="font-button text-ac-gray">{current.choices[0].name}</h2>
                        <p className="text-[12px] leading-[14px] text-center text-ac-gray-light">{current.choices[0].description}</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
                <Button1 link={"/testTypes/sortSections"}>готово</Button1> 
            </div>
        </div>
    )
}

function ImageContainer({current, variant}){
    let stl = ""
    switch (variant){
        case "verical": 
            stl = "aspect-[360/220]"
            break;
        case "horizontal": 
            stl = "aspect-[360/220]"
            break;
        default:
            stl = "h-full w-full"
            break;
    }
    return(
        <div className={`${stl} flex-center overflow-hidden px-4 flex flex-col gap-5 pointer-events-none drop-shadow-lg drop-shadow-gray-500`}>
            <div className={`h-full w-full`}>
                <Image
                    src={current.choices[0].src}
                    alt="question visual"
                    width={500}
                    height={500}
                    className={`w-full h-full object-cover object-center`}
                />                
            </div>
        </div>
    )
}