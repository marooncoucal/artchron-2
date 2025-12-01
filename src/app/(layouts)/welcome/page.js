import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import ContainerMargin from "@/app/_components/containerMargin";
import { imgNotFound } from "@/app/_components/imgNotFound";
import NormalTextTest1 from "@/app/_components/normalText";
import RowCircles from "@/app/_components/rowCircles1";
import Image from "next/image";
import Link from "next/link";

export default function MainPage1() {
  return (
    <div className="flex flex-col gap-5 w-full items-center bg-gray-200">
      <div className="h-[400px] flex justify-center items-center">
        <div className="bg-gray-200">
          <Image
            src={"/img/mainGalleryBlobs.png"}
            width={900}
            height={900}
            alt="image"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center bg-white w-full rounded-t-3xl pt-8 pb-20">
        <div className="flex gap-4 px-5">
        <BlackButtonTest1 link={"/testTypes/true"}>правда ложь</BlackButtonTest1>
        <BlackButtonTest1 link={"/testTypes/quiz"}>вопросы тест</BlackButtonTest1>
        <BlackButtonTest1 link={"/testTypes/podbor"}>подбор</BlackButtonTest1>
        <BlackButtonTest1 link={"/testTypes/puzzle"}>пазл</BlackButtonTest1>
        </div>
        <ContainerMargin>
          <div className="rounded-xl overflow-hidden">
            <BlackButtonTest1 link={"/categories/sections/topics/topic"} color={"gray"}>
              Проверить знания?
            </BlackButtonTest1>
          </div>
        </ContainerMargin>
        <Link href='/categories' className="flex flex-col items-center">
          <BigHeaderTest1>Все категории</BigHeaderTest1>
          <div>все категории</div>
        </Link>
        <RowCircles title='Направление 1' desc='Описание 1 описание описание' link='/categories/sections' />
        <RowCircles title='Направление 1' desc='Описание 1 описание описание' link='/categories/sections' />
        <RowCircles title='Случайно' desc='Описание описание описание' link='/categories/sections/topics' />
      </div>
    </div>
  );
}