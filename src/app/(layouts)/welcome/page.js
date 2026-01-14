import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import BottomNav1 from "@/app/_components/bottomNav";
import ContainerMargin from "@/app/_components/containerMargin";
import { imgNotFound } from "@/app/_components/imgNotFound";
import NormalTextTest1 from "@/app/_components/normalText";
import RowCircles from "@/app/_components/rowCircles1";
import Image from "next/image";
import Link from "next/link";

export default function MainPage1() {
  return (
    <div className="flex flex-col gap-12 w-full items-center bg-white pt-8 pb-20">
      <BottomNav1 />

      {/* early concept */}
      {/* <div className="h-[400px] flex justify-center items-center">
        <div className="bg-gray-200">
          <Image
            src={"/img/mainGalleryBlobs.png"}
            width={900}
            height={900}
            alt="image"
            className=""
          />
        </div>
      </div> */}

      {/* slug by topic */}
      <Link href={"/categories/sections" ?? "#"}
        className="w-full flex flex-col items-center justify-center gap-3"
      >
        <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src={imgNotFound}
            width={500}
            height={500}
            alt="image"
            className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
          />
        </div>
        <div>По темам</div>
      </Link>

      {/* slug by year */}
      <Link href={"/categories/sections" ?? "#"}
        className="w-full flex flex-col items-center justify-center gap-3"
      >
        <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src={imgNotFound}
            width={500}
            height={500}
            alt="image"
            className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
          />
        </div>
        <div>По № курсу</div>
      </Link>


      <Link href='/categories' className="flex flex-col items-center">
        <BigHeaderTest1>Все категории</BigHeaderTest1>
        <div>все категории</div>
      </Link>
      <RowCircles title='Направление 1' desc='Описание 1 описание описание' link='/categories/sections' />
      <RowCircles title='Направление 1' desc='Описание 1 описание описание' link='/categories/sections' />
      <RowCircles title='Случайно' desc='Описание описание описание' link='/categories/sections/topics' />

    </div> 
  );
}