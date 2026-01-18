import CircleHead from "@/app/_components/circleCenterHead";
import HeaderNav from "@/app/_components/headerNav";
import { imgNotFound } from "@/app/_components/imgNotFound";

export default function SectionTopics(){
    const testInfo = test1Src[0]
    const test = testInfo.topics  
    // console.log(testInfo.name)
    return(
        <div className="w-full flex flex-col items-center gap-18 pt-26 pb-40">
            <HeaderNav header={testInfo.name} hasGradient={true}/>
            {test.map((t, index) => (
                <CircleHead
                    key={index} 
                    link={t.link ?? "#"} 
                    src={t.src ?? imgNotFound} 
                    title={t.title} 
                    desc={t.desc}
                />
            ))}
        </div>
    )
}

const test1Src = [
    {
        name: "Импрессионизм",
        link: "/categories/sections/topics/",
        topics:[
            {
                link: "/firstScreenTest",
                title: "Тест 1",
                desc: "11 вопросов",
                src: "/img/star-bg.png"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 2",
                desc: "9 вопросов",
                src: "/img/plashki/test1/2.jpg"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 3",
                desc: "13 вопросов",
                src: "/img/plashki/test1/3.jpg"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 4",
                desc: "10 вопросов",
                src: "/img/star-bg.png"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 5",
                desc: "8 вопросов",
                src: "/img/plashki/test1/5.jpg"
            }
        ]
    },
]

const test2Src = [
        {
        name: "Постимпрессионизм",
        link: "/categories/sections/topics/",
        topics:[
            {
                link: "/firstScreenTest",
                title: "Тест 1",
                desc: "12 вопросов",
                src: "/img/plashki/test2/1.jpg"
            },
                {
                link: "/firstScreenTest",
                title: "Тест 2",
                desc: "14 вопросов",
                src: "/img/star-bg.png"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 3",
                desc: "7 вопросов",
                src: "/img/plashki/test2/3.jpg"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 4",
                desc: "11 вопросов",
                src: "/img/plashki/test2/4.jpg"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 5",
                desc: "14 вопросов",
                src: "/img/star-bg.png"
            }
        ]
    }
]