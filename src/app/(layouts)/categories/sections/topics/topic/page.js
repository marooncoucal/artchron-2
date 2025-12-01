import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import { imgNotFound } from "@/app/_components/imgNotFound";
import NormalTextTest1 from "@/app/_components/normalText";

export default function TopicPage({src}){
    return(
        <div className={`w-full h-full flex flex-col justify-end gap-2 py-16 px-5 bg-[url(/img/imgNotFound.jpg)] bg-cover bg-center`}>
            <BigHeaderTest1>Тема 1</BigHeaderTest1>
            <NormalTextTest1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </NormalTextTest1>
            <BlackButtonTest1 link={"/entryTestCheck" ?? "#"}>Начать тест</BlackButtonTest1>
        </div>
    )
}