"use client";
import Image from "next/image";
import { use, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react";

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function SortSections1({inputInfo}) {
//   const imagesAll = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
  const imagesAll = inputInfo.questions
  const [images, setImages] = useState([])
  useEffect(()=>{
    setImages(shuffle(imagesAll))
  },[])


//   const author1 = inputInfo.author1.name
//   const author2 = inputInfo.author2.name

  const author1 = inputInfo.sortSections.author1
  const author2 = inputInfo.sortSections.author2

  const area1Ref = useRef(null)
  const area2Ref = useRef(null)
  const spawnRef = useRef(null)

  const [placed, setPlaced] = useState({}) // author1 | author2 | null

  const handleDrop = (src, x, y, resetFn) => {
    const rect1 = area1Ref.current.getBoundingClientRect()
    const rect2 = area2Ref.current.getBoundingClientRect()
    const in1 = x > rect1.left && x < rect1.right && y > rect1.top && y < rect1.bottom
    const in2 = x > rect2.left && x < rect2.right && y > rect2.top && y < rect2.bottom
  }

  return (
    <div className="h-full w-full flex flex-col gap-4">
        <div className='h-full w-full gap-4 flex flex-col pb-40'>
            <div ref={area1Ref} className='AnswerArea1 relative flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'><div className="absolute z-10 text-center select-none pointer-events-none">{author1}</div></div>
            <div ref={area2Ref} className='AnswerArea2 flex flex-1 justify-center items-center text-gray-400 border-2 rounded-xl border-dashed border-gray-400'><div className="absolute z-10 text-center">{author2}</div></div>
        </div>

        <div ref={spawnRef} className='SpawnArea absolute bottom-30 mx-auto'>
            {
                images.map((img, index)=>{
                    return (
                        <Painting key={img.src} img={img} area1Ref={area1Ref} area2Ref={area2Ref} />
                    )
                })
            }
        </div>

        {/* { (imagesAll.length is empty) && <ButtonCheck /> } */}
        {/* <ButtonCheck />  */}
    </div>
  )
}


function Painting({img, area1Ref, area2Ref}){

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const scale = useMotionValue(1)
    const ref = useRef(null)

    const areas = [
        area1Ref.current?.getBoundingClientRect(),
        area2Ref.current?.getBoundingClientRect()
    ].filter(Boolean)
    let targetArea = null

    // onDragEnd <Painting/> — if (distance from AnswerArea<10) {snap to flexbox of AnswerArea}, else {animate() back to original postion}
        // if (distance from AnswerArea<10) {
        // if (AnswerArea1 || AnswerArea2) {
            // if (AnswerArea1) {
                // snap to justify-start items-center
            // }
            // if (AnswerArea2) {
                // snap to justify-start items-center
            // }
        // }
    const handleDragEnd = (event, info) => {
        const area = area1Ref.current?.getBoundingClientRect()
        const imgRect = ref.current?.getBoundingClientRect()
        if (!area || !imgRect) return

        const imgCenterX = imgRect.left + imgRect.width / 2
        const imgCenterY = imgRect.top + imgRect.height / 2
        const isInside = imgCenterX > area.left && imgCenterX < area.right && imgCenterY > area.top && imgCenterY < area.bottom

        if (isInside){
            const targetX = area.left + area.width / 2 - imgRect.left - imgRect.width / 2
            const targetY = area.top + area.height / 2 - imgRect.top - imgRect.height / 2
            animate(x, x.get() + targetX)
            animate(y, y.get() + targetY)
            scale.set(0.4)
        } else {
            // if <Painting/> doesn't snap to any AnswerArea — return to original position
            animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
            animate(y, 0, { type: "spring", stiffness: 300, damping: 30 })
            scale.set(1)
        }
    }

    function handleDragStart() {
        scale.set(0.8)
    }

    return(
        <motion.div 
            drag
            dragMomentum={0}
            className={`w-100 aspect-auto absolute top-0 overflow-hidden rounded-md drop-shadow-md drop-shadow-black`}
            // style={{ translateX: `${transX * 100}px` }}
            style={{ x, y, scale }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            ref={ref}
        >
            <Image
                src={img.src}
                alt="question visual"
                width={300}
                height={300}
                className="w-full aspect-auto select-none pointer-events-none"
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