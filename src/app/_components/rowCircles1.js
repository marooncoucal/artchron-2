'use client'

import Image from "next/image";
import { imgNotFound } from "./imgNotFound";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RowCircles({ testInfo, desc }) {
  const rowInfo = testInfo[0]
  const link = rowInfo.link
  const title = rowInfo.name
  const fullCount = rowInfo.topics.length ?? 10
  const currentCount = rowInfo.countCur ?? 2
  const circleInfo = rowInfo.topics
  return (
    <div className="w-full">
      <Link 
        href={link ?? "#"} 
        className="flex pt-1 pb-3.5 overflow-hidden"
      >
        <div className="relative flex justify-center ml-20">
          {circleInfo.map((c, index) => (
            <CirclePicture key={index} src={c.src} shadow={index !== 0}/>
          ))}
        </div>
      </Link>
      <div className="px-5 pb-2 pt-2 flex items-center justify-between">
        <div className="flex gap-2">
          <p className="font-h3 text-[16px] text-ac-gray-light">{title}</p>
          {desc && <p className="text-[14px] text-ac-gray-light">{desc}</p>}
        </div>
        <p className="tetx-[14px] text-[#ccc]"><span className="text-ac-green-800">{currentCount}</span>/{fullCount}</p>
      </div>
    </div>
  );
}

function CirclePicture({ src, shadow=true }) {
  const shdw = shadow ? "drop-shadow-lg drop-shadow-ac-gray/40" : ""
  return (
    <div className={`rounded-full ${shdw}`}>
      <div className="w-48 h-48 rounded-full -ml-28 overflow-hidden">
        <Image
          src={src ?? imgNotFound}
          alt="image"
          width={900}
          height={900}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
