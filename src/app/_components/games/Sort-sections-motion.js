"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react";

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

export default function SortSections1({inputInfo}) {
  const images = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
  const author1 = inputInfo.author1.name
  const author2 = inputInfo.author2.name
  return (
    <div className="h-full w-full flex flex-col gap-4">
        <div className='h-full w-full gap-4 flex flex-col pb-10'>
            <div className='flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'>{author1}</div>
            <div className='flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'>{author2}</div>
        </div>

        <div className='ImgSpawnArea flex gap-3'>
            {
                images.map((img)=>{
                    return (
                        <Painting key={img.src} img={img} />
                    )
                })
            }
        </div>

        {/* appears after imagesAll.length is empty */}
        {/* <ButtonCheck /> */}
    </div>
  )
}


function Painting({img}){

    let dragParams = useRef({drag: false})

    function OnStartDrag(){
        if (!p.InPlace) {
            drag = true
        }
    }
    function OnDrag(){
        if (drag){
            console.log('drag')
        }
    }
    function OnStopDrag(){
        // if (inArea) snap to Area
        // else snap to origin 
        if (d<10) {
            // if (AnswerArea1 || AnswerArea2) {
                // if (AnswerArea1) {
                    // snap to justify-start items-center
                    // +1 to p1 array
                // }
                // if (AnswerArea2) {
                    // snap to justify-start items-center
                    // +1 to p2 array
                // }
            // }
            animate(motionX, 0) // snap to origin X
            animate(motionY, 0) // snap to origin Y
        }
        drag = false
    }

    return(
        <motion.div 
            drag
            className="w-40 aspect-auto overflow-hidden"
        >
            <Image
                src={img.src}
                alt="question visual"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
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
        // if (p1 = img1.length && p2 = img2.length) {
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