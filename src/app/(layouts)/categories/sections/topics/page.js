import CircleHead from "@/app/_components/circleCenterHead";

export default function SectionTopics(){
    return(
        <div className="w-full h-full flex flex-col gap-10 items-center py-20">
            <CircleHead link={'/categories/sections/topics/topic' ?? "#"} src='/img/star-bg.png' title='Тема 1' desc='10 вопросов'/>
            <CircleHead link={'/categories/sections/topics/topic' ?? "#"} title='Тема 2' desc='10 вопросов'/>
            <CircleHead link={'/categories/sections/topics/topic'?? "#"} src='/img/star-bg.png' title='Тема 3' desc='10 вопросов'/>
        </div>
    )
}