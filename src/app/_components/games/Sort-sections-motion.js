"use client"

import Image from "next/image"
import { use, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"
import TaskDescription from "../taskDescription"
import { useRouter } from "next/navigation"
import Link from "next/link"

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function SortSections1({inputInfo, link}) {
//   const imagesAll = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
  const imagesAll = inputInfo.questions
  const [images, setImages] = useState([])
  useEffect(()=>{
    setImages(shuffle(imagesAll))
  },[])

  const author1 = inputInfo.sortSections.author1
  const author2 = inputInfo.sortSections.author2

  const area1Ref = useRef(null)
  const area2Ref = useRef(null)
  const spawnRef = useRef(null)

  const [placedBySrc, setPlaced] = useState({}) // placed[src] = "author1" | "author2" | null

    const handleDrop = (src, droppedIn) => {
    if (droppedIn) {
        setPlaced(p => ({ ...p, [src]: droppedIn }))
    } else {
        setPlaced(p => {
        const copy = { ...p }
        delete copy[src]
        return copy
        })
    }
    }

  return (
    <div className="h-full w-full flex flex-col gap-4">
        <TaskDescription
        header={"Произведения искусства принадлежат двум разным направлениям"}
        desc={"перетаскивай их, чтобы распределить"}
        />

        <div className='px-4 h-full w-full gap-4 flex flex-col pt-4 pb-26'>
            <div ref={area1Ref} className='AnswerArea1 flex flex-1 justify-center items-center border-[1px] rounded-xl border-dashed border-ac-gray-light/60'>
                <div className="absolute z-10 text-center text-[#bbb] mix-blend-plus-lighter font-button select-none pointer-events-none">
                    {author1}
                </div>
            </div>
            <div ref={area2Ref} className='AnswerArea2 flex flex-1 justify-center items-center border-[1px] rounded-xl border-dashed border-ac-gray-light/60'>
                <div className="absolute z-10 text-center text-[#bbb] mix-blend-plus-lighter font-button select-none pointer-events-none">
                    {author2}
                </div>
            </div>
        </div>

        <div ref={spawnRef} className='SpawnArea absolute h-40 bottom-0 left-4 right-4'>
            {
                images.map((img, index)=>{
                    return (
                        <Painting key={img.src} img={img} area1Ref={area1Ref} area2Ref={area2Ref} onDrop={handleDrop}/>
                    )
                })
            }
        </div>

        {/* { (imagesAll.length is empty) && <ButtonCheck /> } */}
        <ButtonCheck placedBySrc={placedBySrc} images={images} inputInfo={inputInfo} link={link}/> 
    </div>
  )
}


function Painting({img, area1Ref, area2Ref, onDrop}) {

    const ref = useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const scale = useMotionValue(1)

    const areas = [
        area1Ref.current?.getBoundingClientRect(),
        area2Ref.current?.getBoundingClientRect()
    ].filter(Boolean)

    let targetArea = null

    const handleDragEnd = (event, info) => {
        const imgRect = ref.current?.getBoundingClientRect();
        if (!imgRect) return

        let droppedIn = null

        const areas = [
            { key: "author1", rect: area1Ref.current?.getBoundingClientRect() },
            { key: "author2", rect: area2Ref.current?.getBoundingClientRect() }
        ].filter(a => a.rect)

        let targetArea = null

        for (const { key, rect } of areas) {
            const cx = imgRect.left + imgRect.width / 2
            const cy = imgRect.top + imgRect.height / 2
            const inside =
                cx > rect.left &&
                cx < rect.right &&
                cy > rect.top &&
                cy < rect.bottom
            if (inside) {
                droppedIn = key
                scale.set(0.4)
                const targetX = rect.left + rect.width / 2 - imgRect.left - imgRect.width / 2
                const targetY = rect.top + rect.height / 2 - imgRect.top - imgRect.height / 2
                animate(x, x.get() + targetX)
                animate(y, y.get() + targetY)
                break
            }
        }
        if (!droppedIn) {
            animate(x, 0)
            animate(y, 0)
            scale.set(1)
        }
        onDrop?.(img.src, droppedIn)
    }

    function handleDragStart() {
        scale.set(0.8)
    }

    return(
        <motion.div 
            drag
            dragMomentum={0}
            className={`w-full px-4 aspect-auto absolute top-0 left-0 right-0 overflow-hidden rounded-lg drop-shadow-md drop-shadow-black`}
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
                className="w-full aspect-auto select-none pointer-events-none rounded-lg"
            />
        </motion.div>
    )
}

function ButtonCheck({inPlaceCount, inputInfo, images, placedBySrc, link}) {
    const [checkStatus, setCheckStatus] = useState(null) // null | 'success' | 'error'
    const [buttonText, setButtonText] = useState("Проверить")
    const timeoutRef = useRef(null)

    const isCorrect = images.every((img) => {
    const placedArea = placedBySrc[img.src]
    if (!placedArea) return false
    return img.section === inputInfo.sortSections[placedArea]
    })

    const router = useRouter()
    const handleCheck = (e) => {
        e.preventDefault()
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        if (isCorrect) {
            setCheckStatus("correct")
            setButtonText("Верно")
            setTimeout(() => {
                link ? router.push(link) : window.location.reload()
            }, 2000)
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
          onClick={handleCheck}
        //   onClick={() => router.push("#")}
          className={`
                    z-100 absolute bottom-4 left-4 right-4 rounded-full py-3 font-button transition-all 
                    ${checkStatus === "correct" ? "bg-[#99DE59] text-white": ""}
                    ${checkStatus === "wrong" ? "bg-[#FF684E] text-white" : ""}
                    ${checkStatus === null ? "bg-[#F2F2F2] text-[#393939]" : ""}
                `}
        >
          {buttonText}
        </button>
      </div>
    )
}