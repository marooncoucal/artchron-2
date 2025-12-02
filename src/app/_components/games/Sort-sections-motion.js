"use client";
import { useEffect, useRef, useState } from "react";

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function preparePuzzles(imgs, width, height, w, h) {
  if (!Array.isArray(imgs) || imgs.length === 0) return;

  const gridInitPos = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = x * height + y;
      imgs[index].targetX = x * w;
      imgs[index].targetY = y * h;
      gridInitPos.push({
        initX: imgs[index].targetX,
        initY: imgs[index].targetY,
      });
    }
  }

  shuffle(gridInitPos);

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].initX = gridInitPos[i].initX;
    imgs[i].initY = gridInitPos[i].initY + (h + 1) * height;
  }
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function PuzzlePiece({
  targetX,
  targetY,
  children,
  initX,
  initY,
  imageWidth,
  imageHeight,
  onInPlace,
}) {
  let dragParams = useRef({
    drag: false,
    startX: 0,
    startY: 0,
    x: initX,
    y: initY,
    inPlace: false,
    correct: false,
  });

  let [show, setShow] = useState(false);

  let boxRef = useRef();

  function onDrag(e) {
    if (dragParams.current.drag) {
      dragParams.current.x = e.pageX - dragParams.current.startX;
      dragParams.current.y = e.pageY - dragParams.current.startY;
      console.log("drag");
      boxRef.current.style.left = dragParams.current.x + "px";
      boxRef.current.style.top = dragParams.current.y + "px";
    }
  }

  function snapToGrid(x, y) {
    const stepX = Math.max(...loadedImages.map((img) => img.naturalWidth));
    const stepY = Math.max(...loadedImages.map((img) => img.naturalHeight));
    const gridSizeX = stepX;
    const gridSizeY = stepY;

    let snappedX = Math.round(x / gridSizeX) * gridSizeX;
    let snappedY = Math.round(y / gridSizeY) * gridSizeY;
    if (snappedX > gridSizeX * 3) snappedX = gridSizeX * 3;
    if (snappedY > gridSizeY * 2) snappedY = gridSizeY * 2;
    if (snappedX < gridSizeX * 0) snappedX = gridSizeX * 0;
    if (snappedY < gridSizeY * 0) snappedY = gridSizeY * 0;
    return [snappedX, snappedY];
  }

  function onStartDrag(e) {
    if (!dragParams.current.inPlace) {
      dragParams.current.drag = true;
      dragParams.current.startX = e.pageX - dragParams.current.x;
      dragParams.current.startY = e.pageY - dragParams.current.y;
      console.log("start drag");
    }
  }

  function onStopDrag() {
    if (dragParams.current.drag) {
      // Привязка к сетке
      // const [snappedX, snappedY] = snapToGrid(dragParams.current.x, dragParams.current.y)
      // dragParams.current.x = snappedX
      // dragParams.current.y = snappedY
      // boxRef.current.style.left = snappedX + "px"
      // boxRef.current.style.top = snappedY + "px"

      // Проверка попадания
      // let d = distance(snappedX, snappedY, targetX, targetY)
      let d = distance(
        dragParams.current.x,
        dragParams.current.y,
        targetX,
        targetY
      );
      if (d < 40) {
        dragParams.current.inPlace = true;
        if (onInPlace) onInPlace();
        dragParams.current.correct = true;
        boxRef.current.style.left = targetX + "px";
        boxRef.current.style.top = targetY + "px";
      } else {
        dragParams.current.correct = false;
      }
      console.log("stop drag");

      //updateBorder()
    }
    dragParams.current.drag = false;
  }

  function updateBorder() {
    if (!boxRef.current) return;
    if (dragParams.current.correct) {
      boxRef.current.style.border = "2px solid green";
    } else {
      boxRef.current.style.border = "2px solid red";
    }
  }

  useEffect(() => {
    boxRef.current.style.left = initX + "px";
    boxRef.current.style.top = initY + "px";
    setShow(true);

    window.addEventListener("pointerup", onStopDrag);
    window.addEventListener("pointermove", onDrag);
    return () => {
      window.removeEventListener("pointerup", onStopDrag);
      window.removeEventListener("pointermove", onDrag);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      onPointerDown={onStartDrag}
      //настройка картинок класс ниже
      className="absolute touch-none"
      style={{ width: imageWidth, height: imageHeight, opacity: show ? 1 : 0 }}
    >
      {children}
    </div>
  );
}

export default function SortSections1({
  images,
  imageWidth,
  imageHeight,
  width,
  height,
}) {
  const [prepared, setPrepared] = useState(false);
  const [inPlaceCount, setInPlaceCount] = useState(0);
  const [checkStatus, setCheckStatus] = useState(null); // null | 'success' | 'error'
  const [buttonText, setButtonText] = useState("Проверить");

  useEffect(() => {
    if (images?.length > 0) {
      preparePuzzles(images, width, height, imageWidth, imageHeight);
      setPrepared(true);
    }
  }, [images, width, height, imageWidth, imageHeight]);

  // useEffect(() => {
  //   preparePuzzles(images, width, height, imageWidth, imageHeight);
  //   setPrepared(true);
  // }, []);

  if (!prepared) return null;

  const allPieces = images.map((img, i) => ({
    id: `img${i}`,
    type: "image",
    src: img.src,
    targetX: img.targetX,
    targetY: img.targetY,
    initX: img.initX,
    initY: img.initY,
  }));

  return (
    <>
      <div className="relative w-[357px] h-[256px] border border-gray-300 bg-white select-none">
        {/* Сетка */}
        <>
          {[1, 2].map((i) => (
            <div
              key={`v${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gray-300"
              style={{ left: `${i * 119}px` }}
            />
          ))}

          {[1, 2, 3].map((i) => (
            <div
              key={`h${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gray-300"
              style={{ top: `${i * 64}px` }}
            />
          ))}
        </>

        {/* Пазлы */}
        {allPieces.map((piece) => (
          <PuzzlePiece
            key={piece.id}
            targetX={piece.targetX}
            targetY={piece.targetY}
            initX={piece.initX}
            initY={piece.initY}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            onInPlace={() => setInPlaceCount((prev) => prev + 1)}
          >
            <img
              src={piece.src}
              className="w-full h-full object-cover pointer-events-none select-none nodrag"
              onDragStart={() => false}
            />
          </PuzzlePiece>
        ))}
      </div>

      <div className="relative  -z-5 w-[357px] h-[256px] border border-gray-300 bg-white select-none mt-[8px]">
        {[1, 2].map((i) => (
          <div
            key={`v2-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-gray-300"
            style={{ left: `${i * 119}px` }}
          />
        ))}
        {[1, 2, 3].map((i) => (
          <div
            key={`h2-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-gray-300"
            style={{ top: `${i * 64}px` }}
          />
        ))}
      </div>

      {/* Кнопка Проверить */}
      <div className="mt-10 flex">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (inPlaceCount === images.length) {
              alert();
              setCheckStatus("correct");
              setButtonText("Верно");
            } else {
              alert();
              setCheckStatus("wrong");
              setButtonText("Есть ошибки");
            }
          }}
          className={`
                    w-[357px] py-[10px] border uppercase rounded text-white font-medium transition text-base
                    ${
                      checkStatus === "correct"
                        ? "bg-[#57DE75] border-[#57DE75]"
                        : ""
                    }
                    ${
                      checkStatus === "wrong"
                        ? "bg-[#E46F2B] border-[#E46F2B]"
                        : ""
                    }
                    ${checkStatus === null ? "bg-black border-black" : ""}
                `}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}