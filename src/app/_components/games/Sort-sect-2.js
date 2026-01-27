"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, animate } from "motion/react";
import TaskDescription from "../taskDescription";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function SortSections2() {

  const inputInfo = {
      author1: {
        name: "Казимир Малевич",
        answers: [
          { src: "/testImgs/sortSections1/malevich-blackSquare.jpg"},
          { src: "/testImgs/sortSections1/malevich-cowViolin.jpg"},
          { src: "/testImgs/sortSections1/malevich-kosar.jpg"},
          { src: "/testImgs/sortSections1/malevich-portrait.jpg"},
        ]
      },
      author2: {
        name: "Ван Гог",
        answers: [
          { src: "/testImgs/sortSections1/vangogh-portrait.jpg"},
          { src: "/testImgs/sortSections1/vangogh-starryNight.jpg"},
          { src: "/testImgs/sortSections1/vangogh-terrace.jpg"},
        ]
      }
  }

  const allImages = [...inputInfo.author1.answers, ...inputInfo.author2.answers]
  // const allImages = inputInfo.questions
  const [images, setImages] = useState([])
  useEffect(()=>{
    setImages(shuffle(allImages))
  },[])
  
  // placed[src] = "author1" | "author2" | null
  const [placed, setPlaced] = useState({})

  const area1Ref = useRef(null)
  const area2Ref = useRef(null)
  const spawnRef = useRef(null)

  /** Runs onDragEnd for every image */
  const handleDrop = (src, x, y, resetFn) => {
    const rect1 = area1Ref.current.getBoundingClientRect()
    const rect2 = area2Ref.current.getBoundingClientRect()

    const in1 = x > rect1.left && x < rect1.right && y > rect1.top && y < rect1.bottom
    const in2 = x > rect2.left && x < rect2.right && y > rect2.top && y < rect2.bottom

    if (in1) {
      setPlaced(
        (p) => (console.log({ ...p, [src]: "author1" }))
      );
      setPlaced((p) => ({ ...p, [src]: "author1" }));
      return;
    }

    if (in2) {
      setPlaced(
        (p) => (console.log({ ...p, [src]: "author2" }))
      );
      setPlaced((p) => ({ ...p, [src]: "author2" }));
      return;
    }

    // dropped outside → remove placement → animate back to SPAWN
    setPlaced((p) => {
      const copy = { ...p }
      delete copy[src];
      return copy;
    });

    resetFn();
  };

  const allPlaced = Object.keys(placed).length === allImages.length;

  return (
    <div className="h-full w-full flex flex-col gap-4 overflow-hidden">
      <TaskDescription 
        header={"Перед тобой произведения искусства, которые принадлежат двум разным направлениям"}
        desc={"перетаскивай их, чтобы распределить"}
      />

      {/* Answer Areas */}
      <div className="h-full w-full gap-2 flex flex-col pb-24">
        <div
          ref={area1Ref}
          className="AnswerArea1 flex flex-1 flex-wrap content-start items-start text-gray-400 border-2 rounded-xl border-dashed border-gray-400 p-3 gap-3"
        >
          {inputInfo.author1.name}
          {/* {inputInfo.sortSections.author1} */}
          {allImages
            .filter((img) => placed[img.src] === "author1")
            .map((img) => (
              <Painting
                key={img.src}
                img={img}
                onDrop={handleDrop}
                isPlaced={true}
              />
            ))}
        </div>

        <div
          ref={area2Ref}
          className="AnswerArea2 flex flex-1 flex-wrap content-start items-start text-gray-400 border-2 rounded-xl border-dashed border-gray-400 p-3 gap-3"
        >
          {inputInfo.author2.name}
          {/* {inputInfo.sortSections.author2} */}
          {allImages
            .filter((img) => placed[img.src] === "author2")
            .map((img) => (
              <Painting
                key={img.src}
                img={img}
                onDrop={handleDrop}
                isPlaced={true}
              />
            ))}
        </div>
      </div>

      {/* SPAWN AREA */}
      <div ref={spawnRef} className="ImgSpawnArea bg-red-200 absolute left-5 right-5 bottom-0 h-20 flex flex-wrap gap-3">
        {allImages
          .filter((img) => !placed[img.src])
          .map((img) => (
            <Painting
              key={img.src}
              img={img}
              onDrop={handleDrop}
              isPlaced={false}
            />
          ))}
      </div>

      {allPlaced && (
        <ButtonCheck placed={placed} inputInfo={inputInfo} images={allImages} />
      )}
    </div>
  );
}

function Painting({ img, onDrop }) {
  const ref = useRef(null);
  const origin = useRef({ x: 0, y: 0 });

  // remember origin per re-mount
  useEffect(() => {
    origin.current = { x: 0, y: 0 };
  }, []);

  const handleDragEnd = (event, info) => {
    const { point } = info;

    const reset = () => {
      animate(ref.current, { x: origin.current.x, y: origin.current.y }, { duration: 0.25 });
    }

    onDrop(img.src, point.x, point.y, reset);
  };

  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      className="w-32 h-32 overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
    >
      <Image
        src={img.src}
        alt=""
        width={600}
        height={600}
        className="w-full h-full object-cover pointer-events-none select-none"
      />
    </motion.div>
  );
}

function ButtonCheck({ placed, inputInfo, images }) {
  const [status, setStatus] = useState(null);
  const [text, setText] = useState("Проверить");
  const timeoutRef = useRef(null);

  const handleCheck = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const correct = images.every((img) => {
      const area = placed[img.src];
      if (!area) return false;
      return img.author === inputInfo[area].name;
      // return console.log(placed[img.src])
    });

    if (correct) {
      setStatus("correct");
      setText("Верно");
    } else {
      setStatus("wrong");
      setText("Есть ошибки");
      timeoutRef.current = setTimeout(() => {
        setStatus(null);
        setText("Проверить ещё раз");
      }, 2000);
    }
  };

  return (
    <div className="mt-2 mb-6 flex">
      <button
        onClick={handleCheck}
        className={`
          py-3 w-full uppercase text-base font-medium rounded-xl transition-all
          ${status === "correct" ? "bg-green-500 text-white" : ""}
          ${status === "wrong" ? "bg-orange-500 text-white" : ""}
          ${status === null ? "bg-white text-black border border-black" : ""}
        `}
      >
        {text}
      </button>
    </div>
  );
}
