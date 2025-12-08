"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react";

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function SortSections1({inputInfo}) {
  const imagesAll = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
  const images = shuffle(imagesAll)
  const author1 = inputInfo.author1.name
  const author2 = inputInfo.author2.name
  return (
    <div className="h-full w-full flex flex-col gap-4">
        <div className='h-full w-full gap-4 flex flex-col pb-40'>
            <div className='AnswerArea1 flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'>{author1}</div>
            <div className='AnswerArea2 flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'>{author2}</div>
        </div>

        <div className='ImgSpawnArea absolute bottom-6'>
            {
                images.map((img, index)=>{
                    return (
                        <Painting key={img.src} img={img} initialX={index*100} />
                    )
                })
            }
        </div>

        {/* { (imagesAll.length is empty) && <ButtonCheck /> } */}
        {/* <ButtonCheck />  */}
    </div>
  )
}


function Painting({img, initialX}){

    const x = useMotionValue(initialX)
    const y = useMotionValue(0)

    // onDragEnd <Painting/> — if (distance from AnswerArea<10) {snap to flexbox of AnswerArea}, else {animate() back to original postion}
    const handleDragEnd = (event, info) => {
    // if (distance from AnswerArea<10) {
        // if (AnswerArea1 || AnswerArea2) {
            // if (AnswerArea1) {
                // snap to justify-start items-center
            // }
            // if (AnswerArea2) {
                // snap to justify-start items-center
            // }
        // }
      // if <Painting/> doesn't snap to any AnswerArea — return to original position
      animate(x, initialX, { type: "spring", stiffness: 300, damping: 30 })
      animate(y, 0, { type: "spring", stiffness: 300, damping: 30 })
    }

    return(
        <motion.div 
            drag
            className={`w-30 aspect-auto absolute bottom-0 overflow-hidden rounded-md drop-shadow-2xl`}
            // style={{ translateX: `${transX * 100}px` }}
            style={{ x, y}}
            whileDrag={{ scale: 1.5 }}
            onDragEnd={handleDragEnd}
        >
            <Image
                src={img.src}
                alt="question visual"
                width={300}
                height={300}
                className="w-30 aspect-auto select-none pointer-events-none"
            />
        </motion.div>
    )
}

function ButtonCheck({inPlaceCount, images}){
    const [checkStatus, setCheckStatus] = useState(null) // null | 'success' | 'error'
    const [buttonText, setButtonText] = useState("Проверить")
    const timeoutRef = useRef(null)

    const handleCheck = (e) => {
        e.preventDefault()
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        // if (img.src inside container AnswerArea1 all match the src of in inputInfo.author1.answers && img.src inside container AnswerArea2 all match the src of in inputInfo.author2.answers) then {in <ButtonCheck/> setCheckStatus("correct") setButtonText("Верно")} else {in <ButtonCheck/> setCheckStatus("wrong") ...rest of the code}
        if (inPlaceCount === images.length) {
            setCheckStatus("correct")
            setButtonText("Верно")
        } else {
            setCheckStatus("wrong")
            setButtonText("Есть ошибки")
            timeoutRef.current = setTimeout(() => {
                setCheckStatus(null)
                setButtonText("Проверить ещё раз")
            }, 2000)
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return(  
      <div className="mt-2 mb-6 flex">
        <button
          type="button"
        //   onClick={handleCheck}
          className={`
                    absolute bottom-4 left-0 right-0 
                    py-3 uppercase text-base font-medium transition-all 
                    ${checkStatus === "correct" ? "bg-[#57DE75] text-white": ""}
                    ${checkStatus === "wrong" ? "bg-[#E46F2B] text-white" : ""}
                    ${checkStatus === null ? "bg-white text-black border border-black" : ""}
                `}
        >
          {buttonText}
        </button>
      </div>
    )
}

// style={styles.block}
const styles = {
  block: {
    width: '100px',
    height: '100px',
    backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' stroke=\'%23333\' stroke-width=\'4\' stroke-dasharray=\'6%2c 14\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3e%3c/svg%3e")',
    backgroundSize: '100% 100%'
  }
}

// background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23C8C8C8FF' stroke-width='3' stroke-dasharray='20%2c20' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
// border-radius: 20px;
// https://kovart.github.io/dashed-border-generator/#:~:text=How%20does%20it%20work?,matter%20what%20size%20elements%20have.