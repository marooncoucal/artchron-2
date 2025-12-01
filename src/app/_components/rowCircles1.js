'use client'

import Image from "next/image";
import { imgNotFound } from "./imgNotFound";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RowCircles({ title, desc, link = '' }) {
  const router = useRouter()
  return (
    <div className="w-full">
      <Link 
        href={link ?? "#"} 
        // target="_blank" 
        className="overflow-hidden w-full flex justify-center py-1"
      >
        <div className="relative flex justify-center w-max ml-24">
          <CirclePicture />
          <CirclePicture />
          <CirclePicture />
          <CirclePicture variant="star" />
          <CirclePicture />
          <CirclePicture />
          <CirclePicture variant="star" />
          <CirclePicture />
        </div>
      </Link>
      <div className="px-5 py-2">
        <p className="text-[16px] font-semibold text-black">{title}</p>
        {desc && <p className="text-[14px] text-black">{desc}</p>}
      </div>
    </div>
  );
}

function CirclePicture({ variant = "picture", src }) {
  let source = "";
  switch (variant) {
    case "picture":
      source = src;
      break;
    case "star":
      source = "/img/star-bg.png";
      break;
    case "gold-star":
      source = "/img/gold-star-bg.png";
      break;
  }
  return (
    <div className="w-40 h-40 bg-white rounded-full shadow-md -ml-24 overflow-hidden">
      <Image
        src={source ?? imgNotFound}
        alt="image"
        width={900}
        height={900}
        className="w-full h-full"
      />
    </div>
  );
}
