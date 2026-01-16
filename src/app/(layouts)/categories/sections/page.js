import HeaderNav from "@/app/_components/headerNav";
import { imgNotFound } from "@/app/_components/imgNotFound";
import RowCircles from "@/app/_components/rowCircles1";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesSections({params}){
    const { slug } = await params
    return(
        <div className="w-full flex flex-col gap-18 pt-26 pb-36">
            <HeaderNav header={"Направления"} hasGradient={true}/>
            <RowCircles testInfo={test1Src}/>
            <RowCircles testInfo={test2Src}/>
            <AllTestCircle />
        </div>
    )
}

function AllTestCircle(){
    return(
        <div className="flex flex-col items-center">
            <Link href={"/categories/sections" ?? "#"} className="w-full flex flex-col items-center justify-center gap-3">
                <div className="bg-gray-400 w-[192px] h-[192px] rounded-full overflow-hidden">
                    <Image
                        src={'/img/gold-star-bg.png' ?? imgNotFound}
                        width={500}
                        height={500}
                        alt="image"
                        className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
                    />
                </div>
            </Link>    
            <div className="font-h3 text-[16px] text-ac-gray mt-6 text-center">По всем направлениям</div>
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
                desc: "8 вопросов",
                src: "/img/plashki/test2/4.jpg"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 5",
                desc: "4 вопросов",
                src: "/img/star-bg.png"
            },
            {
                link: "/firstScreenTest",
                title: "Тест 5",
                desc: "19 вопросов",
                src: "/img/star-bg.png"
            }
        ]
    }
]