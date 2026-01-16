import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import Button1 from "@/app/_components/buttons1";
import HeaderNav from "@/app/_components/headerNav";
import { imgNotFound } from "@/app/_components/imgNotFound";
import NormalTextTest1 from "@/app/_components/normalText";
import Image from "next/image";

export default function TopicPage({src, completed}){
    // если не проходил ранее - желтый, иначе - зеленый
    const circleColor = completed ? "bg-ac-lime-300" : "bg-ac-yellow-400"
    const textButton = completed ? "пройти еще раз" : "Начать тест"
    src = "/img/plashki/firstScreen.jpg"
    return(
        <div className={`w-full h-full flex flex-col pb-6 pt-20 px-4`}>
            <HeaderNav header={"имя теста"}/>
            <div className="w-full h-[calc(100svh-254px)]">
                <Image
                    src={src ?? imgNotFound}
                    width={500}
                    height={500}
                    alt="image"
                    className="h-full w-full object-cover object-center rounded-xl"
                />
            </div>
            <div>
                <p className="font-h3 text-[32px] text-ac-gray pt-6">Тест 1</p>
                <p className="font-main-text text-ac-gray-light/80 pt-1 h-[36px] line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex items-center gap-1 pt-4">
                <Button1 link={"/testTypes/true" ?? "#"}>{textButton}</Button1>
                <div className={`h-11 aspect-square ${circleColor} rounded-full`}></div>
            </div>
        </div>
    )
}